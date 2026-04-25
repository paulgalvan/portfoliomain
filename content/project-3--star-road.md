# Project 3- Star Road

## About This Project:

“Use your color sensor to autonomously navigate a maze by following a specific color line. Your team is also encouraged to attempt one of the following challenges (or all of them if you so choose!).

Challenges:

1. A robot that can traverse every line in every color
2. Travel one line in one direction and return through another line
3. Switch line to follow at the intersection
4. Speed changes based on line color”

---

![LineFollower-ezgif.com-video-to-gif-converter.gif](/notion-images/project-3--star-road/LineFollower-ezgif.com-video-to-gif-converter.gif)

![LineFollower-ezgif.com-video-to-gif-converter.gif](/notion-images/project-3--star-road/LineFollower-ezgif.com-video-to-gif-converter_1.gif)

---

## Color Sensor

![Screenshot 2024-02-22 at 11.56.06 PM.png](/notion-images/project-3--star-road/Screenshot_2024-02-22_at_11.56.06_PM.png)

We were given a color sensor for this project to detect a line. A color sensor emits light from a transmitter and later absorbs the reflected light with a receiver. Because of external factors, though, and the way the color sensor works, ambient light can skew sensor readings and cause problems down the road.

- A Snippet of Code to Interpret the RGB data (Red Shown Below)
    
    ![Screenshot 2024-02-23 at 1.01.16 AM.png](/notion-images/project-3--star-road/Screenshot_2024-02-23_at_1.01.16_AM.png)
    
    The RGB values were given in the thousands place,
    Red- 32,354.836… /// Green-4,453.4734… /// Blue-35,063.023…
    
    The last variable ‘red = ’ Divided this value into double digits. It was later printed with int() so it could give cleaner, easier-to-read values.
    
    ![Screenshot 2024-02-23 at 1.08.10 AM.png](/notion-images/project-3--star-road/Screenshot_2024-02-23_at_1.08.10_AM.png)
    

---

## DC Motors with H-Bridge Control

![Screenshot 2024-02-23 at 12.48.00 AM.png](/notion-images/project-3--star-road/Screenshot_2024-02-23_at_12.48.00_AM.png)

Using an H-bridge's 6 control pins, we were able to control the forward and backward spin direction. We were also able to control speed using PWM, also known as Pulse Width Modulation.

- Motor
    
    Any electronic device plugged into the Raspberry PI has to be initialized. Libraries have to be imported, and values set to 0. The DC motors would not move if told to start at a ‘High’ position and later told to be ‘LOW’, where they're expected to either stop or spin backward based on other configurations. This was a test code to make the DC motors spin and make sure they work.
    
    - CODE HERE
        
        ```python
        import RPi.GPIO as GPIO
        import time
        
        GPIO.setmode(GPIO.BCM)
        
        # Define the GPIO pins for the L298N motor driver
        in1 = 5
        in2 = 0
        in3 = 17
        in4 = 27
        ena = 6
        enb = 22
        
        # Set the GPIO pins as output and initialize them to low
        GPIO.setup(in1, GPIO.OUT) 
        GPIO.setup(in2, GPIO.OUT) 
        GPIO.setup(in3, GPIO.OUT) 
        GPIO.setup(in4, GPIO.OUT) 
        GPIO.setup(ena, GPIO.OUT) 
        GPIO.setup(enb, GPIO.OUT)
        
        GPIO.setup(in1, GPIO.LOW) 
        GPIO.setup(in2, GPIO.LOW) 
        GPIO.setup(in3, GPIO.LOW) 
        GPIO.setup(in4, GPIO.LOW) 
        GPIO.setup(ena, GPIO.LOW)
        GPIO.setup(enb, GPIO.LOW)
        # Set PWM instance
        pwm_a = GPIO.PWM(ena, 1000)  # PWM frequency 1000 Hz
        pwm_b = GPIO.PWM(enb, 1000)  # PWM frequency 1000 Hz
        
        # Start PWM with 0% duty cycle
        pwm_a.start(0)
        pwm_b.start(0)
        
        # Function to set motor speed
        def set_speed_a(speed):
            pwm_a.ChangeDutyCycle(speed)
        
        def set_speed_b(speed):
            pwm_b.ChangeDutyCycle(speed)
        
        # Function to drive motor forward
        def forward():
            GPIO.output(in1, GPIO.HIGH)
            GPIO.output(in2, GPIO.LOW)
            GPIO.output(in3, GPIO.LOW)
            GPIO.output(in4, GPIO.HIGH)
        
        # Main program
        try:
            while True:
                # Drive motor forward
                forward()
                set_speed_a(100)  # Adjust speed as needed
                set_speed_b(100)  # Adjust speed as needed
                time.sleep(2)   # Run for 2 seconds
        
        except KeyboardInterrupt:
            # Clean up GPIO on Ctrl+C exit
            pwm_a.stop()
            pwm_b.stop()
            GPIO.cleanup()
        
        ```
        

### Top View                                                                Side View

![040E321A-81AF-4BA6-93EE-6DE32DAF52FA.jpg](/notion-images/project-3--star-road/040E321A-81AF-4BA6-93EE-6DE32DAF52FA.jpg)

![27116FE4-A977-48C9-BB80-DB95F7A6845F.jpg](/notion-images/project-3--star-road/27116FE4-A977-48C9-BB80-DB95F7A6845F.jpg)

### Sensor View

![DE5C070C-87DB-474C-93F0-2DB409548647.jpg](/notion-images/project-3--star-road/DE5C070C-87DB-474C-93F0-2DB409548647.jpg)

Because of the complexity of the code and trying to incorporate PID (Proportion, Integral, Derivative) control, we wanted a car to work, as we did not know if we understood PID properly.

---

## Electronics/Code

![IMG_1DBDE1F62B86-1.jpeg](/notion-images/project-3--star-road/IMG_1DBDE1F62B86-1.jpeg)

Above is the wiring diagram for the 2 Color Sensors and corresponding DC motors. The code was written to detect any color that was not white. We followed the track below (Blue course).

- Course
    
    ![IMG_1337.jpg](/notion-images/project-3--star-road/IMG_1337.jpg)
    

 If neither color sensor detected a color, the motors would drive forward. If the left color sensor detected blue, it would slow the motor down so it could readjust itself as necessary, and the right one would speed up. If it overshot, and the suitable color sensor detected blue, it would slow down, and the left would speed up to readjust. Since a steering mechanism wasn't made, we used this to steer left and right. The PID control was used to see if the colors detected were within a range t and would also move the motors accordingly. The proportion part was used to make this work.

- FINAL CODE HERE
    
    ```python
    import RPi.GPIO as GPIO
    import time
    
    # Assign GPIO pin numbers to variables
    # left color sensor
    l_s2 = 26
    l_s3 = 19
    l_sig = 13
    
    # right color sensor
    r_s2 = 16
    r_s3 =5
    r_sig = 21
    
    # motor
    in1 = 5
    in2 = 0
    in3 = 11
    in4 = 27
    ena = 6
    enb = 22
    cycles = 10
    #motor1 = GPIO.PWM(ena, 6)
    # Set PWM frequency
    pwm_freq = 50
    
    # Set initial motor speeds
    left_speed = 15
    right_speed = 15
    
    # Setup GPIO and pins
    GPIO.setmode(GPIO.BCM)
    
    # right color sensor
    GPIO.setup(r_s2, GPIO.OUT)
    GPIO.setup(r_s3, GPIO.OUT)
    GPIO.setup(r_sig, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
    
    # left color sensor
    GPIO.setup(l_s2, GPIO.OUT)
    GPIO.setup(l_s3, GPIO.OUT)
    GPIO.setup(l_sig, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
    
    # Setup PWM for motors
    GPIO.setup(ena, GPIO.OUT)
    GPIO.setup(enb, GPIO.OUT)
    pwm_a = GPIO.PWM(ena, pwm_freq)
    pwm_b = GPIO.PWM(enb, pwm_freq)
    pwm_a.start(left_speed)
    pwm_b.start(right_speed)
    
    # Set the GPIO pins as output and initialize them to low
    GPIO.setup(in1, GPIO.OUT)
    GPIO.setup(in2, GPIO.OUT)
    GPIO.setup(in3, GPIO.OUT)
    GPIO.setup(in4, GPIO.OUT)
    GPIO.output([in1, in2, in3, in4], GPIO.LOW)
    
    # Function to set motor speed
    def set_speed_a(speed):
        pwm_a.ChangeDutyCycle(speed)
        pwm_a.start(speed)
    
    def set_speed_b(speed):
        pwm_b.ChangeDutyCycle(speed)
        pwm_b.start(speed)
    
    # Function to drive motor forward
    def forwardr():
        GPIO.output(in1, GPIO.HIGH)
        GPIO.output(in2, GPIO.LOW)
        #time.sleep(1)
    
    def forwardl():
        GPIO.output(in3, GPIO.LOW)
        GPIO.output(in4, GPIO.HIGH)
        #time.sleep(1)
    
    def stopr():
        GPIO.output(in1, GPIO.LOW)
        GPIO.output(in2, GPIO.LOW)
        # time.sleep(1)
    
    def stopl():
        GPIO.output(in3, GPIO.LOW)
        GPIO.output(in4, GPIO.LOW)
        # time.sleep(1)
    
    def stop_all():
        stopr()
        stopl()
        # time.sleep(2)
    
    # Function to detect color from the right sensor
    def DetectColorRight():
        GPIO.output(r_s2, GPIO.LOW)
        GPIO.output(r_s3, GPIO.LOW)
        # time.sleep(0.1)
        start_time = time.time()
        for count in range(cycles):
            GPIO.wait_for_edge(r_sig, GPIO.FALLING)
        duration = time.time() - start_time
        red = cycles / duration / 1000
    
        GPIO.output(r_s2, GPIO.LOW)
        GPIO.output(r_s3, GPIO.HIGH)
        # time.sleep(0.1)
        start_time = time.time()
        for count in range(cycles):
            GPIO.wait_for_edge(r_sig, GPIO.FALLING)
        duration = time.time() - start_time
        blue = cycles / duration / 1000
    
        GPIO.output(r_s2, GPIO.HIGH)
        GPIO.output(r_s3, GPIO.HIGH)
        # time.sleep(0.1)
        start_time = time.time()
        for count in range(cycles):
            GPIO.wait_for_edge(r_sig, GPIO.FALLING)
        duration = time.time() - start_time
        green = cycles / duration / 1000
    
        return red, blue, green
    
        
    # Function to detect color from the left sensor
    def DetectColorLeft():
        GPIO.output(l_s2, GPIO.LOW)
        GPIO.output(l_s3, GPIO.LOW)
        # time.sleep(0.1)
        start_time = time.time()
        for count in range(cycles):
            GPIO.wait_for_edge(l_sig, GPIO.FALLING)
        duration = time.time() - start_time
        red = cycles / duration / 1000
    
        GPIO.output(l_s2, GPIO.LOW)
        GPIO.output(l_s3, GPIO.HIGH)
        # time.sleep(0.1)
        start_time = time.time()
        for count in range(cycles):
            GPIO.wait_for_edge(l_sig, GPIO.FALLING)
        duration = time.time() - start_time
        blue = cycles / duration / 1000
    
        GPIO.output(l_s2, GPIO.HIGH)
        GPIO.output(l_s3, GPIO.HIGH)
        # time.sleep(0.1)
        start_time = time.time()
        for count in range(cycles):
            GPIO.wait_for_edge(l_sig, GPIO.FALLING)
        duration = time.time() - start_time
        green = cycles / duration / 1000
        
        return red, blue, green
    
    try:
        while True:
            left_red, left_blue, left_green = DetectColorLeft()
            right_red, right_blue, right_green = DetectColorRight()
    
            print('left blue', left_blue)
            print('right blue', right_blue)
    
            if left_blue >= 30 and right_blue >= 30:
                print('both white')
                forwardr()
                forwardl()
                set_speed_a(15)  
                set_speed_b(15)  
    
            if left_blue >= 25 and right_blue <= 35:
                stop_all()
                print('in r white and left b')
    
                while left_blue >= 25 and right_blue <= 35:
                    set_speed_a(20)
                    set_speed_b(5)
                    forwardr()
    
                    left_red, left_blue, left_green = DetectColorLeft()
                    right_red, right_blue, right_green = DetectColorRight()
                #if right_blue >= 26:
                   # stop_all()  
                   # time.sleep(1)
    
            if right_blue >= 25 and left_blue <= 35:
                stop_all()
                print('in l white and r blue')
    
                while right_blue >= 25 and left_blue <= 35:
                    set_speed_a(5)
                    set_speed_b(20)
                    forwardl()
    
                    left_red, left_blue, left_green = DetectColorLeft()
                    right_red, right_blue, right_green = DetectColorRight()
                    
                #if left_blue >=26:
                   # stop_all()
                   # time.sleep(1)
            
            time.sleep(0.1)
    
    except KeyboardInterrupt:
            GPIO.cleanup()
            pwm_a.stop()
            pwm_b.stop()
    ```