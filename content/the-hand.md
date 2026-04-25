# The Hand

## About This Project:

Originally intended to be a finger-painting [](https://www.notion.so/5c7fcfb8d93c457190d8dcf6418d1da3?pvs=21)robot from a past student, Julia Divan [(here)](https://www.notion.so/5c7fcfb8d93c457190d8dcf6418d1da3?pvs=21), the robotic hand used in this project has been refined and improved upon in order to unlock its full potential.

## Project Tasks:

- Built hand with pneumatic system with two motors and fishing line
- Program the hand to mirror a human hand:
    - Used a camera tracking library (media pipe) to determine the movements of the human hand

# Hand Tracking/Mirroring

[HAND MOVING.mp4](/notion-images/the-hand/HAND_MOVING.mp4)

## Hand Tracking

![palm.jpg](/notion-images/the-hand/palm.jpg)

![fist.jpg](/notion-images/the-hand/fist.jpg)

![thumb.jpg](/notion-images/the-hand/thumb.jpg)

![ezgif.com-video-to-gif.gif](/notion-images/the-hand/ezgif.com-video-to-gif.gif)

Output [thumb, pointer, middle, ring, pinky] :

![Screenshot 2023-07-10 at 11.51.35 AM.png](/notion-images/the-hand/Screenshot_2023-07-10_at_11.51.35_AM.png)

## Do it yourself

- How to use the hand yourself.
    
    Using the [PyCharm](https://www.jetbrains.com/pycharm/download/?section=mac) IDE, you can use the program below to mimic your hand. 
    
    - Click here to install and run the media pipe camera tracking.
        
        Run this command on the PyCharm terminal.
        
        `pip install mediapipe`
        
        After, run this command.
        
        `pip install opencv-python`
        
    
    After that is installed, you can try the next code to start the hand tracking.
    
    - Hand Tracking Code
        
        ```python
        import cv2
        import mediapipe as mp
        
        cap = cv2.VideoCapture(0) #Change this to use different cameras
        mpHands = mp.solutions.hands
        hands = mpHands.Hands()
        mpDraw = mp.solutions.drawing_utils
        index = 0
        while True: #This logic tracks the hand
            index += 1
            success, image = cap.read()
            imageRGB = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            results = hands.process(imageRGB)
            # checking whether a hand is detected
            if results.multi_hand_landmarks:
                for handLms in results.multi_hand_landmarks:  # working with each hand
                    for id, lm in enumerate(handLms.landmark):
                        h, w, c = image.shape
                        cx, cy = int(lm.x * w), int(lm.y * h)
                        mpDraw.draw_landmarks(image, handLms, mpHands.HAND_CONNECTIONS)
                    # check all fingers
                    output = []
                    h, w, c = image.shape
                    # thumb: 4 (vs 5 horizontally)
                    # first finger: 8 (vs 5)
                    # middle finger: 12 (vs 9)
                    # ring finger: 16 (vs 13)
                    # pinky: 20 (vs 17)
                    # check thumb:
                    thumb = handLms.landmark[4]
                    thumb_compare = handLms.landmark[6]
                    # thumb circle
                    cx, cy = int(thumb.x * w), int(thumb.y * h)
                    if (thumb.x < thumb_compare.x):
                        # thumb up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
                    else:
                        # thumb down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
        
                    # check first finger
                    first = handLms.landmark[8]
                    first_compare = handLms.landmark[6]
                    # first circle
                    cx, cy = int(first.x * w), int(first.y * h)
                    if (first.y < first_compare.y):
                        # first up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
                    else:
                        # first down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
        
                    # check middle finger
                    middle = handLms.landmark[12]
                    middle_compare = handLms.landmark[9]
                    # middle circle
                    cx, cy = int(middle.x * w), int(middle.y * h)
                    if (middle.y < middle_compare.y):
                        # middle up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
                    else:
                        # middle down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
        
                    # check ring finger
                    ring = handLms.landmark[16]
                    ring_compare = handLms.landmark[13]
                    # ring circle
                    cx, cy = int(ring.x * w), int(ring.y * h)
                    if (ring.y < ring_compare.y):
                        # ring up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
                    else:
                        # ring down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
        
                    # check pinky finger
                    pinky = handLms.landmark[20]
                    pinky_compare = handLms.landmark[17]
                    # pinky circle
                    cx, cy = int(pinky.x * w), int(pinky.y * h)
                    if (pinky.y < pinky_compare.y):
                        # pinky up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
                    else:
                        # pinky down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
                    print('SEND TO SPIKE:', output)
            cv2.imshow("Output", image)
            cv2.waitKey(1)
        ```
        
    
    Once the tracking is installed, using Thonny, you can flash this program onto the SPIKE Hub.
    
    - Code (On SPIKE Hub)
        
        ```python
        import hub, motor, time
        from hub import port
        
        WAIT_TIME = 1100
        SPEED = 1000
        class Hand:
            def __init__(self):
                self.fingers = [port.E, port.C, port.F, port.D] #array to dictionary 
                self.thumb = [port.A, port.B]
                self.prevStates = [1,1,1,1,1]
                self.waitUntil = [0,0,0,0,0]
                
            def update_hand(self,data):
                
                if data[0] != self.prevStates[0] and time.ticks_ms() > self.waitUntil[0]:
                    self.move_thumb(data[0])
                    self.prevStates[0] = data[0]
                    self.waitUntil[0] = time.ticks_ms() + WAIT_TIME
                
                i = 1
                for finger in self.fingers:
                    if data[i] != self.prevStates[i] and time.ticks_ms() > self.waitUntil[i]:
                        self.move_finger(finger, data[i])
                        self.prevStates[i] = data[i]
                        self.waitUntil[i] = time.ticks_ms() + WAIT_TIME
                    i += 1
            
            def move_finger(self, finger, state):
                if state == 1:
                    motor.run_for_degrees(finger, -900, SPEED)
                elif state == 0:
                    motor.run_for_degrees(finger, 900, SPEED)
                
            def move_thumb(self, state):
                if state == 0:
                    motor.run_for_degrees(self.thumb[0], -300, 900)
                    motor.run_for_degrees(self.thumb[1], -60, 200)
                elif state == 1:
                    motor.run_for_degrees(self.thumb[1], 60, 200)
                    motor.run_for_degrees(self.thumb[0], 300, 900)
        ```
        
    
    The next setup needed is on your device. 
    
    - Computer Setup
        
        Then, on your computer’s terminal, run this command. 
        
        ```python
         ls /dev/tty.*
        ```
        
        You should get a line of code that looks like this:
        
        ![Screenshot 2023-08-03 at 12.34.11 PM.png](/notion-images/the-hand/Screenshot_2023-08-03_at_12.34.11_PM.png)
        
        The important one is the:
        
        ```python
        /dev/tty.usbmodem3380348330381
        ```
        
        You are going to copy and paste it onto the 6th line of code from the top of the Hand Mirroring Code.
        
    
    After that setup is done, create a new window on the PyCharm IDE and paste the next code onto it. 
    
    - Hand Mirroring Code (Serial)
        
        ```python
        import cv2
        import mediapipe as mp
        import serial
        import time
        #change the '' line every time using 'ls /dev/tty.*' in terminal
        s = serial.Serial('/dev/tty.usbmodem3380348330381', baudrate=115200)
        def readSerial(s):
            string = b''
            while s.in_waiting > 0:
                string = string + (s.read(1))
            if string:
                print(string.decode(), end="")
        
        CtrlC = '\x03'
        CtrlD = '\x04'
        time.sleep(1)
        s.write(CtrlD.encode())
        time.sleep(1)
        s.write(CtrlC.encode())
        time.sleep(1)
        s.write('''
        from Hand import Hand\r\n
        hand = Hand()\r\n
        '''.encode())
        time.sleep(1)
        readSerial(s)
        
        cap = cv2.VideoCapture(1)
        mpHands = mp.solutions.hands
        hands = mpHands.Hands()
        mpDraw = mp.solutions.drawing_utils
        index = 0
        while True:
            index += 1
            success, image = cap.read()
            imageRGB = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            results = hands.process(imageRGB)
            # checking whether a hand is detected
            if results.multi_hand_landmarks:
                for handLms in results.multi_hand_landmarks:  # working with each hand
                    for id, lm in enumerate(handLms.landmark):
                        h, w, c = image.shape
                        cx, cy = int(lm.x * w), int(lm.y * h)
                        mpDraw.draw_landmarks(image, handLms, mpHands.HAND_CONNECTIONS)
                    # check all fingers
                    output = []
                    h, w, c = image.shape
                    # thumb: 4 (vs 5 horizontally)
                    # first finger: 8 (vs 5)
                    # middle finger: 12 (vs 9)
                    # ring finger: 16 (vs 13)
                    # pinky: 20 (vs 17)
                    # check thumb:
                    thumb = handLms.landmark[4]
                    thumb_compare = handLms.landmark[6]
                    # thumb circle
                    cx, cy = int(thumb.x * w), int(thumb.y * h)
                    if (thumb.x < thumb_compare.x):
                        # thumb up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
                    else:
                        # thumb down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
        
                    # check first finger
                    first = handLms.landmark[8]
                    first_compare = handLms.landmark[6]
                    # first circle
                    cx, cy = int(first.x * w), int(first.y * h)
                    if (first.y < first_compare.y):
                        # first up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
                    else:
                        # first down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
        
                    # check middle finger
                    middle = handLms.landmark[12]
                    middle_compare = handLms.landmark[9]
                    # middle circle
                    cx, cy = int(middle.x * w), int(middle.y * h)
                    if (middle.y < middle_compare.y):
                        # middle up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
                    else:
                        # middle down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
        
                    # check ring finger
                    ring = handLms.landmark[16]
                    ring_compare = handLms.landmark[13]
                    # ring circle
                    cx, cy = int(ring.x * w), int(ring.y * h)
                    if (ring.y < ring_compare.y):
                        # ring up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
                    else:
                        # ring down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
        
                    # check pinky finger
                    pinky = handLms.landmark[20]
                    pinky_compare = handLms.landmark[17]
                    # pinky circle
                    cx, cy = int(pinky.x * w), int(pinky.y * h)
                    if (pinky.y < pinky_compare.y):
                        # pinky up: mark green and return 1
                        cv2.circle(image, (cx, cy), 15, (0, 255, 0), cv2.FILLED)
                        output.append(1)
                    else:
                        # pinky down: mark red and return 0
                        cv2.circle(image, (cx, cy), 15, (0, 0, 255), cv2.FILLED)
                        output.append(0)
                    # print('SEND TO SPIKE:', output)
                    s.write(f'hand.update_hand([{output[0]},{output[1]},{output[2]},{output[3]},{output[4]}])\r\n'.encode())
        
                    time.sleep(0.1)
                    readSerial(s)
            cv2.imshow("Output", image)
            cv2.waitKey(1)
        
        #
        # readSerial(s)
        
        code = '''
        from untitled import goCrazy\r\n
        goCrazy()\r\n
        '''
        s.write(code.encode())
        
        time.sleep(1)
        readSerial(s)
        ```
        
    
    After that, run the file and it should load for at least five seconds. 
    
    ![Screenshot 2023-08-03 at 12.37.52 PM.png](/notion-images/the-hand/Screenshot_2023-08-03_at_12.37.52_PM.png)
    
    This prompt should pop up, and shortly after a camera tracking will open up. The right-hand works best with this program.
    

## Building the Hand/Instructions

![Hand without SPIKE Hub and motors](/notion-images/the-hand/Screenshot_2023-07-21_at_11.56.52_AM.png)

Hand without SPIKE Hub and motors

![Hand with SPIKE Hub and motors](/notion-images/the-hand/Screenshot_2023-07-21_at_12.12.25_PM.png)

Hand with SPIKE Hub and motors

- Instructions
    
    [Hand Instruction.pdf](/notion-images/the-hand/Hand_Instruction.pdf)
    

# Pictures of the Hand

![Left Side View](/notion-images/the-hand/left.jpg)

Left Side View

![Front View](/notion-images/the-hand/front.jpg)

Front View

![Right Side View](/notion-images/the-hand/right.jpg)

Right Side View

# Rock Paper Scissors (Program 0)

[Rock Paper Scissors.mp4](/notion-images/the-hand/Rock_Paper_Scissors.mp4)

- Rock Paper Scissors Code
    
    ```python
    # 0
    
    import motor, time, runloop, random
    from hub import port, light_matrix, button
    
    # START WITH FINGERS EXTENDED
    
    async def main():
    
        point = port.E
        middle = port.C
        ring = port.F
        pinky = port.D
        updown = port.A
        inout = port.B
    
        rock = 1
        paper = 2
        scissors = 3
    
        while(True):
            
            while not button.pressed(button.LEFT) and not button.pressed(button.RIGHT):
                time.sleep(0.05)
    
            b = button.pressed(button.RIGHT)
    
            while button.pressed(button.LEFT) or button.pressed(button.RIGHT):
                time.sleep(0.05)
    
            if b:
                time.sleep(0.5)
                await light_matrix.write("3")
                time.sleep(0.5)
                await light_matrix.write("2")
                time.sleep(0.5)
                await light_matrix.write("1")
                time.sleep(0.5)
    
                move = random.randint(1,3)
                print(move)
    
                if move == rock:
                    light_matrix.write("ROCK")
                    motor.run_for_degrees(middle, 1000, 700)
                    motor.run_for_degrees(point, 1000, 700)
                    motor.run_for_degrees(ring, 1000, 700)
                    await motor.run_for_degrees(pinky, 1000, 700)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
    
                    while not button.pressed(button.LEFT) and not button.pressed(button.RIGHT):
                        time.sleep(0.05)
    
                    c = button.pressed(button.LEFT)
    
                    while button.pressed(button.LEFT) or button.pressed(button.RIGHT):
                        time.sleep(0.05)
    
                    if c:
                        motor.run_for_degrees(middle, -1000, 700)
                        motor.run_for_degrees(point, -1000, 700)
                        motor.run_for_degrees(ring, -1000, 700)
                        await motor.run_for_degrees(pinky, -1000, 700)
                        motor.run_for_degrees(inout, 60, 200)
                        await motor.run_for_degrees(updown, 300, 900)
    
                elif move == paper:
                    light_matrix.write("PAPER")
                    
                    while not button.pressed(button.LEFT) and not button.pressed(button.RIGHT):
                        time.sleep(0.05)
    
                    d = button.pressed(button.LEFT)
    
                    while button.pressed(button.LEFT) or button.pressed(button.RIGHT):
                        time.sleep(0.05)
    
                    if d:
                        pass
    
                elif move == scissors:
                    light_matrix.write("SCISSORS")
                    motor.run_for_time(pinky, 1000, 1000)
                    await motor.run_for_time(ring, 1000, 1000)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                        
                    while not button.pressed(button.LEFT) and not button.pressed(button.RIGHT):
                        time.sleep(0.05)
    
                    e = button.pressed(button.LEFT)
    
                    while button.pressed(button.LEFT) or button.pressed(button.RIGHT):
                        time.sleep(0.05)
    
                    if e:
                        motor.run_for_time(pinky, 1000, -1000)
                        await motor.run_for_time(ring, 1000, -1000)
                        motor.run_for_degrees(inout, 60, 200)
                        await motor.run_for_degrees(updown, 300, 900)
    
    runloop.run(main())
    ```
    

# Binary Counting (Program 1)

[Binary Counting.mp4](/notion-images/the-hand/Binary_Counting.mp4)

- Binary Counting Code
    
    ```python
    # 1
    
    import motor, time, runloop
    from hub import port, light_matrix, button
    
    # START WITH FINGERS EXTENDED
    
    async def main():
    
        point = port.E
        middle = port.C
        ring = port.F
        pinky = port.D
        updown = port.A
        inout = port.B
    
        counter = 0
    
        motor.run_for_degrees(middle, 900, 500)
        motor.run_for_degrees(point, 900, 500)
        motor.run_for_degrees(ring, 900, 500)
        await motor.run_for_degrees(pinky, 900, 500)
    
        motor.run_for_degrees(updown, -300, 900)
        await motor.run_for_degrees(inout, -60, 200)
    
        while not button.pressed(button.RIGHT):
            pass
    
        while(True):
    
            while not button.pressed(button.LEFT) and not button.pressed(button.RIGHT):
                time.sleep(0.05)
    
            b = button.pressed(button.RIGHT)
    
            while button.pressed(button.LEFT) or button.pressed(button.RIGHT):
                time.sleep(0.05)
    
            if b:
                counter += 1
                if counter % 8 == 1:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(updown, 300, 900)
                    await motor.run_for_degrees(inout, 60, 500)
                elif counter % 8 == 2:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(point, -900, 500)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                elif counter % 8 == 3:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(updown, 300, 900)
                    await motor.run_for_degrees(inout, 60, 500)
                elif counter % 8 == 4:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(point, 900, 500)
                    motor.run_for_degrees(middle, -900, 500)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                elif counter % 8 == 5:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(updown, 300, 900)
                    await motor.run_for_degrees(inout, 60, 500)
                elif counter % 8 == 6:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(point, -900, 500)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                elif counter % 8 == 7:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(updown, 300, 900)
                    await motor.run_for_degrees(inout, 60, 500)
                elif counter % 8 == 0:
                    if counter == 8:
                        light_matrix.write(str(counter))
                        motor.run_for_degrees(ring, -900, 500)
                        motor.run_for_degrees(middle, 900, 500)
                        motor.run_for_degrees(point, 900, 500)
                        motor.run_for_degrees(updown, -300, 900)
                        await motor.run_for_degrees(inout, -60, 200)
                    elif counter == 16:
                        light_matrix.write(str(counter))
                        motor.run_for_degrees(middle, 900, 500)
                        motor.run_for_degrees(point, 900, 500)
                        motor.run_for_degrees(ring, 900, 500)
                        motor.run_for_degrees(pinky, -900, 500)
                        motor.run_for_degrees(updown, -300, 900)
                        await motor.run_for_degrees(inout, -60, 200)
                    elif counter == 24:
                        light_matrix.write(str(counter))
                        motor.run_for_degrees(ring, -900, 500)
                        motor.run_for_degrees(middle, 900, 500)
                        motor.run_for_degrees(point, 900, 500)
                        motor.run_for_degrees(updown, -300, 900)
                        await motor.run_for_degrees(inout, -60, 200)
    
    runloop.run(main())
    ```
    

# Counting Up and Down (Program 2)

[Up and Down Counting.mp4](/notion-images/the-hand/Up_and_Down_Counting.mp4)

- Counting Up and Down Code
    
    ```python
    # 2
    
    import motor, time, runloop
    from hub import port, light_matrix, button
    
    # START WITH FINGERS EXTENDED 
    
    async def main():
    
        point = port.E
        middle = port.C
        ring = port.F
        pinky = port.D
        updown = port.A
        inout = port.B
    
        counter = 0
    
        motor.run_for_degrees(middle, 900, 500)
        motor.run_for_degrees(point, 900, 500)
        motor.run_for_degrees(ring, 900, 500)
        await motor.run_for_degrees(pinky, 900, 500)
    
        motor.run_for_degrees(updown, -300, 900)
        await motor.run_for_degrees(inout, -60, 200)
    
        while not button.pressed(button.RIGHT):
            pass
    
        while(True):
    
            while not button.pressed(button.LEFT) and not button.pressed(button.RIGHT):
                time.sleep(0.05)
    
            b = button.pressed(button.RIGHT)
    
            while button.pressed(button.LEFT) or button.pressed(button.RIGHT):
                time.sleep(0.05)
            
            if b:
                counter += 1
                if counter == 1:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(updown, 300, 900)
                    await motor.run_for_degrees(inout, 60, 200)
                    continue
                else:
                    if counter % 5 == 1:
                        light_matrix.write(str(counter))
                        motor.run_for_degrees(middle, 900, 500)
                        motor.run_for_degrees(point, 900, 500)
                        motor.run_for_degrees(ring, 900, 500)
                        await motor.run_for_degrees(pinky, 900, 500)
                        continue
                    elif counter % 5 == 2:
                        light_matrix.write(str(counter))
                        await motor.run_for_degrees(point, -900, 500)
                        continue
                    elif counter % 5 == 3:
                        light_matrix.write(str(counter))
                        await motor.run_for_degrees(middle, -900, 500)
                        continue
                    elif counter % 5 == 4:
                        light_matrix.write(str(counter))
                        await motor.run_for_degrees(ring, -900, 500)
                        continue
                    elif counter % 5 == 0:
                        light_matrix.write(str(counter))
                        await motor.run_for_degrees(pinky, -900, 500)
                        continue
            else:
                counter -= 1
                if counter == 0:
                    light_matrix.write(str(counter))
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                    continue
                else:
                    if counter % 5 == 1:
                        light_matrix.write(str(counter))
                        await motor.run_for_degrees(point, 900, 500)
                        continue
                    elif counter % 5 == 2:
                        light_matrix.write(str(counter))
                        await motor.run_for_degrees(middle, 900, 500)
                        continue
                    elif counter % 5 == 3:
                        light_matrix.write(str(counter))
                        await motor.run_for_degrees(ring, 900, 500)
                        continue
                    elif counter % 5 == 4:
                        light_matrix.write(str(counter))
                        await motor.run_for_degrees(pinky, 900, 500)
                        continue
                    elif counter % 5 == 0:
                        light_matrix.write(str(counter))
                        motor.run_for_degrees(point, -900, 500)
                        motor.run_for_degrees(ring, -900, 500)
                        motor.run_for_degrees(middle, -900, 500)
                        await motor.run_for_degrees(pinky, -900, 500)
                        continue
    
    runloop.run(main())
    ```
    

# ASL Alphabet (Program 3)

[ASL Alphabet.mp4](/notion-images/the-hand/ASL_Alphabet.mp4)

- ASL Alphabet Code
    
    ```python
    #3
    
    import motor, time, runloop
    from hub import port, light_matrix, button
    
    async def main():
    
        point = port.E
        middle = port.C
        ring = port.F
        pinky = port.D
        updown = port.A
        inout = port.B
    
        counter = 0
    
        while not button.pressed(button.RIGHT):
            pass
    
        while(True):
    
            while not button.pressed(button.RIGHT):
                time.sleep(0.05)
    
            b = button.pressed(button.RIGHT)
    
            while button.pressed(button.RIGHT):
                time.sleep(0.05)
    
            if b:
                counter += 1
                if counter % 26 == 1:
                    if counter == 1:
                        light_matrix.write("A")
                        motor.run_for_degrees(middle, 900, 500)
                        motor.run_for_degrees(point, 900, 500)
                        motor.run_for_degrees(ring, 900, 500)
                        await motor.run_for_degrees(pinky, 900, 500)
                        motor.run_for_degrees(updown, -300, 900)
                        await motor.run_for_degrees(inout, -60, 200)
                        continue
                    else: 
                        motor.run_for_degrees(point, 900, 500)
                elif counter % 26 == 2:      
                    light_matrix.write("B")     
                    motor.run_for_degrees(middle, -900, 500)
                    motor.run_for_degrees(point, -900, 500)
                    motor.run_for_degrees(ring, -900, 500)
                    await motor.run_for_degrees(pinky, -900, 500)
                    motor.run_for_degrees(updown, -150, 900)
                    await motor.run_for_degrees(inout, -40, 200)
                    continue
                elif counter % 26 == 3:
                    light_matrix.write("C")
                    motor.run_for_degrees(middle, 450, 500)
                    motor.run_for_degrees(point, 450, 500)
                    motor.run_for_degrees(ring, 450, 500)
                    await motor.run_for_degrees(pinky, 450, 500)
                    motor.run_for_degrees(updown, 450, 900)
                    await motor.run_for_degrees(inout, 100, 200)
                    continue
                elif counter % 26 == 4:
                    light_matrix.write("D")
                    motor.run_for_degrees(middle, 450, 500)
                    motor.run_for_degrees(ring, 450, 500)
                    motor.run_for_degrees(point, -450, 500)
                    await motor.run_for_degrees(pinky, 450, 500)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                    continue
                elif counter % 26 == 5:
                    light_matrix.write("E")
                    motor.run_for_degrees(point, 900, 500)
                    continue
                elif counter % 26 == 6:
                    light_matrix.write("F")
                    motor.run_for_degrees(middle, -900, 500)
                    motor.run_for_degrees(ring, -900, 500)
                    await motor.run_for_degrees(pinky, -900, 500)
                    continue
                elif counter % 26 == 7:
                    light_matrix.write("G")
                    motor.run_for_degrees(middle, 900, 500)
                    motor.run_for_degrees(ring, 900, 500)
                    motor.run_for_degrees(pinky, 900, 500)
                    await motor.run_for_degrees(point, -900, 500)
                    continue
                elif counter % 26 == 8:
                    light_matrix.write("H")
                    await motor.run_for_degrees(middle, -900, 500)
                    motor.run_for_degrees(updown, -150, 900)
                    await motor.run_for_degrees(inout, -40, 200)
                    continue
                elif counter % 26 == 9:
                    light_matrix.write("I")
                    motor.run_for_degrees(pinky, -900, 500)
                    motor.run_for_degrees(middle, 900, 500)
                    await motor.run_for_degrees(point, 900, 500)
                    continue
                elif counter % 26 == 10:
                    light_matrix.write("J")
                    await motor.run_for_degrees(pinky, 900, 500)
                    time.sleep(0.05)
                    motor.run_for_degrees(pinky, -900, 500)
                    continue
                elif counter % 26 == 11:
                    light_matrix.write("K")
                    motor.run_for_degrees(middle, -900, 500)
                    motor.run_for_degrees(point, -900, 500)               
                    await motor.run_for_degrees(pinky, 900, 500)
                    continue
                elif counter % 26 == 12:
                    light_matrix.write("L")
                    motor.run_for_degrees(middle, 900, 500)
                    motor.run_for_degrees(updown, 450, 900)
                    await motor.run_for_degrees(inout, 100, 200)
                    continue
                elif counter % 26 == 13:
                    light_matrix.write("M")
                    motor.run_for_degrees(middle, -900, 500)
                    await motor.run_for_degrees(ring, -900, 500)
                    motor.run_for_degrees(updown, -450, 900)
                    await motor.run_for_degrees(inout, -100, 200)
                    motor.run_for_degrees(middle, 900, 500)
                    motor.run_for_degrees(point, 900, 500)
                    await motor.run_for_degrees(ring, 900, 500)
                    continue
                elif counter % 26 == 14:
                    light_matrix.write("N")
                    motor.run_for_degrees(middle, -900, 500)
                    await motor.run_for_degrees(point, -900, 500)
                    time.sleep(0.05)
                    motor.run_for_degrees(middle, 900, 500)
                    motor.run_for_degrees(point, 900, 500)
                    continue
                elif counter % 26 == 15:
                    light_matrix.write("O")
                    motor.run_for_degrees(middle, -450, 500)
                    motor.run_for_degrees(pinky, -450, 500)
                    motor.run_for_degrees(ring, -450, 500)
                    await motor.run_for_degrees(point, -450, 500)
                    motor.run_for_degrees(updown, 150, 900)
                    await motor.run_for_degrees(inout, 40, 200)
                    continue
                elif counter % 26 == 16:
                    light_matrix.write("P")
                    await motor.run_for_degrees(point, -450, 500)
                    motor.run_for_degrees(updown, -150, 900)
                    await motor.run_for_degrees(inout, -40, 200)
                    continue
                elif counter % 26 == 17:
                    light_matrix.write("Q")
                    motor.run_for_degrees(updown, 150, 900)
                    await motor.run_for_degrees(inout, 40, 200)
                    continue
                elif counter % 26 == 18:
                    light_matrix.write("R")
                    motor.run_for_degrees(ring, 450, 500)
                    motor.run_for_degrees(pinky, 450, 500)
                    await motor.run_for_degrees(middle, -450, 500)
                    motor.run_for_degrees(updown, -150, 900)
                    await motor.run_for_degrees(inout, -40, 200)
                    continue
                elif counter % 26 == 19:
                    light_matrix.write("S")
                    motor.run_for_degrees(updown, 450, 900)
                    await motor.run_for_degrees(inout, 100, 200)
                    motor.run_for_degrees(point, 900, 500)
                    await motor.run_for_degrees(middle, 900, 500)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                    continue
                elif counter % 26 == 20:
                    light_matrix.write("T")
                    motor.run_for_degrees(updown, 300, 900)
                    await motor.run_for_degrees(inout, 60, 200)
                    await motor.run_for_degrees(point, -900, 500)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                    await motor.run_for_degrees(point, 900, 500)
                    continue
                elif counter % 26 == 21:
                    light_matrix.write("U")
                    motor.run_for_degrees(middle, -900, 500)
                    await motor.run_for_degrees(point, -900, 500)
                    continue
                elif counter % 26 == 22:
                    light_matrix.write("V")
                    continue
                elif counter % 26 == 23:
                    light_matrix.write("W")
                    await motor.run_for_degrees(ring, -900, 500)
                    continue
                elif counter % 26 == 24:
                    light_matrix.write("X")
                    motor.run_for_degrees(point, 450, 500)
                    motor.run_for_degrees(ring, 900, 500)
                    await motor.run_for_degrees(middle, 900, 500)
                    continue
                elif counter % 26 == 25:
                    light_matrix.write("Y")
                    motor.run_for_degrees(point, 450, 500)
                    motor.run_for_degrees(pinky, -900, 500) 
                    motor.run_for_degrees(updown, 300, 900)
                    await motor.run_for_degrees(inout, 60, 200)         
                    continue
                elif counter % 26 == 0:
                    light_matrix.write("Z")
                    motor.run_for_degrees(pinky, 900, 500)
                    motor.run_for_degrees(point, -900, 500)
                    motor.run_for_degrees(updown, -300, 900)
                    await motor.run_for_degrees(inout, -60, 200)
                    continue
    
    runloop.run(main())
    ```