# Project 6- Mushroom Kingdom Raceway

Skills : API’s, Machine Learning, ROS2, Cross-Functional Teamwork

“Teach your robot to recognize 7 objects and use these objects to navigate a maze. The objects are located in Blake.

Details:

- All turns will be 90 degrees
- At the last object, do something fun
- You must turn when the object is 6 inches from your camera
- You will learn which direction to turn 10 minutes before the demos (you will have 10 minutes in class for this)
- You will not know ahead of time the orientation of the objects
- You may not use hot glue or tape.”

---

![0514-ezgif.com-video-to-gif-converter.gif](/notion-images/project-6--mushroom-kingdom-raceway/0514-ezgif.com-video-to-gif-converter.gif)

---

## Robot

![IMG_1763.jpg](/notion-images/project-6--mushroom-kingdom-raceway/IMG_1763.jpg)

![IMG_1766.jpg](/notion-images/project-6--mushroom-kingdom-raceway/IMG_1766.jpg)

![IMG_1764.jpg](/notion-images/project-6--mushroom-kingdom-raceway/IMG_1764.jpg)

![IMG_1765.jpg](/notion-images/project-6--mushroom-kingdom-raceway/IMG_1765.jpg)

---

## Keras Model

We went towards this project with Google’s Teachable Machines software. “You train a computer to recognize your images, sounds, and poses without writing machine learning code.” Through different pictures of the selected items, we could turn when we detected  7 assigned items to be trained on. These items include:

![36.jpg](/notion-images/project-6--mushroom-kingdom-raceway/36.jpg)

![51.jpg](/notion-images/project-6--mushroom-kingdom-raceway/51.jpg)

![35.jpg](/notion-images/project-6--mushroom-kingdom-raceway/35.jpg)

![86.jpg](/notion-images/project-6--mushroom-kingdom-raceway/86.jpg)

![1.jpg](/notion-images/project-6--mushroom-kingdom-raceway/1.jpg)

![25.jpg](/notion-images/project-6--mushroom-kingdom-raceway/25.jpg)

![22.jpg](/notion-images/project-6--mushroom-kingdom-raceway/22.jpg)

![33.jpg](/notion-images/project-6--mushroom-kingdom-raceway/33.jpg)

There are 8 images here because the machine needs to have a ‘ground,’ meaning it does nothing when it sees nothing, so it is the floor. 

![Screenshot 2024-05-17 at 5.34.33 AM.png](/notion-images/project-6--mushroom-kingdom-raceway/Screenshot_2024-05-17_at_5.34.33_AM.png)

![Screenshot 2024-05-17 at 5.35.06 AM.png](/notion-images/project-6--mushroom-kingdom-raceway/Screenshot_2024-05-17_at_5.35.06_AM.png)

The pictures were taken on a Raspberry Pi, which was also used on the final robot. This made it more natural for the robot. 99 photos were taken for each image so it could be better trained. This gives us code, a Keras Model, that we could use to detect images in our live video and output what it sees.

- Example Code
    
    ```jsx
    from keras.models import load_model  # TensorFlow is required for Keras to work
    from PIL import Image, ImageOps  # Install pillow instead of PIL
    import numpy as np
    
    # Disable scientific notation for clarity
    np.set_printoptions(suppress=True)
    
    # Load the model
    model = load_model("keras_Model.h5", compile=False)
    
    # Load the labels
    class_names = open("labels.txt", "r").readlines()
    
    # Create the array of the right shape to feed into the keras model
    # The 'length' or number of images you can put into the array is
    # determined by the first position in the shape tuple, in this case 1
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    
    # Replace this with the path to your image
    image = Image.open("<IMAGE_PATH>").convert("RGB")
    
    # resizing the image to be at least 224x224 and then cropping from the center
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)
    
    # turn the image into a numpy array
    image_array = np.asarray(image)
    
    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
    
    # Load the image into the array
    data[0] = normalized_image_array
    
    # Predicts the model
    prediction = model.predict(data)
    index = np.argmax(prediction)
    class_name = class_names[index]
    confidence_score = prediction[0][index]
    
    # Print prediction and confidence score
    print("Class:", class_name[2:], end="")
    print("Confidence Score:", confidence_score)
    
    ```
    

---

## Distance Sensor

Another aspect of the challenge was turning precisely so you did not miss the next item. We used a distance sensor since every object was 6 inches from the next one when you turned.

![Screenshot 2024-05-17 at 5.48.22 AM.png](/notion-images/project-6--mushroom-kingdom-raceway/Screenshot_2024-05-17_at_5.48.22_AM.png)

This was hooked directly into the Create.

- Distance Sensor Code/Conversion
    
    ```jsx
     distance_cm = round((time_elapsed * 34300) / 2, 2) # Speed of sound in air (343 meters per second) and 100 for conversion to centimeters
        cm_to_inches = 1 / 2.54 # Conversion factor from centimeters to inches
        distance_inches = round(distance_cm * cm_to_inches, 2)# Convert distance from centimeters to inches
    
        print(distance_inches)
    
    ```
    

The distance sensor was supposed to be calibrated so that we could use inches.

---

## Camera

![3099-02.jpg](/notion-images/project-6--mushroom-kingdom-raceway/3099-02.jpg)

The camera was used to see what object was in front of it. The objects were assigned a value of 0 (left) or 1 (right) prematurely, so once the camera saw the objects, the robot was told to go left or right.

- Code For Camera Detection
    
    ```python
    # Load the model
    keras = load_model("keras_model.h5", compile=False)
    # Load the labels
    class_names = open("labels.txt", "r").readlines()
    # Initialize the camera
    camera = Picamera2()
    # Configure the picamera
    camera.set_controls({"AfMode": controls.AfModeEnum.Continuous})  # Sets auto focus mode
    camera.start()
    time.sleep(1)
    img_name = 'img.jpg'
    ```
    

---

## Code

Before the final rundown, we were given 10 minutes to set the turn directions. The robots had to be autonomous, so everything combined to make it move independently. The robot used ROS2 to rotate and drive forward. Using the camera, we could detect what object the camera saw and the percentage of it. Using that, it would turn left or right based on its assigned value once it was 6 inches away.

- FINAL CODE HERE
    
    ```python
    from keras.models import load_model #Keras Model
    
    import RPi.GPIO as GPIO #GPIO for Distance Sensor
    import cv2 #camera stuff 
    import numpy as np
    from picamera2 import Picamera2
    from libcamera import controls
    import time
    
    # ROS imports
    import rclpy #
    from rclpy.node import Node #
    from rclpy.action import ActionClient #
    from geometry_msgs.msg import Twist #
    from irobot_create_msgs.action import RotateAngle #
    
    from rclpy.callback_groups import ReentrantCallbackGroup ####
    from rclpy.executors import MultiThreadedExecutor ####
    
    TRIGGER = 40
    ECHO = 38
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(TRIGGER, GPIO.OUT)
    GPIO.setup(ECHO, GPIO.IN)
    np.set_printoptions(suppress=True)
    # Load the model
    keras = load_model("keras_model.h5", compile=False)
    # Load the labels
    class_names = open("labels.txt", "r").readlines()
    # Initialize the camera
    camera = Picamera2()
    # Configure the picamera
    camera.set_controls({"AfMode": controls.AfModeEnum.Continuous})  # Sets auto focus mode
    camera.start()
    time.sleep(1)
    img_name = 'img.jpg'
    
    def measure_distance(TRIGGER, ECHO):
        # Set Trigger to HIGH
        GPIO.output(TRIGGER, True)
        time.sleep(0.00001)
        GPIO.output(TRIGGER, False)
    
        start_time = time.time()
        stop_time = time.time()
        # Save StartTime
        while GPIO.input(ECHO) == 0:
            start_time = time.time()
        # Save time of arrival
        while GPIO.input(ECHO) == 1:
            stop_time = time.time()
    
        # Time difference between start and arrival
        time_elapsed = stop_time - start_time
        #print(time_elapsed)
    
        distance_cm = round((time_elapsed * 34300) / 2, 2) # Speed of sound in air (343 meters per second) and 100 for conversion to centimeters
        cm_to_inches = 1 / 2.54 # Conversion factor from centimeters to inches
        distance_inches = round(distance_cm * cm_to_inches, 2)# Convert distance from centimeters to inches
    
        print(distance_inches)
        time.sleep(0.1)
        return distance_inches
    def measure_both():
        distance = measure_distance(TRIGGER, ECHO)
        return min(distance)
    def find_object():
        camera.capture_file(img_name)
        image = cv2.imread(img_name)
        image = cv2.resize(image, (224, 224), interpolation=cv2.INTER_AREA)
        image_array = np.asarray(image, dtype=np.float32).reshape(1, 224, 224, 3)
        image_normalized = (image_array / 127.5) - 1
        prediction = keras.predict(image_normalized)
        index = np.argmax(prediction)
        class_name = class_names[index].strip()
        confidence_score = prediction[0][index]
        print(f"Class: {class_name}, Confidence Score: {confidence_score * 100:.2f}%")
        return class_name, confidence_score
    # Drive functions
    class MovePublisher(Node):
        def __init__(self):
            super().__init__('moving')
            self.publisher = self.create_publisher(Twist, '/cmd_vel', 10)
            self.rotate_action = ActionClient(self, RotateAngle, 'rotate_angle', callback_group=ReentrantCallbackGroup())
            self.timer = self.create_timer(0.1, self.timer_callback, callback_group=ReentrantCallbackGroup())
        def timer_callback(self):
            dist = measure_both()
            print(dist)
            if dist > (6):
                msg = Twist()
                msg.linear.x = 0.5
                msg.angular.z = 0.0
                self.publisher.publish(msg)
                self.get_logger().info(f'Publishing: "{msg.linear.x}"')
            else:
                self.rotate_robot()
        def rotate_robot(self):
            goal = RotateAngle.Goal()
            goal.angle = float(1.57)  # Rotate approximately 90 degrees
            goal.max_rotation_speed = float(0.5)
            self.rotate_action.wait_for_server()
            self.rotate_action.send_goal_async(goal)
            self.get_logger().info('Rotating...')
    # Main function
    def main(args=None):
        rclpy.init(args=args)
        moving = MovePublisher()
        executor = MultiThreadedExecutor()
        try:
            rclpy.spin(moving, executor=executor)
        except KeyboardInterrupt:
            print('\nCaught Keyboard Interrupt')
            GPIO.cleanup()
        finally:
            # Cleanup
            moving.destroy_node()
            rclpy.shutdown()
            GPIO.cleanup()
            print('Shutting down')
    if __name__ == '__main__':
        main()
    ```
    

---

## Reflection

- Complicating the code was a hassle. I learned that keeping the codes on one file would be much easier, especially for ROS2, which is challenging to navigate.
- Spreading out work and using people’s strengths is the goal to get projects done faster. Being on a strict timeline and learning new skills complicates everyone's lives.
- A simple yet modular base for different robot components can be changed for different occasions or situations.