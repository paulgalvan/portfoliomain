
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


![IMG_1394-ezgif.com-optimize.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/dccef08c-0799-4b32-9c09-2321476af891/IMG_1394-ezgif.com-optimize.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATDT4V6%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeKxnFHgnykVKBVPCxqfJ7vRwUalhEIETxK65%2F8MBx8AiAu9HzKY0J9P5fBkEt5cA6Otb4dwbc19FTXrBUdqKeJCir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMyroQ6FC12NB7zRV9KtwDP6%2FymeKenIHCrWAHIBdrYd07j1UuEJmeQMvh2TdCoCTL9W8dZvX0V5%2FVb7Qumxc%2BNpBsOp8KBGgCMwr2zgjYxMe%2BQMyDomVPrSY7ck7eKkU8wgXaqK16HImAuIufk85u36EpLSktNI8mdwcWwGagWzpDdC38c6WEKJXh2T8Qd4hDq6pKhk6Ovqr28fhbWNtqIJSaAX%2FJHU%2FhwhzcOy0YIRb0OPVNcBZ3qcZRjlxIAt%2BdIVqSX3RyOlMFA3hKgkG3qlAjYRyYARYMjDO%2F6rR1Cb90%2BCFlOS6p5M4dLs%2FdGiMWEPLZaOdY2YubQZdeY4Bp%2FrgYk1ctvBoXoxGOoUnJAKzaNh%2BMSGnugcLG0z%2BDihcPk8SkAXCuj47x3aouj8F112E2XPAJHdINysjBhP4uca%2Bgh5XrFAN%2FOyiqopCIFfbwf9rMjL04U6Uszsr%2BfsFh3iTaxeNPBo0%2B7YfEDQS9vD8UajCSbWVCBv%2Bih3Pt6AiEX06qmvJKVseckpPrgdMo70CaJojSmTp9paDyv3BmSKgxVK9rfXUOQsquylOAXQm5ZfVjLZxFe0svn533ItghY8C6p4517zCrs3Q3wIWnAaNRWInQuEotOXeIge3r%2FhUhDSViQReG71EzVw8whIvEzQY6pgGu2hh8YK2ULhk2C7HV7eNrv5SA93yfxxcY4S7rA6u8lTeuVBy7%2FXZLcIdzlAfDLZnMU%2BXR%2FKiwdlTAKc3TUxW9SLuqPj%2BLKNMYqTat9BJ9RQ7zTD7oV0WCFdNNnUcfSD0czDAoCTtQCHuOYEJgBk7hDayIRS0n3xDA2NcfcLeDAO7qlOU063SP6aIvborHnhCDHxjs%2F4g3ok2aBQhjalm55h8M2Lm3&X-Amz-Signature=a5b710aea76cc6ef036362e8081cfa5cc78e0823db7d284eb8e178de2b1df958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1396-ezgif.com-video-to-gif-converter_%281%29.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/a77793ed-d05c-4395-87b0-9b30a1cb4844/IMG_1396-ezgif.com-video-to-gif-converter_%281%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JB4JJF4%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3bO159O604zYlnCLL%2Fjn9Lv2obknGdQmbiLUILHBMSAiEAn76Mcf5udblzCckp%2FkmC77b1kQTkjrv8aZMSNt7rMooq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJ%2FMuZBLdc7nr2zrSircAzsJ1ZRYLj4jSgPObipKSrdkUkgUkKshzaRuduEsIZY9vu%2F2O2k2Y3iH6wOYw5O7gDym3OrW22qDELqolzZWPyktuerLt37QOLNrNk9ey%2Br9kNuloEn7nGKH9BvWULgctNAPkWnIa0%2Bq%2BIiREBdzRgg7Sy7Jp5KtoaFt%2FnzB5m77KEh82Twf246giP3mqWFS1N%2Bym5FgMVpkVyXBvoxxzY7dG9mQidYdx6w2weseYVoD1wfG3NAQYEnVlNNF%2B3W0X9E%2BIoNzHto6KD1HZKU4UMn6bgW%2FLxdcDt7Dis%2BnQS167EuZsp2bd6WhqDkmoN37dAS1ZSLZtYh7U8S6ndbgPgU2gP3qMKekEX6vTSX590V%2FzJB4D951ra3L5ai5aQ6LPYcNYQhguvbtS6g8QM65WSVh2dTj7f9JVc3qAmkWZKp2aEH66Su51fk5rI5BXeQDsvCBSY6MMDVGFkGzTsGMS6xQmFA0FjPywC1ugl%2B0iGTQsKFD1SkR6AyDQdShJuSvX%2BHVPOtYc%2B0dkO8J3vxRIQLOY8%2BUEAlm1fVbHlpKf4F5vGNAVbgFkZ%2Biy9izxm%2BCgdFgQb8gpz59swKMaP%2FFg3AHKeu5sub%2FriplRFx7JmPIukyVppD6AhtBr2kDMOWKxM0GOqUB%2Bh9qhP2v5CsMPsWrMiiAwj8STmnXNm%2FGh7TRrVK6LBM5kv%2BNK2AN9R1nYtRwWoxzRgV5SAcNapdt3o%2FPnQLuPY7dqucz1OKNjZtnU0%2BgfnwzcG80y4dpgSSzNpFkzBstiEXMEudG%2F861SXqK1c33jThS0uq%2BsF7h0so%2BJh9LbCmOicZCQfk8BGWmwaNcCtXH6snYd4Aagrt%2FpRmrpB0rxBzSQWs3&X-Amz-Signature=6151a8aeb7d68f42396e975ab99b2e9b31d7eff7f1a179eff807c7551d788135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## Raspberry Pi Camera


![Raspberry_Pi_Camera_Module_3_2.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/42ffbf5d-aab6-4bd1-ac6e-8e5cd16bbb96/Raspberry_Pi_Camera_Module_3_2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TYIZVU%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN2ngtq2%2BdV%2F%2F1ZjxRolp5UjaVzC%2BYObcw6zv8tf7WpAiAA8Am0gO6%2B7UOIoY0d9Kn%2BJoGEOz8opK5m2mFNuW5GnCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMxyhe4YOBaiNTdV20KtwDsuW1FTOHWv31Acc%2FDMAIptF%2BK%2BMCJLODW%2BhqXsGYMZEec70HzmZjhSpamXteEIgc2WO3PYO7iWc4skIF1avp7CLpGQcACHnDUUj6O3TSXLwh%2BOANcI4vin4qZYs9Ci5uTn40%2BfSECc0DauPjc%2BWAKwGdG5DlK7xjt%2BbOt9fzV%2BiTNeL4CcynNakxQ8t7ZpYKCdZMn4WxEd5yDiDjOdUEu7IjlQSP3iPDg9WgXvQFBe0kSkua%2BnKGhH%2Fqm9cEXKr4vJDcfq9OzGkhVPLOWPr27aIuhFQMLYA%2BlmT9jyKHWEq7NeRo4k2MFP4hWIOOh96pBkJa%2BSy6VCxv1%2FLpESJ6IM6QcvayPeTtjsSERw1Is8m4YBrVWPvufxNeCyuS4Oqq5vw1rH5qukw5GeyEw8Z6AnbDLhA6x%2FX3vdslwMCx8UwZSu7fvV7try0PfEBVT7b4x8H3Ca0AJcIvDiT6Y3eR8F85AL1Nm4tstbBXx6zDSgs%2F3Id5k8xpcbXHtnlfnVJIdj%2FdfjMtr6miWvBybbrCAMwIPydabtM5xBZtrLFqT9BhV17yYwJZ0U0E462W27QDc8kLVWzXrZ%2FAaVIm41iJ8mdS4uGLP2qX17BGmswI7W5F7PRfUqpzJDTeSg0wi4vEzQY6pgFmEkryq2XnWwMTH9xsMcGfMNDtPRiCUnunzw6oaPKYd95jmNhaE2PRpx%2FS0peldlGPDnzXPRXWvtNkKKY7BkPk0wJsAQwBn4AppKhAV540Xqol0Dwtk5P3RHsz6yLQlMhWFpN2Xm%2FfdOktCGszlAAJGTfLIDA77NeATvhLGzFZJhcq%2BLzT4IsXmNJAdzQvKXv3J7JwnM6A%2FUwkkJqRXtieSl%2FXtZUn&X-Amz-Signature=b1edc2375fc667e5f6c05b2f29bef79db48c6a8823d53a2a2731b28c6f880cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


We were given a camera for this project to detect a different set of lines. The camera is compatible with the Rpi and is a Sony’s 12MP (4608x2592px) Type 1/2.43 (5.6 x 4.2mm) IMX708 image sensor ([source](https://www.dpreview.com/news/4233987493/raspberry-pi-s-new-12mp-camera-module-3-now-has-autofocus-hdr-capture-and-more)).

<details>
<summary>A Snippet of Code to get an image from the camera is shown below.</summary>

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


</details>


---


## Car Design


For this car, we decided to start a new base and motor holders to get a cleaner look. This time around. The back we used a swivel caster. This way the front DC motors controlled the direction and the caster followed, supporting the end of the base. The grey piece was attached to the base with standoffs so the camera had enough room to detect the lines. 


![Screenshot_2024-02-29_at_1.52.58_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/d7d66596-9ac1-4d87-8df6-da6fc8a72154/Screenshot_2024-02-29_at_1.52.58_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTZOGP2%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqISvCM44QcrDj2kEn5y44fIn8uW1uxEv0Kt5bQkyApAiABsaZCAsEwgLLGgSuDfp7m%2BZMNa8nnacd1%2BYi0n06ZYSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMjbCwlvIJ1EeHt8w8KtwDHcZPMIHL11Wjlbc17kTJdQehqMZ8RYsX0wZCj%2F%2FckduEOOK50gy1kSm9d%2FH3%2FGr5UdW%2FeyDuCv9JV%2BCx4v7AyUiL8tLOh%2FowHG%2Bbtx33TCq8zNn6nyeYHk89HrT5ochLLIBrHOliqm8DN6BgaC%2FuDP2eARVO0m5wEy3g8MApHItwYIcgiH7ZrtvV84YpquWdSTtYHszDX%2FhumBhfRa9wVBGjBESQ1ocVgBapVkYo36QOPnECNhkMLegPdOJtEa2nczajPy1F64PBuZkAgIDcwjlUiLRZQsywklo%2BZDoHujcZ688x%2BnYOAAS%2F%2BsugHjCvCeHaTWSU4yd1Ev32t9%2BCZhfVwKsFZGDQlP62VjcOSLvr%2B3cDiI0WtiyYWY%2F4Zv%2FL4DCQd5C%2BOe9DH3jTp7Cf0TkOB4poHELTweE2WmKS1gRs3w%2BTFTxEOkNRub1ErGskT76SZfiwRck%2FdeuocNNnKTshIGhMck4GmlHEoBp47J4hdYzM9eqL%2Bex317Iql7kg%2F6Up4OxamVy3LmhqArjT2qE0kXuY2m9il84j%2BueMbsViUtsN%2BYFx0hX%2BFhvF5VrXpin%2F1G4i%2By%2BG43RD2TGnDUqS82kqo643vWFnw5YONHuf00UyqMDZwTrogOMw%2FIvEzQY6pgG1HJeTvKNBgVSmBFLDQwTpfwG%2FCFCqboBvfSYdOrz9NrbC%2BFUxALUdb5OyxK51XRIMoJn8KaHXbWNwto9of8lvIwDjyhfZU71A%2FA4UB16YJq7st0gZkDRUb3hj3GBW4Yg%2FWfYUJC7wyOic6RUpkl4TJmQrK3Z2r%2Fm5Mb5cfjE7mLyk701nSNpa%2FUbC2OPT8b9yXNGyIrWpY9uK96JtMz8SdJalyYpD&X-Amz-Signature=c10cba99676f12d1c71a709661a1ed544efbb1a858c33cdc7b0e45c5cfd44ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Screenshot_2024-02-29_at_1.54.47_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/87294c73-d8bb-49f4-911d-50c42b2f9268/Screenshot_2024-02-29_at_1.54.47_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJI6XUG%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUIa8QCQlltd7G1kFxhXPOCoMhjiVB9gWK4LCUCcdVkwIgaxetQdc9D9Hwp6QAlQr9QhjSKvKEx%2BZf1FJdZ0ORnwsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCLAXxz0xXosNqsYZSrcA5fta5AMLYysms9YEtvAl14jBjRgX%2Fi%2FCUKlYm1isOyFAr%2BmJNXAmt0ojzH2rraDQCKyOCCa4WBe1NOULPYUoueTrTL1RrPRTG0yJNOePP60eE884%2BKqqsmW4cDV5X50nfqRcdSDd9cKEx%2Fyw0a7SUjy41H%2FSoErTuzkiveeXi3P7tShoDQwNxxd4bDFUUaCJumt5iM5H1uT%2BQ3iqbuVI8aKiRYwafC%2FgM%2FoLZxBPBknZzfoogPSH7HK%2BGQjDdSSnxDyrHqaJ%2FPmvyT%2Fgigduv0wnWITuKJF2KClLp9B4fVuu%2FsOvQQXa%2FCEkJNxsJlQUIhy9w1y%2Bf%2F9HpADqPMmLQvCBQM%2FImAnS3YCYSWSipVoasYV0DtcJSX3O%2Brc3ni%2BaB5Id2BX1JUmtx8SBXN407QvRphu2ZgpcSrOik6tRCNIawH3l3c9bX4juSJw6jkhLTnayVdz8nD8peD5isOwh%2FaJBf8lNcbPEU2QZjP0k8DpDMauTIxZwAryW5MJ9Yp0E5xjzAmKn5W223tIH15%2BOTUHiQO6yPjq5Z31DZd8UVAxuUcN65OgBvT%2FSZncgHxlQKW9XKMBLPER7Blilo8EKlfozskAMu6amTMMrMQHhNNgLgUA7d3yCmA9OqWqMMaLxM0GOqUBUq10l%2Bb%2FoDvET8iw9j5J%2F3yObAj057V0Gd0bwRo8U3VEdwW88cXCSSmDKnBkKT0ee5rpx7A8mlfqoK3rON6epNmsikfySU7IegdTRm7dJjYO1VOJhxgWyvvalolY28AjEMUQQgYN16JPKY%2BGT3iZVwz9FPajAGJN%2BCBRQ0VIPAKm3pwfCHwCLpISh7CzmdWP4MCH3hnAiSLKZ2gYheob%2Bf0EbMF5&X-Amz-Signature=5a6a33b38eb524d5b662f1033427b0db4f3ea27095afe318a6aea646590205ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## DC Motors with H-Bridge Control


![Screenshot_2024-02-23_at_12.48.00_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/9cb64a6c-e3aa-4ee5-bef9-8f57cc4d4c92/Screenshot_2024-02-23_at_12.48.00_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TYIZVU%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN2ngtq2%2BdV%2F%2F1ZjxRolp5UjaVzC%2BYObcw6zv8tf7WpAiAA8Am0gO6%2B7UOIoY0d9Kn%2BJoGEOz8opK5m2mFNuW5GnCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMxyhe4YOBaiNTdV20KtwDsuW1FTOHWv31Acc%2FDMAIptF%2BK%2BMCJLODW%2BhqXsGYMZEec70HzmZjhSpamXteEIgc2WO3PYO7iWc4skIF1avp7CLpGQcACHnDUUj6O3TSXLwh%2BOANcI4vin4qZYs9Ci5uTn40%2BfSECc0DauPjc%2BWAKwGdG5DlK7xjt%2BbOt9fzV%2BiTNeL4CcynNakxQ8t7ZpYKCdZMn4WxEd5yDiDjOdUEu7IjlQSP3iPDg9WgXvQFBe0kSkua%2BnKGhH%2Fqm9cEXKr4vJDcfq9OzGkhVPLOWPr27aIuhFQMLYA%2BlmT9jyKHWEq7NeRo4k2MFP4hWIOOh96pBkJa%2BSy6VCxv1%2FLpESJ6IM6QcvayPeTtjsSERw1Is8m4YBrVWPvufxNeCyuS4Oqq5vw1rH5qukw5GeyEw8Z6AnbDLhA6x%2FX3vdslwMCx8UwZSu7fvV7try0PfEBVT7b4x8H3Ca0AJcIvDiT6Y3eR8F85AL1Nm4tstbBXx6zDSgs%2F3Id5k8xpcbXHtnlfnVJIdj%2FdfjMtr6miWvBybbrCAMwIPydabtM5xBZtrLFqT9BhV17yYwJZ0U0E462W27QDc8kLVWzXrZ%2FAaVIm41iJ8mdS4uGLP2qX17BGmswI7W5F7PRfUqpzJDTeSg0wi4vEzQY6pgFmEkryq2XnWwMTH9xsMcGfMNDtPRiCUnunzw6oaPKYd95jmNhaE2PRpx%2FS0peldlGPDnzXPRXWvtNkKKY7BkPk0wJsAQwBn4AppKhAV540Xqol0Dwtk5P3RHsz6yLQlMhWFpN2Xm%2FfdOktCGszlAAJGTfLIDA77NeATvhLGzFZJhcq%2BLzT4IsXmNJAdzQvKXv3J7JwnM6A%2FUwkkJqRXtieSl%2FXtZUn&X-Amz-Signature=2cb223d8470aa63c891f7c32ab88096247cec1238a9cb7501b9d0c59633a4c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Using an H-bridge's 6 control pins, we were able to control the forward and backward spin direction. We were also able to control speed using PWM, also known as Pulse Width Modulation.

<details>
<summary>Motor</summary>

With any electronic plugged into the Raspberry PI, it has to be initialized. Libraries have to be imported as well as values set to 0. The DC motors would not move if told to start at a ‘High’ position and later told to be ‘LOW’ where it's expected to either stop or spin backward based on other configurations. This was a test code to make the DC motors spin, make sure they work.

<details>
<summary>CODE HERE</summary>

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


</details>


</details>


---


### Top View                                                                Side View


![IMG_1448.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/8f69fb64-f644-497c-912f-482317ec18c7/IMG_1448.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU557WNT%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3xi%2Bawz%2FkrrOijOqrqMP3EyDoTQ6G7Oa1DnZrpQtCRQIhAOGnvWgD3bPMnHZewKjW6W74POfjHpZeteCrXkFxGJn1Kv8DCFcQABoMNjM3NDIzMTgzODA1Igy3zyksO80xt3y2oiIq3APTAAIQ0I34oPWx2wxclE%2FfC2TwPi2X6aUEXm2TzHoEj6wz3iKO4%2BmNX5wcVlYBUQew%2FB%2BvEhFxSM69WFEcDJ4vt0i1PZrOEHHatyUI9pvWP3zv%2FxO%2Bn1H39rW6oXolvFKHI71NHOEASVdzwENbhnHmbfuRPSq%2FDcxPUzu%2Bczo5VhucThxtuKm2FM4O8MM%2FCjJz9LEzy9bEbyWSyEzOcjYZ5Uu%2Byee6eMo%2Ft2Prgx6qaA68Zzr0jj%2FaGECWz2QKo6S3qUWZpF1pnnYWVc7jf9hOR2OeCprSpOrtRIfm7ObM04ldZM6VxY87ZAdv9avVuDnAkLVD5%2FBQr15TVLhZga%2F5MzN9pHKsFoYrFb2DzptM4e424ME2Q%2F5IF%2BSe9imsjEADvJmlaWYjhWVaibQ1nS2iDJg0K7EgP4ESSHZNrRqrsqzW2F0E05JDAae%2Ft6NLQgyOTRUYEQdKUzu7HznULQDZaVE7XdnMMSmYuMFmXdaG%2F8iRdAASKU%2F8fi8XbsUYCMFar5Pn4mqp1B%2BnFUQaiE15VYrLnKfpm9E6%2FxyTQ5S1kL0cBCtTiWy7%2Ba5t8Lz%2FhY4rCIoZr8x%2FWdUjThWSeDdUSJGdl%2FgJOsc7LyRdmpvxZ6QaeyDxDAjH3kpOHTDuisTNBjqkARVT1E3vnhh99EkkbODSUNYp24DVWrYdxk4uXdu3e6tzTzjg1KSCwOPEzVzjPzZmPolD6ypUPdnDIeGgOjAVGyCBTCvHSuhRW7%2Boxy0dKvGq0winr54TKVsGc8a9MRgnuY81HhhQd3t5etBHAFN3y2%2FLvQjb2AS6zHfwSgQaiMgxy2%2FVj6%2BXWsSRP03j8L7Xt%2BnzriB9p%2BV43O0FKUoFWkNszU7k&X-Amz-Signature=79223762b840326124ff682ebbdde6e9cf58b9fe99064ebf7db650859ec319e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1445.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/7637ddf5-3baa-4c35-9c9c-d32c96794253/IMG_1445.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAKLYZL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4T4eVRITuenrhqKH20FPDEBZwAmfLM%2BfKnt0nY%2FjrYAIgT0nyNIqLycLFYATX9aeNU3a3hgzsUyEL6hrMXCDVedIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGXGAlvVl39tSinyPSrcA80r3B2wBknKRyowOq8iXlzQ71km0ixILGJqAXD%2Brte0gxhIS8F5RVrsHkUrs8%2Byx1rjSXuaydaoqN4A5zs5dq3auJZwq1k%2BH5rKfNLP5HhSH3XoFphrV%2BHp2uZakXHNxYu0Wuy0dpscyKUCl511Hg2PHApBi2oz7LEBSitIaFIOb41%2BkA%2FtMK81Onpj%2Bw0MRFRZ0VwCx8PNTbe0eiRCpiezJNOsI5j6T58J616ozug7hl1VNgcFiaV5tusCOnCiXiiI1y8j7srmj1sq8Up9fJgSdwm3fZ1yHZpwYHJ%2Bvdfh401SZX2Zu62BsNTWcA1Qp5RL60LkL%2B2zTXxtglRyBAZxIWG0vso13eSgBF5%2BNDT5awrkvqaGg8oSEip0Udfj2K8ossBIfqJfwkC7TgW8E%2B3BjkjHPJ8j%2FvYt7g70x20iH7NY%2FiV%2FoYvHW4U%2BreMERHILSPgxG5vcbmWJBoyz29aAfV9QkBTAvutGBkFybxUGHadLg8o31m%2BKWOc7hV4n4Q2%2FhIHCZkfkN347vKjfFI9Gbz1KO7HZbDUZCmfHgL1GhRE0dfmrrluq7H8pbNpM91kiOkQs22gvveTf0aLAoagmPqVdG6MzjKpFgBtOvWjsVyO4RT%2FILAwE5AJ1MO6LxM0GOqUB99MoaEwq2EELEd1vi2F3r%2B%2Fb%2BSvLYBAY1d3sOLmcVM9zhcXoaiXX46j8iWUXyiY7oA9yHwWnJGICN94GZA33HBJ%2FxZo0O1CuAuNxyRjvemm6WfqyB5Z9GmIRvVe0DnKAdLy68Q742xk49tXG6NdB7IaKyPTTyoDxYc1fth5q%2FGB7bSZg%2Fl6scsJX8zgZpmhdL2Ft7Y%2F2dZTI8CpfMT0DXFtZKFA3&X-Amz-Signature=1631f26ad00e97f67cb73d80bb3ff4135e3eca6876c5172fc2a8cfeea065ab88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


###                                                           Bottom View


![IMG_1449.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/6da89eee-8f17-482c-a951-9e3f3184eee5/IMG_1449.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TYIZVU%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN2ngtq2%2BdV%2F%2F1ZjxRolp5UjaVzC%2BYObcw6zv8tf7WpAiAA8Am0gO6%2B7UOIoY0d9Kn%2BJoGEOz8opK5m2mFNuW5GnCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMxyhe4YOBaiNTdV20KtwDsuW1FTOHWv31Acc%2FDMAIptF%2BK%2BMCJLODW%2BhqXsGYMZEec70HzmZjhSpamXteEIgc2WO3PYO7iWc4skIF1avp7CLpGQcACHnDUUj6O3TSXLwh%2BOANcI4vin4qZYs9Ci5uTn40%2BfSECc0DauPjc%2BWAKwGdG5DlK7xjt%2BbOt9fzV%2BiTNeL4CcynNakxQ8t7ZpYKCdZMn4WxEd5yDiDjOdUEu7IjlQSP3iPDg9WgXvQFBe0kSkua%2BnKGhH%2Fqm9cEXKr4vJDcfq9OzGkhVPLOWPr27aIuhFQMLYA%2BlmT9jyKHWEq7NeRo4k2MFP4hWIOOh96pBkJa%2BSy6VCxv1%2FLpESJ6IM6QcvayPeTtjsSERw1Is8m4YBrVWPvufxNeCyuS4Oqq5vw1rH5qukw5GeyEw8Z6AnbDLhA6x%2FX3vdslwMCx8UwZSu7fvV7try0PfEBVT7b4x8H3Ca0AJcIvDiT6Y3eR8F85AL1Nm4tstbBXx6zDSgs%2F3Id5k8xpcbXHtnlfnVJIdj%2FdfjMtr6miWvBybbrCAMwIPydabtM5xBZtrLFqT9BhV17yYwJZ0U0E462W27QDc8kLVWzXrZ%2FAaVIm41iJ8mdS4uGLP2qX17BGmswI7W5F7PRfUqpzJDTeSg0wi4vEzQY6pgFmEkryq2XnWwMTH9xsMcGfMNDtPRiCUnunzw6oaPKYd95jmNhaE2PRpx%2FS0peldlGPDnzXPRXWvtNkKKY7BkPk0wJsAQwBn4AppKhAV540Xqol0Dwtk5P3RHsz6yLQlMhWFpN2Xm%2FfdOktCGszlAAJGTfLIDA77NeATvhLGzFZJhcq%2BLzT4IsXmNJAdzQvKXv3J7JwnM6A%2FUwkkJqRXtieSl%2FXtZUn&X-Amz-Signature=e751eec5358b772bf30f976492fdcf19d343aa1a75d16f8decd159601cca2599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## PID Control


The way the car moved was with a PID controller. Pseudo code was given to us so we could worry about the code and not so much for the logic.


![Screenshot_2024-02-29_at_2.08.45_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/2fcd6b99-0658-4e1e-a6a8-857130b1d0a7/Screenshot_2024-02-29_at_2.08.45_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TYIZVU%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN2ngtq2%2BdV%2F%2F1ZjxRolp5UjaVzC%2BYObcw6zv8tf7WpAiAA8Am0gO6%2B7UOIoY0d9Kn%2BJoGEOz8opK5m2mFNuW5GnCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMxyhe4YOBaiNTdV20KtwDsuW1FTOHWv31Acc%2FDMAIptF%2BK%2BMCJLODW%2BhqXsGYMZEec70HzmZjhSpamXteEIgc2WO3PYO7iWc4skIF1avp7CLpGQcACHnDUUj6O3TSXLwh%2BOANcI4vin4qZYs9Ci5uTn40%2BfSECc0DauPjc%2BWAKwGdG5DlK7xjt%2BbOt9fzV%2BiTNeL4CcynNakxQ8t7ZpYKCdZMn4WxEd5yDiDjOdUEu7IjlQSP3iPDg9WgXvQFBe0kSkua%2BnKGhH%2Fqm9cEXKr4vJDcfq9OzGkhVPLOWPr27aIuhFQMLYA%2BlmT9jyKHWEq7NeRo4k2MFP4hWIOOh96pBkJa%2BSy6VCxv1%2FLpESJ6IM6QcvayPeTtjsSERw1Is8m4YBrVWPvufxNeCyuS4Oqq5vw1rH5qukw5GeyEw8Z6AnbDLhA6x%2FX3vdslwMCx8UwZSu7fvV7try0PfEBVT7b4x8H3Ca0AJcIvDiT6Y3eR8F85AL1Nm4tstbBXx6zDSgs%2F3Id5k8xpcbXHtnlfnVJIdj%2FdfjMtr6miWvBybbrCAMwIPydabtM5xBZtrLFqT9BhV17yYwJZ0U0E462W27QDc8kLVWzXrZ%2FAaVIm41iJ8mdS4uGLP2qX17BGmswI7W5F7PRfUqpzJDTeSg0wi4vEzQY6pgFmEkryq2XnWwMTH9xsMcGfMNDtPRiCUnunzw6oaPKYd95jmNhaE2PRpx%2FS0peldlGPDnzXPRXWvtNkKKY7BkPk0wJsAQwBn4AppKhAV540Xqol0Dwtk5P3RHsz6yLQlMhWFpN2Xm%2FfdOktCGszlAAJGTfLIDA77NeATvhLGzFZJhcq%2BLzT4IsXmNJAdzQvKXv3J7JwnM6A%2FUwkkJqRXtieSl%2FXtZUn&X-Amz-Signature=95660da11f81b1d286c3a930dee4ff7c545b1fdc6a23e0b8900a00153d8d4c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


With that, the code I wrote was


![Screenshot_2024-02-29_at_2.09.42_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/b3091f71-5645-4d28-b3f6-48f8151057d4/Screenshot_2024-02-29_at_2.09.42_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TYIZVU%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN2ngtq2%2BdV%2F%2F1ZjxRolp5UjaVzC%2BYObcw6zv8tf7WpAiAA8Am0gO6%2B7UOIoY0d9Kn%2BJoGEOz8opK5m2mFNuW5GnCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMxyhe4YOBaiNTdV20KtwDsuW1FTOHWv31Acc%2FDMAIptF%2BK%2BMCJLODW%2BhqXsGYMZEec70HzmZjhSpamXteEIgc2WO3PYO7iWc4skIF1avp7CLpGQcACHnDUUj6O3TSXLwh%2BOANcI4vin4qZYs9Ci5uTn40%2BfSECc0DauPjc%2BWAKwGdG5DlK7xjt%2BbOt9fzV%2BiTNeL4CcynNakxQ8t7ZpYKCdZMn4WxEd5yDiDjOdUEu7IjlQSP3iPDg9WgXvQFBe0kSkua%2BnKGhH%2Fqm9cEXKr4vJDcfq9OzGkhVPLOWPr27aIuhFQMLYA%2BlmT9jyKHWEq7NeRo4k2MFP4hWIOOh96pBkJa%2BSy6VCxv1%2FLpESJ6IM6QcvayPeTtjsSERw1Is8m4YBrVWPvufxNeCyuS4Oqq5vw1rH5qukw5GeyEw8Z6AnbDLhA6x%2FX3vdslwMCx8UwZSu7fvV7try0PfEBVT7b4x8H3Ca0AJcIvDiT6Y3eR8F85AL1Nm4tstbBXx6zDSgs%2F3Id5k8xpcbXHtnlfnVJIdj%2FdfjMtr6miWvBybbrCAMwIPydabtM5xBZtrLFqT9BhV17yYwJZ0U0E462W27QDc8kLVWzXrZ%2FAaVIm41iJ8mdS4uGLP2qX17BGmswI7W5F7PRfUqpzJDTeSg0wi4vEzQY6pgFmEkryq2XnWwMTH9xsMcGfMNDtPRiCUnunzw6oaPKYd95jmNhaE2PRpx%2FS0peldlGPDnzXPRXWvtNkKKY7BkPk0wJsAQwBn4AppKhAV540Xqol0Dwtk5P3RHsz6yLQlMhWFpN2Xm%2FfdOktCGszlAAJGTfLIDA77NeATvhLGzFZJhcq%2BLzT4IsXmNJAdzQvKXv3J7JwnM6A%2FUwkkJqRXtieSl%2FXtZUn&X-Amz-Signature=1e6fa38c0db4100c7d6b091cd44ac7879c4148ad0a8061371eceea32b36f9976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


As seen in the image, the P, I,  D values are very exact. This was tuned so it could follow the line with not too much overshooting/undershooting and also has a decent speed. I used the black “challenge line” to test as it had the most variability and whatever .


It followed the course below.

<details>
<summary>Course</summary>

![Screenshot_2024-02-29_at_2.04.54_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/8811dae0-a528-402c-aae6-71e097513d4a/Screenshot_2024-02-29_at_2.04.54_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL6PXMHB%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt7mVJQma2T%2BRoW3UZY454i1%2FImzwTFMT3nEIrF5T8KAiAJ6MLFNkxnNr5T87rm%2FsfY1fdxFe8PRHFw49VSDzWRlyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMKx47W48LdgLNcKOkKtwDxOI3yf2RbdbUofUvqCWvKKl2hh1FiU9E%2FULu2NxNGnQ%2BP%2FZQNdHGLpSfdVXxuAaFDgiZzb4bT6FHNSl7YAbTRYd3d3Z53Odcd6gpknX2VcRF6uenArC3fMtM5g%2Fg83TVDIU1VXsGJaA1EjakkIcoyDsf%2FXTjAGg39JYov6GZWhatGfSlUni2Y6eAmboPRTjHigTm8wO6P3WNzGH4j5qo4NVn%2Bar0aIs5YEaIV1eOrlIFjSJvQ5mr0%2FSJ%2BnpeVYBwvHKlP5IUbmtqB5bLcqLLVwNRPafBIrpuGl578RxUYDZHLhbQXA3kr1GkSSZwXZseb2kxsIUjUcQeXs67wln3dnSH15Gmj9DtsOp7DZvyL4%2BM97VnpMznFFQ50FTyF4FRAAS%2FBIODhpnp4wvU5KW8t9or93b6QYXrhmUaR4mi7YEeaIIO0LnF3mqp1gV9sUHpuEgYaqX7US%2BbRZr8LM0NLt5dczAJw8AI%2FQGdsXPlkqyc2BmQs79IPKD4XXebdF4FFSZAom%2BIrSp%2Fas4LkYxpDTYLBm69HX%2FU8ccM1vR6z1B5BorFSdm85H1ITSKSvZ4bmhLRhRl3IUXyrHPt7rbBLYbvnt3sYPZqJCMBmQj2ssy86dx4ilRoG1XYMPswiovEzQY6pgG9%2BtLT0cE73TkZJQMEYmU4xuFsKtSvY7fXPgM9oEvy1ctmx519KuRn4DCCUfsVt9HQHzumvIGXo6w7OhafJ2M%2FCrUVoKBgMs%2FwiYrJ8hdovHypH0m8qJfTgu3kiLQVttqRWPiWX7c55FZYRKrDjPRNbM9AhX7Y791KGQI%2FDbqHtiJ4WUQx%2FRusKWmK5MwhSmliL5IFeACtxLKrne58%2FzVptJOaRwQf&X-Amz-Signature=5ccedc6ff0a96910365cca7cbd7112dcb6c41a9f859e36040b0aec2a311d535d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


![IMG_1404-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/18672737-ec4d-4650-8215-091d64e730d4/IMG_1404-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TNM32O%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXEZVNzSF51TTbsVDVKJG2HhpljkxTXfRONBi5KzltSwIgMCO0DANT4qXeAofWRJ4A9QI5ANFOI8oZ3SYt7F0NF1wq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNgvICdfw1vWmbZajircA5m9KhKpFk4PTzURC9T3JSjBj8REIkND6jrpeGDm5JYcNOUbzcAaWkrwXth77dYw5vqiQB2qWA%2B%2FLCCr5z0Fh%2Bww0oSmoWcEFtwU77dYBkSZNyxL5Se0Xl2M9O5%2F%2FHkY6CA8pF2H%2B28QWB8W4ZJ68m%2FB70mcIUENJF5mdiXammE3BRSbap3ZkiHjcYu%2BQ6OuT8ybnUi598Xb%2Fqy01HfT%2F1peoG9xlUJ9tlZFem39AzRdG6MPyrtU6%2FiGcW4Sz45GGxFR%2FNep3a0BTAxhJ7IqPb8Xtwr8hqnba7q9WnKUXsh4f%2FViN1BEHAokk5mjEVLSpE2aTjr1AwcXClSPmavLv7hs8YAJJmQ6pvgiGPcJ%2B2zaxYmBOgdhKkp91NrnhalNFWJAeCwgSX2UFyKJTdxhC5RrQ1b30IUqZORoPaAi31Hbw4luqogqkytyVzSosTB0JR8bbHNG12SCPN0BFKkaqJNSScgfclYUkfJlCw1ggZDBt099SMGyOtahRjHfn6zOnacAN6C%2FSroMwTv%2F19bmaM8zrtw2lAjaIGnQqRnXvtmAmXzefe4W9b5zfqGaxe7IxVUUMpgGZlqu1VXjBEmSEOfBlnGajYJ82%2BSwhRObXr2yqCb0aYszGRzyRX9lMOKLxM0GOqUBTvQMZUaBK23SnzBRJSERW9wFTUqiIbRuOxTjebvgAzzQHYIi7EP8BvuWq2RrkGc6q%2Ffe86%2FvMGhgG4ZDGkcipJ0kWfH0oJXPzk7pb%2Fmb064BSjDOGOHpUZfCYAwHq6pT5DAwNq2sisYAGP3zQmplf9xxPDxfxr5TK%2BzWy6olUL67ebFzBt%2BNDC5wQkHXzlg062R0RDtS3F1CHjoUUF6g8OQt2hl7&X-Amz-Signature=23f7c5f2488b29cb4657f176238e33ba5ebb0b178e002403664d55c660da75b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1406-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/3df88821-a2a7-4ffa-bb35-ee462dce0238/IMG_1406-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TNM32O%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXEZVNzSF51TTbsVDVKJG2HhpljkxTXfRONBi5KzltSwIgMCO0DANT4qXeAofWRJ4A9QI5ANFOI8oZ3SYt7F0NF1wq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNgvICdfw1vWmbZajircA5m9KhKpFk4PTzURC9T3JSjBj8REIkND6jrpeGDm5JYcNOUbzcAaWkrwXth77dYw5vqiQB2qWA%2B%2FLCCr5z0Fh%2Bww0oSmoWcEFtwU77dYBkSZNyxL5Se0Xl2M9O5%2F%2FHkY6CA8pF2H%2B28QWB8W4ZJ68m%2FB70mcIUENJF5mdiXammE3BRSbap3ZkiHjcYu%2BQ6OuT8ybnUi598Xb%2Fqy01HfT%2F1peoG9xlUJ9tlZFem39AzRdG6MPyrtU6%2FiGcW4Sz45GGxFR%2FNep3a0BTAxhJ7IqPb8Xtwr8hqnba7q9WnKUXsh4f%2FViN1BEHAokk5mjEVLSpE2aTjr1AwcXClSPmavLv7hs8YAJJmQ6pvgiGPcJ%2B2zaxYmBOgdhKkp91NrnhalNFWJAeCwgSX2UFyKJTdxhC5RrQ1b30IUqZORoPaAi31Hbw4luqogqkytyVzSosTB0JR8bbHNG12SCPN0BFKkaqJNSScgfclYUkfJlCw1ggZDBt099SMGyOtahRjHfn6zOnacAN6C%2FSroMwTv%2F19bmaM8zrtw2lAjaIGnQqRnXvtmAmXzefe4W9b5zfqGaxe7IxVUUMpgGZlqu1VXjBEmSEOfBlnGajYJ82%2BSwhRObXr2yqCb0aYszGRzyRX9lMOKLxM0GOqUBTvQMZUaBK23SnzBRJSERW9wFTUqiIbRuOxTjebvgAzzQHYIi7EP8BvuWq2RrkGc6q%2Ffe86%2FvMGhgG4ZDGkcipJ0kWfH0oJXPzk7pb%2Fmb064BSjDOGOHpUZfCYAwHq6pT5DAwNq2sisYAGP3zQmplf9xxPDxfxr5TK%2BzWy6olUL67ebFzBt%2BNDC5wQkHXzlg062R0RDtS3F1CHjoUUF6g8OQt2hl7&X-Amz-Signature=daba09c9e66bf705369e7363edfc59e2a8d2ff1ff7ffc9bcaf36a5a34dcd4ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1414-ezgif.com-video-to-gif-converter_%281%29.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/0d7438de-5b02-4460-8d8b-060c2a785d8c/IMG_1414-ezgif.com-video-to-gif-converter_%281%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKDSPP3%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ7SRt2hTh9%2BW2VraOxU03WRUstI4ThkyJkVxjRD0mvAiEAxxKjwvDDgmBZD3bvHsM%2Brh6qgTOURFJ0ohQJqeUVXfIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLIfyDy%2FEmG1zwSR0ircAwChYMTlO%2FGHo43Q%2B0N95AYhzrFg4wFlkj%2FGVNqTz4O7p48P2sYAkjZRlPaqqE9naSWVZc73l4n84bhV3c%2B1ZKmTO4EEOlJ7Gm1LbEJgx%2BhcV0Of0SUgth1TrM5OOSDrpb1%2BVCzyU15qAAhOhx8rBcVMfEvUEqpT76lFaP5xuW0%2BJgwAumZUia1rPoO1cw%2BdVQTFxrssPiL0AMRNc3J7DkXwJXpt%2FNj4xXeABSRsWW6wnyRxm%2FOE0jgHVniBT8dStlrNQAtCRAywxc6Y5k5dGQpbNohxJoCzhYiyuOP72pLtNZjGwnPejHGRUBN8i2%2BkRgkMk9Xnl2URHCEDj0G7kFmNX2BkvrpBckB7W41ZVTPKovkgKs4jXuB22F11pRPenGjwD2LoeClZvV42v75FfPrhm6vsqcyFCUP2cO4pELlsKDtTN8YQv0rAsrkKRgK0hjyqcsjfQLm34afetCNvO3lJo1r3zRBlaKzWsGZ741x7Ht33HlukDPsNCTs437WPSci%2BH3mG7NNS1NuLSpuGqz0KX1p7Y%2B1XCKqhoOg2PKnew546h8%2F7RbAziD7Epwzn%2FnJYgKI9AgxEzcYxvSA%2F%2FqFE8mD0DsqaXKJ29hb47vdH82hS33Ic%2ByjUH1cvMIiMxM0GOqUBwEAo%2BBLalCnU%2FJN2L7R1kMEhVKOcqKDnKJU0iuc2ZiS6RlltbOhBI5JVcl2yEWLgJZbvqAyjCFkfC4KklKmNc%2F%2FURW9KQwmOvehjFK8i%2Fp%2FkzrIUTbuor%2BeWJLCAeKZ%2BJAIrhH49nzuKx%2F70eBYyp9nQQuscl428exwT9bVkkQzeqojMvtXcK1tBKycyTzOZx20a2TN2KMPOkiALF8r2I6ITAjlX&X-Amz-Signature=37dc19364d6d80a6db5afeac5900d5fc7cfb918a7e736a225e02a254af352f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1418-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/0fb6cb75-c5da-422a-9234-f2e52382f619/IMG_1418-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKDSPP3%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ7SRt2hTh9%2BW2VraOxU03WRUstI4ThkyJkVxjRD0mvAiEAxxKjwvDDgmBZD3bvHsM%2Brh6qgTOURFJ0ohQJqeUVXfIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLIfyDy%2FEmG1zwSR0ircAwChYMTlO%2FGHo43Q%2B0N95AYhzrFg4wFlkj%2FGVNqTz4O7p48P2sYAkjZRlPaqqE9naSWVZc73l4n84bhV3c%2B1ZKmTO4EEOlJ7Gm1LbEJgx%2BhcV0Of0SUgth1TrM5OOSDrpb1%2BVCzyU15qAAhOhx8rBcVMfEvUEqpT76lFaP5xuW0%2BJgwAumZUia1rPoO1cw%2BdVQTFxrssPiL0AMRNc3J7DkXwJXpt%2FNj4xXeABSRsWW6wnyRxm%2FOE0jgHVniBT8dStlrNQAtCRAywxc6Y5k5dGQpbNohxJoCzhYiyuOP72pLtNZjGwnPejHGRUBN8i2%2BkRgkMk9Xnl2URHCEDj0G7kFmNX2BkvrpBckB7W41ZVTPKovkgKs4jXuB22F11pRPenGjwD2LoeClZvV42v75FfPrhm6vsqcyFCUP2cO4pELlsKDtTN8YQv0rAsrkKRgK0hjyqcsjfQLm34afetCNvO3lJo1r3zRBlaKzWsGZ741x7Ht33HlukDPsNCTs437WPSci%2BH3mG7NNS1NuLSpuGqz0KX1p7Y%2B1XCKqhoOg2PKnew546h8%2F7RbAziD7Epwzn%2FnJYgKI9AgxEzcYxvSA%2F%2FqFE8mD0DsqaXKJ29hb47vdH82hS33Ic%2ByjUH1cvMIiMxM0GOqUBwEAo%2BBLalCnU%2FJN2L7R1kMEhVKOcqKDnKJU0iuc2ZiS6RlltbOhBI5JVcl2yEWLgJZbvqAyjCFkfC4KklKmNc%2F%2FURW9KQwmOvehjFK8i%2Fp%2FkzrIUTbuor%2BeWJLCAeKZ%2BJAIrhH49nzuKx%2F70eBYyp9nQQuscl428exwT9bVkkQzeqojMvtXcK1tBKycyTzOZx20a2TN2KMPOkiALF8r2I6ITAjlX&X-Amz-Signature=4a64f94c99805417dca697e12f84222fff883a555c548bcd92431e27320ab890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1415-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/0b13d4fa-2408-4c2f-9fb0-07c2d60abc7d/IMG_1415-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RNXVRH%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl0NX06bXDK9iTXxJb1MVgGjLCkMhSaFY%2FpoO5id%2BWzAiAole1E6A8hmnvXcXMZWId5gEeVuTIesCs%2BfJsx8nLT%2BSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMsI0XCT9r8hZbvR5nKtwDoxWc5LlaypNiLPLPMUB6RPbm5oATL9oM8WHSXYbYUBEkdUKcN3uqE3%2B9f4gpO13dvmmLuqkc4voHYGpCJQxDEKzdAtr2iDSheSN21KiB8D89wplVY26A18p%2BhNtsMZBtwl2saoXcCzMU6B%2F7jjKhbsYU9UhS3OeqNym2fwPcE9%2FV5vdXX2SDUJsRxOs78i3TxeHQwAZQ6h1ElbhXJ9E1l0PMUxDgI3OTZ529cYnUJT3FMi3d3Ky7gHkmstaPLrNXuYndjv0yskgyZUDZhKHVnQR2MnYkRd8sNSN2l6KVMuOn9EWdbriKdRVHSXeTZwZvWo3nI5thcin7S3igRypWWshXGFkcU%2FWbbvkrVj59Q3eHK6s2X%2FUQb8ute8hXJyVmVQHMOfJl4sbZ7PfwwUuG8kgVbhEvIkKR%2BciRHxfkLASqRH1ePApRP%2BNHArEHUBVNgQgnZWmM1TAlJynQ2J7aBlZ%2FiKBrlvX82Cz6p%2B4FRY94cGk9zI8%2FDBnsFPw3RziIyOgLichlvygwiQVQzGt%2F%2Brw0zyR4nIv%2BgimyYqheSGNpXjhRMKc7aiM9Imb8Z1ME4nDE41ceKaEDOLGNd065tz2SAtGEwt9OHscdKoRTF5bX35K29gs%2F3gL9HFgwiIvEzQY6pgFtQfJHk7GaDBegcedatOfMJmn6c7ZKfr6JQLFLy%2Bd5XkW3lF1EXTyJXdjH291nRAdmHF8wZE3X8egQOkyXPNwaLyGGRNsHrMpZbYTp8YC%2BW4nCncP%2BxISPX2n8qrSivMC7cL%2FLlWaJ7TrBHawW8x8Ao7GzSAchmJIfli7IArXXLZ%2BwyPj9qD500dJOwhS2RcAxW6aM%2FqpUrR%2FX3OXCtoeQuwaI0P42&X-Amz-Signature=7f2db54a16c73c24e5940cd198c5e50fb2753473f46ce7d8dde0a04a4eb50530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1419-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/35b2f8c5-a026-4c38-b57f-ca79bdf4c04f/IMG_1419-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RNXVRH%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl0NX06bXDK9iTXxJb1MVgGjLCkMhSaFY%2FpoO5id%2BWzAiAole1E6A8hmnvXcXMZWId5gEeVuTIesCs%2BfJsx8nLT%2BSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMsI0XCT9r8hZbvR5nKtwDoxWc5LlaypNiLPLPMUB6RPbm5oATL9oM8WHSXYbYUBEkdUKcN3uqE3%2B9f4gpO13dvmmLuqkc4voHYGpCJQxDEKzdAtr2iDSheSN21KiB8D89wplVY26A18p%2BhNtsMZBtwl2saoXcCzMU6B%2F7jjKhbsYU9UhS3OeqNym2fwPcE9%2FV5vdXX2SDUJsRxOs78i3TxeHQwAZQ6h1ElbhXJ9E1l0PMUxDgI3OTZ529cYnUJT3FMi3d3Ky7gHkmstaPLrNXuYndjv0yskgyZUDZhKHVnQR2MnYkRd8sNSN2l6KVMuOn9EWdbriKdRVHSXeTZwZvWo3nI5thcin7S3igRypWWshXGFkcU%2FWbbvkrVj59Q3eHK6s2X%2FUQb8ute8hXJyVmVQHMOfJl4sbZ7PfwwUuG8kgVbhEvIkKR%2BciRHxfkLASqRH1ePApRP%2BNHArEHUBVNgQgnZWmM1TAlJynQ2J7aBlZ%2FiKBrlvX82Cz6p%2B4FRY94cGk9zI8%2FDBnsFPw3RziIyOgLichlvygwiQVQzGt%2F%2Brw0zyR4nIv%2BgimyYqheSGNpXjhRMKc7aiM9Imb8Z1ME4nDE41ceKaEDOLGNd065tz2SAtGEwt9OHscdKoRTF5bX35K29gs%2F3gL9HFgwiIvEzQY6pgFtQfJHk7GaDBegcedatOfMJmn6c7ZKfr6JQLFLy%2Bd5XkW3lF1EXTyJXdjH291nRAdmHF8wZE3X8egQOkyXPNwaLyGGRNsHrMpZbYTp8YC%2BW4nCncP%2BxISPX2n8qrSivMC7cL%2FLlWaJ7TrBHawW8x8Ao7GzSAchmJIfli7IArXXLZ%2BwyPj9qD500dJOwhS2RcAxW6aM%2FqpUrR%2FX3OXCtoeQuwaI0P42&X-Amz-Signature=c740127cd3cbfdfcb2dd145f227f16c88dbb37a0a49ad68858c01f656c43e05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1417-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/a614868d-6546-488d-925a-680888673b30/IMG_1417-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOTLYK4%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj2m7kq2O3mTxXhX5CoRtoGRm%2BVQC%2BxGgG%2FN35WwpAKAiADPcG39YZ2qLC%2BA3td4ZdtF95AF09bPgJ5T9Yohc3xeir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMizTLw1%2FedmMH2%2FINKtwDIwAFeIiFWMitXk5U%2FjFdAao8LOSGnNMhSv6nvNNl5TtdFFCx5XSX78XMkvZlTyLMsD0H%2Bss4KRa%2Fnlav57a3BxbL8%2FzF9AT%2Bv1OmhAXQmkFU37UN3tiaMv%2F%2FsKGnjEpnuTEQ8mkMMQkG01YAhgXnZEuMsLdhgiK8858p4HgO69W19IFT7Fgcj5%2BDm3HfuhJ4RPUjmG3LKQFdmY%2Bpo94Phvh7rtIljBp8NCtk4WTmD%2BDti3Gu1g2PHFMpXM8RZQCz4%2FSWN5%2BMACqyxZBlHWzQ0X7b%2BKAKEhhKFy76PD8KHri1733wtFzkPpTqHau0rgq%2Fwr%2Bp2YdPi0o90W%2BW2F8xDSHGskvB4I4LIWwGoWuY32eOEL%2FLtxpRcmOwX0%2FKbq3McUo7x3YDHWL7K%2F0R%2FKEBo5nBQ6jBt9Y%2F0ZZFsjceNNHmNDX88W0D6gUJUnpYA04N1ng8vixoiw2raWisoGf2P%2Fmq7QUON4jMBfd%2BA0NkvmuUQdKOBQqqohKNKQxvP8bFsd21YNCNX5BdO5BdNaK4STWvtuSs3FbnvcYZHSO9R8HTO31fND3cCqIOdoOfsQpKI5QLPTlg76F%2BtSpAQAT%2BW3HlvgAjZBDFFRsl7H%2Fj%2BbIyqXeoDvYlG9rrquQwlovEzQY6pgEutukrYqrtaTQskxpaP33bNfWPRUqqc20%2Ft0xj1FgYPgF223%2BPdR91ys%2F1JMls%2Bz6ZrldnIuWto%2BAhHZ8yxN9bNR0BbV4MwqUYJKPSoTlx%2F99js04OFduD9UB5ZP8GMaSbWpm3OtpKP4Zr9Oaq1n4XMe9Knr9I31tiuIRDeiye8x8YvvFoKuMet251kSISU7qhkxhbocd8zk8hdcI36HWtvDD%2B%2FJBT&X-Amz-Signature=2dbee2364624458da25b04c9f7457222971607b45acbf39f240a2cf9caa3f559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1416-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/f63ab75d-eabe-4849-8899-5b8f427d64c6/IMG_1416-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TCDG5VR%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSATmgrozgwyhczcz%2F2XH7ekpIUiFfa0qk0SfV2B%2BpowIhAJJ2HZ9m6SWzn0f6u0D7uB%2Bm9Jah7AUMKr82GugC%2FKfgKv8DCFcQABoMNjM3NDIzMTgzODA1IgzIVPEbZIDT7KAZWoAq3AM0TXEjJnsUTFYt7Czd4%2Fh2x47QEUgMtK1f%2BOra7ZFDi8JO9zqkPbfTwHbz6WCsiRnNTPwEBlZHokhBZMjvNKkled08pKEa9lS0bJ2NeJFMBz40doMrrKEAT1ZGr6EVVSxQ2AP4bRqs8xw0w5UQ%2F7ti1qtChobnNFL1cgyJMUQIsHRRNBnPVCAcpCdUt%2Bop%2BapV4XVmoYgfijK%2BfKuVw338G73GgFnAcQK5TY5eOgA1wt55ZCcEFuEjag%2B3126VD%2Ff2PsYQdQXGG4A2L3UZWsaDT2ED3JiRd6OIZ04WKOZlP%2FJfAvk%2B69KEGdilrxgDeawen%2BUXBm8Bu7a%2FjFmOlPjRdI%2F5Ny51whbR0NiTYySttJTc3Ky55iMIwdLzIFiuVgE%2BG8XsDJq7uJwFXApWc35mDsnFXmuvCMbD007IWXNrEsEWjYbMZZe9RqaSiu5MKcYMyuvddg3%2FsjuSuQBi2g2GO0c96NHx4T%2FVWx5TRzmoVsCT1oRzTvZxeGNQgSgLGJguwjMsFcrsTEbM4A4JW5So%2BbW1S4xWG2KUy%2FNiF8tHRSGOI43C4Hrnjh1DI4xsRQwYHzvUFgcC5XIJOI4icTz4pWj6BCK1%2B3v3lojMkIWCyysyXeLMBy3VNXPTqzDtisTNBjqkAYkVFJ6tsKXNzGsXM6A1vaCdBA5QcBb7L4CFv7GZziuQSNA4WfpebbHXbFefHYcNzZeWimDlhDujkYmSMBRr9oqjDj41DpBKiZIGpohgNdWVd3wsbrc802liDZdPMhZu1Qq%2BnRURMW6QXOZFmOon1GPHpbEggnoe7yrhekAs4hL79uvNdF0eL%2BoL%2Fn9n1sNws3u86GoMxuJlzWUHfYu%2BoJYrqJbw&X-Amz-Signature=42d70b4b8dd81fab0846ee22b8c3b76dfb1d616045271e6a365a7eb35fe2a68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1417-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/f6b33c5f-9d81-482b-9322-cb9bd9df5812/IMG_1417-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMDPOVQ%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSkncSVQeorE5wk7moUdtwZzQqQE7o24UsMpPQOIGNGgIgVUxzBjHLtqXhEIVIgfsUVsYnTM0XRvPOGOzg8CI0zFAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPVWRmEOh4vvOlyiESrcA%2Fp0AWJIJSlReZ3y8Th8w%2F3%2FPh6ZdkXcFLdItLJ9ouhgzCh7YTC4v83Tlj3ItXmz62%2BcRIEynmofIRyEzHAkLXLbqflgJiU4bHlqtQ0yquU6Mg8Oq8wjy3wmqU8oVTxH%2BheZHxFNN%2FYNV69UP04%2BA2lxsASQpDSIwCBch%2Fev%2FZGS2erP551EC6Xvz64gUBy0KMzmI8vbItCOW89JZbcS498d8M3RPrgAQ%2BKeMX%2F6iy7xRNdwIB%2FTQS1myB30PRw5vqLlNianUa21%2Bp%2BNn8ulUuM7Vq%2Bq7ge5xiyCwNUBn7eNm%2B5Lcbuu9dR8a0LQL2kxv%2BNS801dfKl7JswmN8zgEw0lBviO4BmDyEsGESQddZO2oxdUG2xqq%2BPB0o0oeHh3RTRV1ZkhYVgaCoqhLQk5x%2FnnAm9FAuhOkXXJ2CxlOJCQ4Guz3YOBOkn8vYHi7NYUD4mq%2F4eRKgMv9W%2BfinCw6SLV4ytmLFEA30%2BSaphi%2FDoW60Bzvx%2FgEUL3cNmYnWGNi1DBDmEVpIA9v3eqKOpG4%2FcXbpLSzOjnNJy3tMYiNy5553pxEyT8Ozx40HwHZP4ELweHkzGYHNPsCODD0BkXcE8Cy47llEDq6DUhauel3KEt8J1vb4Vms5Zg8pHKMNmKxM0GOqUBGFm%2Becxy1dGRf67l00EFEW0ZUBP7rvET55jQ8Az%2Bja57FGNGj8DfwNQO4CCrVV%2BliZYzDjPSlVDheyLQ54Fkxj2k9PITD%2F%2Fc10FgQ7%2BmFbMPwY8bJJ8mvE%2B8l4eWBIWYSm7G7fJytinmLJ2W81UD0XxMG%2BVkT4uLdo5cQlUBCgy2pdA7XOgMY%2Fe%2FnmSRHZbnqZl9XDPAiTqjtf90YDkSsqURL963&X-Amz-Signature=a2c7a60941f7e5c4f79020ef61550a33d2e223995194090e545ea5c84e8f4a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## Image Processing


The image processing consisted of different methods. Below is each explained. 

<details>
<summary>**Kernels in Image Processing**</summary>

Kernels are small grids used to perform operations like blurring or sharpening on images.


![Screenshot_2024-02-29_at_2.53.24_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/7a2ed600-d6b0-4c44-a894-0c16babdf350/Screenshot_2024-02-29_at_2.53.24_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXU5JGEL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGerPaI1S5863fFO1HIquycAJkko1D1Q2jBD0LGDoKJXAiEAqk%2BwhCa9YKhAUT689X0voJOnbokb0cO0J5jw3X8I0RUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPC%2B7PIfIX55rV%2B7QSrcAw1rnEgMLsymkXbvy9joyZqDBrAtLlN4eRyksR2%2FXWFnXP6UVnMghHv%2FpmsmJaPaRTvN9II5MGTSOTAeCNkX5ruPiz0SgzWBRrLZFrypIeNdZ0jbf0ZRr2aHVy%2F8VN199PcWtMywz78CIXbhV2AUwBIVbwbShzkiZitVh5r%2Bt1eYmw8IqnTQrmXCbmiE555j7iPRaS8sOEOBmJ8WuAwcGcOXJcu4fiJLFj0cxenKtpDBnxYX2YlYRzSqcdwRXNJM9e9fnjsDy04X8EZstkR%2Fi5pzBXCTbhOQWFSG9DdFc6F%2FLaeC4nzar6kyK6%2BHaJEkdJmFqFSfcLZHM8ECTd1j2Jc2MyuKE15KEsxsnsL3hPbzwuo72n5sR%2FYFA6WsEG9RnrIRL5n7Z4mGnSm2n4HP9jRsWwdMFPHljmY9T4FY7xE4Q8P38zNA94YpdKWe%2BxmKwYTB5ydhD3xSNl2QkU%2FgMgBmhLA39lk4YMyb286DVrhiUd8ZGXXCs5MXTIAdVmFuaELoT0eTz78862Rpx3%2BbNDXJ5pjnz7JJJQMcX7kobFri1IUgeo%2F55KowSjeiPgnjVEd0fnycVl9JqiDED92mcXogJBtO%2FsPFqfgnDS%2Bj3JEUwm1xNV4C%2BFQxVNcuMMSLxM0GOqUBqlgtLWoQYVQq5zW3tpUL9kpdn%2BWr%2BSpsrL3STnd1r2VIKzupziPfnh0BfbJ%2F2yyAAnPPD7R8ChbLvd%2FKHEfPM8ix3%2BfKBvTiOGhPzKnEUx6ztqgp7V%2BQr75AK6jAv2FVjYwzCH5e0gkWNefvwakgmrs1JaR3YYhwEm5OEgNfARlvBtrDDMczN3cc8ZkUWO4HYWjz2rjBZ7N1I8W2AqHWnEAuF0Q5&X-Amz-Signature=5475297b5c9e03c118d86ed0fb431eb16c23d286ff494beb6f420f330399dac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
<summary>Detailed Explanation</summary>

Kernels are small matrices used in image processing for various operations like convolution. This applies a kernel to an image by computing the sum of products of kernel weights and corresponding pixel values from the image and its neighboring pixels. This process is fundamental for tasks like sharpening, blurring, and edge detection. It allowed for us to detect different colors in comparison to the other


![2D_Convolution_Animation.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/38b181dd-36bb-4eac-82e3-f6dd9da2fc13/2D_Convolution_Animation.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYV5IXAR%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfNDyrqtOhA0ome3MZS23hHmfS%2BvPt5oMfni2%2BX22BHAiEAwaqOFF4qdW2cV46Efh9lH%2BIbDtcz%2FtuzWkpxisPETjkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOdysCklMtLBfUrAmyrcA5IR%2F2UY1P0ODzp5cQ4%2BvTRUO%2F9GsT2TiqdAKUZK6zy2FxZhyox1v7Dme%2FCWMTL8h9y5%2BYYT11fzlCvTe2qRaIyJYnmODlyIIkPzQjbFt7uj9hhLum7RVPjygJ8uP4UfzGWqddFTVqPdKnrtQmzzRdqyewz2HzOdPY29idXon%2FF7bNyiz12%2FFlc14xqksz%2BorwfYmRPpktwq7fGiyfgYauDny4xbDjAXgP6OAELQLyns9vTDnKs%2F5I4nZigSsFGwOm4XCUOTAY3DS6qKHdHZlOrvOpThb2HnTacOfsLELgD1rKVMC8FHq8OX0TEuwjErvGrK0vKCRtCoTDFSTB95wSY4qjJis5tt9D59uW3T8uR1QrlWOyN%2FTW564IjzFHihtsFZEfBbzYbt3HEvcIZt5gRj1lyhLvU7jiNgOKXagWPdBzhA7mU1x%2BYVGbcUIZu0P9BxqHM1JGAMFgkRIRcTdWsXbyPBMnuRYvTTTyrYUboAr8U5Hy2c8P0Z8fiylU%2B6WXNBth4%2FNMm8sdz2H7wib%2FVTBEsYWYJ6CPXWBncBk9%2FK%2FWC196PDinzLutvPiafcaTqGCSgVjQgvRQb%2BRGq3fEEuHGE6TErmKWW1nCLkb20FsfILkkZDieGn8QiFMPCLxM0GOqUBLTw5%2Bmr4fR4%2B6M6OKv5TCquxKIwbLambqtWKBd%2BV8XzR34rp7%2BmF9tp2AY6ee7Qm3wVg2%2BKWklf30BvXOzHj4hUBzzadj4sw%2B8LygImFZb4BqYw4ElUFyQKk9XcnBhDJZ5qsKiz8R5attp9HkXd10iOG9W6surYVek8V1v2kYgwtDBSotHq%2BrOUVOg%2FUMt1zqzqWnecToh8ub%2B3%2BoqE5WakjeRE4&X-Amz-Signature=9a609b95895afef3a9ba2a991809417607f20f692b8a552c8275467e7434f185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


</details>

<details>
<summary>**Gaussian Blending**</summary>

Gaussian blurring is a method to blur images using a specific type of grid, which smooths out edges and reduces noise.


![Screenshot_2024-02-29_at_2.59.14_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/e6d8ea43-4183-41e0-8864-2a12befad62a/Screenshot_2024-02-29_at_2.59.14_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66OFKGM%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk76uFiihibRORvxnOMNJB8MsxSMctcoODYkn%2BVJ%2FsxAiB80WFyi2AkE8XcQQnmChYwqE9FuG99PLG3znZJbhm57Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMMXjER7oZ29L3lBSAKtwD3r%2FQyDy7k4ds49VmmdBdeJez1YwQ4Av5jdHdTH2PIvzoGxOIOLz3jMRubjegkF2%2FRd7rgfdwZgzZgNbYnqoluUvjxS8r2E2%2FJvqJ37R2iUBHqUnmo0%2Fp03DNAugQ%2B1MFLEHKUY%2FWpe4SxIdcy5HUbL92Nl4%2B%2BD%2FN9IWA0%2F65qFe0SeBbdoDMfOrYF4p%2BmeSgFak5QJnHxNrm3e8MQR6lpgdEvLTRxQVBcUY6myffzdGpsiVdAN3e7Er3vW8FZR4TFr0FnJmExTz9C4uRCIfp4%2FJK9tmbYqFvGY0HzZ8gWEY%2BngdgaHZ%2FAK6eLVhhM8w9Jx1XkyChTHtGDdcOI718Gd767PyJfMteo77dvwmGgqK8iiBtrHrkrTaSQ0vb1VQTQ206zvHvSu40D2ku%2FgAtAys4AByDGqiy%2BhcmSfAAQrlQy2P0NybGCzO8IC4XkVfmLUTuV2XSIiHlyPMJDIjkPcb6waqp6o%2FntW581%2B0Hk6TX09tii%2BFQmFXVVhNAjoGC4sQ2Fm7D4axEgKltTsalIO8LmeRNmAADgE2Yi0i5my1bUfXW49bp5RtBCOesSvlc4%2Fiyt5LVh9RNY%2FU8V5G3AJ5R5gZGJnB81lR6S3fUutqZXUQ4v9XZSvigydQw14rEzQY6pgFmNi5Uf%2B8BeVabU8iVnv9TpOPsrXXHEITvkMiD7gV5L5iFmiXUdcAZJ8qlGrz4N%2BG4LZsYM5tQ72t86XPvnqBiUTzmX3fqAUAF4%2FIDrFhJ%2BooqhpbigLi8clvSvMBm1Z8es4dZX9y94ugshLC9wqTQTEY3uR%2BxYjnSQNfegtpODjkikbjdzCfI4Lzwc2TpZk5e%2BtgDTiz4zPOpFWgr7Syou3mSmxbI&X-Amz-Signature=31ab1e3dc384bba7560d7917bae083d4a43c27f74b18a047303c623b60751157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
<summary>Detailed Explanation</summary>

Gaussian blurring is a specific type of blurring operation achieved using a Gaussian kernel. This operation is implemented in OpenCV with the **`cv2.GaussianBlur()`** function. It helps in reducing noise and smoothing edges in images, acting as a low-pass filter.


![stone-balancing-blurred.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/a70b3a51-87f5-4855-910c-4395cc18db68/stone-balancing-blurred.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TADBFOP%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9PIP8k4Mj%2FO77FU9rN%2FC6a88NP64O8z1mjF0wEHxI5AiA56b92hAjewMDcZtjyC3oBklbY06D9DrMk5Hp%2BhRMgqyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMjZEDbI7lzJ5LBEObKtwDKHCIcWL9ya7id0O1EJgynbD6uT3TbFrRDecnspWRbJbc3dySVSjvB%2FTnITGYlVdLDNd3goqxzw4wboQrkL8VcthCkZnosNg%2Ff0%2FG4UhQRqUODOuPLdMXcQ0eycRnxHBZdJdjYTlNduwX8vCK%2BNQ4Au7kLEZfN0HmQ7tuaomNAW0O7QrUk7Y9GKAil4A44rPVinUqP95gS1IwtVRry1nzC49w18JAIFVxGvExJQBcS4FJD1g%2FBUXELgcQw%2BqCiS26QPC%2BQdUIui%2BYnY0G9tttwQGWcmaHzohpR70M5JiYoGTOrZ%2BjIVg5hhApu59WOSeLnSqBFoAOx2cusyGZ08k1BM1vgfRCK%2FNNpzyYPBj49zEBChsaSFfEP1i4yBPpBHeph5Lq8tQroxBTAVx%2BW3UX14SzKZr3j0lMB5hyGE4Zjpvwz9JMXYkEs%2FhkxPjbTHgNuwKa5N1X0YmhODY8RtmUEXJ8cKmqGQ3207O6DJ4%2Bhx74f8g2P88xyNMtAheYijrKeQ7yD3suTJi1zsSxMJCaCIc63zt3o6thjgfKzMwmLnuo4yvFZHwekpWj%2Fg9a3hPu%2Bj5y7frkVbmkwr9OQ3enV3tfBNyljGbZgQFC8mQpJbHSj8ZpCevMbjxLsRcwx4zEzQY6pgGov5fSdRqwwRLowyLg6m%2FioJXDBPGIgLfiLYkQnSKxJuh9mXXI1QxkfaVAr3GQqVL8RCJZ2KzoP%2FYx%2B%2BK8CX%2Fmz0gmfUWJX4x1N51zeZqvnE%2BKBWULnN%2FEEyTgtsZiJcCEpyh9t0TdFERlzD1ax4OAKVF3HjqYwI339xtXHMn6u9VVLPLwBZVGkFsFUzK1fZXvGQTbikCO8TiaVXfbA9f3AthpmRI3&X-Amz-Signature=2c99f13347d0932750cc7d33b096f36d70735ea0e4fd6652efb948b88e81b1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


</details>

<details>
<summary>**Thresholding**</summary>

Thresholding simplifies images by turning pixels above a certain brightness into one color and pixels below into another.


![Screenshot_2024-02-29_at_3.02.43_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/744d3578-a51c-4716-b62b-f37ad791ebcd/Screenshot_2024-02-29_at_3.02.43_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MM5OL73%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZE8ucCLFj6WthBpjhYTurAvbkjKGkQyjz04wbZET5XwIgQgrIXMZECdBVROz2RCIgFsjCb1RHd4prZ%2FQsDV6RJ3Eq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDM4wLnMn0qWoatSoSSrcA7Lj9ujYhYPfRFtlCk3X0IiF3tBKYBW%2Fsw67Me3ixUEi68rpQl3nuzokTxVxyD5XkJsdzCqb3BnP%2B2830scJjVg8ZEARfHMVte%2FVQH9EyxIdlIGortPwDtBIzlVbND3XYDWxB4Dykx30yAYR4yomunkCqYSGZqaiDyfPmeIEAVr0Ats3AwkZehH84sc6rz8Cjki2hjsCAWTDqe4SRoKaROY8LHQhBeF2fpfdW3vcfrr1eKiDIxz7NXZO1EnwYQWz%2BhRlvGI1YtTtp6ZL%2FhksSsd95LppwRW1fsATgALMy%2BW8IElz91cZMb5hEUwKsdfVohv5d%2B7jrGyRUI2EWuF6Vt6v0TV4Q7l04bnfGJHTJczVgWNISaRqaVgqtbkyy%2FyjoBONCevNR93kppMUpM4TDlI8hUjFvZWX9HIoonOYAPN3Qtf8J%2F2Rb72AyHtSLYmmndZA5SCWTriDUc8fkLDCKtFxnxXnVlX5v4n1DsNTSbBrrEfdVpmqz132oPiWVtmhgvWHs1csQhWg0XwHG9Y5j3ASFepUZmeMBY%2BlpvSz0W%2Fu%2FwD%2BrcMVZ1U6vM4lCHbjvGvty3apnl3zWvnmjnxci1T7GpHoPi%2FMvLEYSVZYqaTB6rjVvfU6jSCBIWaPMIqLxM0GOqUBgocFutU4hY95bwUJigLys7JdtbiLEi5ls5x9JGo3C9L8sLS7PRd87bjDWcI6IkaQz5Rq4aP5n6T6JaEo%2FnimwFQaTOJ9vzvCZH68yAtszjw0x6OwbtHV6LusojUZpWYMUSy%2F%2BGmZsaM42jF0bKQOfq7xqliHbWtlvr4w1mjyly%2BJgxd0%2FT5sNE2Ra%2F4VQCId%2BZxgDvdlQYEqP%2BccejKDX4WKMSRA&X-Amz-Signature=6ccb4c43226d34cf589793d747458127ff0693abf22624d76edc70e0f3e01e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
<summary>Detailed Explanation</summary>

Thresholding is a technique used to create binary images by dividing pixels into two categories based on their intensity values compared to a threshold. OpenCV provides the **`cv2.threshold()`** function for this purpose. However, it can only be applied to grayscale images.


![thresholding_feature_image.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/d80aca23-e0d8-4e87-8efe-bc52ed627d36/thresholding_feature_image.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQWSCEP%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKTkBhEgtfY67UmW%2FYpcErtMVAtFRnupR91ZfUkM2uwIhAOofo0%2FQw4aTd6BI7B7vWVbaBupT9gJ9UiY4Be2QcCZVKv8DCFcQABoMNjM3NDIzMTgzODA1IgyppTEr1pQa%2FMSe1PEq3AO%2BclEKBZaDfMDbYA3lyOtZgONhrtN1MOpsA%2FdtyNXw7OToqBatmoYBAuCSOtjHkQyEaD%2B7mRXL1oWXrl3FUumOpy0h9Yu9RWppHm4FDTr1M6W%2FXc4M9r41IDfe7oh95irSdMOmZ5MZagAaDSWLcZeJ6nNwW4H%2F3u1DbPrm5YOHcYAuwy8FqzcM6nSbBTPySiRBNRUnYeyiItCtOEMvX3dAaFuCnGRA9K6MkebUDywjOI2b7pn2U95gjiI7hurVMDJNdO8OeW5c0zfbM8Aiv9JtrKcvyMbaT99ONXbvf0kyW9%2FrBO7fGl7oi3awH4VyDtQBCXdYUgho6Z9lDHPp2I5%2FbJyn6yGtaumKyXnATSb1hotwyPEjTBO9%2Fir%2BanJt66ixMxoUsVAsvuHcfqFtbgzwYQyS8O0r%2Bp5tizCN4WrLxgQs4DsPt4YYMIJVjCaAuWOJq6Y5hTNgIkqcY92p5OE95J4jAx0aFIJ0HZbxid8X6xAVSb%2FrnMo5rnnHrc6Atvy78E7s7GzCyVnD56PP2bEubukDBz3aLAhxbyEr2rDsJuPLAhR2rm82BhtYv5qT2sgEvzmY0%2Bo6yClvWBmQ2I9Ux7%2F5odD4McBnnFxH3Y59EsU5o7FSgXKxkFS0AjDXisTNBjqkAXzZmXsYYUdn%2FwxOBz6S%2Fn8Ikn2jcWRJDQe2oZJGPpXgL9aKRthTlrgq0jIlVV7wzOLETiR3F6tabl48ldKbCuDxaqSpIGm%2BWNB9iAi1IkZ4Pbzqx2cDdh9B7eYh2BCPKKIYOmXF0UkKlM41xCLcwOAutLeZdFriT8Pz1WwjwGN0xhp7DEIaac3zqiPjRVWaH6MNpEJQO45uMgVMGwHoW49ILO%2F1&X-Amz-Signature=926eee346bc70029e7b2dca77acad6e331f76d8db176998fb85dcd3498502e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


</details>

<details>
<summary>**Contours**</summary>

Contours are outlines of objects in pictures, useful for tasks like finding shapes or detecting objects.


![Screenshot_2024-02-29_at_3.04.04_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/e4fb213a-cde0-43c2-8ec5-1931598c7dad/Screenshot_2024-02-29_at_3.04.04_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGMDCJB%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCCKstrWIwbABe%2BpiAO%2Fmfr6nbNm5IeSj1G%2BFXPpkIqAiEApuZ6zX%2FredYeaVitMTk%2B8LstK7v16kCSiQp2gDkSiq0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLPwKuL1uC%2FvB7uBKyrcAw2QBJz6Mum4Osa52klhctaa8G8YSclKxQIU0aoCqZ7XZoyaBpGglyt7V68veIUGL05t7jhupJv1kXxPDFIug6d2IRjkwvmXpSzK%2FRIHDxt3ghAtOMurg1e0J9Zo4yjTYrOq7%2FuXS7PXEn8k4BGqEZI06zdc3HSIExvt43XiCvvuQ7HDJ9Rso2elD6zXkvwlk9zfgUs1C3gEZykuld%2B2FLGG7V8Z1c9eweK9pw26DG%2B6vVeDBUIl7YgqIE0AS2A%2BEwGCRvbOhAlBqXFBiAjWbFe5h0E9oe5hMUWqInX6WmP94hPSxa8hojM87wi%2FEhGdS8qw3UBDywcNfIUD%2FLXmkNvlP75r34dM8irjs%2FgQwiHX3NeyEsmc7hw9tZ42o96orFq1zazCRvrBAjwrqvwpNF4Liyb8ETFsRWg7%2Fnfpprq5wbl4p%2BR3FDpVp5pCEN%2Bbh5dGXUSVt8mkFxXZPXlHUeaUqp40PFqPjOvisgUe4IGSJmP6pq8gibT2ix0rgFO8ZFTFyy3ltxJTWdcKT5ynctZsHhmjFSl4I8Xb4ErXvIw3DYyxmhZCqHalOE6tpre0X3OGa7bzXMg3ciCHpwEwg1wDti1DYwYRsSjlFF6DZpgtp5%2Fk%2FRQOd52yUE8hMLiLxM0GOqUBsKkLrikIqHguvPXi%2Be0rIngSU1RJu%2BoC2GZv5VxR6ku6K2xNUKtmg8OtkzM15orXqIHIIha2o%2FkluntW7UIhe3hyJz%2FXDZ6OY9TVPJsyHVeOqIykVwuNtg3cTAMtq9jw%2FGqwXKoRBpuW%2Baj8LOQJyRuoaOvIxEJdm4%2BgqfP9dFx4exvoYRmnSwmlp8YXwh54ULzm1Wr0c1dSLK3378CGi%2B%2BuBUEF&X-Amz-Signature=11949910ec182b97e99768973160b005e67e704b1602efe0e0d29a721652f881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
<summary>Detailed Explanation</summary>

Contours are outlines of objects in an image, represented as a series of connected points. OpenCV offers functions like **`cv2.findContours()`** to identify contours and **`cv2.drawContours()`** to visualize them. These functions are useful for tasks such as object detection and shape analysis.


![center_of_contour_results.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/d5dbcac5-e6e8-4745-bf89-a96a098aadfe/center_of_contour_results.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IMAV7J7%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqf1qhyVkxnj1680UR6%2B1Faym2%2FhQZkvs9R5HsZhajLAiAqIn7uuapnPmItDjP6IWWfytmOBgZgGHfgCE%2BVBeZaRyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMMSn1SKiR9QGCnOYrKtwDJM9ykMXL8khiBvuWHTLaYbe7nwqZd6M05qyR%2BoUfriaqTY5v68BnMrEhNn5kumO9%2BnHldWJ%2BDKqI%2B1KYSVs6u8wMlwG8wNMnAE3A9x6%2FOBqfORkWztqmqDv9c4Ry1HhyI9sKUOyBz%2FIj2eNSTF9opPWxYswPYNjU3ejDwqHueOFhyaA8KDy3WmUg5pWzpuiOpQj01oUOZkA%2FKe%2BwRLE4XIXb0djKiUBBp5I1lEmp%2BcTLHuJT2SrPMgo0n9xaAqk9FPOLj96Bqg7Xg02cHZjYL6ty7ymeujdfofEUQ75T4I2ryTNekoUXtalMhuAcmy9Tv2Usrvrbb2Vg2Zyy5Cg4EBWOXMsh1o6vBF1H%2FFyqD94CuKbf2sRnDql75W8Dz%2BXuKOKTSlQVYa57YXx%2BNhRQys2ZmFWjKCUYN6s8YcbZlP0REVwbrpiV8TEYyvyNdVLf5eEMJhUpwjr3E1IBp%2BcG8gfj2%2FrJe7CRlg%2FeuMRYFJc7FC0fftuburYzWdhKOPOxMq5funQkbdZg1t5nPq2Py9fHaU%2FHJMfjG%2BSfTY4ItKurc9HwzGVI0CgMW%2B9h2%2F%2FSsmwVJLIkGFIAxfaiJbAFZ4jqLz%2BgRDbVyhU%2BtsEhQ%2BB63W%2B8aUoHOjDdZyIwworEzQY6pgGHjR7hyH%2FusMFYPwg5a%2Bp8LsQ5mWl8XEfAHJ2c%2FD8WwuJgxCMVrDWtEPkfCPJ01F6SqCPFbPAb5Czc9y25MdgrrwdhBX8DFrg0hVyWyKEWEnN5SSXVzjCs2506%2FvPgowOZ2%2FZaFzpZ5G1M9POZvyLc3uC%2BEooWbesm6x1XzP2gFO9tiACzFHnWsyNCTMi4gYc1GudPp%2Be2WDhnzIPY731phi5z0ure&X-Amz-Signature=e430cc85d504d7e7d69fec756b80293443dd521d536a3190403e256413b21e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


</details>


Using these different methods, we were able to detect the line and use it for the Raspberry Pi.


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/acb3513a-a06a-403e-bc71-f559bc64467f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZWAWYC%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyJ9gY9r4G7nITLk01CRTG2s%2BkRsUQmb3ta4Siz3burQIhAPB4r9Y1t%2BZ%2BJIEmSL3Pa551z%2BG3feiDfKRGZCnPO9kMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxTwzMI%2FjeVtm1Cskgq3AMKsRAndeOmQip8%2FF7kdGtTmyIuGNNS59G3%2FUmGl4umxsr9XUXOZKIT8t%2BQsGh4MwzuHAXDlsWRZXQciTfYOc%2BDNM0m0IA7Z92UDNaVcSLcjiPp08nHahMbApJULv7jDxXPMfjSBXVU76WDMdf6cateVPIuNWmJFZp5sicyhboN76AqdU9BPx8ibvdcIada%2BX2NGkHTVfPm3uSD4LbU5N6GM%2FugES%2F5fTV5mQQZugEUszGIzsMRwlDoguO5VRquIoXFOBdrTQyXkryw1Ah2j6UMwybtka6Nc0m0MY%2F2CoMKd6dVf3zACEXDfAztDd%2FDxtS9%2Fkp0zaWJ%2BwpOMVRSWjssijxmfokll5sNY7BplDGOfY9IZS06xHtHy77mlVGXmFMrrG%2FwTPwKhSGlfKJApZfRtft%2BiDuQHvywUc%2BlKHGnjzHbcCkzGJ9ukLzNsf0cBXcbMRpy36JL4nroQY4HrP6jY3yK0Bjd6rNhEGr3Cm6n7exweXv2imibDdAVzDIsF21Jq7bFaigKalt%2Fm56a7t9k2ThgnvtY4pRD6j%2FU8NvQdrVPqW733%2BCcuOK3we6%2F8BRIFe269lDqpS8yim%2Bos%2FmEZk60SYBMmT%2BKiA4MK9jk92553KFphFlN8qXggzCZi8TNBjqkAcwzO1Yy%2BuLGHSOvB9CJXj7YbQ6yPDXWMzmS0gHeYoDtzDgEPkItSMnqsBN0SpJ%2BuKtXwS2lxIxaWtoJnzzWIOQCvcsHSCHQjoxqSxLQ0akTFlhJS2Kvhx6citf5P1%2B9SnhJz2R%2FQ97%2BStX%2F9moTuSjo71OKChUOILSBwi6GeZMjJQOoqgyEd3hh9kSbS43Dv3P0m2dSjK3CVaWWSp2zRLEmqMi1&X-Amz-Signature=36d325cbf54908b9327554fbf5fadf7237f6e7f7dc42ea2df94869a263990d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The red box is the line. The camera captures the image to the right. The line is outlined in green, showing where the line is. The purple box is what the RaspberryPi sees. It makes lines intercept through the x and y axis, giving us the center. This is then used as a variable for the PID.


---


## Electronics/Code


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/27de9da8-35b0-4f7f-8254-4516c1c8be14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TYIZVU%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN2ngtq2%2BdV%2F%2F1ZjxRolp5UjaVzC%2BYObcw6zv8tf7WpAiAA8Am0gO6%2B7UOIoY0d9Kn%2BJoGEOz8opK5m2mFNuW5GnCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMxyhe4YOBaiNTdV20KtwDsuW1FTOHWv31Acc%2FDMAIptF%2BK%2BMCJLODW%2BhqXsGYMZEec70HzmZjhSpamXteEIgc2WO3PYO7iWc4skIF1avp7CLpGQcACHnDUUj6O3TSXLwh%2BOANcI4vin4qZYs9Ci5uTn40%2BfSECc0DauPjc%2BWAKwGdG5DlK7xjt%2BbOt9fzV%2BiTNeL4CcynNakxQ8t7ZpYKCdZMn4WxEd5yDiDjOdUEu7IjlQSP3iPDg9WgXvQFBe0kSkua%2BnKGhH%2Fqm9cEXKr4vJDcfq9OzGkhVPLOWPr27aIuhFQMLYA%2BlmT9jyKHWEq7NeRo4k2MFP4hWIOOh96pBkJa%2BSy6VCxv1%2FLpESJ6IM6QcvayPeTtjsSERw1Is8m4YBrVWPvufxNeCyuS4Oqq5vw1rH5qukw5GeyEw8Z6AnbDLhA6x%2FX3vdslwMCx8UwZSu7fvV7try0PfEBVT7b4x8H3Ca0AJcIvDiT6Y3eR8F85AL1Nm4tstbBXx6zDSgs%2F3Id5k8xpcbXHtnlfnVJIdj%2FdfjMtr6miWvBybbrCAMwIPydabtM5xBZtrLFqT9BhV17yYwJZ0U0E462W27QDc8kLVWzXrZ%2FAaVIm41iJ8mdS4uGLP2qX17BGmswI7W5F7PRfUqpzJDTeSg0wi4vEzQY6pgFmEkryq2XnWwMTH9xsMcGfMNDtPRiCUnunzw6oaPKYd95jmNhaE2PRpx%2FS0peldlGPDnzXPRXWvtNkKKY7BkPk0wJsAQwBn4AppKhAV540Xqol0Dwtk5P3RHsz6yLQlMhWFpN2Xm%2FfdOktCGszlAAJGTfLIDA77NeATvhLGzFZJhcq%2BLzT4IsXmNJAdzQvKXv3J7JwnM6A%2FUwkkJqRXtieSl%2FXtZUn&X-Amz-Signature=f475061582ade450ce8c879e98154ecebe82ed50956969de9ba0def2ebd8be05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Above is the wiring diagram for the DC motors and the camera attachment. The code was a PID system with the source coming from the image detection that contoured the lines. It followed the course below.

<details>
<summary>FINAL CODE</summary>

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


</details>

