# Code

# Movement

Now that you have the robot built, the next part would be the coding. This allows the robot to move, and this could be done in different ways. 

## Keyboard Control

Typically when playing a video game on a computer, you would move the character around using the ‘WASD’ keys on the keyboard. This was the first approach taken to get the robot arm to move. Each joint correlated to a different pair of keys. 

```python
print ('Control Servo 1 with "A" or "D"')
print('Control Servo 2 with "W" or "S"')
print('Control Servo 3 with "Y" or "H"')
print('Control Servo 4 with "I" or "K"')
print('Control Servo 5 with "O" or "L"')

elif key_pressed == 'a': #Controls first servo with 'w' (+5) or 's' (-5)
                angle1 += 5
                if angle1 > 180:
                    angle1 = 180
                update_servo_position(0, angle1)
            elif key_pressed == 'd':
                angle1 -= 5
                if angle1 < 0:
                    angle1 = 0
                update_servo_position(0, angle1)
```

This way allowed for each of the links to be controlled independently of each other.  Degrees are set and started at 90, then go up and down from there (±5). The servo position is updated on every press so it is seamless and overall smooth. Below is the code

- Code
    
    ```python
    #import libraries 
    from adafruit_servokit import ServoKit
    import tty
    import sys
    import termios
    import time
    import select
    
    #sets up the system keyboard to read input
    orig_settings = termios.tcgetattr(sys.stdin)
    
    #Initiates the Servos 
    kit = ServoKit(channels=16)
    kit.servo[0].set_pulse_width_range(500, 4000)
    kit.servo[1].set_pulse_width_range(500, 4000)
    kit.servo[2].set_pulse_width_range(500, 4000)
    kit.servo[3].set_pulse_width_range(500, 4000)
    kit.servo[4].set_pulse_width_range(500, 4000)
    
    # Updates servo position
    def update_servo_position(pwm, angle):
        kit.servo[pwm].angle = angle
    #Prints onto terminal the controls
    print('Control Servo 1 with "A" or "D"')
    print('Control Servo 2 with "W" or "S"')
    print('Control Servo 3 with "Y" or "H"')
    print('Control Servo 4 with "I" or "K"')
    print('Control Servo 5 with "O" or "L"')
    
    #Starts servo at 90 degrees 
    try:
        angle1 = angle2 = angle3 = angle4 = angle5 = 90  
    #Logic to read keyboard input and break if 'esc' is pressed   
        while True:
            tty.setcbreak(sys.stdin.fileno())
            if sys.stdin in select.select([sys.stdin], [], [], 0)[0]:
                key_pressed = sys.stdin.read(1)
                if key_pressed == '\x1b':  
                    break 
    #Logic that controls each servo and appends the degree change to a matrix                
                elif key_pressed == 'a': #Controls first servo with 'w' (+5) or 's' (-5)
                    angle1 += 5
                    if angle1 > 180:
                        angle1 = 180
                    update_servo_position(0, angle1)
                elif key_pressed == 'd':
                    angle1 -= 5
                    if angle1 < 0:
                        angle1 = 0
                    update_servo_position(0, angle1)
                elif key_pressed == 'w':  #Controls second servo with 'r' (+5) or 'f' (-5)
                    angle2 += 5
                    if angle2 > 180:
                        angle2 = 180
                    update_servo_position(1, angle2)
                elif key_pressed == 's':
                    angle2 -= 5
                    if angle2 < 0:
                        angle2 = 0
                    update_servo_position(1, angle2)
                elif key_pressed == 'y': #Controls third servo with 'y' (+5) or 'h' (-5)
                    angle3 += 5
                    if angle3 > 180:
                        angle3 = 180
                    update_servo_position(2, angle3)
                elif key_pressed == 'h':
                    angle3 -= 5
                    if angle3 < 0:
                        angle3 = 0
                    update_servo_position(2, angle3)  #Controls fourth servo with 'i' (+5) or 'k' (-5)
                elif key_pressed == 'i':
                    angle4 += 5
                    if angle4 > 180:
                        angle4 = 180
                    update_servo_position(3, angle4)
                elif key_pressed == 'k':
                    angle4 -= 5
                    if angle4 < 0:
                        angle4 = 0
                    update_servo_position(3, angle4)
                elif key_pressed == 'o':
                    angle5 += 5
                    if angle5 > 100:
                        angle5 = 100
                    update_servo_position(4, angle5)
                elif key_pressed == 'l':
                    angle5 -= 5
                    if angle5 < 0:
                        angle5 = 0
                    update_servo_position(4, angle5)
                time.sleep(0.01)
                print (angle1,angle2,angle3,angle4,angle5)
    finally:
        termios.tcsetattr(sys.stdin, termios.TCSADRAIN, orig_settings)
    ```
    

## Forward Kinematic Control

Below is code that was used to calculate the angle of each individual joint before we included it into the inverse kinematics. We first wanted an understanding of the servo angle positions needed to get a 4-DOF robot arm moving how we wanted to.

- Code
    
    ```python
    import math #math
    import numpy as np #imported for lists and np arrays
    import scipy.optimize #imported for optimizing algorithms
    
    class Arm: #defines a class 'Arm'
        def __init__(self, q=None, q0=None, L=None): #setting up the parameters of the arm:
            #q: the initial joint angles of the arm
            #q0: the resting state of the joint configuration; allows for ready to use and low strain on servos
            #L: length of arms
           
            # arm segment lengths
            if L is None: L = np.array([1, 1, 1])  #if no input is given for the arm segments, 1's are assigned
            self.L = np.array(L) #assigns self.L and sets it to a NumPy array
            
            #initial joint angles
            if q is None: q = [0.3] * len(L) #assigns 0.3 radians to the # of items in the array if nothing is assigned 
            self.q = np.array(q) #assigns self.q and sets it to a NumPy array
            
            # default arm positions
            if q0 is None: q0 = np.array([math.pi/4] * len(L)) #sets the default of the arms to 45 degrees if no value is given for q0
            self.q0 = np.array(q0) #assigns self.q0 and sets it to a NumPy array
            
            # constraints from 0 to pi
            self.max_angles = [math.pi] * len(L)  # sets the max_angle to pi
            self.min_angles = [0] * len(L)        # sets the min_angle to 0
    
            #the init function sets values to the parameters in case none are given 
            
        def get_xyz(self, q=None): #computes the x y coordinates
            if q is None: q = self.q  #use self.q id q isnt provided
            x = np.sum([self.L[i] * np.cos(np.sum(q[:i+1])) for i in range(len(self.L))])
            #multiplying the angle 'q' to cos gives us the horizontal positioning
            y = np.sum([self.L[i] * np.sin(np.sum(q[:i+1])) for i in range(len(self.L))])
            #multiplying the angle 'q' to sin gives us the vertical positioning of every value
            z = np.sum([self.L[i] * np.sin(np.sum(q[:i+1])) for i in range(len(self.L))])
            #calculates the vertical displacement of the end effector due to the rotation at the base
            return [x, y, z] #returns an x, y, and z array
        
        def angle_constraints_min(self, q, *args): #function to see if constrains apply (min)
            return q - self.min_angles #checks whether the constraints are satisfied, has to be >= to 0
    
        def angle_constraints_max(self, q, *args): #function to see if constrains apply (max)
            return self.max_angles - q #checks whether the constraints are satisfied, has to be >= to pi (180 degrees)
    
        def inv_kin(self, xyz): #inv kin function
            def distance_to_default(q, *args): #this function keeps the new distance as close to the default position
                weight = [1] * len(self.q)  #this functions adds an array of 1 to every value of q
                return np.sqrt(np.sum([(qi - q0i)**2 * wi for qi, q0i, wi in zip(q, self.q0, weight)]))
            
            def x_constraint(q, xyz): #function to constrain x
                x = np.sum([self.L[i] * np.cos(np.sum(q[:i+1])) for i in range(len(self.L))]) - xyz[0]
                #computes the constraint for the x coordinate of the end effector position
                return x #returns x
            
            def y_constraint(q, xyz): #function to constrain x
                y = np.sum([self.L[i] * np.sin(np.sum(q[:i+1])) for i in range(len(self.L))]) - xyz[1]
                #computes the constraint for the y coordinate of the end effector position of [1]
                return y #returns y
            
            def z_constraint(q, xyz):
                z = np.sum([self.L[i] * np.sin(np.sum(q[:i+1])) for i in range (len(self.L))]) - xyz[2]
                #computes the constraint for the y coordinate of the end effector position of [2]
                return z #returns z
            
            return scipy.optimize.fmin_slsqp(
                func=distance_to_default,
                x0=self.q,
                eqcons=[x_constraint, y_constraint, z_constraint],
                ieqcons=[self.angle_constraints_min, self.angle_constraints_max],
                args=(xyz,),
                iprint=0
            )
        #adjusts the joint angles so it gets as close as possible to a default position while making 
        #sure it stays within constraints
    
    def main():
        arm = Arm(L=np.array([30, 20, 10, 5]))  # Example with 4 links in cm 
        target_position = [5, 2, 3]  # The position we want to get to
        new_angles = arm.inv_kin(target_position)  #calls the inverse kinematic function 
        joint_positions = [] #creates a list where values are later added
        for i in range(len(arm.L)): #loop to iterate through the number of joints
            joint_positions.append([ #appends the calculated xy values to a list 
                np.sum([arm.L[j] * np.cos(np.sum(new_angles[:j+1])) for j in range(i+1)]),
                #calculates the new x end positions of each joint by multiplying the length * cos * new total angles (all angles added)
                np.sum([arm.L[j] * np.sin(np.sum(new_angles[:j+1])) for j in range(i+1)]),
                #calculates the new y end positions of each joint by multiplying the length * sin * new total angles (all angles added)
                np.sum([arm.L[j] * np.sin(np.sum(new_angles[:j+1])) for j in range(i+1)])
                #calculates the new z end positions of each joint by multiplying the length * sin * new total angles (all angles added)
    
            ]) 
        print("Target position:", target_position) #prints the position we assign
        print("New joint angles (radians):", new_angles) #prints the new angles in radians
        print("Joint positions:", joint_positions) #prints the new joint positions
    
    if __name__ == "__main__": #calls the main function
        main()
    
    ```
    

## Inverse Kinematic Control

Then came the inverse kinematic (IK)  part of the code. Usually, it’s calculated with mathematical equations that relate the desired position and orientation of a robot's end-effector to the joint angles needed to achieve that pose. In other words, it's figuring out how each part of a robot's arm needs to move so that the end-effector (the gripper) reaches the right spot and turns the right way. This helps the robot know how to position its joints to do things like picking up objects or moving its arm smoothly. “Reference frames” are also used like the one below from [Intelligent Motion Library](http://motion.cs.illinois.edu) from [University Illinois](https://www.illinois.edu/).

![ik_6R.png](/notion-images/code/ik_6R.png)

They tell you how each section of the arm moves, rotating or translating and it is all used to calculate for the end-effector using a Jacobian matrix. You can figure out angles, link lengths, and positions to calculate the joint angles to get to the end effector.

The way we used IK was geometrically shown in the image and code below.

![IMG_EFD3649E2A08-1.jpeg](/notion-images/code/IMG_EFD3649E2A08-1.jpeg)

```python
D = math.sqrt(X_end_Effector² + Z_end_Effector²)
Θ₁ = math.degrees(math.atan2(Z_end_Effector, X_end_Effector))
d = D - L₄
Y_offset = Y_end_Effector - L₁
R = math.sqrt(d² + Y_offset²)
α₁ = math.degrees(safe_acos(d / R))
α₂ = math.degrees(safe_acos((L₂² + R² - L₃²) / (2 * L₂ * R)))
Θ₂ = α₁ + α₂
Θ₃ = math.degrees(safe_acos((L₂² + L₃² - R²) / (2 * L₂ * L₃)))
Θ₄ = 180 - ((180 - (α₂ + Θ₃)) - α₁)
```

These equations calculates the angles to position its end effector in 3D space. Here's a quick breakdown:

- **Distance to End Effector (D)**
    
    Calculates the straight-line distance from the arm's base to the end effector in the X-Z plane using the Pythagorean theorem.
    
- **Base Angle (Θ₁)**
    
    Determines the rotation of the arm around the base (ground plane) using the angle between the X and Z coordinates of the end effector.
    
- **Adjusted Distance (d)**
    
    Accounts for the length of the last link (L`L₄`), reducing the distance `D` by this length.
    
- **Y-Direction Offset**
    
     Calculates the height difference between the base (`L₁`) and the end effector, giving the vertical offset.
    
- **Distance from Second Joint (R)**:
    
    Uses Pythagoras again to find the distance from the second joint to the end effector, considering both the horizontal and vertical offsets.
    
- **Shoulder Angles (α₁, α₂)**
    
    Solves for the angles at the shoulder joint using trigonometry (cosine rule), based on the lengths of the arm's links (`L₂`, `L₃`, and `R`).
    
- **Elbow Angle (Θ₃)**
    
    Calculates the angle between links `L₂` and `L₃`, using the cosine rule.
    
- **Wrist Angle (Θ₄**
    
    Determines the wrist angle based on the other joint angles to ensure the correct orientation of the end effector.
    

This process geometrically solves for the joint angles needed to move the robotic arm to the specified 2D position. You may ask, the input needed was in a 3D reference, but we used 2D, why?

By calculating IK for only the first 2 links, we simplified the math since there are fewer joints and fewer angles to solve for.  The last link was calculated separately so it was always parallel to the floor. This approach makes the overall IK problem easier while still ensuring the gripper is positioned correctly for tasks. Below is the full IK code.

- Inverse Kinematic Code
    
    ```python
    import math
    from adafruit_servokit import ServoKit
    
    def safe_acos(value):
        return math.acos(max(-1, min(1, value)))
    
    def clamp_angle(angle):
        return max(0, min(180, angle))
    
    link1 = 05.8673
    link2 = 13.8033
    link3 = 13.789
    link4 = 14.3119
    
    kit = ServoKit(channels=16)
    kit.servo[0].set_pulse_width_range(500, 2500)
    kit.servo[1].set_pulse_width_range(500, 2500)
    kit.servo[2].set_pulse_width_range(500, 2500)
    kit.servo[3].set_pulse_width_range(500, 2500)
    
    def update_servo_position(servo_num, angle):
        clamped_angle = clamp_angle(angle)
        print(f"Setting servo {servo_num} to angle {clamped_angle} (original angle was {angle})")
        kit.servo[servo_num].angle = clamped_angle
    
    def zero_servos():
        update_servo_position(0, 90)
        update_servo_position(1, 90)
        update_servo_position(2, 180)
        update_servo_position(3, 90)
        #print("Zeroing servos...")
        #home_position = 180
        # for i in range(4):
        #     update_servo_position(i, home_position)
        # print("Servos zeroed to home position (90 degrees).")
    
    def ik_calculations():
        X_end_Effector = float(input("Enter X end effector: "))
        Y_end_Effector = float(input("Enter Y end effector: "))
        Z_end_Effector = float(input("Enter Z end effector: "))
    
        print('Target X:', X_end_Effector)
        print('Target Y:', Y_end_Effector)
        print('Target Z:', Z_end_Effector)
    
        if X_end_Effector > 0 and Y_end_Effector >= link1:
            D = math.sqrt(X_end_Effector**2 + Z_end_Effector**2)
            Theta_1 = math.degrees(math.atan2(Z_end_Effector, X_end_Effector))
            d = D - link4
            Y_offset = Y_end_Effector - link1
            R = math.sqrt(d**2 + Y_offset**2)
            alpha1 = math.degrees(safe_acos(d / R))
            alpha2 = math.degrees(safe_acos((link2**2 + R**2 - link3**2) / (2 * link2 * R)))
            Theta_2 = alpha1 + alpha2
            Theta_3 = math.degrees(safe_acos((link2**2 + link3**2 - R**2) / (2 * link2 * link3)))
            Theta_4 = 180 - ((180 - (alpha2 + Theta_3)) - alpha1)
    
        elif X_end_Effector > 0 and Y_end_Effector <= link1:
            D = math.sqrt(X_end_Effector**2 + Z_end_Effector**2)
            Theta_1 = math.degrees(math.atan2(Z_end_Effector, X_end_Effector))
            d = D - link4
            Y_offset = Y_end_Effector - link1
            R = math.sqrt(d**2 + Y_offset**2)
            alpha1 = math.degrees(safe_acos(d / R))
            alpha2 = math.degrees(safe_acos((link2**2 + R**2 - link3**2) / (2 * link2 * R)))
            Theta_2 = alpha2 - alpha1
            Theta_3 = math.degrees(safe_acos((link2**2 + link3**2 - R**2) / (2 * link2 * link3)))
            Theta_4 = 180 - ((180 - (alpha2 + Theta_3)) + alpha1)
    
        elif X_end_Effector == 0 and Y_end_Effector >= link1:
            D = math.sqrt(X_end_Effector**2 + Z_end_Effector**2)
            Theta_1 = 90
            d = D - link4
            Y_offset = Y_end_Effector - link1
            R = math.sqrt(d**2 + Y_offset**2)
            alpha1 = math.degrees(safe_acos(d / R))
            alpha2 = math.degrees(safe_acos((link2**2 + R**2 - link3**2) / (2 * link2 * R)))
            Theta_2 = alpha1 + alpha2
            Theta_3 = math.degrees(safe_acos((link2**2 + link3**2 - R**2) / (2 * link2 * link3)))
            Theta_4 = 180 - ((180 - (alpha2 + Theta_3)) - alpha1)
    
        elif X_end_Effector == 0 and Y_end_Effector <= link1:
            D = math.sqrt(X_end_Effector**2 + Z_end_Effector**2)
            Theta_1 = 90
            d = D - link4
            Y_offset = Y_end_Effector - link1
            R = math.sqrt(d**2 + Y_offset**2)
            alpha1 = math.degrees(safe_acos(d / R))
            alpha2 = math.degrees(safe_acos((link2**2 + R**2 - link3**2) / (2 * link2 * R)))
            Theta_2 = alpha2 - alpha1
            Theta_3 = math.degrees(safe_acos((link2**2 + link3**2 - R**2) / (2 * link2 * link3)))
            Theta_4 = 180 - ((180 - (alpha2 + Theta_3)) + alpha1)
    
        elif X_end_Effector < 0 and Y_end_Effector >= link1:
            D = math.sqrt(X_end_Effector**2 + Z_end_Effector**2)
            Theta_1 = 90 + (90 - abs(math.degrees(math.atan2(Z_end_Effector, X_end_Effector))))
            d = D - link4
            Y_offset = Y_end_Effector - link1
            R = math.sqrt(d**2 + Y_offset**2)
            alpha1 = math.degrees(safe_acos(d / R))
            alpha2 = math.degrees(safe_acos((link2**2 + R**2 - link3**2) / (2 * link2 * R)))
            Theta_2 = alpha1 + alpha2
            Theta_3 = math.degrees(safe_acos((link2**2 + link3**2 - R**2) / (2 * link2 * link3)))
            Theta_4 = 180 - ((180 - (alpha2 + Theta_3)) - alpha1)
    
        elif X_end_Effector < 0 and Y_end_Effector <= link1:
            D = math.sqrt(X_end_Effector**2 + Z_end_Effector**2)
            Theta_1 = 90 + (90 - abs(math.degrees(math.atan2(Z_end_Effector, X_end_Effector))))
            d = D - link4
            Y_offset = Y_end_Effector - link1
            R = math.sqrt(d**2 + Y_offset**2)
            alpha1 = math.degrees(safe_acos(d / R))
            alpha2 = math.degrees(safe_acos((link2**2 + R**2 - link3**2) / (2 * link2 * R)))
            Theta_2 = alpha2 - alpha1
            Theta_3 = math.degrees(safe_acos((link2**2 + link3**2 - R**2) / (2 * link2 * link3)))
            Theta_4 = 180 - ((180 - (alpha2 + Theta_3)) + alpha1)
    
        # Print calculated angles
        print('Theta 1:', Theta_1)
        print('Theta 2:', Theta_2)
        print('Theta 3:', Theta_3)
        print('Theta 4:', Theta_4)
    
        # Update servo positions
        update_servo_position(0, Theta_1)
        update_servo_position(1, Theta_2)
        update_servo_position(2, Theta_3)
        update_servo_position(3, Theta_4)
    
    # Zero the servos to the home position
    zero_servos()
    
    # Call the function to test
    ik_calculations()
    ```