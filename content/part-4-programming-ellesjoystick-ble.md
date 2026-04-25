# Part 4 - Programming Elles/Joystick (BLE)

The first step we took towards getting Elles to move was setting up BLE on the SPIKE Prime hubs and SPIKE Essentials. We downloaded the following files (written by Sophie Hankin and Caroline Henley) onto every hub/Essential on the joystick and Elles:

- BLE (Bluetooth Low Energy)
    - peripheral_functions_short.py
        - Code
            
            ```python
            import ubluetooth
            import ble_CBR_short
            import time
            
            class peripheral:
                
                flag = False
                
                def __init__(self, name = 'Spike'):    
                    ble = ubluetooth.BLE()
                    
                    self.hub = ble_CBR_short.BLESimplePeripheral(ble, 'UART', name)
                    print(name)
                
                def advertise(self):
                    self.hub._advertise()
            ```
            
        - File
            
            [peripheral_functions_short.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/peripheral_functions_short.py)
            
    - ble_advertising.py
        - Code
            
            ```python
            # Helpers for generating BLE advertising payloads.
            
            from micropython import const
            import struct
            import ubluetooth
            
            # Advertising payloads are repeated packets of the following form:
            #   1 byte data length (N + 1)
            #   1 byte type (see constants below)
            #   N bytes type-specific data
            
            _ADV_TYPE_FLAGS = const(0x01)
            _ADV_TYPE_NAME = const(0x09)
            _ADV_TYPE_UUID16_COMPLETE = const(0x3)
            _ADV_TYPE_UUID32_COMPLETE = const(0x5)
            _ADV_TYPE_UUID128_COMPLETE = const(0x7)
            _ADV_TYPE_UUID16_MORE = const(0x2)
            _ADV_TYPE_UUID32_MORE = const(0x4)
            _ADV_TYPE_UUID128_MORE = const(0x6)
            _ADV_TYPE_APPEARANCE = const(0x19)
            
            # Generate a payload to be passed to gap_advertise(adv_data=...).
            def advertising_payload(limited_disc=False, br_edr=False, name=None, services=None, appearance=0):
                payload = bytearray()
            
                def _append(adv_type, value):
                    nonlocal payload
                    payload += struct.pack("BB", len(value) + 1, adv_type) + value
            
                _append(_ADV_TYPE_FLAGS,struct.pack("B", (0x01 if limited_disc else 0x02) + (0x18 if br_edr else 0x04)),)
            
                if name:
                    _append(_ADV_TYPE_NAME, name)
            
                if services:
                    for uuid in services:
                        b = bytes(uuid)
                        if len(b) == 2:
                            _append(_ADV_TYPE_UUID16_COMPLETE, b)
                        elif len(b) == 4:
                            _append(_ADV_TYPE_UUID32_COMPLETE, b)
                        elif len(b) == 16:
                            _append(_ADV_TYPE_UUID128_COMPLETE, b)
            
                # See org.bluetooth.characteristic.gap.appearance.xml
                if appearance:
                    _append(_ADV_TYPE_APPEARANCE, struct.pack("<h", appearance))
            
                return payload
            
            def decode_field(payload, adv_type):
                i = 0
                result = []
                while i + 1 < len(payload):
                    if payload[i + 1] == adv_type:
                        result.append(payload[i + 2 : i + payload[i] + 1])
                    i += 1 + payload[i]
                return result
            
            def decode_name(payload):
                n = decode_field(payload, _ADV_TYPE_NAME)
                return str(n[0], "utf-8") if n else ""
            
            def decode_services(payload):
                services = []
                for u in decode_field(payload, _ADV_TYPE_UUID16_COMPLETE):
                    services.append(ubluetooth.UUID(struct.unpack("<h", u)[0]))
                for u in decode_field(payload, _ADV_TYPE_UUID32_COMPLETE):
                    services.append(ubluetooth.UUID(struct.unpack("<d", u)[0]))
                for u in decode_field(payload, _ADV_TYPE_UUID128_COMPLETE):
                    services.append(ubluetooth.UUID(u))
                return services
            
            def demo():
                payload = advertising_payload(name="mp2",services=[ubluetooth.UUID(0x181A), ubluetooth.UUID("6E400001-B5A3-F393-E0A9-E50E24DCCA9E")],)
                print(payload)
                print(decode_name(payload))
                print(decode_services(payload))
            
            if __name__ == "__main__":
                demo()
            ```
            
        - File
            
            [ble_advertising.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/ble_advertising.py)
            
    - ble_CBR_short.py
        - Code
            
            ```python
            # Base code for UART service from mpy examples
            
            import ubluetooth
            import random
            import struct
            import time
            
            from ble_advertising import decode_services, decode_name
            from ble_advertising import advertising_payload
            
            _IRQ_CENTRAL_CONNECT = 1
            _IRQ_CENTRAL_DISCONNECT = 2
            _IRQ_GATTS_WRITE = 3
            _IRQ_GATTS_READ_REQUEST = 4
            _IRQ_SCAN_RESULT = 5
            _IRQ_SCAN_DONE = 6
            _IRQ_PERIPHERAL_CONNECT = 7
            _IRQ_PERIPHERAL_DISCONNECT = 8
            _IRQ_GATTC_SERVICE_RESULT = 9
            _IRQ_GATTC_SERVICE_DONE = 10
            _IRQ_GATTC_CHARACTERISTIC_RESULT = 11
            _IRQ_GATTC_CHARACTERISTIC_DONE = 12
            _IRQ_GATTC_DESCRIPTOR_RESULT = 13
            _IRQ_GATTC_DESCRIPTOR_DONE = 14
            _IRQ_GATTC_READ_RESULT = 15
            _IRQ_GATTC_READ_DONE = 16
            _IRQ_GATTC_WRITE_DONE = 17
            _IRQ_GATTC_NOTIFY = 18
            _IRQ_GATTC_INDICATE = 19
            
            _ADV_IND = 0x00
            _ADV_DIRECT_IND = 0x01
            _ADV_SCAN_IND = 0x02
            _ADV_NONCONN_IND = 0x03
            
            _UART_SERVICE_UUID = ubluetooth.UUID("6E400001-B5A3-F393-E0A9-E50E24DCCA9E")
            _UART_RX_CHAR_UUID = ubluetooth.UUID("6E400002-B5A3-F393-E0A9-E50E24DCCA9E")
            _UART_TX_CHAR_UUID = ubluetooth.UUID("6E400003-B5A3-F393-E0A9-E50E24DCCA9E")
            
            _FLAG_READ = 0x0002
            _FLAG_WRITE_NO_RESPONSE = 0x0004
            _FLAG_WRITE = 0x0008
            _FLAG_NOTIFY = 0x0010
            
            _UART_UUID = _UART_SERVICE_UUID
            _UART_TX = (_UART_TX_CHAR_UUID, _FLAG_READ | _FLAG_NOTIFY,)
            _UART_RX = (_UART_RX_CHAR_UUID, _FLAG_WRITE | _FLAG_WRITE_NO_RESPONSE,)
            _UART_SERVICE = (_UART_UUID,(_UART_TX, _UART_RX),)
            
            #------------------------------------Peripheral-------------------------------
            
            class BLESimplePeripheral:
                def __init__(self, ble, type = 'UART', name="SPIKE"):
                    self.type = type
                    services = [_UART_UUID] if type == 'UART' else [_MIDI_UUID]
                    self._ble = ble
                    self._ble.active(True)
                    self._ble.irq(self._irq)
                    if self.type == 'UART':
                        ((self._handle_tx, self._handle_rx),) = self._ble.gatts_register_services((_UART_SERVICE,))
                        services = [_UART_UUID]
                        print('setup as uart', name)
                    else:
                        ((self._handle_tx, ),) = self._ble.gatts_register_services((_MIDI_SERVICE,))
                        self._handle_rx = self._handle_tx   # same handle for both directions
                        services = [_MIDI_UUID]
                        print('setup as midi')
                    self._connections = set()
                    self._write_callback = None
                    self._payload = advertising_payload(name=name, services=services)
                    #self._advertise()
            
                def _irq(self, event, data):
                    # Track connections so we can send notifications.
                    if event == _IRQ_CENTRAL_CONNECT:
                        conn_handle, _, _ = data
                        print("New connection", conn_handle)
                        self._connections.add(conn_handle)
                    elif event == _IRQ_CENTRAL_DISCONNECT:
                        conn_handle, _, _ = data
                        print("Disconnected", conn_handle)
                        self._connections.remove(conn_handle)
                        self._write_callback = None
                        # Start advertising again to allow a new connection.
                        #self._advertise()
                    elif event == _IRQ_GATTS_WRITE:
                        conn_handle, value_handle = data
                        value = self._ble.gatts_read(value_handle)
                        if value_handle == self._handle_rx and self._write_callback:
                            self._write_callback(value)
            
                def _advertise(self, interval_us=500000):
                    print("Starting advertising")
                    self._ble.gap_advertise(interval_us, adv_data=self._payload)
            ```
            
        - File
            
            [ble_CBR_short.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/ble_CBR_short.py)
            
    - quick_scan.py
        - Code
            
            ```python
            import ubluetooth
            import time
            
            from ble_advertising import decode_services, decode_name
            
            _IRQ_SCAN_RESULT = 5
            _IRQ_SCAN_DONE = 6
            
            class QuickScan:   
                def __init__(self, target): 
                    self._ble = ubluetooth.BLE()
                    self._ble.active(True)
                    self._ble.irq(self._irq)
                    self.scanning = False
                    self.target = target
                    self.peripheral = None
            
                def _irq(self, event, data):
                    if event == _IRQ_SCAN_RESULT:
                        self.read_scan(data)
            
                    elif event == _IRQ_SCAN_DONE:
                        if self.scanning:
                            self.scanning = False
                            self._ble.gap_scan(None)
            
                def read_scan(self, data):
                    addr_type, addr, adv_type, rssi, adv_data = data
                    name = decode_name(adv_data)
                    addr = bytes(addr)
                    if name:
                        if self.target in name:
                            self.peripheral = name
                            print("name: %s"%(name))
                            self.stop_scan()
                        
                def scan(self, duration = 2000):
                    self.scanning = True
                    return self._ble.gap_scan(duration, 30000, 30000)
            
                def wait_for_scan(self):
                    while self.scanning:
                        #print('.',end='')
                        time.sleep(0.1)
                    
                def stop_scan(self):
                    self.scanning = False
                    self._ble.gap_scan(None)
            ```
            
        - File
            
            [quick_scan.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/quick_scan.py)
            

BLE advertising consists of an output (hubs/Essentials on Elles) that is constantly scanning for specific signals advertised by an input (hub on the joystick). These are the original input and output files (Hankin and Henley) that we modified in order to work with Elles:

- Input
    - Code
        
        ```python
        #Code for hub acting as peripheral with an actuator responding to a sensor on the central hub
        import bluetooth
        import time
        import ble_CBR_short
        from peripheral_functions_short import peripheral
        from machine import ADC, Pin
        
        count = 0
        button = ADC(Pin(2))
        
        while True:
            try: 
                raw = button.read_u16()
                if raw > 60000:
                    value = True
                else:
                    value = False
                if value:
                    count += 1
                    advertisement = 'color' + ',' + str(count)
                    print(advertisement)
                    signal = peripheral(advertisement)
                    signal.advertise()
                    if count == 2:
                        count = 0
                    time.sleep(1)
                time.sleep(0.2)
            except Exception as e:
                print(e)
                break
        ```
        
    - File
        
        [input_advertise_esp.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/input_advertise_esp.py)
        
- Output
    - Code
        
        ```python
        import bluetooth
        import time
        from name_search import ScanCentral
        from ble_advertising import decode_services, decode_name
        from machine import ADC, Pin
        
        light = Pin(2,Pin.OUT)
        light.value(0)
        count_1 = 0
            
        while True: 
            try:  
                ble = bluetooth.BLE()
                central = ScanCentral(ble) 
                def search_scan(data):
                    addr_type, addr, adv_type, rssi, adv_data = data
                    name = decode_name(adv_data)
                    central.peripheral = name
                    addr = bytes(addr)
                    if 'color' in name:
                        print("name: %s"%(name))
                        if addr not in central.addresses:
                            central.addresses.add(addr)
                            return True
                    return False  # keep going
                
                central.scan(search_scan, None, 0)
                central.wait_for_scan()
            
                if central.peripheral != '':
                    commands = central.peripheral.split(',')
                    count = commands[1]
                    if count != count_1:
                        light.value(1)
                        time.sleep(2)
                        light.value(0)
                        count_1 = count       
                time.sleep(0.5)
            except Exception as e:
                print(e)
                break
        ```
        
    - File
        
        [output_read_esp.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/output_read_esp.py)
        

We wrote the code for Elles on the SPIKE Prime app and then split it into the input and designated output file, with the logic/conditions going to the former and the functions going to the latter. The functions were further split between a “functions” file and the output file that called said functions. The functions and output were downloaded onto their respective hub/Essential on Elles, while the input file was downloaded onto the joystick’s hub. 

![Hub/Essential Names (Front)](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/1.svg)

Hub/Essential Names (Front)

![Motor Names (Front)](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/Motor_Names_(Front).svg)

Motor Names (Front)

![Hub/Essential Names (Back)](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/2.svg)

Hub/Essential Names (Back)

![Motor Names (Back)](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/Motor_Names_(Back).svg)

Motor Names (Back)

- Port Diagrams
    - Chest
        
        ![Chest Hub Diagram.svg](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/Chest_Hub_Diagram.svg)
        
    - Waist
        
        ![Waist Hub Diagram.svg](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/Waist_Hub_Diagram.svg)
        
    - Back
        
        ![Back Hub Diagram.svg](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/Back_Hub_Diagram.svg)
        
    - Tower
        
        ![Tower Hub Diagram.svg](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/Tower_Hub_Diagram.svg)
        
    - Leg/Essential
        
        ![Leg_Essential Port Diagrams.svg](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/Leg_Essential_Port_Diagrams.svg)
        

Here is our final input and output code:

- Joystick/Input
    - Code
        
        ```python
        import bluetooth, time, hub, motor, ble_CBR_short
        from peripheral_functions_short import peripheral
        from hub import port, button, light_matrix
        
        #for hub
        
        lycount = 0
        rycount = 0
        lwcount = 0
        rwcount = 0
        lxcount = 0
        rxcount = 0
        emotion = 0
        mode = 0
        dance = 0
        dtest = 0
        
        ly = port.A
        ry = port.B
        lwheel = port.C
        rwheel = port.D
        lx = port.E
        rx = port.F
        
        a = motor.run_to_absolute_position(ly, 0, 1000)
        a = motor.run_to_absolute_position(ry, 0, 1000)
        a = motor.run_to_absolute_position(lwheel, 0, 1000)
        a = motor.run_to_absolute_position(rwheel, 0, 1000)
        a = motor.run_to_absolute_position(lx, 0, 1000)
        a = motor.run_to_absolute_position(rx, 0, 1000)
            
        while True:
            try:
                lytest = lycount
                rytest = rycount
                lwtest = lwcount
                rwtest = rwcount
                lxtest = lxcount
                rxtest = rxcount
        
                if mode % 2 == 0:
                    a = light_matrix.write("1")
                    if motor.velocity(ly) != 0:
                        if motor.absolute_position(ly) > 25:
                            lycount = 0
                        elif motor.absolute_position(ly) < -25:
                            lycount = 1
                        elif motor.absolute_position(ly) > -25 and motor.absolute_position(ly) < 25:
                            lycount = 2
                        if lytest != lycount:
                            advertisement = "back" + "," + str(lycount)
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)  
                            
                    if motor.velocity(ry) != 0:
                        if motor.absolute_position(ry) > 25:
                            rycount = 3
                        elif motor.absolute_position(ry) < -25:
                            rycount = 4
                        elif motor.absolute_position(ry) > -25 and motor.absolute_position(ry) < 25:
                            rycount = 5
                        if rytest != rycount:
                            advertisement = "back" + "," + str(rycount)
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
                        
                    if motor.velocity(lx) != 0:
                        if motor.absolute_position(lx) > 25:
                            lxcount = 6
                        elif motor.absolute_position(lx) < -25:
                            lxcount = 7
                        elif motor.absolute_position(lx) > -25 and motor.absolute_position(lx) < 25:
                            lxcount = 8
                        if lxtest != lxcount:
                            advertisement = "back" + "," + str(lxcount)
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
        
                    if motor.velocity(rx) != 0:
                        if motor.absolute_position(rx) > 25:
                            rxcount = 9
                        elif motor.absolute_position(rx) < -25:
                            rxcount = 10
                        elif motor.absolute_position(rx) > -25 and motor.absolute_position(rx) < 25:
                            rxcount = 11
                        if rxtest != rxcount:
                            advertisement = "back" + "," + str(rxcount)
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
        
                    if motor.velocity(rwheel) != 0:
                        if motor.absolute_position(rwheel) > 25:
                            rwcount = 0
                        elif motor.absolute_position(rwheel) < -25:
                            rwcount = 1
                        elif motor.absolute_position(rwheel) > -25 and motor.absolute_position(rwheel) < 25:
                            rwcount = 2
                        if rwtest != rwcount:
                            advertisement = "waist" + "," + str(rwcount)
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01) 
                        
                    if emotion % 4 == 0:
                        if motor.velocity(lwheel) != 0:
                            if motor.absolute_position(lwheel) > 25:
                                lwcount = 0
                            elif motor.absolute_position(lwheel) < -25:
                                lwcount = 1
                            elif motor.absolute_position(lwheel) > -25 and motor.absolute_position(lwheel) < 25:
                                lwcount = 2
                            if lwtest != lwcount:
                                advertisement = "chest" + "," + str(lwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                    
                    if emotion % 4 == 1:
                        if motor.velocity(lwheel) != 0:
                            if motor.absolute_position(lwheel) > 25:
                                lwcount = 3
                            elif motor.absolute_position(lwheel) < -25:
                                lwcount = 4
                            elif motor.absolute_position(lwheel) > -25 and motor.absolute_position(lwheel) < 25:
                                lwcount = 5
                            if lwtest != lwcount:
                                advertisement = "chest" + "," + str(lwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                    
                    if emotion % 4 == 2:
                        if motor.velocity(lwheel) != 0:
                            if motor.absolute_position(lwheel) > 25:
                                lwcount = 6
                            elif motor.absolute_position(lwheel) < -25:
                                lwcount = 7
                            elif motor.absolute_position(lwheel) > -25 and motor.absolute_position(lwheel) < 25:
                                lwcount = 8
                            if lwtest != lwcount:
                                advertisement = "chest" + "," + str(lwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                                
                    if emotion % 4 == 3:
                        if motor.velocity(lwheel) != 0:
                            if motor.absolute_position(lwheel) > 25:
                                lwcount = 9
                            elif motor.absolute_position(lwheel) < -25:
                                lwcount = 10
                            elif motor.absolute_position(lwheel) > -25 and motor.absolute_position(lwheel) < 25:
                                lwcount = 11
                            if lwtest != lwcount:
                                advertisement = "chest" + "," + str(lwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                                
                    if button.pressed(button.RIGHT):
                        emotion += 1
                
                elif mode % 2 == 1:
                    a = light_matrix.write("2")
                    if dance % 2 == 0:
                        if dtest != dance:
                            advertisement = "ess" + "," + "30"
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
                        if motor.velocity(lx) != 0:
                            if motor.absolute_position(lx) > 25:
                                lwcount = 12
                            elif motor.absolute_position(lx) < -25:
                                lwcount = 13
                            elif motor.absolute_position(lx) > -25 and motor.absolute_position(lx) < 25:
                                lwcount = 14
                            if lwtest != lwcount:
                                advertisement = "back" + "," + str(lwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                    
                        if motor.velocity(rx) != 0:
                            if motor.absolute_position(rx) > 25:
                                rwcount = 15
                            elif motor.absolute_position(rx) < -25:
                                rwcount = 16
                            elif motor.absolute_position(rx) > -25 and motor.absolute_position(rx) < 25:
                                rwcount = 17
                            if rwtest != rwcount:
                                advertisement = "back" + "," + str(rwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                                       
                        if motor.velocity(ly) != 0:
                            if motor.absolute_position(ly) > 25:
                                lwcount = 3
                            elif motor.absolute_position(ly) < -25:
                                lwcount = 4
                            elif motor.absolute_position(ly) > -25 and motor.absolute_position(ly) < 25:
                                lwcount = 5
                            if lwtest != lwcount:
                                advertisement = "waist" + "," + str(lwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                                
                        if motor.velocity(ry) != 0:
                            if motor.absolute_position(ry) > 25:
                                rwcount = 6
                            elif motor.absolute_position(ry) < -25:
                                rwcount = 7
                            elif motor.absolute_position(ry) > -25 and motor.absolute_position(ry) < 25:
                                rwcount = 8
                            if rwtest != rwcount:
                                advertisement = "waist" + "," + str(rwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                        
                        if motor.velocity(lwheel) != 0:
                            if motor.absolute_position(lwheel) > 25:
                                lwcount = 0
                            elif motor.absolute_position(lwheel) < -25:
                                lwcount = 1
                            elif motor.absolute_position(lwheel) > -25 and motor.absolute_position(lwheel) < 25:
                                lwcount = 2
                            if lwtest != lwcount:
                                advertisement = "chest" + "," + str(lwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                        
                        if motor.velocity(rwheel) != 0:
                            if motor.absolute_position(rwheel) > 25:
                                rwcount = 0
                            elif motor.absolute_position(rwheel) < -25:
                                rwcount = 1
                            elif motor.absolute_position(rwheel) > -25 and motor.absolute_position(rwheel) < 25:
                                rwcount = 2
                            if rwtest != rwcount:
                                advertisement = "tower" + "," + str(rwcount)
                                print(advertisement)
                                signal = peripheral(advertisement)
                                signal.advertise()
                                time.sleep(0.01)
                    
                    elif dance % 2 == 1:
                        if dtest != dance:
                            advertisement = "back" + "," + "20"
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
                            advertisement = "chest" + "," + "20"
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
                            advertisement = "waist" + "," + "20"
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
                            advertisement = "tower" + "," + "20"
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
                            advertisement = "ess" + "," + "20"
                            print(advertisement)
                            signal = peripheral(advertisement)
                            signal.advertise()
                            time.sleep(0.01)
                    
                    dtest = dance
                                
                    if button.pressed(button.RIGHT):
                        dance += 1
                            
                if button.pressed(button.LEFT):
                    mode += 1 
                      
                time.sleep(0.2)
                
            except Exception as e:
                print(e)
                break
        ```
        
    - File
        
        [input_advertise_esp.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/hub_input_advertise_esp.py)
        
- Outputs
    - Chest
        - Chest Functions
            - Code
                
                ```python
                import time, hub, motor, color_matrix, color
                from hub import port, button
                
                ls1 = port.A
                ls2 = port.B
                ls3 = port.C
                ls4 = port.D
                ears = port.E
                head = port.F
                
                x = 2
                y = 2
                
                pupil = color.WHITE
                ang_pupil = color.RED
                sad_pupil = color.BLUE
                ann_pupil = color.GREEN
                eyelid = color.ORANGE
                
                iris = 10
                back = 4
                
                pixels = [(pupil, back)] * 9
                ang_pixels = [(ang_pupil, back)] * 9
                sad_pixels = [(sad_pupil, back)] * 9
                ann_pixels = [(ann_pupil, back)] * 9
                lid_pixels = [(eyelid, iris)]* 9
                
                eyelid = color.ORANGE
                
                red = [(color.RED, 10)] * 9
                orange = [(color.ORANGE, 10)] * 9
                yellow = [(color.YELLOW, 10)] * 9
                green = [(color.GREEN, 10)] * 9
                blue = [(color.BLUE, 10)] * 9
                purple = [(color.PURPLE, 10)] * 9
                
                def blink():
                
                    x = 2
                    y = 2
                
                    for h in range(3):
                        for i in range(3):
                            color_matrix.set_pixel(ls1, x, y, (eyelid, iris))
                            color_matrix.set_pixel(ls2, x, y, (eyelid, iris))
                            y -= 1
                        time.sleep(0.1)
                        x -= 1
                        y = 2
                
                    time.sleep(0.1)
                
                    x = 2
                    y = 2
                    for j in range(3):
                        for k in range(3):
                            color_matrix.set_pixel(ls3, x, y, (eyelid, iris))
                            color_matrix.set_pixel(ls4, x, y, (eyelid, iris))
                            y -= 1
                        time.sleep(0.1)
                        x -= 1
                        y = 2
                    
                    time.sleep(0.1)
                    
                def left():
                    
                    motor.run(head, -100)
                    
                def left_eye():
                    
                    motor.run(ears, 100)
                    
                    color_matrix.show(ls1, pixels)
                    color_matrix.show(ls2, pixels)
                    color_matrix.show(ls3, pixels)
                    color_matrix.show(ls4, pixels)
                
                    color_matrix.set_pixel(ls1, 0, 0, (pupil, iris))
                    color_matrix.set_pixel(ls1, 0, 1, (pupil, iris))
                    color_matrix.set_pixel(ls1, 0, 2, (pupil, iris))
                    color_matrix.set_pixel(ls1, 1, 1, (pupil, iris))
                    color_matrix.set_pixel(ls1, 1, 2, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 0, (pupil, iris))
                    color_matrix.set_pixel(ls3, 2, 0, (pupil, iris))
                    color_matrix.set_pixel(ls3, 2, 1, (pupil, iris))
                    color_matrix.set_pixel(ls3, 2, 2, (pupil, iris))
                    color_matrix.set_pixel(ls3, 1, 1, (pupil, iris))
                    color_matrix.set_pixel(ls3, 1, 2, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 0, (pupil, iris))
                
                def middle():
                    
                    motor.stop(head)
                
                def middle_eye():
                   
                    motor.run(ears, 100)
                    
                    color_matrix.show(ls1, pixels)
                    color_matrix.show(ls2, pixels)
                    color_matrix.show(ls3, pixels)
                    color_matrix.show(ls4, pixels)
                
                    color_matrix.set_pixel(ls1, 0, 1, (pupil, iris))
                    color_matrix.set_pixel(ls1, 0, 2, (pupil, iris))
                    color_matrix.set_pixel(ls1, 1, 2, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 0, (pupil, iris))
                    color_matrix.set_pixel(ls2, 1, 0, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 1, (pupil, iris))
                    color_matrix.set_pixel(ls3, 2, 2, (pupil, iris))
                    color_matrix.set_pixel(ls3, 2, 1, (pupil, iris))
                    color_matrix.set_pixel(ls3, 1, 2, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 0, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 1, (pupil, iris))
                    color_matrix.set_pixel(ls4, 1, 0, (pupil, iris))
                    
                    time.sleep(0.1)
                    
                    blink()
                
                    color_matrix.set_pixel(ls3, 0, 0, (pupil, back))
                    color_matrix.set_pixel(ls3, 0, 1, (pupil, back))
                    color_matrix.set_pixel(ls3, 0, 2, (pupil, back))
                    color_matrix.set_pixel(ls4, 0, 0, (pupil, back))
                    color_matrix.set_pixel(ls4, 0, 1, (pupil, back))
                    color_matrix.set_pixel(ls4, 0, 2, (pupil, back))
                
                    time.sleep(0.1)
                
                    color_matrix.set_pixel(ls3, 1, 0, (pupil, back))
                    color_matrix.set_pixel(ls3, 1, 1, (pupil, back))
                    color_matrix.set_pixel(ls3, 1, 2, (pupil, iris))
                    color_matrix.set_pixel(ls4, 1, 0, (pupil, iris))
                    color_matrix.set_pixel(ls4, 1, 1, (pupil, back))
                    color_matrix.set_pixel(ls4, 1, 2, (pupil, back))
                
                    time.sleep(0.1)
                
                    color_matrix.set_pixel(ls3, 2, 0, (pupil, back))
                    color_matrix.set_pixel(ls3, 2, 1, (pupil, iris))
                    color_matrix.set_pixel(ls3, 2, 2, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 0, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 1, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 2, (pupil, back))
                
                    time.sleep(0.1)
                
                    color_matrix.set_pixel(ls1, 0, 0, (pupil, back))
                    color_matrix.set_pixel(ls1, 0, 1, (pupil, iris))
                    color_matrix.set_pixel(ls1, 0, 2, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 0, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 1, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 2, (pupil, back))
                
                    time.sleep(0.1)
                
                    color_matrix.set_pixel(ls1, 1, 0, (pupil, back))
                    color_matrix.set_pixel(ls1, 1, 1, (pupil, back))
                    color_matrix.set_pixel(ls1, 1, 2, (pupil, iris))
                    color_matrix.set_pixel(ls2, 1, 0, (pupil, iris))
                    color_matrix.set_pixel(ls2, 1, 1, (pupil, back))
                    color_matrix.set_pixel(ls2, 1, 2, (pupil, back))
                
                    time.sleep(0.1)
                
                    color_matrix.set_pixel(ls1, 2, 0, (pupil, back))
                    color_matrix.set_pixel(ls1, 2, 1, (pupil, back))
                    color_matrix.set_pixel(ls1, 2, 2, (pupil, back))
                    color_matrix.set_pixel(ls2, 2, 0, (pupil, back))
                    color_matrix.set_pixel(ls2, 2, 1, (pupil, back))
                    color_matrix.set_pixel(ls2, 2, 2, (pupil, back))
                
                    time.sleep(0.1)
                
                def right():
                    
                    motor.run(head, 100)
                
                def right_eye():
                   
                    motor.run(ears, 100)
                    
                    color_matrix.show(ls1, pixels)
                    color_matrix.show(ls2, pixels)
                    color_matrix.show(ls3, pixels)
                    color_matrix.show(ls4, pixels)
                
                    color_matrix.set_pixel(ls1, 0, 2, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 0, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 1, (pupil, iris))
                    color_matrix.set_pixel(ls2, 0, 2, (pupil, iris))
                    color_matrix.set_pixel(ls2, 1, 0, (pupil, iris))
                    color_matrix.set_pixel(ls2, 1, 1, (pupil, iris))
                    color_matrix.set_pixel(ls3, 2, 2, (pupil, iris))
                    color_matrix.set_pixel(ls4, 1, 0, (pupil, iris))
                    color_matrix.set_pixel(ls4, 1, 1, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 0, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 1, (pupil, iris))
                    color_matrix.set_pixel(ls4, 2, 2, (pupil, iris))
                
                def annoy():
                
                    motor.run_to_absolute_position(ears, -75, 1000)
                
                    color_matrix.show(port.A, lid_pixels)
                    color_matrix.show(port.B, lid_pixels)
                    color_matrix.show(port.C, ann_pixels)
                    color_matrix.show(port.D, ann_pixels)
                    color_matrix.set_pixel(port.A, 0, 1, (ann_pupil, iris))
                    color_matrix.set_pixel(port.A, 0, 2, (ann_pupil, iris))
                    color_matrix.set_pixel(port.B, 0, 0, (ann_pupil, iris))
                    color_matrix.set_pixel(port.B, 0, 1, (ann_pupil, iris))
                    color_matrix.set_pixel(port.C, 2, 2, (ann_pupil, iris))
                    color_matrix.set_pixel(port.C, 2, 1, (ann_pupil, iris))
                    color_matrix.set_pixel(port.C, 1, 2, (ann_pupil, iris))
                    color_matrix.set_pixel(port.D, 2, 0, (ann_pupil, iris))
                    color_matrix.set_pixel(port.D, 2, 1, (ann_pupil, iris))
                    color_matrix.set_pixel(port.D, 1, 0, (ann_pupil, iris))
                    color_matrix.set_pixel(port.A, 0, 0, (ann_pupil, back))
                    color_matrix.set_pixel(port.B, 0, 2, (ann_pupil, back))
                
                def sad():
                
                    motor.run_to_absolute_position(ears, -15, 1000)
                
                    color_matrix.show(port.A, lid_pixels)
                    color_matrix.show(port.B, lid_pixels)
                    color_matrix.show(port.C, sad_pixels)
                    color_matrix.show(port.D, sad_pixels)
                    color_matrix.set_pixel(port.A, 0, 1, (sad_pupil, iris))
                    color_matrix.set_pixel(port.A, 0, 2, (sad_pupil, iris))
                    color_matrix.set_pixel(port.B, 0, 0, (sad_pupil, iris))
                    color_matrix.set_pixel(port.B, 0, 1, (sad_pupil, iris))
                    color_matrix.set_pixel(port.C, 2, 2, (sad_pupil, iris))
                    color_matrix.set_pixel(port.C, 2, 1, (sad_pupil, iris))
                    color_matrix.set_pixel(port.C, 1, 2, (sad_pupil, iris))
                    color_matrix.set_pixel(port.D, 2, 0, (sad_pupil, iris))
                    color_matrix.set_pixel(port.D, 2, 1, (sad_pupil, iris))
                    color_matrix.set_pixel(port.D, 1, 0, (sad_pupil, iris))
                    color_matrix.set_pixel(port.A, 0, 0, (sad_pupil, back))
                    color_matrix.set_pixel(port.B, 0, 2, (sad_pupil, back))
                
                def angry():
                    
                    motor.run_to_absolute_position(ears, -1000, 1000)
                
                    color_matrix.show(port.A, lid_pixels)
                    color_matrix.show(port.B, lid_pixels)
                    color_matrix.show(port.C, ang_pixels)
                    color_matrix.show(port.D, ang_pixels)
                    color_matrix.set_pixel(port.A, 0, 1, (ang_pupil, iris))
                    color_matrix.set_pixel(port.A, 0, 2, (ang_pupil, iris))
                    color_matrix.set_pixel(port.B, 0, 0, (ang_pupil, iris))
                    color_matrix.set_pixel(port.B, 0, 1, (ang_pupil, iris))
                    color_matrix.set_pixel(port.C, 2, 2, (ang_pupil, iris))
                    color_matrix.set_pixel(port.C, 2, 1, (ang_pupil, iris))
                    color_matrix.set_pixel(port.C, 1, 2, (ang_pupil, iris))
                    color_matrix.set_pixel(port.D, 2, 0, (ang_pupil, iris))
                    color_matrix.set_pixel(port.D, 2, 1, (ang_pupil, iris))
                    color_matrix.set_pixel(port.D, 1, 0, (ang_pupil, iris))
                    color_matrix.set_pixel(port.A, 0, 0, (ang_pupil, back))
                    color_matrix.set_pixel(port.B, 0, 2, (ang_pupil, back))
                ```
                
            - File
                
                [chest_functions.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/chest_functions.py)
                
        - Chest Output
            - Code
                
                ```python
                import bluetooth, time
                from quick_scan import QuickScan
                from ble_advertising import decode_services, decode_name
                import chest_functions
                
                #chest
                
                while True: 
                    try:
                        central = QuickScan('chest')
                        central.scan(0)
                        central.wait_for_scan()
                        if central.peripheral != '' and central.peripheral != None:
                            commands = central.peripheral.split(',')
                            function = commands[1]
                            if function == "0":
                                chest_functions.right()
                                chest_functions.right_eye()
                            elif function == "1":
                                chest_functions.left()
                                chest_functions.left_eye()
                            elif function == "2":
                                chest_functions.middle()
                                chest_functions.middle_eye()
                            elif function == "3":
                                chest_functions.right()
                                chest_functions.angry()
                            elif function == "4":
                                chest_functions.left()
                                chest_functions.angry()
                            elif function == "5":
                                chest_functions.middle()
                                chest_functions.angry()
                            elif function == "6":
                                chest_functions.right()
                                chest_functions.sad()
                            elif function == "7":
                                chest_functions.left()
                                chest_functions.sad()
                            elif function == "8":
                                chest_functions.middle()
                                chest_functions.sad()
                            elif function == "9":
                                chest_functions.right()
                                chest_functions.annoy()
                            elif function == "10":
                                chest_functions.left()
                                chest_functions.annoy()
                            elif function == "11":
                                chest_functions.middle()
                                chest_functions.annoy()
                
                    except Exception as e:
                        print(e)
                        break
                ```
                
            - File
                
                [output_read_light.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/chest_output_read_light.py)
                
    - Back
        - Back Functions
            - Code
                
                ```python
                import time, hub, motor
                from hub import port
                
                rshoulder = port.A
                lshoulder = port.B
                relbow = port.C
                lelbow = port.D
                rwrist = port.E
                lwrist = port.F
                
                def lshoulder_forward():
                    motor.run(lshoulder, 100)
                    
                def lshoulder_backward():
                    motor.run(lshoulder, -100)
                    
                def lshoulder_rest():
                    motor.stop(lshoulder)
                    
                def rshoulder_forward():
                    motor.run(rshoulder, -100)
                    
                def rshoulder_backward():
                    motor.run(rshoulder, 100)
                    
                def rshoulder_rest():
                    motor.stop(rshoulder)
                    
                def lwrist_forward():
                    motor.run(lwrist, -100)
                    
                def lwrist_backward():
                    motor.run(lwrist, 100)
                    
                def lwrist_rest():
                    motor.stop(lwrist)
                    
                def rwrist_forward():
                    motor.run(rwrist, 100)
                    
                def rwrist_backward():
                    motor.run(rwrist, -100)
                    
                def rwrist_rest():
                    motor.stop(rwrist)
                    
                def lelbow_forward():
                    motor.run(lelbow, 100)
                    
                def lelbow_backward():
                    motor.run(lelbow, -100)
                    
                def lelbow_rest():
                    motor.stop(lelbow)
                    
                def relbow_forward():
                    motor.run(relbow, -100)
                    
                def relbow_backward():
                    motor.run(relbow, 100)
                    
                def relbow_rest():
                    motor.stop(relbow)
                    
                def back_dance():
                    
                    motor.run_to_absolute_position(rshoulder, 50, -500)
                    motor.run_to_absolute_position(lshoulder, 200, 500)
                
                    for i in range(10):
                        motor.run_to_absolute_position(rshoulder, 130, -500)
                        motor.run_to_absolute_position(lshoulder, 320, 500)
                        motor.run_to_absolute_position(relbow, 320, -500)
                        motor.run_to_absolute_position(rwrist, 130, 500)
                        motor.run_to_absolute_position(lelbow, 40, 500)
                        motor.run_to_absolute_position(lwrist, 230, -500)
                        time.sleep(0.5)
                        motor.run_to_absolute_position(rshoulder, 50, 500)
                        motor.run_to_absolute_position(lshoulder, 200, -500)
                        motor.run_to_absolute_position(relbow, 75, 500)
                        motor.run_to_absolute_position(rwrist, 140, 500)
                        motor.run_to_absolute_position(lelbow, 285, -500)
                        motor.run_to_absolute_position(lwrist, 240, 500)
                        time.sleep(0.5)
                ```
                
            - File
                
                [back_functions.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/back_functions.py)
                
        - Back Output
            - Code
                
                ```python
                import bluetooth, time
                from quick_scan import QuickScan
                from ble_advertising import decode_services, decode_name
                import back_functions
                
                #back
                        
                while True:
                    try:
                        central = QuickScan('back')
                        central.scan(0)
                        central.wait_for_scan()
                        if central.peripheral != '' and central.peripheral != None:
                            commands = central.peripheral.split(',')
                            function = commands[1]
                            if function == "0":
                                back_functions.lshoulder_forward()
                            elif function == "1":
                                back_functions.lshoulder_backward()
                            elif function == "2":
                                back_functions.lshoulder_rest()
                            if function == "3":
                                back_functions.rshoulder_backward()
                            elif function == "4":
                                back_functions.rshoulder_forward()
                            elif function == "5":
                                back_functions.rshoulder_rest()
                            if function == "6":
                                back_functions.lwrist_forward()
                            elif function == "7":
                                back_functions.lwrist_backward()
                            elif function == "8":
                                back_functions.lwrist_rest()
                            if function == "9":
                                back_functions.rwrist_forward()
                            elif function == "10":
                                back_functions.rwrist_backward()
                            elif function == "11":
                                back_functions.rwrist_rest()
                            if function == "12":
                                back_functions.lelbow_backward()
                            elif function == "13":
                                back_functions.lelbow_forward()
                            elif function == "14":
                                back_functions.lelbow_rest()
                            if function == "15":
                                back_functions.relbow_forward()
                            elif function == "16":
                                back_functions.relbow_backward()
                            elif function == "17":
                                back_functions.relbow_rest()
                            if function == "20":
                                back_functions.back_dance()
                    except Exception as e:
                        print(e)
                        break
                ```
                
            - File
                
                [output_read_light.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/back_output_read_light.py)
                
    - Tower
        - Tower Functions
            - Code
                
                ```python
                import hub, motor, time
                from hub import port
                
                button = port.A
                spine = port.B
                rl = port.C
                ll = port.D
                
                def spine_up():
                    motor.run(spine, -500)
                
                def spine_down():
                    motor.run(spine, 500)
                
                def spine_rest():
                    motor.stop(spine)
                    
                def dance():
                    motor.run(rl, 500)
                    motor.run(ll, -500)
                    time.sleep(10)
                    motor.stop(rl)
                    motor.stop(ll)
                ```
                
            - File
                
                [tower_functions.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/tower_functions.py)
                
        - Tower Output
            - Code
                
                ```python
                import bluetooth, time
                from quick_scan import QuickScan
                from ble_advertising import decode_services, decode_name
                import tower_functions
                
                #tower
                
                while True: 
                    try:
                        central = QuickScan('tower')
                        central.scan(0)
                        central.wait_for_scan()
                        if central.peripheral != '' and central.peripheral != None:
                            commands = central.peripheral.split(',')
                            function = commands[1]
                            if function == "0":
                                tower_functions.spine_up()
                            elif function == "1":
                                tower_functions.spine_down()
                            elif function == "2":
                                tower_functions.spine_rest()
                                
                            if function == "20":
                                tower_functions.dance()
                                
                    except Exception as e:
                        print(e)
                        break
                ```
                
            - File
                
                [output_read_light.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/tower_output_read_light.py)
                
    - Waist
        - Waist Functions
            - Code
                
                ```python
                import time, hub, motor
                from hub import port
                
                uh = port.A
                lh = port.B
                rarm = port.C
                larm = port.D
                rneck = port.E
                lneck = port.F
                
                def turn_right():
                    motor.run(lh, -100)
                    motor.run(uh, 50)
                def turn_left():
                    motor.run(lh, 100)
                    motor.run(uh, -50)
                def turn_rest():
                    motor.stop(lh)
                    motor.stop(uh)
                def larm_out():
                    motor.run(larm, 100)
                def larm_in():
                    motor.run(larm, -100)
                def larm_rest():
                    motor.stop(larm)
                def rarm_out():
                    motor.run(rarm, -100)
                def rarm_in():
                    motor.run(rarm, 100)
                def rarm_rest():
                    motor.stop(rarm)
                    
                def waist_dance():
                    
                    for i in range(10):
                        motor.run_for_degrees(lh, 200, 1000)
                        motor.run_for_degrees(uh, 100, -1000)
                        time.sleep(0.25)
                        motor.run_for_degrees(lh, 200, -1000)
                        motor.run_for_degrees(uh, 100, 1000)
                        time.sleep(0.25)
                        motor.run_for_degrees(lh, 200, -1000)
                        motor.run_for_degrees(uh, 100, 1000)
                        time.sleep(0.25)
                        motor.run_for_degrees(lh, 200, 1000)
                        motor.run_for_degrees(uh, 100, -1000)
                        time.sleep(0.25)
                ```
                
            - File
                
                [waist_functions.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/waist_functions.py)
                
        - Waist Output
            - Code
                
                ```python
                import bluetooth, time
                from quick_scan import QuickScan
                from ble_advertising import decode_services, decode_name
                import waist_functions
                
                #waist
                
                while True: 
                    try:
                        central = QuickScan('waist')
                        central.scan(0)
                        central.wait_for_scan()
                        if central.peripheral != '' and central.peripheral != None:
                            commands = central.peripheral.split(',')
                            function = commands[1]
                            if function == "0":
                                waist_functions.turn_right()
                            elif function == "1":
                                waist_functions.turn_left()
                            elif function == "2":
                                waist_functions.turn_rest()
                            
                            if function == "3":
                                waist_functions.larm_out()
                            elif function == "4":
                                waist_functions.larm_in()
                            elif function == "5":
                                waist_functions.larm_rest()
                        
                            if function == "6":
                                waist_functions.rarm_in()
                            elif function == "7":
                                waist_functions.rarm_out()
                            elif function == "8":
                                waist_functions.rarm_rest()
                            
                            if function == "20":
                                waist_functions.waist_dance()
                
                    except Exception as e:
                        print(e)
                        break
                ```
                
            - File
                
                [output_read_light.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/waist_output_read_light.py)
                
    - Legs/Essential
        - Essential Functions
            - Code
                
                ```python
                import time, hub
                
                def leg_dance():
                    hub.port.B.motor.run_at_speed(1000)
                    time.sleep(10)
                    hub.port.B.motor.run_at_speed(0)
                
                def dstop():
                    hub.port.B.motor.run_at_speed(0)
                ```
                
            - File
                
                [essential_functions.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/essential_functions.py)
                
        - Essential Output
            - Code
                
                ```python
                import bluetooth, time
                from quick_scan import QuickScan
                from ble_advertising import decode_services, decode_name
                import essential_functions
                
                #essential
                
                while True: 
                    try:
                        central = QuickScan('ess')
                        central.scan(0)
                        central.wait_for_scan()
                        if central.peripheral != '' and central.peripheral != None:
                            commands = central.peripheral.split(',')
                            function = commands[1]
                            if function == "20":
                                essential_functions.leg_dance()
                            else:
                                essential_functions.dstop()
                    except Exception as e:
                        print(e)
                        break
                ```
                
            - File
                
                [output_read_light.py](Part%204%20-%20Programming%20Elles%20Joystick%20(BLE)/ess_output_read_light.py)