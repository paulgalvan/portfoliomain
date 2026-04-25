# Robot Assembly

# Set Up

Once all parts are printed and every part has arrived, you are now ready to start assembling and putting together the robot arm. 

![Screenshot 2024-09-13 at 6.50.32 AM.png](/notion-images/robot-assembly/Screenshot_2024-09-13_at_6.50.32_AM.png)

## Servo Horn

One thing to note, the way the servos move the arm are through 2 attachment points, the servo housing and the servo horn slot. 

![61jTri3TmpL._AC_UF894,1000_QL80_.jpg](/notion-images/robot-assembly/61jTri3TmpL._AC_UF8941000_QL80_.jpg)

When the servo horn is used, you will  place the 4 screws (that came with the servo) into the hole. The orientation will be told, but its something to keep in mind. 

## Servo Position

As for the instructions for the robot itself, there needs to be another thing in mind. Servo orientation matters. Once you set up your Raspberry Pi 4 with the Servo Hat, you will need to run  code to orient the servos properly. 

- Orienting Code
    
    ```python
    import math
    from adafruit_servokit import ServoKit
    
    kit = ServoKit(channels=16)
    kit.servo[0].set_pulse_width_range(500, 2500)
    kit.servo[1].set_pulse_width_range(500, 2500)
    kit.servo[2].set_pulse_width_range(500, 2500)
    kit.servo[3].set_pulse_width_range(500, 2500)
    
    def zero_servos():
        update_servo_position(0, 90) #Controls Servo Facing Down (Link 1)
        update_servo_position(1, 90) #Controls Servo Straight (Link 1)
        update_servo_position(2, 180) #Controls Servo (Link 2)
        update_servo_position(3, 90) #Controls Servo (Link 3)
    
    # Zero the servos to the home position
    zero_servos()
    
    # Call the function to test
    ```
    

The wiring, it again will be bottom to top; therefore

- Servo 0 will be the servo attached to Link 1 Bottom
    - Link 1 Bottom
        
        ![Screenshot 2024-09-13 at 7.11.20 AM.png](/notion-images/robot-assembly/Screenshot_2024-09-13_at_7.11.20_AM.png)
        
- Servo 1 will be the servo attached to Link 1 Top
    - Link 1 Top
        
        ![Screenshot 2024-09-13 at 7.10.58 AM.png](/notion-images/robot-assembly/Screenshot_2024-09-13_at_7.10.58_AM.png)
        
- Servo 2 will be the servo attached to Link 2
    - Link 2
        
        ![Screenshot 2024-09-13 at 9.38.19 AM.png](/notion-images/robot-assembly/Screenshot_2024-09-13_at_9.38.19_AM.png)
        
- Servo 3 will be the servo attached to Link 3
    - Link 3
        
        ![Screenshot 2024-09-13 at 9.38.45 AM.png](/notion-images/robot-assembly/Screenshot_2024-09-13_at_9.38.45_AM.png)