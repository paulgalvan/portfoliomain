# Project 2- Linkages

## About This Project:

“The goal of this assignment is to replicate the motion of Mario sliding down the flag pole at the end of every Super Mario Bros level.

In mechanical terms, your goal is to convert rotary motion (from your motor) into linear motion through a system of linkages. Many different mechanisms can accomplish this goal and the route you pursue is up to you. However, you must comply with the following constraints:

1. Your mechanism must have at least 3 moving linkages. Stationary/fixed linkages do not count.
2. Mario or whatever character you choose must move in a vertical straight line for at least 10 cm.
3. You may not use slots or tracks to keep your character in line.
4. Motion must be powered by a motor (i.e. you can't rely on gravity to move the character for you).”

---

![IMG_0907-ezgif.com-video-to-gif-converter.gif](/notion-images/project-2--linkages/IMG_0907-ezgif.com-video-to-gif-converter.gif)

---

## Process

![Screenshot 2024-02-09 at 3.09.42 AM.png](/notion-images/project-2--linkages/Screenshot_2024-02-09_at_3.09.42_AM.png)

When the main purpose of the assignment was given, linkages, a LEGO scissor lift automatically popped up in my head. I had experience with LEGO, so I pitched it to the group and they also liked it.

We designed the base in Onshape and found complications after printing. The stepper motor could not generate enough torque if the meshing of the gears were off, or if they got stuck due to friction. Initially having the gears made of wood caused too much stress on the motor, so it did not move.

![Screenshot 2024-02-09 at 3.19.23 AM.png](/notion-images/project-2--linkages/Screenshot_2024-02-09_at_3.19.23_AM.png)

This is where all the components were attached to. The five hole cross was where the stepper motor gave input to the shaft later on.

---

## Gear System

We decided on a gear system, taking inspiration from the last project. The alternative was a rack and pinion. Although useful, we decided to stick to the gear system to follow the rules of no slots or tracks.

![Screenshot 2024-02-09 at 3.23.24 AM.png](/notion-images/project-2--linkages/Screenshot_2024-02-09_at_3.23.24_AM.png)

---

## Linkages

The smaller hole was used to attach the linkages to the gears, so they could have motion. Those linkages were then hooked up to the scissor lift. It was done on both sides so it could go up higher, and it surpassed the 10cm.

![Screenshot 2024-02-09 at 3.28.03 AM.png](/notion-images/project-2--linkages/Screenshot_2024-02-09_at_3.28.03_AM.png)

![Screenshot 2024-02-09 at 3.30.15 AM.png](/notion-images/project-2--linkages/Screenshot_2024-02-09_at_3.30.15_AM.png)

![Screenshot 2024-02-09 at 3.28.20 AM.png](/notion-images/project-2--linkages/Screenshot_2024-02-09_at_3.28.20_AM.png)

### Top View                                                                Back View

![B2E94DC3-715F-4687-8AE5-1CC0EC8A300F_1_201_a.jpg](/notion-images/project-2--linkages/B2E94DC3-715F-4687-8AE5-1CC0EC8A300F_1_201_a.jpg)

![IMG_0909.jpg](/notion-images/project-2--linkages/IMG_0909.jpg)

### Back View Mechanism

![IMG_0911-ezgif.com-video-to-gif-converter.gif](/notion-images/project-2--linkages/IMG_0911-ezgif.com-video-to-gif-converter.gif)

## Electronics/Code

As for the electronic sections, we used the wiring diagram provided by Briana Bouchard (Ph.D) below.

![Screenshot 2024-02-09 at 3.35.30 AM.png](/notion-images/project-2--linkages/Screenshot_2024-02-09_at_3.35.30_AM.png)

We decided to use a lever switch on either side of the gears, on the backside. This way, the motion could be more automated when pressed. It turned out to be successful and the automation worked. 

- CODE HERE
    
    ```python
    import RPi.GPIO as GPIO
    import time
    GPIO.setmode(GPIO.BOARD)
    #GPIO.cleanup()  # Add this line to release GPIO channels
    # Define the GPIO pins for the L298N motor driver
    OUT1 = 12
    OUT2 = 11
    OUT3 = 13
    OUT4 = 15
    stop_channel = 31
    channel2 = 33
    # Set the GPIO pins as output
    GPIO.setup(OUT1, GPIO.OUT)
    GPIO.setup(OUT2, GPIO.OUT)
    GPIO.setup(OUT3, GPIO.OUT)
    GPIO.setup(OUT4, GPIO.OUT)
    GPIO.output(OUT1,GPIO.LOW)
    GPIO.output(OUT2,GPIO.LOW)
    GPIO.output(OUT3,GPIO.LOW)
    GPIO.output(OUT4,GPIO.LOW)
    GPIO.setup(stop_channel, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
    GPIO.setup(channel2, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
    GPIO.add_event_detect(stop_channel, GPIO.RISING)  # add rising edge detection on a channel
    GPIO.add_event_detect(channel2, GPIO.RISING)  # add rising edge detection on a channel
    num_steps = 100000000000
    step_delay = 0.03
    def calibration_going_up ():
         while True:
            current_step = 0
            print ('in going up')
            # Move up
            for x in range(num_steps):
                if current_step == 0:
                    GPIO.output(OUT1,GPIO.HIGH)
                    GPIO.output(OUT2,GPIO.LOW)
                    GPIO.output(OUT3,GPIO.LOW)
                    GPIO.output(OUT4,GPIO.HIGH)
                    time.sleep(step_delay)
                    #print("step 0")
                elif current_step == 1:
                    GPIO.output(OUT1,GPIO.LOW)
                    GPIO.output(OUT2,GPIO.HIGH)
                    GPIO.output(OUT3,GPIO.LOW)
                    GPIO.output(OUT4,GPIO.HIGH)
                    time.sleep(step_delay)
                    #print("step 1")
                elif current_step == 2:
                    GPIO.output(OUT1,GPIO.LOW)
                    GPIO.output(OUT2,GPIO.HIGH)
                    GPIO.output(OUT3,GPIO.HIGH)
                    GPIO.output(OUT4,GPIO.LOW)
                    time.sleep(step_delay)
                elif current_step == 3:
                    GPIO.output(OUT1,GPIO.HIGH)
                    GPIO.output(OUT2,GPIO.LOW)
                    GPIO.output(OUT3,GPIO.HIGH)
                    GPIO.output(OUT4,GPIO.LOW)
                    time.sleep(step_delay)
                if current_step == 3:
                    current_step = 0
                    continue
                if GPIO.event_detected(channel2):  #assign channel
                    time.sleep (0.001)
                    print ('switch pressed')
                    if GPIO.input(channel2) == GPIO.HIGH:
                        print('AT 10 CM')
                        going_down()
                # print ('checked wait')
                current_step = current_step + 1
            GPIO.cleanup()
            break
    def going_down ():
         while True:
            current_step = 0
            print ('in going down')
            #going down
            for x in range(num_steps):
                if current_step == 0:
                    GPIO.output(OUT1,GPIO.HIGH)
                    GPIO.output(OUT2,GPIO.LOW)
                    GPIO.output(OUT3,GPIO.HIGH)
                    GPIO.output(OUT4,GPIO.LOW)
                    time.sleep(step_delay)
                    #print("step 0")
                elif current_step == 1:
                    GPIO.output(OUT1,GPIO.LOW)
                    GPIO.output(OUT2,GPIO.HIGH)
                    GPIO.output(OUT3,GPIO.HIGH)
                    GPIO.output(OUT4,GPIO.LOW)
                    time.sleep(step_delay)
                    #print("step 1")
                elif current_step == 2:
                    GPIO.output(OUT1,GPIO.LOW)
                    GPIO.output(OUT2,GPIO.HIGH)
                    GPIO.output(OUT3,GPIO.LOW)
                    GPIO.output(OUT4,GPIO.HIGH)
                    time.sleep(step_delay)
                elif current_step == 3:
                    GPIO.output(OUT1,GPIO.HIGH)
                    GPIO.output(OUT2,GPIO.LOW)
                    GPIO.output(OUT3,GPIO.LOW)
                    GPIO.output(OUT4,GPIO.HIGH)
                    time.sleep(step_delay)
                if current_step == 3:
                    current_step = 0
                    continue
                if GPIO.event_detected(stop_channel):  #assign channel
                    time.sleep (0.1)
                    print ('stop switch pressed')
                    if GPIO.input(stop_channel) == GPIO.HIGH:
                        current_step = num_steps
                        print('Switch stabilized. Performing action.')
                #print ('checked wait')
                current_step = current_step + 1
                #GPIO.wait_for_edge(channel, GPIO.RISING)
            GPIO.cleanup()
            break
    #GPIO.add_event_detect(channel, GPIO.RISING, callback=my_callback)  # add rising edge detection on a channel
    try:
        while True:
            print ('in while true')
            #GPIO.wait_for_edge(channel, GPIO.RISING)
            calibration_going_up()
            #GPIO.add_event_detect(channel, GPIO.RISING)  # add rising edge detection on a channel
    except KeyboardInterrupt:
        GPIO.cleanup()
    # Clean up GPIO on exit (if not interrupted)
    finally:
        GPIO.cleanup()
    ```