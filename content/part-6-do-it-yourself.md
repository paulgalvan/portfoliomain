# Part 6 - Do It Yourself

Should you decide to build Elles, feel free to use “Our Progress” as an instruction manual or guide to help you through the process. Change, modify, and experiment with doing things in a different way. Most importantly, be creative, and have fun!

As you build, the following programs can be used to both test out as well as start moving various parts of the robot. 

To run the code:

1. Plug a hub into your computer
2. Click on [this link](https://elles-page.web.app/) and press the heart icon
3. Select the hub in the menu  that pops up
4. Copy the hub’s sample code and paste it into the editor on the site

You can also download the SPIKE file if you wish to run the code on the SPIKE app.

## Tower:

- Tower Sample Code
    
    ```python
    from hub import port
    import runloop, motor, time
    
    spine = port.B
    rightleg = port.C
    leftleg = port.D
    
    async def main():
        
        motor.run(spine, -200)
        motor.run(rightleg, 200)
        motor.run(leftleg, -200)
    
        time.sleep(5)
    
        motor.run(spine, 200)
    
        time.sleep(5)
        
        motor.stop(spine)
        motor.stop(leftleg)
        motor.stop(rightleg)
    
    runloop.run(main())
    ```
    
- Tower SPIKE File
    
    [Tower Sample Code.llsp3](Part%206%20-%20Do%20It%20Yourself/Tower_Sample_Code.llsp3)
    

## Waist:

- Waist Sample Code
    
    ```python
    from hub import port
    import runloop, motor, time
    
    upperhip = port.A
    lowerhip = port.B
    rightarm = port.C
    leftarm = port.D
    
    async def main():
        
        motor.run(upperhip, -100)
        motor.run(lowerhip, 50)
        motor.run(rightarm, -100)
        motor.run(leftarm, 100)
    
        time.sleep(5)
    
        motor.run(upperhip, 100)
        motor.run(lowerhip, -50)
        motor.run(rightarm, 100)
        motor.run(leftarm, -100)
    
        time.sleep(5)
    
        motor.stop(upperhip)
        motor.stop(lowerhip)
        motor.stop(rightarm)
        motor.stop(leftarm)
    
    runloop.run(main())
    ```
    
- Waist SPIKE File
    
    [Waist Sample Code.llsp3](Part%206%20-%20Do%20It%20Yourself/Waist_Sample_Code.llsp3)
    

## Back:

- Back Sample Code
    
    ```python
    from hub import port
    import runloop, motor, time
    
    rightshoulder = port.A
    leftshoulder = port.B
    rightelbow = port.C
    leftelbow = port.D
    rightwrist = port.E
    leftwrist = port.F
    
    async def main():
        
        motor.run(rightshoulder, -100)
        motor.run(leftshoulder, 100)
        
        time.sleep(2)
    
        motor.stop(rightshoulder)
        motor.stop(leftshoulder)
    
        motor.run_to_absolute_position(rightelbow, -30, -100)
        motor.run_to_absolute_position(leftelbow, 30, 100)
        motor.run_to_absolute_position(rightwrist, 130, 100)
        motor.run_to_absolute_position(leftwrist, -130, -100)
    
        time.sleep(1)
    
        motor.run_to_absolute_position(rightelbow, 50, 100)
        motor.run_to_absolute_position(leftelbow, -50, -100)
    
        time.sleep(1)
    
        motor.run_to_absolute_position(rightelbow, -30, -100)
        motor.run_to_absolute_position(leftelbow, 30, 100)
    
        time.sleep(1)
    
        motor.run(rightshoulder, 100)
        motor.run(leftshoulder, -100)
    
        motor.run_to_absolute_position(rightelbow, 0, 100)
        motor.run_to_absolute_position(leftelbow, 0, -100)
        motor.run_to_absolute_position(rightwrist, 0, 100)
        motor.run_to_absolute_position(leftwrist, 0, 100)
    
        time.sleep(2)
    
        motor.stop(rightshoulder)
        motor.stop(leftshoulder)
    
    runloop.run(main())
    ```
    
- Back SPIKE File
    
    [Back Sample Code.llsp3](Part%206%20-%20Do%20It%20Yourself/Back_Sample_Code.llsp3)
    

## Chest:

- Chest Sample Code
    
    ```python
    from hub import port
    import runloop, time, color_matrix, color, motor
    
    light1 = port.A
    light2 = port.B
    light3 = port.C
    light4 = port.D
    ears = port.E
    head = port.F
    
    pupil = color.WHITE
    eyelid = color.ORANGE
    iris = 10
    back = 4
    
    pixels = [(pupil, iris)] * 9
    
    def blink():
    
        x = 2
        y = 2
    
        for h in range(3):
            for i in range(3):
                color_matrix.set_pixel(light1, x, y, (eyelid, iris))
                color_matrix.set_pixel(light2, x, y, (eyelid, iris))
                y -= 1
            time.sleep(0.1)
            x -= 1
            y = 2
    
        time.sleep(0.1)
    
        x = 2
        y = 2
        for j in range(3):
            for k in range(3):
                color_matrix.set_pixel(light3, x, y, (eyelid, iris))
                color_matrix.set_pixel(light4, x, y, (eyelid, iris))
                y -= 1
            time.sleep(0.1)
            x -= 1
            y = 2
    
        time.sleep(0.1)
    
    async def main():
    
        motor.run(ears, 100)
    
        color_matrix.show(light1, pixels)
        color_matrix.show(light2, pixels)
        color_matrix.show(light3, pixels)
        color_matrix.show(light4, pixels)
    
        color_matrix.set_pixel(light1, 0, 1, (pupil, iris))
        color_matrix.set_pixel(light1, 0, 2, (pupil, iris))
        color_matrix.set_pixel(light1, 1, 2, (pupil, iris))
        color_matrix.set_pixel(light2, 0, 0, (pupil, iris))
        color_matrix.set_pixel(light2, 1, 0, (pupil, iris))
        color_matrix.set_pixel(light2, 0, 1, (pupil, iris))
        color_matrix.set_pixel(light3, 2, 2, (pupil, iris))
        color_matrix.set_pixel(light3, 2, 1, (pupil, iris))
        color_matrix.set_pixel(light3, 1, 2, (pupil, iris))
        color_matrix.set_pixel(light4, 2, 0, (pupil, iris))
        color_matrix.set_pixel(light4, 2, 1, (pupil, iris))
        color_matrix.set_pixel(light4, 1, 0, (pupil, iris))
    
        time.sleep(0.1)
    
        blink()
    
        color_matrix.set_pixel(light3, 0, 0, (pupil, back))
        color_matrix.set_pixel(light3, 0, 1, (pupil, back))
        color_matrix.set_pixel(light3, 0, 2, (pupil, back))
        color_matrix.set_pixel(light4, 0, 0, (pupil, back))
        color_matrix.set_pixel(light4, 0, 1, (pupil, back))
        color_matrix.set_pixel(light4, 0, 2, (pupil, back))
    
        time.sleep(0.1)
    
        color_matrix.set_pixel(light3, 1, 0, (pupil, back))
        color_matrix.set_pixel(light3, 1, 1, (pupil, back))
        color_matrix.set_pixel(light3, 1, 2, (pupil, iris))
        color_matrix.set_pixel(light4, 1, 0, (pupil, iris))
        color_matrix.set_pixel(light4, 1, 1, (pupil, back))
        color_matrix.set_pixel(light4, 1, 2, (pupil, back))
    
        time.sleep(0.1)
    
        color_matrix.set_pixel(light3, 2, 0, (pupil, back))
        color_matrix.set_pixel(light3, 2, 1, (pupil, iris))
        color_matrix.set_pixel(light3, 2, 2, (pupil, iris))
        color_matrix.set_pixel(light4, 2, 0, (pupil, iris))
        color_matrix.set_pixel(light4, 2, 1, (pupil, iris))
        color_matrix.set_pixel(light4, 2, 2, (pupil, back))
    
        time.sleep(0.1)
    
        color_matrix.set_pixel(light1, 0, 0, (pupil, back))
        color_matrix.set_pixel(light1, 0, 1, (pupil, iris))
        color_matrix.set_pixel(light1, 0, 2, (pupil, iris))
        color_matrix.set_pixel(light2, 0, 0, (pupil, iris))
        color_matrix.set_pixel(light2, 0, 1, (pupil, iris))
        color_matrix.set_pixel(light2, 0, 2, (pupil, back))
    
        time.sleep(0.1)
    
        color_matrix.set_pixel(light1, 1, 0, (pupil, back))
        color_matrix.set_pixel(light1, 1, 1, (pupil, back))
        color_matrix.set_pixel(light1, 1, 2, (pupil, iris))
        color_matrix.set_pixel(light2, 1, 0, (pupil, iris))
        color_matrix.set_pixel(light2, 1, 1, (pupil, back))
        color_matrix.set_pixel(light2, 1, 2, (pupil, back))
    
        time.sleep(0.1)
    
        color_matrix.set_pixel(light1, 2, 0, (pupil, back))
        color_matrix.set_pixel(light1, 2, 1, (pupil, back))
        color_matrix.set_pixel(light1, 2, 2, (pupil, back))
        color_matrix.set_pixel(light2, 2, 0, (pupil, back))
        color_matrix.set_pixel(light2, 2, 1, (pupil, back))
        color_matrix.set_pixel(light2, 2, 2, (pupil, back))
    
        time.sleep(0.1)
    
        motor.run(head, 100)
        time.sleep(1)
        motor.run(head, -200)
        time.sleep(1)
        motor.run(head, 100)
        time.sleep(1)
        motor.stop(ears)
    
    runloop.run(main())
    ```
    
- Chest SPIKE File
    
    [Chest Sample Code.llsp3](Part%206%20-%20Do%20It%20Yourself/Chest_Sample_Code.llsp3)
    

- How to control Elles
    1. Download the [LabVIEW](https://www.ni.com/en/support/downloads/software-products/download.labview.html#460283) software. (The 2022 Q3 COMMUNITY version).
    2. [After downloading LabVIEW go to this link to download Chris’s LabVIEW IDE](https://github.com/chrisbuerginrogers/ME35_21) 
    3. Hit the green Code button in the top right corner and then download as a ZIP file
    4. In your files, click on the ZIP 
        1.  ➡Open up the ME35_21-main folder.
            1. ➡PythonIDE
                1. ➡ME35.vi
    5. Through this IDE, you can now program Elles.
        
        ![Screenshot 2023-08-03 at 12.58.04 PM.png](/notion-images/part-6--do-it-yourself/Screenshot_2023-08-03_at_12.58.04_PM.png)
        
    6. Run the program and click on ‘Settings’.
        
        ![Screenshot 2023-08-04 at 11.01.08 AM.png](/notion-images/part-6--do-it-yourself/Screenshot_2023-08-04_at_11.01.08_AM.png)
        
    7. From there, in the second row next to “Python Codes”, allow the software to access a newly created folder. Click Update.
    8. Download these four files onto every SPIKE Prime hub and Essential
        - BLE Files
            
            [ble_advertising.py](Part%206%20-%20Do%20It%20Yourself/ble_advertising.py)
            
            [ble_CBR_short.py](Part%206%20-%20Do%20It%20Yourself/ble_CBR_short.py)
            
            [peripheral_functions_short.py](Part%206%20-%20Do%20It%20Yourself/peripheral_functions_short.py)
            
            [quick_scan.py](Part%206%20-%20Do%20It%20Yourself/quick_scan.py)
            
    9. Download these files into the same folder.
        - Folder
            - Essential (Folder)
                
                [essential_functions.py](Part%206%20-%20Do%20It%20Yourself/essential_functions.py)
                
                [ress output_read_light.py](Part%206%20-%20Do%20It%20Yourself/ress_output_read_light.py)
                
            - Tower (Folder)
                
                [tower output_read_light.py](Part%206%20-%20Do%20It%20Yourself/tower_output_read_light.py)
                
                [tower_functions.py](Part%206%20-%20Do%20It%20Yourself/tower_functions.py)
                
            - Waist (Folder)
                
                [waist output_read_light.py](Part%206%20-%20Do%20It%20Yourself/waist_output_read_light.py)
                
                [waist_functions.py](Part%206%20-%20Do%20It%20Yourself/waist_functions.py)
                
            - Chest (Folder)
                
                [chest_functions.py](Part%206%20-%20Do%20It%20Yourself/chest_functions.py)
                
                [chest output_read_light.py](Part%206%20-%20Do%20It%20Yourself/chest_output_read_light.py)
                
            - Back
                
                [back output_read_light.py](Part%206%20-%20Do%20It%20Yourself/back_output_read_light.py)
                
                [back_functions.py](Part%206%20-%20Do%20It%20Yourself/back_functions.py)
                
            
            [input_advertise_esp.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/hub_input_advertise_esp.py)
            
    10. Now download each output function onto its respective hub. 
    11. Click the refresh ports. Once the hub is detected, hit connect. 
        
        ![Screenshot 2023-08-03 at 12.59.09 PM.png](/notion-images/part-6--do-it-yourself/Screenshot_2023-08-03_at_12.59.09_PM.png)
        
    12. Once the 5 functions are downloaded, run the ‘input_advertise_esp.py’ on the controller. The joystick should jolt upright. Once you start seeing “back, 5” or any hub name in the console, it's working. Disconnect the hub from the computer. 
    13. Run the code for each respective hub again. 
    14. Elles should start working!