# Project 5- Pit Stop

Skills : API’s, Machine Learning, ROS2, Cross-Functional Teamwork

“Navigate a maze by controlling your Create 3 robot via Airtable. Your partner will be in another room on Zoom, so you will need to find a way to attach a phone to your robot so it can see the maze.

Some helpful hints:

- Check Slack for a video of how to get your Airtable URL
- Complete code to get your raw Airtable data in JSON format is available on GitHub
- You'll want to use the geometry message type TwistLinks to an external site. to publish linear and angular velocity to the topic /cmd_vel.”

---

![Project5Video-ezgif.com-video-to-gif-converter.gif](/notion-images/project-5--pit-stop/Project5Video-ezgif.com-video-to-gif-converter.gif)

![PitStopVideo-ezgif.com-video-to-gif-converter.gif](/notion-images/project-5--pit-stop/PitStopVideo-ezgif.com-video-to-gif-converter.gif)

---

## iRobot Create 3

![create.jpeg](/notion-images/project-5--pit-stop/create.jpeg)

![Screenshot 2024-04-08 at 2.07.43 AM.png](/notion-images/project-5--pit-stop/Screenshot_2024-04-08_at_2.07.43_AM.png)

The Create3 is an iRobot mobile development robot that allows users to learn robotics using ROS2. Its base allows for mounting additional hardware. 

## ROS2

**“The Robot Operating System (ROS) is a set of software libraries and tools for building robot applications.** From drivers and state-of-the-art algorithms to powerful developer tools, ROS has the open-source tools you need for your next robotics project” ([ROS2 Documentation](https://docs.ros.org/en/foxy/index.html)).

With Python on a Raspberry Pi, we can communicate directly to the Create using Nodes, Actions, Services, and Topics. Below are each explained:

- Nodes
    
    Nodes in ROS 2 are modular computational units that communicate with each other through topics, services, and actions, allowing for distributed and scalable robotic system architectures.
    
    ![Topic-SinglePublisherandSingleSubscriber.gif](/notion-images/project-5--pit-stop/Topic-SinglePublisherandSingleSubscriber.gif)
    
    - Detailed Explanation
        
        Nodes in ROS 2 are independent computational entities that perform specific tasks within a robotic system, such as sensor data processing or actuator control. They communicate with each other by publishing and subscribing to topics, exchanging data through services, and coordinating actions through action servers, enabling flexible and modular system architectures.
        
        ![Nodes-TopicandService.gif](/notion-images/project-5--pit-stop/Nodes-TopicandService.gif)
        
- Actions
    
    Services in ROS 2 enable synchronous communication between nodes by allowing one node to request specific data or actions from another node, which responds accordingly in a client-server architecture.
    
    ![hero.webp](/notion-images/project-5--pit-stop/hero.webp)
    
    - Detailed Explanation
        
        Services in ROS 2 facilitate synchronous communication between nodes in a client-server model. One node requests specific data or actions from another node, which then responds accordingly. They employ a request-response pattern with well-defined interfaces, enabling nodes to exchange data and perform tasks in a coordinated and synchronous manner within the ROS 2 ecosystem.
        
        ![Action-SingleActionClient.gif](/notion-images/project-5--pit-stop/Action-SingleActionClient.gif)
        
    
- Services
    
    Services in ROS 2 facilitate synchronous communication between nodes by enabling one node to request specific data or actions from another node, which responds accordingly in a client-server architecture.
    
    ![hero (1).webp](Project%205-%20Pit%20Stop/hero_(1).webp)
    
    - Detailed Explanation
        
        Services in ROS 2 provide a synchronous communication mechanism where one node can request specific data or actions from another node, which then responds with a corresponding result or acknowledgment, enabling coordinated and interactive behaviors within a robotic system. This client-server architecture follows a request-response pattern and relies on well-defined interfaces, allowing nodes to exchange information and perform tasks in a coordinated manner.
        
        ![Service-MultipleServiceClient.gif](/notion-images/project-5--pit-stop/Service-MultipleServiceClient.gif)
        
    
- Topics
    
    Topics in ROS 2 facilitate asynchronous communication between nodes by enabling the publication and subscription of messages, allowing data to be exchanged among nodes without direct coupling.
    
    ![ros2-topics.jpg](/notion-images/project-5--pit-stop/ros2-topics.jpg)
    
    - Detailed Explanation
        
        Topics in ROS 2 enable asynchronous communication between nodes, allowing them to publish and subscribe to messages, which fosters decoupled and scalable interactions within robotic systems. This mechanism supports data exchange among nodes flexibly and distributedly, facilitating modular design and interoperability.
        
        ![Topic-MultiplePublisherandMultipleSubscriber.gif](/notion-images/project-5--pit-stop/Topic-MultiplePublisherandMultipleSubscriber.gif)
        
    

These all work together and allow us to talk to the Create. The Create alone has topics that we can pull with commands.

- ros2 topic list - It pulls a list of all available topics
- ros2 daemon stop - Stops background ROS processes
- reboot_create - reboot your robot from CLI

### Example code

![Screenshot 2024-04-09 at 1.41.21 AM.png](/notion-images/project-5--pit-stop/Screenshot_2024-04-09_at_1.41.21_AM.png)

This is a command that publishes a string to a topic. To receive it, a subscriber is needed.

![Screenshot 2024-04-09 at 5.44.26 AM.png](/notion-images/project-5--pit-stop/Screenshot_2024-04-09_at_5.44.26_AM.png)

The subscribed Creates can receive messages from the publishing Create.

![Screenshot 2024-04-09 at 2.24.35 PM.png](/notion-images/project-5--pit-stop/Screenshot_2024-04-09_at_2.24.35_PM.png)

The following line of code was to change the color of the LED on the Create.

This is an example code on how a publisher and subscriber are made to post messages.

- Code
    
    ```jsx
    Code from ROS2 Docs
    Modifications by Briana Bouchard
    This code creates a publisher node and publishes a string to a topic with a counter every 0.5 seconds
    '''
    import rclpy # imports rclpy client library
    from rclpy.node import Node # imports Node class of rclpy library
    from geometry_msgs.msg import Twist # imports ROS2 built-in string message type
    from geometry_msgs.msg import Vector3
    # Creates SimplePublisher class which is a subclass of Node
    class SimplePublisher(Node):
        # Defines class constructor
        def __init__(self):
            # Initializes and gives Node the name simple_publisher and inherits the Node class's attributes by using 'super()'
            super().__init__('simple_publisher') #change
            # Creates a publisher based on the message type "String" that has been imported from the std_msgs module above
            self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10) #change
            self.wheels = Twist()
            self.linear = Vector3()
            self.angular = Vector3()
            # Set delay in seconds
            timer_period = 0.5
            # Creates a timer that triggers a callback function after the set timer_period
            self.timer = self.create_timer(timer_period, self.timer_callback)
            self.timer.override_system = True
            # Sets initial counter to zero
            self.i = 0
            # Airtable setup
            self.airtable_url = 'REPLACE_WITH_YOUR_AIRTABLE_URL'
            self.headers = {'Authorization': 'Bearer REPLACE_WITH_YOUR_ACCESS_TOKEN'}
        def timer_callback(self):
            # Assign linear and angular velocities
            self.linear.x = 1.0
            self.angular.z = 0.0
            # Assign linear and angular velocities to wheels message
            self.wheels.linear = self.linear
            self.wheels.angular = self.angular
            # Publishes Twist message to topic
            self.publisher_.publish(self.wheels)
            # Prints message to console
            self.get_logger().info('Publishing: "%s"' % self.wheels)
            # Increments counter
            self.i += 1
    def main(args=None):
        # Initializes ROS2 communication and allows Nodes to be created
        rclpy.init(args=args)
        # Creates the SimplePublisher Node
        simple_publisher = SimplePublisher()
        try:
            # Spins the Node to activate the callbacks
            rclpy.spin(simple_publisher)
        # Stops the code if CNTL-C is pressed on the keyboard
        except KeyboardInterrupt:
            print('\nCaught Keyboard Interrupt')
            # Destroys the node that was created
            simple_publisher.destroy_node()
            # Shuts down rclpy
            rclpy.shutdown()
    if __name__ == '__main__':
        # Runs the main function
        main()
    ```
    

More example codes can be found [here](https://docs.google.com/document/d/1CgicImI5o6VIJMICzk-a8_3mIWFpxt-_xzAb5q0R5ZM/edit).

## Airtable (API’s)

The next crucial component for this is the way we used to communicate to the Create. API stands for Application Programming Interfaces. It is used as a set of instructions and protocols that define how two software components communicate with each other.

An example of an API can be found [HERE](https://bump.sh/sarbor/doc/taylor-swift-api).

![Screenshot 2024-04-17 at 9.17.33 PM.png](/notion-images/project-5--pit-stop/Screenshot_2024-04-17_at_9.17.33_PM.png)

The interfaced we use was this.

When values were given for linear velocity, it moved that much in distance. The values that were used for angular velocity were in radians, and also only allowed spinning counter-clockwise,

![vid-ezgif.com-video-to-gif-converter.gif](/notion-images/project-5--pit-stop/vid-ezgif.com-video-to-gif-converter.gif)

The code used was to control the rotation, as well as how much distance it drove.

- Linear Velocity Code
    
    ```jsx
    linear_velocity = float(data['records'][0]['fields']['linear_velocity'])
    print(linear_velocity)
        twist_msg = Twist(
    		    linear=Vector3(x=linear_velocity, y=0.0, z=0.0),
                )
    
         # Publish Twist message to control the robot
         self.publisher_.publish(twist_msg)
    
         self.get_logger().info('Publishing: "%s"' % twist_msg)
     except Exception as e:
         self.get_logger().error(f"Error fetching/parsing Airtable data: {e}")
    ```
    
- Angular Velocity Code
    
    ```jsx
    angular_velocity = float(data['records'][0]['fields']['angular_velocity'])
    print(angular_velocity)
    		twist_msg = Twist(
    		    angular=Vector3(x=0.0, y=0.0, z=angular_velocity)
                )
    
         # Publish Twist message to control the robot
         self.publisher_.publish(twist_msg)
    
         self.get_logger().info('Publishing: "%s"' % twist_msg)
     except Exception as e:
         self.get_logger().error(f"Error fetching/parsing Airtable data: {e}")
    ```
    

In order to have the two communicate, it needed JSON data, or JavaScript Object Notation. It is a text-based format for storing and exchanging data between a server and web application. In this case, the Create was reading the JSON data that was being received from the Airtable. 

---

### Airtable Token

When using any information that is transmitted over the wifi, it is important to have a Token. An example of it is like a key to a door, the key being the token and the door being the Airtable. The data is what is inside the house.

Below is where our token was integrated into the code.

```jsx
URL = 'https://api.airtable.com/v0/appsojvRmm6osWlTy/tblRe0xbtlF19wkTE'

# Headers with your Access Token
# Format: {'Authorization': 'Bearer Access_Token'}
# Note that you need to leave "Bearer" before the access token
headers  = {'Authorization': 'Bearer patTEDXjeRx4YoqQq.8b3d88e36210e3bef42f3e1de117d034eb6a2e4260522a72da178baea7151e0c'}
```

---

### Different Views with Pi

![IMG_1656.jpg](/notion-images/project-5--pit-stop/IMG_1656.jpg)

![IMG_1655.jpg](/notion-images/project-5--pit-stop/IMG_1655.jpg)

![IMG_1652.jpg](/notion-images/project-5--pit-stop/IMG_1652.jpg)

### Different Views of Create With Device

![IMG_1654.jpg](/notion-images/project-5--pit-stop/IMG_1654.jpg)

![IMG_1652.jpg](/notion-images/project-5--pit-stop/IMG_1652_1.jpg)

---

## Zoom

In order to know where I was in regards to the course, I zoomed from a different room. This way, I was able to see where on the course I was, and where I needed to go.

- Course
    
    ![Screenshot 2024-04-17 at 10.45.18 PM.png](/notion-images/project-5--pit-stop/Screenshot_2024-04-17_at_10.45.18_PM.png)
    

- FINAL CODE HERE
    
    ```python
    import rclpy
    from rclpy.node import Node
    from geometry_msgs.msg import Twist, Vector3
    import requests
    import json
    
    URL = ''
    # Headers with your Access Token
    # Format: {'Authorization': 'Bearer Access_Token'}
    # Note that you need to leave "Bearer" before the access token
    headers  = {'Authorization': '.'}
    
    class SimplePublisher(Node):
        def __init__(self):
            super().__init__('simple_publisher')
            self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)
    
            self.timer_period = 3.5
            self.timer = self.create_timer(self.timer_period, self.timer_callback)
            self.timer.override_system = True
    
            self.i = 0
    
            # Airtable setup
            # self.airtable_url = 'https://airtable.com/appsojvRmm6osWlTy/tblRe0xbtlF19wkTE/viwaAzv7EQNOKosHH?blocks=hide'
            # self.headers = {'Authorization': 'Bearer patTEDXjeRx4YoqQq.8b3d88e36210e3bef42f3e1de117d034eb6a2e4260522a72da178baea7151e0c'}
    
        def timer_callback(self):
            try:
                # Fetch control commands from Airtable
                r = requests.get(url=URL, headers=headers) #was respojnse
              #  r = requests.get(url=URL, headers=Headers)
                # Check if the request was successful
                r.raise_for_status()
                # Convert the JSON response to a Python dictionary
                data = r.json()
                print (data)
                 #print(data.keys())
                print("hello 4")
                linear_velocity = float(data['records'][0]['fields']['linear_velocity'])
                angular_velocity = float(data['records'][0]['fields']['angular_velocity'])
                print(angular_velocity)
                print(linear_velocity)
                # Create Twist message with fetched control commands
                twist_msg = Twist(
                    linear=Vector3(x=linear_velocity, y=0.0, z=0.0),
                    angular=Vector3(x=0.0, y=0.0, z=angular_velocity)
                )
    
                # Publish Twist message to control the robot
                self.publisher_.publish(twist_msg)
    
                self.get_logger().info('Publishing: "%s"' % twist_msg)
            except Exception as e:
                self.get_logger().error(f"Error fetching/parsing Airtable data: {e}")
    
    def main(args=None):
        rclpy.init(args=args)
        simple_publisher = SimplePublisher()
    
        try:
            rclpy.spin(simple_publisher)
        except KeyboardInterrupt:
            print('\nCaught Keyboard Interrupt')
            simple_publisher.destroy_node()
            rclpy.shutdown()
    
    if __name__ == '__main__':
        main()
    
    ```
    

---

## Reflection

The most applicable thing I learned was to think about how to integrate different codes and their uses. I did not know how to use ROS2 before this project. I was aware of Tokens, but did not know they could be used integrated through code. I undervalued the use of ROS2 documentation as it helped us figure out how to get the Create to move.