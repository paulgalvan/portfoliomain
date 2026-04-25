# Project 1- Double Jump

## About This Project:

“The goal of this week's project is to try your hand at gear reduction. You will need to run your stepper motor for 200 steps, but move a character (Mario or any other character) from 90 to 180 degrees. To do this, you will need to use a gear train with at least 4 gears - note if you choose to build a planetary gear system, as long as you have 3 planet gears you satisfy the requirement. Each team member must design at least 1 gear.

Success = +/- 50 degrees

Super Success = +/- 5 degrees

You may NOT use any pre-made gears or software that creates gears for you.”

---

![frontgear-ezgif.com-video-to-gif-converter.gif](/notion-images/project-1--double-jump/frontgear-ezgif.com-video-to-gif-converter.gif)

---

## Math

The math behind the gears was the complicated part. Below is the original 16-gear tooth. The measurements behind it were off by a bit, as can be seen by the thicker teeth. 

![Screenshot 2024-02-02 at 12.41.46 AM.png](/notion-images/project-1--double-jump/Screenshot_2024-02-02_at_12.41.46_AM.png)

![Screenshot 2024-02-02 at 12.46.36 AM.png](/notion-images/project-1--double-jump/Screenshot_2024-02-02_at_12.46.36_AM.png)

The gear to the right is the same one but improvised, it allowed for smoother meshing with the 

32-tooth gear. 

![Screenshot 2024-02-02 at 12.48.59 AM.png](/notion-images/project-1--double-jump/Screenshot_2024-02-02_at_12.48.59_AM.png)

![Screenshot 2024-02-02 at 12.40.39 AM.png](/notion-images/project-1--double-jump/Screenshot_2024-02-02_at_12.40.39_AM.png)

First modeled on a gear generator, we had to calculate and take the circle measurements so we could make iterations of gears in different sizes along with teeth. Different things are taken into account like the number of teeth, anything under 14 messes gears up, and they need to have a consistent pitch so they can also mesh properly.

![Screenshot 2024-02-02 at 12.51.57 AM.png](/notion-images/project-1--double-jump/Screenshot_2024-02-02_at_12.51.57_AM.png)

![Screenshot 2024-02-02 at 12.54.41 AM.png](/notion-images/project-1--double-jump/Screenshot_2024-02-02_at_12.54.41_AM.png)

Here they are side by side on Onshape in an assembly as well as printed to see the meshing with real-time physics.

---

## Gear System

The gear system we decided to use was a 3-pin system that stacked the gears to half the ratio. The first connection from the stepper (16-tooth gear) to the second (32-gear tooth) made the 200 steps into 100, already moving from 360° to 180°. On the second gear, there is a smaller gear (16 teeth) glued on so it can rotate at the same speed, but output a smaller range of motion. It the connected to the third gear (32 gear). That again turned the 180° to 90°.

![Rotated.png](/notion-images/project-1--double-jump/Rotated.png)

![IMG_7A44DB727A4A-1.jpeg](/notion-images/project-1--double-jump/IMG_7A44DB727A4A-1.jpeg)

On top of the last gear we attached the last circle along with Mario to show his ascent.

![Screenshot 2024-02-02 at 2.01.33 AM.png](/notion-images/project-1--double-jump/Screenshot_2024-02-02_at_2.01.33_AM.png)

The way the gears moved.

### Top View                                                                Side View

![IMG_0706-ezgif.com-video-to-gif-converter.gif](/notion-images/project-1--double-jump/IMG_0706-ezgif.com-video-to-gif-converter.gif)

![sidegear-ezgif.com-video-to-gif-converter.gif](/notion-images/project-1--double-jump/sidegear-ezgif.com-video-to-gif-converter.gif)

---

## Electronics/Code

As for the electronic sections, we used the wiring diagram provided by Briana Bouchard (Ph.D) below.

![Screenshot 2024-02-02 at 12.21.46 AM.png](/notion-images/project-1--double-jump/Screenshot_2024-02-02_at_12.21.46_AM.png)

We decided to not use a lever switch to zero out the project. Rather, we adjusted the 90° by hand. To run the Mario, we ran the code below.

- CODE HERE
    
    ```python
    import RPi.GPIO as GPIO
    import time
    
    GPIO.setmode(GPIO.BOARD)
    
    # Define the GPIO pins for the L298N motor driver
    OUT1 = 12
    OUT2 = 11
    OUT3 = 13
    OUT4 = 15
    
    # Set the GPIO pins as output
    GPIO.setup(OUT1, GPIO.OUT)
    GPIO.setup(OUT2, GPIO.OUT)
    GPIO.setup(OUT3, GPIO.OUT)
    GPIO.setup(OUT4, GPIO.OUT)
    
    GPIO.output(OUT1,GPIO.LOW)
    GPIO.output(OUT2,GPIO.LOW)
    GPIO.output(OUT3,GPIO.LOW)
    GPIO.output(OUT4,GPIO.LOW)
    
    num_steps = 200
    step_delay = 0.03
    
    try:
        while True:   
            current_step = 0
            
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
                current_step = current_step + 1
            GPIO.cleanup()
            break    
                        
    except KeyboardInterrupt:
        GPIO.cleanup()
    ```