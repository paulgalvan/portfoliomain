
## About This Project:


“The goal of this week's project is to try your hand at gear reduction. You will need to run your stepper motor for 200 steps, but move a character (Mario or any other character) from 90 to 180 degrees. To do this, you will need to use a gear train with at least 4 gears - note if you choose to build a planetary gear system, as long as you have 3 planet gears you satisfy the requirement. Each team member must design at least 1 gear.


Success = +/- 50 degrees


Super Success = +/- 5 degrees


You may NOT use any pre-made gears or software that creates gears for you.”


---


![frontgear-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/e4e9a5f2-8189-4d03-a284-9ea9c697369d/frontgear-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEGSZ5F%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqLc0zsThYH0h%2BRrM1an2tcwJxHz19bL%2FdwHiJuLx6nQIgRFM%2BL2FROOUe4icJwQN4WFfXOiyTZSHyq99baBHhUx4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAbWB3zPFxzEYU0BtircA3r%2FBgRIz70mrEP%2B489E8612KT2IBh%2FbsMf7waDss%2BNVeNXwZmuH%2FlLvfKVSTIrJJ08tnfMcARuIDvZl%2BjhqR0ZpLUKJrUsZ1EhH7ka5PouoDCcCc6unZ2dPWa08uwMV9pPvTcDwg1RfndezJ5yWHENRoXBy%2BxJwkQb9MX9qgfIeAMd0xtuvJ0%2FAsBVOk0qmVNaUY08iWzB8Wa06eg4uiIMxAA4Aj7dhYqFOPuDZwW7wNtgsFWaFwFIY7mhKusSGmU8a52JxB246TBsQuX5IsQRE97HFEO3fZAmJbYws2D2GnjP%2B%2BULY5QsiZ8uGjkVPVNTsuQkZnBwhz4s%2BK8MMWBiPH7Cq49KvRvwsi0veAFqtjdtU1nIp%2FNIalwu5LBIA%2BlnuAehG9JYqIc6Mg0iLa91ATM%2FPUrWPu0Nywowy48c%2FawKoNztkJSQW6VoRGfEmxn5iJojm62lwvrXLSiJebbmzG%2Bfeq1%2FZjiGHYSMHSerc%2BfUT1eD1wxetXyoS9eJEud1IcGkQ%2FeAv3h%2FK55V7X%2BNXRKs2VzUkQv54FWb8aE5uLMm20U7%2FiP8PrSzf4OP%2B7veZsZk%2BUHwIZdPGVXYWzEBJo074iRIZIGbbdshcwKlbxhTDh4G%2BzzajzfZCMMyKxM0GOqUBVUMeLIQ1dit%2F9KkGvm7v2XqWIwiy8ayG%2FKVNVUc2mh6EkjiNiOSIcR3lHMJwo3gnnBPRtxZPfGyjKlf9rEW%2BLygdui5A68b2NHXFmG0FnOF%2FlvPEZOuuGsOHN%2F3F%2B5mQf9LBIuacCIImmcmW%2FvQt1kt%2FEbSaBKbN90Am43s9rbREi6nX2RgjmwlF3LOrzwEpQ8TXBQe6B6WAn2Mmi9ITFnAcLd6w&X-Amz-Signature=b34e31d6bfa52da585cc6e7bbb3750e9a703d669c05fb1a037fd36888c983c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## Math


The math behind the gears was the complicated part. Below is the original 16-gear tooth. The measurements behind it were off by a bit, as can be seen by the thicker teeth. 


![Screenshot_2024-02-02_at_12.41.46_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/683103cd-eeed-4b3a-b09d-11a97b4a8b6e/Screenshot_2024-02-02_at_12.41.46_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533L4O57%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR0Lg%2B5SpxGco%2F9E1%2F7LJcWSnXbTCatSPuf3K2te36mAiEA27zrzALw4nLyK%2Bu59nfgzmvtFtAVEmSyf9bNusWpI2Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPlz3PbfjZqW2F%2FTfCrcAzq6TkXVgZlaSTi15kS15IglyfnP5XkUILwTpCqY4pxSJkWDS4sOGXa%2BR66S2zqjhO4acINmsQmrcTp8jjB6%2BqzOaypMsJ0l4U%2BFISXlPiXylEdQl1g8D7Lgy%2FJQ4CopZcoXGa%2FuZwJArHzaPMyY%2FQdDBsWiCvIMPBX2yjDtXOp7ZtEhuLQwNqwaZQzuMWGJGJ1923eMtKhqmuzA2n%2Bjpcv45QiLNnyJ1Yxz6VYPQkhW0ZOl%2BzBwg7wqxQpmgNbhN9Yn1iIvhxYO7j0tOHLyokLyy%2BK4uZpKAHAceHt9oIbUY1FD%2BUU2Jpmn0S3PL0Bw7OcMq4quroYrPxMi%2FhccMTWOwMgNaqP%2Be7GBeOVUMwVPQ8XRR2m14G3oODIWBc3S68zR5R65uuMrwOB64qW5cBEq0e4XWgcchG3ObkMgYvl7todraI9b7M80bA5sNGcbQD6xuQ3SRvnGYDszk0OefJ79tCND%2B%2Bgv7qOIUF22urcK%2FNKtMjtjD4DSS1v52cjgxp1jDubjz42z3PxKvhWhQw1vDxLevo4nBDlVwLF1JX6ek%2FNJ%2FvuP3Kl6eQ8CJpXX47iIK0anAc%2FEYkzzGvea3obuhYr1W8a9m8Qp82nPpfsz6rXnXIaYXiuTQRREMKiMxM0GOqUBzoIXJK6CJ5aYOvRe4MZD2Mi9n1gE%2BTs5IgneYYRDoukrZItmB91jByRL%2BmBLRH6cSCoN0zDMZrJY4wjAIn1zkeclICbfR1n5y9sCB4lhenGHFA%2Bzku%2BV1gCcmy8zM6SybhJlb4Ufm3L436oKnXVogmRvOp7QKvYBFLqc7mA4lJsFUz4AlDkSwVvoIdel2yg%2B9PRUXG0FxBF3KdhTKkhsJliaZbgg&X-Amz-Signature=645d43f03dcd24a8fcb2c1375162257b1e4cfb8252ad6ed178efb82408b64d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Screenshot_2024-02-02_at_12.46.36_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/497fee48-8f5d-45ce-9fc3-b5e8e5920dac/Screenshot_2024-02-02_at_12.46.36_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I7YRZZE%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF%2BIJA21WlhPzYrVFZF3WIj1tzPmIpJD7nqMe%2B6yMWwQIgGGyZN3ZyZPeigKlNeVXFhhZcXjcXc6ADTWfPxUkW9SIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMqpnf8MG1Tnzy%2FT9yrcAw1qbpKFYklH8CmR2aVHXTUfOf9Ul0SYYHbnWOU39N8Vd4Oc4o%2FZN%2FgTdNkU2T11sBz4rvEGRmIZquz5T01jeRaYw7NCMAzdWqoH1Zmh9y%2Bb%2BI9dDNqgw0zLKZNvg2wzQKPtd33smF6NqecaLw5mD6fJOjwu0CVwhrq0pACdzLifKPu3nRavKYyvWb5SPV9zoR7x25cz6x1cVnOsxqRtK79MMRof%2FLW9XeeLhDdpOj7mvUrJdl81Ve24l5M1Mup7SIhVj27ZwzLgv4uLvG4VcX7x1Dw4Z%2BMjjgIoJf6JgAYZux%2F9EN54S5VrVfhoALj7pMIdeo7Nk4oFwGqBKEe5YQ5UdnUTUPIYg%2FtKyowUifHyFyYgBlnvUwXQFdkcdusxYf0x8wCxGlZIY550se2iRN5chVUK1jt2o1vVh8b82dh%2FBZZBvC7TlyB20lwhSZFbGhkicpQyDORj2O3f%2BxWUpK091lx9Xu9QcrUdnMDKOU3CnIfGzn7W0glGoUVyQlJmZzCXpQjUm9vZt6IgxdLpofyWoM%2BLhpdtYfPluPetNt7Pus5jwvj3lN%2FyxbiFgm0Y88MQXnKAI85owqWbH3lrAEduKuRAU3B5PTQPq8aJpaXcgu4IhBEDxnvPKa9oMO2KxM0GOqUBeOyqPq%2Bm0U8%2BZl2xMEs68JHxdi6NlMX8ASnrM2VCf1p67UDA4ms1PZNn%2BqeYn%2Bt0gsAqf94rcQM5uK8iBjbJLkqnXc%2BhWXnEQA3%2B2WRlABSDn1UGi17BitMwvu0CaD3WECSKLu0%2FTnmckLkhQWMkD2gGe%2BGzEHp0ErIrCNqZ4tiaF%2FMsRM7DsxDu%2BArVJ93D4ANC9xDyYwU9YHPBWqxiSiAqA%2BvB&X-Amz-Signature=d046e9ce4d8e309694f6a07f7b55e934fe726548169c876fea0daa626ac1b618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The gear to the right is the same one but improvised, it allowed for smoother meshing with the 


32-tooth gear. 


![Screenshot_2024-02-02_at_12.48.59_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/13937674-3ced-47e4-9788-b249ba617675/Screenshot_2024-02-02_at_12.48.59_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECJF2A7%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bebLwwOnQzm0rM%2BCpf1FoGY854LosTrDMuVbLkKfugIgC74z%2F6kaz5lPo2Uuv2VN8cmeUff%2FraKNQ4mI%2Ber2dSUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJQJfx9wqyj%2B5avtoSrcAxOYp3HkfvMjxnagAshKmhWbT2yfP6SyEnDpsQy1pzFPSJQO746SGv6H40i7aebpW%2Bn3dICFemfCVsBnLviGtHWXTZQDCjP2PsHZFJPESQi38a0%2BSFjFH1HjXfZziQsl%2Fx%2Ben46ouhc3QpqgmchdgNPwHnp9Msv8%2BqPJ8zw4qmWvYMY%2FoXwwn6d%2F1GMhzWcZDVnOdTY0Gt%2FNSEIxSyFX9C5MCSJkYn9qOFaMJCNAXxymd7y8%2FKe6Ln6RfeBJ%2ByCiMb2QlTCrtjv18Rh7nCRAM1z1JIOUJDzajkRV30K1w8h3mIeLsc4snszzGq%2Fvyt%2FOdYz5Ko1Qq7CYsBVkHM3a1Ocmxklly4JZXj%2B38Z5Ko2wFZSy9FWV5zyNQhL9l%2Fy%2FtcewIN2vk0du%2B%2B5TNFXrJ5PFBfODye0fk4qbTVXCf221yR8nKIU20Yzt7dGbYmQZ3yAsvOtg51IECkUjybUrYZmNtMQ69vuxm0OOICHy9QuKTiDCEOGhTpH%2FMHD76Qs4Fp791BRghiAjDDo4desERdkVc%2Fs%2Bnhcxj0j7FaIE%2BwGEkQmqxJYEEESLj8GYPdROGb3iSvoV3C5Cq%2FvluzUhRqBLqwda5O0zXve%2BgCXf50vjd7Oi4Q%2BNneK5ZEah6MMaKxM0GOqUBxf2wR9tnUCyCLLL7f5h20IMcrxbn2kbYRFNbKRbBgLder98GiAQiaXRVod6nuEirOXiWFCwO%2ByDjGh659GNf9GZrCPomFXcn%2BAR6TwChJqExVXCFB297zX5sqKulDEaT2ksl5Alr7vl5P3LjlbIb1FQrqXlovEtHawaHVTf5xuHeTVakhEJVscCOdY8tQsSqR0OTc4jYRsANFHnZXRXDr520Fj3s&X-Amz-Signature=40294e9a0ffba7d3437f18820bf59c9997b9b48003ff4648ec931de9ab33b290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Screenshot_2024-02-02_at_12.40.39_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/24355ef8-9b00-4c46-beba-eeae119f5167/Screenshot_2024-02-02_at_12.40.39_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7D4JXHV%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsEwS%2F%2FSMBucm%2FK0gFTlsc1%2FcvevB8ysFGxhFzCy5eQIgB6lwxuMTh1nXkuZo7ui9FdQ2OyeFv%2B1lENOeMVK0i0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPqJA6m6JbL1qZFwbircA1IWbCReh54f37PoVHiyM4zLGfz9I37iAovvBktxCpNw6leso8ZY%2B827f6KBd0J%2BNddFwEZKWReC915wYKa76WIhxs6O4X40bRxm0kDuV8wJ%2F0FlFOyLvfE46pDIAfrdTK4E55PQQkFsjjXoOAuCe5zgOWqkhREM53S2AEHlgUM9wJWKhCl8XXpKIEZuqOy68YWkpssG8G6LgCnMJ25KpVNih0L6gvMVUY1TYPA%2FcuXnvN1Zi8Kdk6LOkcsTPZFGxBiaNrIXeWqHSXA1vI27DbE7n%2Bzyn0YD0xDUuPJvi2IVCTN9BMIv%2Bx8v3EDmPO18lFFDPQUtYpk1H%2Fo8O2ArnSlUqT2CHGeRPAlyxxWD7Hmes8FWhokLA9to%2B7JG84gB6CI7U0RrfYXXPbl%2F28qKaC0aIt%2FYIF8Q9id7Mn5Ivlu1EAz9%2FzlDFctD5CnWt76eR2DfSxdUrE6rK280srLU8MaG5yLEHL%2FHuVjOfjp2xlbdcyLMExRkCOXx0fgmVSdYn9HjudmGrZpXtx%2FfvwARIJj4dF04opkf8eBsybNVfNrvnXpp9KlsDDtjDCEcPoaGOpISLqtiK9GXRX2meMhi5%2Brdl5MLHXWKZbMTYq6a2LGfu0RWS11Ptu%2F%2BypH1MM2KxM0GOqUB4fNcvClzjPgqnsb2VDPxkIfHZnBWz%2BjRc5fU%2B%2FIFOtMVIB7QJ7EDKVU5eFF0ZUTPsL44UtWIwKzX8NXm2G01%2FJI%2BJFpdlp4%2F%2FckxGYAArVVyTFn85GOoafXpkB7Z3oHzbcPYIfyOveZ6U43A7yvrm4XO86eo%2FpGTAR6x8UgfHAv5vjeospGRLXTsI97sNcPBMk%2BzNwpm3XfiJqMKFfUpxuhEndPt&X-Amz-Signature=3f2fb62492628722138b7c101f33c5a85fa72c22324d700a719384252078e389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


First modeled on a gear generator, we had to calculate and take the circle measurements so we could make iterations of gears in different sizes along with teeth. Different things are taken into account like the number of teeth, anything under 14 messes gears up, and they need to have a consistent pitch so they can also mesh properly.


![Screenshot_2024-02-02_at_12.51.57_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/5216abc8-3a04-4c3f-878b-62f8c5db6b27/Screenshot_2024-02-02_at_12.51.57_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIM7KI4A%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvBaYafTS%2FWzkvqNqyb%2FSf5X2gNaKf%2Bfa6cbE%2FT8H%2FgIgO3TVVW%2B24znarp1jKxxXCiilfXqpO20mPVd2jylhQ%2F4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJgdvfb1gu7Oe0PxfCrcA1pHFJmYv9v3tiy45g6vAJZ0MFeuFAkLcMU9Hby1TYjnBZIefxugENfe9RuMnK4HUn8B85AP8c7GnVlf72daK1cZYeDsewuivOi63GiETF00W753jxgnwcDLRb04mEsRubSpgqdQC27wd0CrTcE1QbIZt2QRbhuYPhIGM4gMYvzWY%2BrH4W8CNaalSEeBN8ZdfUsMuXDKYK0b40RhZsrsgdJxotwZ61zXX5H2rRYcmh0Shb6FMYEWtLFQtWPd%2Btq8UUqnXWOBS6UdM9HrQUMZsRrA%2Bl%2Bl7ZFdVPhzMArmiswIB0T6lu3nr%2FOabk5huCjepnwyA%2FqXah3dfOOc%2FPos798wKvDO6ES3fC%2FWpu6wDgSJCVcIkyVyH8lGfqK%2FkJcl%2F31riOnNgFO%2FWPoB8gYr79AIckkUmBsUT6iqc8r4xf5Bf8GrE9R2lV4y5GV01QIq4uVAHxVSKqrq2i1Aoum3S0aV%2FpWXTtLRGfy1EQfBHjtSslBSZ%2FFqEXpmsT8gES5X52c4mrQeTp4wvnnwci%2F4xw3HpiynwMca847mhlfunE1tdkfrMYLBZtRuqL%2F7jtIEb6T%2FlnbOQgDWCv7fbHpoHfl5Xlk8BkgW%2FlwsntbHyMfDqgDKdOoGFXcSCGkRMLqLxM0GOqUBQf1vMsJoxApM7Yqptdt0RZEAJQQqcrm1jQr4TASbYJ5pCJPRwz%2FvkHEfSNtsZwvs66yl5eM6egyZXrlh%2Bk826%2Fr3CM8jDbL1TurjPHTWfC9ad%2FJaUnHdaKCse6%2FARSEerQdzKO5fD%2FxNgDWEL%2FXJolwft03p7bbMBURqBTq8uaiA2HVHWY0iGl5vF5IWEwgPhlppU%2FiNqv2xx0HL07gmC8Z93VuB&X-Amz-Signature=863baf8f5e0e860a07ab5f7c7cb0515d14435da04cae6d047bb47ff08d62a7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Screenshot_2024-02-02_at_12.54.41_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/164bca07-2a15-4c84-8cca-43aec84d0236/Screenshot_2024-02-02_at_12.54.41_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT7MXC3%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOgDEbdy1GqFkoSNSD0gVR1vXkgcEMDmdThd2IbopiPAiEA2lm5CW7WcJSyhRsxYlIIXSWRN3Rn7TFZTiVodLmQDHcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFlOu%2Fhi3RftIBCfpCrcA4CTKJY3OpCUAqtkog%2FdCABbbldQvkMMSxs8FczPsERT4LiS97qFIKz7%2Bp8q%2BadfXaKaGrps5eQo3SwLutZJIv3kgO%2BEsEh0lbqkh9fjRkHEB%2Bpzi%2BR715y0z4fhNgXUmojlasQngMEcY1e9cuTjv%2B%2Foi%2FH0pJ7lk66RsnOmZUmr0hn%2Fxjd4RCnNdRIRvVxu5VWBL3rOa7FinH6FzlmS9zyq1TIZGsuymtRx3uy04jL%2FSbdIoinZGc%2BQauGrmm9K8FE16YOA8aUANyivgkeeLob8We4Z0fIP%2BDn2XPVlox%2BpI09iC0EkKDNGMZsdFM%2BiGyGXicS%2Bvi8W04mPjtizaLBxjWFzVB7Tpgg%2BNprv6GEcHiia4HFrHb87QxowjnSyLPksvAeiysQ7QkXl%2FcLjSNfn7%2F5qKHiNuKp%2FtjBRDxHuSMM2Z%2F4qhsEi%2FJQKwM70C5eXCNc5%2BiYEUjoY0%2B6XcixIwtvPUfhKiB4BSHCYOEkYJbEohr%2BZD38oP3OZf0qwzIBOHKiR1yBicRTHwA84X5tl%2B3QahsJgJNoVG8gOzYHpO6i3HVZKxq%2FAaKYZCuhbB%2FEKoWyFup3ZkRr7GZMlDoLTwjzmtGH4VXVhgoPTCxtkCEi6LHP8onqIlfi2MNuKxM0GOqUBj9Qmao4AtN5jLzk73Q7LtT0AZWlcHjeJLJrn%2FwY8AqtgOK6rczgTtSj9A7XnUUYA6cGggrKukkPBA%2F68NVOpCcSRCHlbl7W27DC9GZm81vXkHFVktin2e7TSmXcS%2F4RbAleObtl964S0Mr%2FI%2BTO0sde6Lirz5AiVBF5c%2BBY9AQDYqZxM5sYSD%2BeL2vJiPrvOlRpQq%2FjruPMuUcZVsVLRpC4DX1NJ&X-Amz-Signature=44700e9abb1c7e32724b1d45ec9cd8ff17f86189db78541648a2bbace4f1bb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Here they are side by side on Onshape in an assembly as well as printed to see the meshing with real-time physics.



---


## Gear System


The gear system we decided to use was a 3-pin system that stacked the gears to half the ratio. The first connection from the stepper (16-tooth gear) to the second (32-gear tooth) made the 200 steps into 100, already moving from 360° to 180°. On the second gear, there is a smaller gear (16 teeth) glued on so it can rotate at the same speed, but output a smaller range of motion. It the connected to the third gear (32 gear). That again turned the 180° to 90°.


![Rotated.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/e2376d05-ea4d-4e4a-ba93-6d33701a36a9/Rotated.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAAR4UR%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4C74YSkW1Cz%2FLcjbGfuZksbGAZ1HkZbnvA1ChorHtiAiBDmDGb2kzi5gwtxoCJAOYDkMiAN1gwZ0b0v%2BA02AJyYyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMUyFcoyD%2Bl02Yv239KtwDm0c8N84NfY%2FE%2FHK1kausMYQ8CVQ4nOQbjFWMi2xQm1x9dHbucQnazCcfolAX%2Be1pVjrWyUC4KFfLcdIsEtZ2Os%2BIXE1RaVpEQRQFfzkz2amtGLE2fbt3AkKNdcQGPjsHp1FwRxOW3B5y%2FODsDoDISmGIJDUPEtn%2FTJcyHFulV7die1Yf4IhKMguCLkXc%2BdHJiI%2ByIhQWdwrAXtV%2BISzfPjStOnKBrMxUTuT%2BpC2VP20gIunid0%2FDZivhZVds9nXg%2FqzRQnb%2BGWwSw6xVth1NPnR8VqSz7PuvCCWL9FoBATZwY6Tz1rwKtHhMiWaXuhrQH4z4ZRdfa%2FMSueyhnGDB%2B9dSwSuhRIC3rodgdRiOYSmk46BHjF8ypPLGbd6qob3RGm2lqBfgSCfroA9ZB%2FsI1Em5scP6qisrIcGTuzbaIAWT6JUbV17aDFpGyuCA3ps%2B9S9jGBeBAmjHFN5JTd%2BsykvCMPdJEy3UqmcbxVxxejFLoEYdp%2FMgdN%2Fd70rrIM5xd3Hlw4uvl58%2F2bpcA%2Fou4nzpeSNaggkvXZia9Fc%2B30oaQQ6ZSJ9UQKAgOF3w%2FbjLeuyc3i%2Fc4%2B330FixFBeaM2rPaCtL6cpxKQv6jP5gVS%2B0tRRciz7Kwwbir%2F8ww4rEzQY6pgG2lWOVNrfX7kHOct%2BaPsRpqCS9TRUq86clb%2Fwy2WQmd1cunLmfSFjUtoGX3CzaBFolM7wKIpcFol3y0jgrNLDwU%2Fy7y9D4NRp5x7DAOLVg3%2FGoz%2BlYrDzVDpFmYvGrj6Q080Qv0g2fx9Cg6YI1AIk6d%2FD3qdOaB4ziib3zbYudIc86mbvUP53d6iHCqhtW0yyCI4XODQQaekNLPdlB%2F2PiSuVU5CZF&X-Amz-Signature=7919d80ca22a90d4f54335132acc49d354eba0272395bc316977307ce6fd9945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_7A44DB727A4A-1.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/4577e3f5-7371-4dc7-bea4-a4159bfd21f2/IMG_7A44DB727A4A-1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SIZG47B%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXidl%2FRYS0izys5dOS2sgUaljzTqmmF3VrxeBeGkhNgIgf45LTQSqRQxd%2BLxZ5H8M7786YFHmF4loJgzkLnccZHkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOHoJ9m2GsjFv9kaXircA8D5NKKh%2BWdOo8xt%2FdjS1lic%2F6L8EYH9Sq3umDlvLcEUf1jkUGuyp%2BV%2Bs%2FJyAdpIrPZ4tPdr68B6Z1M3D70cvDmK1SMzqpY7FRxJuyZJDWKERviJkCYC6j%2BGqSyiFuw2ToOVh%2FmqY9yK1BkkCuQQehrCan%2BaCo8lGcmT75os%2Bx2UZvyDWTGJNReA183PMWatbQCCy1JofaFhar0Ro0uZkY5HUgQCaWxBQ8up%2FVdf4yKWu1Wy%2BqA%2F9RkMuFaRe%2BmHUV8Kf5lzOQc7gh3yMfYqUL0clPDfsOOQ0sa8DPIxMZtl6t0Iipte4EbWM7TF3k0fcy7RNGWB%2Bqa83CcbxefAyTtOm4TEMZD7ZIJt1BeMsFE1M5eUCa7G%2BAPS2WmRRMT4xQJeZcq2Q9c5JTDqGxGIN7cFyHDmoCJHaRJFvL5VjMuxnlMFLMKQrnFFksIKqKNXd8yhTPQMotKVLLcGcPfdSbej%2FnzQWs5Ky5nS2ZZ%2BeLbjAv%2BLQsuiWTir4qg7q1O%2BhPhi0Vhkt64oK%2BmuOnGgoLXD5SmIFwalNbLGQ4JldaxHpX%2Fh%2FGqunYWfXp7YLWAf8IJSwLzSbQkIIUt3zpYt1JHeYM%2FZbxACzHTwIBdfzK8VBkLGXMW0gips7%2Fw9MMaLxM0GOqUBtsJy2ujCNgsbNDbFfdAzzTJ7XXdIyM4YQb7Coe6lW%2BvlRqWlYpQY%2Fl6dyacFtjj530dCIApcrUVDHHxudcMxt2k%2FNt7lF7DmDgnX%2F1JPPo1xfV9Z4oxUK93Gpq8%2FkqSqXeSZde0RZ9TG4orJ2fqe%2B0HrSXCgsQAOhOaUoHaBOHiBXdI2K2YwZ3GZ1THsmFVXVBMjj88cvIYzuaxr%2BDBoaIma50qv&X-Amz-Signature=2581c37f894bbcae71a8e846d619fd935cab5dad248e2cab0666dcf2e3ecde62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


On top of the last gear we attached the last circle along with Mario to show his ascent.


![Screenshot_2024-02-02_at_2.01.33_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/d3b61404-d163-4149-b8a9-8f7d465aa3dc/Screenshot_2024-02-02_at_2.01.33_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEGSZ5F%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqLc0zsThYH0h%2BRrM1an2tcwJxHz19bL%2FdwHiJuLx6nQIgRFM%2BL2FROOUe4icJwQN4WFfXOiyTZSHyq99baBHhUx4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAbWB3zPFxzEYU0BtircA3r%2FBgRIz70mrEP%2B489E8612KT2IBh%2FbsMf7waDss%2BNVeNXwZmuH%2FlLvfKVSTIrJJ08tnfMcARuIDvZl%2BjhqR0ZpLUKJrUsZ1EhH7ka5PouoDCcCc6unZ2dPWa08uwMV9pPvTcDwg1RfndezJ5yWHENRoXBy%2BxJwkQb9MX9qgfIeAMd0xtuvJ0%2FAsBVOk0qmVNaUY08iWzB8Wa06eg4uiIMxAA4Aj7dhYqFOPuDZwW7wNtgsFWaFwFIY7mhKusSGmU8a52JxB246TBsQuX5IsQRE97HFEO3fZAmJbYws2D2GnjP%2B%2BULY5QsiZ8uGjkVPVNTsuQkZnBwhz4s%2BK8MMWBiPH7Cq49KvRvwsi0veAFqtjdtU1nIp%2FNIalwu5LBIA%2BlnuAehG9JYqIc6Mg0iLa91ATM%2FPUrWPu0Nywowy48c%2FawKoNztkJSQW6VoRGfEmxn5iJojm62lwvrXLSiJebbmzG%2Bfeq1%2FZjiGHYSMHSerc%2BfUT1eD1wxetXyoS9eJEud1IcGkQ%2FeAv3h%2FK55V7X%2BNXRKs2VzUkQv54FWb8aE5uLMm20U7%2FiP8PrSzf4OP%2B7veZsZk%2BUHwIZdPGVXYWzEBJo074iRIZIGbbdshcwKlbxhTDh4G%2BzzajzfZCMMyKxM0GOqUBVUMeLIQ1dit%2F9KkGvm7v2XqWIwiy8ayG%2FKVNVUc2mh6EkjiNiOSIcR3lHMJwo3gnnBPRtxZPfGyjKlf9rEW%2BLygdui5A68b2NHXFmG0FnOF%2FlvPEZOuuGsOHN%2F3F%2B5mQf9LBIuacCIImmcmW%2FvQt1kt%2FEbSaBKbN90Am43s9rbREi6nX2RgjmwlF3LOrzwEpQ8TXBQe6B6WAn2Mmi9ITFnAcLd6w&X-Amz-Signature=52d7d9d1950c425290a4c249f70e41c424a43b7af05d30443f33f81ffd877deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The way the gears moved.


### Top View                                                                Side View


![IMG_0706-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/7efae9ec-b64c-4755-b17e-ca602db79267/IMG_0706-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPUMWS6%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbO0Fy%2F%2FxoOvQcFHbKl8OZDy7NJE%2F8w2mIuqcUALc3LAiEAzA%2FqvuOwZizLTAmePCPcmFbqqYeV8gUS93lEQa0ZyJoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDERdOeNdENDvn33qAircA%2FA%2BHmERBrCs1A6WHniimAWDGml7Zs88GNLosoELJOJCe3KZN%2FuWzSqsaY49c3APDtZj9ciO1TWTrjLHGSNnn3lTWhH6JBeCV3JhGu5EkNSrGbq9gmvnQxFOylAq9PGHlHa%2F3GPD7Gf2Q%2BRTJQaSyD0%2BtP94C3FoV3xVUW%2FLCcJ3XKeFOhx9o5uaq5nlptz3wDdVcJAweN%2FPwMgLuvMskBmpvb%2FlNn6QidX1r5815roZz1%2FvdE2v8O1kBTuf8ZyMvqwFEKNBtseiNu8c%2Bpb4yAKXcPIn%2B572puVePj%2FJub6qceKFKDFlbPDxCwBz3Zhv%2F2Sx8Pav5edP8uEpKJLw4Ga4l736ok9VaS98mXzOvjek1dyLO4LhCbaKWjTp7Cz6YMkqqJ9%2BffCErmVT6eWYaOSw19YydQnl9Gn9sjbBQ7YUZRQMI50TPQ5VCUFBb9zqOkwhtcHmk8RvLaKp%2Feb9kr7pldqTLmwbzOVcOotfCvcU4yebtpq9HgwF5SH72dnyo5rzxLbQ2w7f8rHh%2BawzHu7fEqXyvPVYXgS4dkoxe%2BRtv%2Byea8B%2Ba%2FPPrnhjPm4rFHOq4lj0kW5K4Lrrk7FUfNzz3s96nkxsLMkBTaeKjP1SVYjtKTcLyJagTdPWMMSKxM0GOqUBue6LRULolOaKXn4wz%2FBwUvMTmPlBtRNw26fOX%2B1aOvatKrJONjBi69UaTEXl%2FAQ7W7hbIFE9AujuE5VBOOutc39wsgStOYsIoyVOBGki9zWpi66Tcm5fHHK%2BuFJjKuGR1EsbSn48z%2Fg4Aj1L7NQElpem7m575V0ncyxLcdG%2FWXBhtGzY1SG1m4c2fKaXAGFtTGV8dKDdBFOXjogtBUSctrZW%2FW6C&X-Amz-Signature=53bd8727ed51414fcef75c062e51d27f9289da3a9105712b313905890546de7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![sidegear-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/50944f7c-088a-479c-a483-246cf2528899/sidegear-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NEEM7PR%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnmHb55b3lA9RkAX8xwROg55D2nPXbNE63sTSC%2B59yFAiA9P55Zap0PR4tJo8Eh2j09G9uMpuBuQGbbQQfaEYzbBSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMLl%2FBHgue2FUEW7seKtwD9ssTHnY2Gs2lBL0XAdHatzxuuIWlVv50sa1P%2B0o9XpjC3eSWukgFdlg9vDG2Z%2FidiX6hEt5OgprJSWnXzr7RrRqnetlQWQ53l6WMwpPWQfPnLXXAMiLut8Rg3yHxneGGpyf5Ip5mbqTPU%2F5wBgbB1IYTiebdiQTDfrya%2BggM6BNSOBlFvvQvnmTojwdQuy3itFTAIZLLtId5f8P%2FuvZC65VNCLzxLQODo6HshfOGHJlDexDW9sRNytljERbR5i8aM7GwgZig3oIxBWU5AuMOA2Xj42gPUYRPlPrhWs8Z4tJl%2Fbz2b%2Fm64SkFG49M0DS3GTYqT79Nh72zqoRshoVts0jJ%2Fqh0v8VOFBMZpFzx%2BHlwAbPYdjonXyo8GvrU5OWeYFKg%2FrpWqH2HFNQnxKaACuyFaf7%2BluaTTPChKc2Jd5dU7vEf5Tr7eBy3tJua1UN6owRfFoYeLhveY3Yy2ws%2FuWAbMG%2BB7GoiZe98b4N0vKX2GbqqmNUjgc%2FmG1fC76PYHLLhT6eKIgyJVhcO0tL0xa6pNK3X%2FezuEY2mxup436SDJG%2BkIAUg65cb7lTFNmXU2tlR004Gt3qty4VtYrj1boTBUHZ95aQJI6%2F0YIZ20HjvefCQgjL7vm%2BbK1Iw5YrEzQY6pgF6oa60pLEeF2f4m9j0cfvzzcQGGRyJCzgK%2FMR588z8NYvSOjZq1yPtUiicsc%2BjXoe6YCzVk8pA6wVx3gg031B56zxnaJ0VDxpcMga37nDYQ%2FS14uufIG7OYjpal%2FzMB0cwmkgLzNCxgUidDBBFyPiCZtTSxvaHrvJlF%2FWGWpOu4E4iIhVGa4OZkIrWDQ3jC86tjN9r%2FJldQRl4yYtfoS4Wi8MvPv32&X-Amz-Signature=fc9b62b7073e76260cdd4a93431bc77cbf7d4c6ebd18327e6241d7f0d2a30299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## Electronics/Code


As for the electronic sections, we used the wiring diagram provided by Briana Bouchard (Ph.D) below.


![Screenshot_2024-02-02_at_12.21.46_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/922eb9c5-99be-47f1-a4fa-e93cd4842315/Screenshot_2024-02-02_at_12.21.46_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEGSZ5F%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqLc0zsThYH0h%2BRrM1an2tcwJxHz19bL%2FdwHiJuLx6nQIgRFM%2BL2FROOUe4icJwQN4WFfXOiyTZSHyq99baBHhUx4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAbWB3zPFxzEYU0BtircA3r%2FBgRIz70mrEP%2B489E8612KT2IBh%2FbsMf7waDss%2BNVeNXwZmuH%2FlLvfKVSTIrJJ08tnfMcARuIDvZl%2BjhqR0ZpLUKJrUsZ1EhH7ka5PouoDCcCc6unZ2dPWa08uwMV9pPvTcDwg1RfndezJ5yWHENRoXBy%2BxJwkQb9MX9qgfIeAMd0xtuvJ0%2FAsBVOk0qmVNaUY08iWzB8Wa06eg4uiIMxAA4Aj7dhYqFOPuDZwW7wNtgsFWaFwFIY7mhKusSGmU8a52JxB246TBsQuX5IsQRE97HFEO3fZAmJbYws2D2GnjP%2B%2BULY5QsiZ8uGjkVPVNTsuQkZnBwhz4s%2BK8MMWBiPH7Cq49KvRvwsi0veAFqtjdtU1nIp%2FNIalwu5LBIA%2BlnuAehG9JYqIc6Mg0iLa91ATM%2FPUrWPu0Nywowy48c%2FawKoNztkJSQW6VoRGfEmxn5iJojm62lwvrXLSiJebbmzG%2Bfeq1%2FZjiGHYSMHSerc%2BfUT1eD1wxetXyoS9eJEud1IcGkQ%2FeAv3h%2FK55V7X%2BNXRKs2VzUkQv54FWb8aE5uLMm20U7%2FiP8PrSzf4OP%2B7veZsZk%2BUHwIZdPGVXYWzEBJo074iRIZIGbbdshcwKlbxhTDh4G%2BzzajzfZCMMyKxM0GOqUBVUMeLIQ1dit%2F9KkGvm7v2XqWIwiy8ayG%2FKVNVUc2mh6EkjiNiOSIcR3lHMJwo3gnnBPRtxZPfGyjKlf9rEW%2BLygdui5A68b2NHXFmG0FnOF%2FlvPEZOuuGsOHN%2F3F%2B5mQf9LBIuacCIImmcmW%2FvQt1kt%2FEbSaBKbN90Am43s9rbREi6nX2RgjmwlF3LOrzwEpQ8TXBQe6B6WAn2Mmi9ITFnAcLd6w&X-Amz-Signature=091d610ebe7cae42ff3c8bb40c992d1c64695ad4fffaab88e4bb6bfb5916f85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


We decided to not use a lever switch to zero out the project. Rather, we adjusted the 90° by hand. To run the Mario, we ran the code below.

<details>
<summary>CODE HERE</summary>

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


</details>

