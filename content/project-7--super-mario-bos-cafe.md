# Project 7- Super Mario ‘Bos Cafe

Skills : CAD/Modular Design, Electronics Integration, Machining, Sub-team communication, Robotics Presentation

“Prompt: You are the proud Super Mario 'Bos Cafe owners. This fully robotic cafe will take orders, make lattes, and deliver them to your customers.
Aside from the customers placing and receiving orders, there should be as little human involvement in your cafe operations as possible.”

[8563628761262823500cb4ddd62e83d4309a681b74d9ca62f82.mp4](/notion-images/project-7--super-mario-bos-cafe/8563628761262823500cb4ddd62e83d4309a681b74d9ca62f82.mp4)

![Screenshot 2024-05-17 at 6.32.01 AM.png](/notion-images/project-7--super-mario-bos-cafe/ce5298be-726a-4991-bf76-476922e9d46d.png)

![DSC_6120.JPG](/notion-images/project-7--super-mario-bos-cafe/DSC_6120.jpg)

## Design Goals

As a class, we set out to make an autonomous cafe that could autonomously make a latte. By the end of the semester, we had the machine fully working, and we did so by dividing the project into teams.

We decided on:

- A "transport” team that made a Create rotate a plate where cups could be placed into. They were also in charge of the communication between the teams of different Raspberry Pi’s using Airtable.
- A “coffee” team relayed into the coffee machine to remotely activate it and run for a certain amount of time. They also had to figure out how to insert the coffee pods into said machine.
- A “milk” team was in charge of frothing the milk, and they did so by relaying into the frothing machine and pouring the milk into the cup.
- An “art” team that created stencils to have latte art/

---

## Milk

My team and I took this challenge and split it into 3 parts. 

![DSC_6121.JPG](/notion-images/project-7--super-mario-bos-cafe/DSC_6121.jpg)

- Getting the milk into the frother
- Starting the frother
- Pouring the frothed milk

![Milk.gif](/notion-images/project-7--super-mario-bos-cafe/Milk.gif)

## Pump

To get the milk into the cup, we created a pump machine to get milk from a gallon. 

![milk pump.gif](/notion-images/project-7--super-mario-bos-cafe/milk_pump.gif)

This video showed the pump in action and the setup used.

---

## Relay

Instead of attempting to use a physical mechanism to push and hold the button, we wanted to turn it on electrically with a Raspberry Pi. We explored using a relay integrated into the frother's circuit.

![F38B3205-06C9-4BA9-9A29-2A3D6698736C_1_105_c.jpeg](/notion-images/project-7--super-mario-bos-cafe/F38B3205-06C9-4BA9-9A29-2A3D6698736C_1_105_c.jpeg)

![D4092CEF-AADC-4A58-9CDC-A1E331EA8B07_1_105_c.jpeg](/notion-images/project-7--super-mario-bos-cafe/D4092CEF-AADC-4A58-9CDC-A1E331EA8B07_1_105_c.jpeg)

Here is a diagram we conspired on the relay, and the froth’s diagram. 

![087974B8-0F92-49D0-A1EA-93CB845BBAD2_1_105_c.jpeg](/notion-images/project-7--super-mario-bos-cafe/087974B8-0F92-49D0-A1EA-93CB845BBAD2_1_105_c.jpeg)

Wiring it up this way, we tested it to see whether or not it worked.

[IMG_3442.MOV](/notion-images/project-7--super-mario-bos-cafe/IMG_3442.mov)

![IMG_3444.jpg](/notion-images/project-7--super-mario-bos-cafe/IMG_3444.jpg)

![IMG_3445.jpg](/notion-images/project-7--super-mario-bos-cafe/IMG_3445.jpg)

After that, we closed it up and integrated the 3 parts. 

---

## Tilt

![2B930A44-AF30-4EEE-8E29-7A925CC1D161_1_105_c.jpeg](/notion-images/project-7--super-mario-bos-cafe/2B930A44-AF30-4EEE-8E29-7A925CC1D161_1_105_c.jpeg)

![17AEAB86-38BE-490D-99BB-5E8E21C2FB36_1_105_c.jpeg](/notion-images/project-7--super-mario-bos-cafe/17AEAB86-38BE-490D-99BB-5E8E21C2FB36_1_105_c.jpeg)

We designed a worm gear to tilt the frother. However, we had to change out the motor because it wasn't generating enough force.

---

## Code

We hooked every mechanism into one Raspberry Pi to run the different codes. They had to be in a specific order since you couldn't run one before the other. Getting the timing adequately lined up with the rest of the latte machine was difficult. We had to try and test, especially when starting the frother. It had a hot (1-second click) and a cold (5-second click) setting when clicking the button. Giving the current for too long set off the cold setting, which we didn't want. As for the pump, we had to order new ones and start earlier so we could finish by the time the cup got to us. 

- Final Code
    
    ```python
    import RPi.GPIO as GPIO
    import time
    from time import sleep
    from airtable_data import airtable
    import requests
    
    GPIO.setmode(GPIO.BOARD)
    
    ##### Fluids Setup #####
    
    # Pins for pumping
    # MILKA = 16
    # MILKB = 18
    
    MILKA = 13
    MILKB = 15
    
    PUMPA = 38
    PUMPB = 40
    
    # Pin for frother
    FROTH = 37
    
    # Pins for rotation arm
    OUT1, OUT2, OUT3, OUT4 = 12, 11, 35, 33
    LIMIT_SWITCH = 31
    
    # Set the GPIO pins as output
    GPIO.setup(FROTH, GPIO.OUT)
    
    #GPIO.setup(MILKA, GPIO.OUT)
    #GPIO.setup(MILKB, GPIO.OUT)
    GPIO.setup(MILKA, GPIO.OUT)
    GPIO.setup(MILKB, GPIO.OUT)
    GPIO.setup(PUMPA, GPIO.OUT)
    GPIO.setup(PUMPB, GPIO.OUT)
    
    GPIO.setup(OUT1, GPIO.OUT)
    GPIO.setup(OUT2, GPIO.OUT)
    GPIO.setup(OUT3, GPIO.OUT)
    GPIO.setup(OUT4, GPIO.OUT)
    
    GPIO.setup(LIMIT_SWITCH, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
    #GPIO.add_event_detect(LIMIT_SWITCH, GPIO.RISING)
    
    # Make sure both valves are closed to start
    GPIO.output(MILKA,GPIO.LOW)
    GPIO.output(MILKB,GPIO.LOW)
    # GPIO.output(WATERA,GPIO.LOW)
    # GPIO.output(WATERB,GPIO.LOW)
    
    #Make sure pump is off to start
    GPIO.output(PUMPA,GPIO.LOW)
    GPIO.output(PUMPB,GPIO.LOW)
    
    # Set steamer off to start
    GPIO.output(FROTH,GPIO.LOW)
    
    # Turn off all rotation pins to start
    GPIO.output(OUT1, GPIO.LOW)
    GPIO.output(OUT2, GPIO.LOW)
    GPIO.output(OUT3, GPIO.LOW)
    GPIO.output(OUT4, GPIO.LOW)
    
    ###### Rotation Arm Setup #####
    
    # Define motor steps (milk and water directions)
    CW_sequence = [(1, 0, 0, 1), (0, 1, 0, 1), (0, 1, 1, 0), (1, 0, 1, 0)]
    CCW_sequence = [(1, 0, 1, 0), (0, 1, 1, 0), (0, 1, 0, 1), (1, 0, 0, 1)]
    
    # Define motor rotation function for a set number of steps and direction
    def rotate_steps(steps, delay, direction):
        if direction == 'WATER':
            sequence = CW_sequence
        elif direction == 'MILK':
            sequence = CCW_sequence
        else:
            raise ValueError("Invalid direction. Use 'MILK' or 'WATER'.")
        for _ in range(steps):
            for step in sequence:
                GPIO.output(OUT1, step[0])
                GPIO.output(OUT2, step[1])
                GPIO.output(OUT3, step[2])
                GPIO.output(OUT4, step[3])
                time.sleep(delay)
    
    try:
        while True:
    
            #Wait until someone asks for coffee
            # [design_info, customer_info, customer_order, latte_info, coffee_info, start_info] = airtable()
            # while not start_info['arrived'] == 1:
            #   [design_info, customer_info, customer_order, latte_info, coffee_info, start_info] = airtable()
            #   time.sleep(1)
    
            # print("process started...")
    
            ##### Pump milk into frother #####
    
            # Open milk valve
            # GPIO.output(MILKA,GPIO.HIGH)
            # time.sleep(1)
    
            # # # Get 8oz milk into frother - TODO get time for new pump
            # GPIO.output(PUMPB,GPIO.HIGH)
            # time.sleep(5)
    
            # # # Turn off the pump
            # GPIO.output(PUMPB,GPIO.LOW)
            # time.sleep(0.1)
    
            # # # Close milk valve
            # GPIO.output(MILKA,GPIO.LOW)
            # time.sleep(1)
    
            # ###### Steam milk #######
    
            # # Turn the GPIO pin on (set it to HIGH)
            # GPIO.output(FROTH, GPIO.HIGH)
            # print("GPIO pin {} turned ON".format(FROTH))
            # sleep(2)  # Turn on for 2 seconds - turns on frother with spin and heat
    
            # # Turn the GPIO pin off (set it to LOW)  after 2 seconds. Frother should turn off on its own After 60 seconds of initial start
            # GPIO.output(FROTH, GPIO.LOW)
            # print("GPIO pin {} turned OFF".format(FROTH))
            # time.sleep(180)
    
            # print('done')
    
            # Wait until coffee cup is in position before pouring
            # [design_info, customer_info, customer_order, latte_info, coffee_info, start_info] = airtable()
            # while not latte_info['arrived'] == 1:
            #    [design_info, customer_info, customer_order, latte_info, coffee_info, start_info] = airtable()
            #    time.sleep(1)
    
            print("coffee in position")
    
            # Pour milk into coffee cup - TODO: determine # steps, time to finish complete pour
            rotate_steps(steps=1350, delay= 0.0025, direction='MILK')
            time.sleep(5)
    
            # Return to vertical position
            while not GPIO.input(LIMIT_SWITCH) == GPIO.HIGH:
              rotate_steps(steps=5, delay= 0.0025, direction='WATER')
    
            # Send "milk poured" to airtable
            update_url = 'https://api.airtable.com/v0/appZXeS3vQKy6x41E/Drive/recSIyskVTknipb5f'
            Headers = {'Authorization':'Bearer patnz4q3YD2b6QE5b.c888c6f15cb3bbb30c73cb0bcd9b186c09f7459d2e0569c8f80a34dd45a8651b'}
            example = {
              "fields": {
                  "Done": 1 # enter either 0 or 1 please
              }
            }
            response = requests.patch(update_url, json=example, headers=Headers)
    
            print("sent done")
    
    except KeyboardInterrupt:
        GPIO.cleanup()
    
    finally:
        # Cleanup GPIO
        GPIO.cleanup()
    ```
    

---

## Reflections/Learning

- Learning how to use a relay was challenging, especially because we needed to learn how the blender circuit worked. There wasn't any documentation, so we had to look online and confer with experts.
- It was tough to work quickly, especially when we had to do many components. However, by carefully creating a plan and acting quickly to order new parts, we were able to meet our deadline.
- Collaborating with the entire class on such a large project was both rewarding and challenging. It was a big-group collaboration, so lining up our schedules and combining our components was difficult, but with trial and tribulations, the latte was made successfully (as shown below).
    
    ![IMG_1225 (1).jpg](Project%207-%20Super%20Mario%20%E2%80%98Bos%20Cafe/IMG_1225_(1).jpg)