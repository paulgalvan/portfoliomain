# Project 4- Rainbow Road

## About This Project:

“Create a line following robot using your Pi Camera.

You may wish to attempt at least one of these challenges

1. Continuous motion
2. Store prior corrections if lost line to figure out how to get back on track
3. Color switching
4. Robot starts off of line
5. Full PID control incorporation
6. Using original code”

---

![IMG_1394-ezgif.com-optimize.gif](/notion-images/project-4--rainbow-road/IMG_1394-ezgif.com-optimize.gif)

![IMG_1396-ezgif.com-video-to-gif-converter (1).gif](Project%204-%20Rainbow%20Road/IMG_1396-ezgif.com-video-to-gif-converter_(1).gif)

---

## Raspberry Pi Camera

![Raspberry_Pi_Camera_Module_3_2.jpeg](/notion-images/project-4--rainbow-road/Raspberry_Pi_Camera_Module_3_2.jpeg)

We were given a camera for this project to detect a different set of lines. The camera is compatible with the Rpi and is a Sony’s 12MP (4608x2592px) Type 1/2.43 (5.6 x 4.2mm) IMX708 image sensor ([source](https://www.dpreview.com/news/4233987493/raspberry-pi-s-new-12mp-camera-module-3-now-has-autofocus-hdr-capture-and-more)).

- A Snippet of Code to get an image from the camera is shown below.
    
    ```python
    #import libraries 
    from picamera2 import Picamera2 
    import cv2 as cv 
    from libcamera import controls
    import time
    
    picam2 = Picamera2()
    
    #configure the picamera
    picam2.set_controls({"AfMode": controls.AfModeEnum.Continuous}) #sets auto focus mode
    
    picam2.start() #must start the camera before taking any images
    time.sleep(1)
    
    img_name = 'image.jpg'
    picam2.capture_file(img_name) #take image 
    
    picam2.stop() #stop the picam 
    ```
    

---

## Car Design

For this car, we decided to start a new base and motor holders to get a cleaner look. This time around. The back we used a swivel caster. This way the front DC motors controlled the direction and the caster followed, supporting the end of the base. The grey piece was attached to the base with standoffs so the camera had enough room to detect the lines. 

![Screenshot 2024-02-29 at 1.52.58 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_1.52.58_AM.png)

![Screenshot 2024-02-29 at 1.54.47 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_1.54.47_AM.png)

---

## DC Motors with H-Bridge Control

![Screenshot 2024-02-23 at 12.48.00 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-23_at_12.48.00_AM.png)

Using an H-bridge's 6 control pins, we were able to control the forward and backward spin direction. We were also able to control speed using PWM, also known as Pulse Width Modulation.

- Motor
    
    With any electronic plugged into the Raspberry PI, it has to be initialized. Libraries have to be imported as well as values set to 0. The DC motors would not move if told to start at a ‘High’ position and later told to be ‘LOW’ where it's expected to either stop or spin backward based on other configurations. This was a test code to make the DC motors spin, make sure they work.
    
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
        

---

### Top View                                                                Side View

![IMG_1448.jpg](/notion-images/project-4--rainbow-road/IMG_1448.jpg)

![IMG_1445.jpg](/notion-images/project-4--rainbow-road/IMG_1445.jpg)

### Bottom View

![IMG_1449.jpg](/notion-images/project-4--rainbow-road/IMG_1449.jpg)

---

## PID Control

The way the car moved was with a PID controller. Pseudo code was given to us so we could worry about the code and not so much for the logic.

![Screenshot 2024-02-29 at 2.08.45 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_2.08.45_AM.png)

With that, the code I wrote was

![Screenshot 2024-02-29 at 2.09.42 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_2.09.42_AM.png)

As seen in the image, the P, I,  D values are very exact. This was tuned so it could follow the line with not too much overshooting/undershooting and also has a decent speed. I used the black “challenge line” to test as it had the most variability and whatever .

It followed the course below.

- Course
    
    ![Screenshot 2024-02-29 at 2.04.54 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_2.04.54_AM.png)
    

![IMG_1404-ezgif.com-video-to-gif-converter.gif](/notion-images/project-4--rainbow-road/IMG_1404-ezgif.com-video-to-gif-converter.gif)

![IMG_1406-ezgif.com-video-to-gif-converter.gif](/notion-images/project-4--rainbow-road/IMG_1406-ezgif.com-video-to-gif-converter.gif)

![IMG_1414-ezgif.com-video-to-gif-converter (1).gif](Project%204-%20Rainbow%20Road/IMG_1414-ezgif.com-video-to-gif-converter_(1).gif)

![IMG_1418-ezgif.com-video-to-gif-converter.gif](/notion-images/project-4--rainbow-road/IMG_1418-ezgif.com-video-to-gif-converter.gif)

![IMG_1415-ezgif.com-video-to-gif-converter.gif](/notion-images/project-4--rainbow-road/IMG_1415-ezgif.com-video-to-gif-converter.gif)

![IMG_1419-ezgif.com-video-to-gif-converter.gif](/notion-images/project-4--rainbow-road/IMG_1419-ezgif.com-video-to-gif-converter.gif)

![IMG_1417-ezgif.com-video-to-gif-converter.gif](/notion-images/project-4--rainbow-road/IMG_1417-ezgif.com-video-to-gif-converter.gif)

![IMG_1416-ezgif.com-video-to-gif-converter.gif](/notion-images/project-4--rainbow-road/IMG_1416-ezgif.com-video-to-gif-converter.gif)

![IMG_1417-ezgif.com-video-to-gif-converter.gif](/notion-images/project-4--rainbow-road/IMG_1417-ezgif.com-video-to-gif-converter_1.gif)

---

## Image Processing

The image processing consisted of different methods. Below is each explained. 

- **Kernels in Image Processing**
    
    Kernels are small grids used to perform operations like blurring or sharpening on images.
    
    ![Screenshot 2024-02-29 at 2.53.24 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_2.53.24_AM.png)
    
    - Detailed Explanation
        
        Kernels are small matrices used in image processing for various operations like convolution. This applies a kernel to an image by computing the sum of products of kernel weights and corresponding pixel values from the image and its neighboring pixels. This process is fundamental for tasks like sharpening, blurring, and edge detection. It allowed for us to detect different colors in comparison to the other
        
        ![2D_Convolution_Animation.gif](/notion-images/project-4--rainbow-road/2D_Convolution_Animation.gif)
        
    
- **Gaussian Blending**
    
    Gaussian blurring is a method to blur images using a specific type of grid, which smooths out edges and reduces noise.
    
    ![Screenshot 2024-02-29 at 2.59.14 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_2.59.14_AM.png)
    
    - Detailed Explanation
        
        Gaussian blurring is a specific type of blurring operation achieved using a Gaussian kernel. This operation is implemented in OpenCV with the **`cv2.GaussianBlur()`** function. It helps in reducing noise and smoothing edges in images, acting as a low-pass filter.
        
        ![stone-balancing-blurred.gif](/notion-images/project-4--rainbow-road/stone-balancing-blurred.gif)
        
- **Thresholding**
    
    Thresholding simplifies images by turning pixels above a certain brightness into one color and pixels below into another.
    
    ![Screenshot 2024-02-29 at 3.02.43 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_3.02.43_AM.png)
    
    - Detailed Explanation
        
        Thresholding is a technique used to create binary images by dividing pixels into two categories based on their intensity values compared to a threshold. OpenCV provides the **`cv2.threshold()`** function for this purpose. However, it can only be applied to grayscale images.
        
        ![thresholding_feature_image.gif](/notion-images/project-4--rainbow-road/thresholding_feature_image.gif)
        
- **Contours**
    
    Contours are outlines of objects in pictures, useful for tasks like finding shapes or detecting objects.
    
    ![Screenshot 2024-02-29 at 3.04.04 AM.png](/notion-images/project-4--rainbow-road/Screenshot_2024-02-29_at_3.04.04_AM.png)
    
    - Detailed Explanation
        
        Contours are outlines of objects in an image, represented as a series of connected points. OpenCV offers functions like **`cv2.findContours()`** to identify contours and **`cv2.drawContours()`** to visualize them. These functions are useful for tasks such as object detection and shape analysis.
        
        ![center_of_contour_results.gif](/notion-images/project-4--rainbow-road/center_of_contour_results.gif)
        
    

Using these different methods, we were able to detect the line and use it for the Raspberry Pi.

![Untitled](/notion-images/project-4--rainbow-road/Untitled.png)

The red box is the line. The camera captures the image to the right. The line is outlined in green, showing where the line is. The purple box is what the RaspberryPi sees. It makes lines intercept through the x and y axis, giving us the center. This is then used as a variable for the PID.

---

## Electronics/Code

![Untitled](/notion-images/project-4--rainbow-road/Untitled_1.png)

Above is the wiring diagram for the DC motors and the camera attachment. The code was a PID system with the source coming from the image detection that contoured the lines. It followed the course below.

- FINAL CODE
    
    ```python
    # Core opencv code provided by Einsteinium Studios
    # Revisions to work with Pi Camera v3 by Briana Bouchard
    import numpy as np
    import cv2
    from picamera2 import Picamera2
    from libcamera import controls
    import RPi.GPIO as GPIO
    import time
    #GPIO.cleanup()
    
    picam2 = Picamera2() # assigns camera variable
    picam2.set_controls({"AfMode": controls.AfModeEnum.Continuous}) # sets auto focus mode
    picam2.start() # activates camera
    time.sleep(1) # wait to give camera time to start up
    #GPIO.cleanup()
    ena1 = 26
    in1 = 19
    in2 = 13
    ena2 = 16
    in3 = 20
    in4 = 21
    # Board and pin setup
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(ena1, GPIO.OUT)
    GPIO.setup(in1, GPIO.OUT)
    GPIO.setup(in2, GPIO.OUT)
    GPIO.setup(ena2, GPIO.OUT)
    GPIO.setup(in3, GPIO.OUT)
    GPIO.setup(in4, GPIO.OUT)
    # Set all pins low to start to prevent rotation on run
    GPIO.output(in1, GPIO.LOW)
    GPIO.output(in2, GPIO.LOW)
    GPIO.output(in3, GPIO.LOW)
    GPIO.output(in4, GPIO.LOW)
    GPIO.output(ena2, GPIO.LOW)
    GPIO.output(ena1, GPIO.LOW)
    #GPIO.cleanup()
    
    # PWM at 50 Hz
    #GPIO.cleanup()
    
    left_motor = GPIO.PWM(ena1, 50)
    right_motor = GPIO.PWM(ena2, 50)
    #GPIO.cleanup()
    
    err_sum = 0
    err_prev = 0
    def PIDControl(cx):
        global err_sum
        global err_prev
        #mess with these 3
        kp = 0.0427 #change by +-0.5, fine tune with +-0.1 
        ki = 0.00377 #change by +-0.01, fine tune with +-0.005
        kd = 0.2168 #change by +-0.5, fine tune with +-0.1 
        err = 300 - cx #number is center
        err_sum += err
        err_d = err - err_prev
        # Calculate the control signal
        p = kp * err
        i = ki * err_sum
        d = kd * err_d
        pid = p + i + d
        # Update the error for the next iteration
        err_prev = err
        #max pid error at 15
        if pid > 15:
            pid = 15
        if pid < -15:
            pid = -15
        return pid
    def Stop():
        left_motor.stop()
        right_motor.stop()
    def forward(pid):
        GPIO.output(in2, GPIO.LOW)
        GPIO.output(in1, GPIO.HIGH)
        GPIO.output(in3, GPIO.HIGH)
        GPIO.output(in4, GPIO.LOW)
        first = 15-pid
        second = 15+pid
        right_motor.ChangeDutyCycle(first)
        right_motor.start(first)
        left_motor.ChangeDutyCycle(second)
        left_motor.start(second)
        #GPIO.cleanup()
    
    try:
        while True:
            # Display camera input
            image = picam2.capture_array("main")
            cv2.imshow('img',image)
            # Crop the image
            #crop_img = image[centery - crop_height//2: centery + cropheight//2, centerx - crop_width//2:centerx + crop_width//2]
            crop_img = image[60:240, 0:800] #change size of screen with this
            # Convert to grayscale
            gray = cv2.cvtColor(crop_img, cv2.COLOR_BGR2GRAY)
            # Gaussian blur
            blur = cv2.GaussianBlur(gray,(5,5),0)
            # Color thresholding
            input_threshold,comp_threshold = cv2.threshold(blur,60,255,cv2.THRESH_BINARY_INV)
            # Find the contours of the frame
            contours,hierarchy = cv2.findContours(comp_threshold.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
            # Find the biggest contour (if detected)
            if len(contours) > 0:
                c = max(contours, key=cv2.contourArea)
                M = cv2.moments(c) # determine moment - weighted average of intensities
                if int(M['m00']) != 0:
                    cx = int(M['m10']/M['m00']) # find x component of centroid location
                    cy = int(M['m01']/M['m00']) # find y component of centroid location
                else:
                    print("Centroid calculation error, looping to acquire new values")
                    continue
                
                cv2.line(crop_img,(cx,0),(cx,720),(255,0,0),1) # display vertical line at x value of centroid
                cv2.line(crop_img,(0,cy),(1280,cy),(255,0,0),1) # display horizontal line at y value of centroid
                cv2.drawContours(crop_img, contours, -1, (0,255,0), 2) # display green lines for all contours
                pid = PIDControl(cx)
                forward(pid)
                # print (cx)
                if cx >= 120:
                    print("Turn Left!")
                if cx < 120 and cx > 50:
                    print("On Track!")
                if cx <= 50:
                    print("Turn Right")
                else:
                    print("I don't see the line")
            # Display the resulting frame
            cv2.imshow('frame',crop_img)
            # Show image for 1 ms then continue to next image
            cv2.waitKey(1)
    except KeyboardInterrupt:
        GPIO.cleanup()
        print('Cleaned Up')
    
    ```