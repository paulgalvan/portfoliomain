
## About This Project:


“The goal of this assignment is to replicate the motion of Mario sliding down the flag pole at the end of every Super Mario Bros level.


In mechanical terms, your goal is to convert rotary motion (from your motor) into linear motion through a system of linkages. Many different mechanisms can accomplish this goal and the route you pursue is up to you. However, you must comply with the following constraints:

1. Your mechanism must have at least 3 moving linkages. Stationary/fixed linkages do not count.
2. Mario or whatever character you choose must move in a vertical straight line for at least 10 cm.
3. You may not use slots or tracks to keep your character in line.
4. Motion must be powered by a motor (i.e. you can't rely on gravity to move the character for you).”

---


![IMG_0907-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/62947972-5d5c-4ac4-9dc9-e3c22f0c1b40/IMG_0907-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBE3FJD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqhn1K%2FHIGrFgx7d6kfHOipy3r%2FnMRRWGoPuaMsFFxDAiBLz2Lo69DEfD4yi%2BuRN1UNk2sdo4oK4VwxHKBOoc%2Fvwyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMl4XVTaKtj7tkOaZwKtwDQqir1L284D9zV2Xx8HcSpjJShgww2AhyDnXkLi7ydIVmBaZCKz27oJTWbj89aDQKULJhlb%2FwtKUjau%2Bambio5eqSQZsfOH2hTLQ7G3T%2BuV0yKZ9SKexB5RWtICsERlBVs8MMUeSXdxpXd5rcuIhCD60UThEAbiEY1g5UyzugNciye03CKZ%2F%2B9dGFVxbUNn%2F%2Ban99tc0XnQHxHx8coLa87jrS%2BxGGfvhAqhWImHqL3%2Fgk9H%2BB344hs8B8ouo%2BElbZlcHhDyAnBFzjChNPW%2BehSWI0wIlVER3mHaZf7Bd4117wtK8kbonC96f8BOdDk7qoIzHGBBpKg2%2BtMJrGlgyP2wHePIkbDJi6uwjTIJyC5%2FmSMsRHIe3aQoEYzcIbvuGQ2FG%2FZ8P32t05337P1j%2Fd7zzgNscsfA6f67u8WfV9t7nbfLCr99v26XKyDlaidPxc4oDkAkWocoX9kouHnxJpSI%2BW3%2B6cm4safKhdOaHCyQ%2Fi0oCRx96jAunzyqfcw3z5DyRL%2FVXJj8mBgx9tiygIDsS7RCE45A7v1J9g6UE2a9FxoVByqNV%2BdNZaNbWr5ESAyK5c3sB7p7eFXPMt2fR4LkA7XePgfZT%2BQqksqVoYe0LLey0YEARj5dZv6LEwuIvEzQY6pgEXtq9stXzaLcxwzn7w4nX6MxQ4qJ1g8T%2FHWmS3cCF5ChUXHmSwS%2BlcByji9V4gyl1V%2B8hg56AGM5CGwGtKxcrMycyzA3s1Q7LhwYS0JEkQz4Enx0%2BxdNxHpaxpPXQUOHfY5hO7ahr%2FIFuHTRi5oK0%2BUcL1h5mFtXzSQ4PRDSjEhnwawPGMDtWkJjMmEJ02ONqRKvjFwjd7SNVTEQVf8HZGFcKxfjo9&X-Amz-Signature=c962990f61093be513d93c56ad2df7b960a3367aed426e70473a85da3c5e7890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## Process


![Screenshot_2024-02-09_at_3.09.42_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/925d498c-1283-4145-a0aa-06427627641f/Screenshot_2024-02-09_at_3.09.42_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEQE45S%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hYKfpsFk1Za8MtkdIavjTy58smoB2DCz8RyVWxqTIAiEAhMNlIijBhGHPjsMxdexyY2XfuerwGHUgDNbB8jyjn%2FEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMnAs0J%2FYrSy5NCtGSrcA5c%2FQtOLWrSAOCa9jjAs7mWwlORXjges4n77VLC2Awnq4CXeCYifL0vT8LCRr0IZh7GiKOuU5tqpwwpl%2BFoc9PcUCVwIalqOjkrENUu7X45Ruclh8yyGVKb3ukoHZWURkjm1QXXz9QqSdFuUh05pcokvdvqBjvNTTSJJnMTdCPrqhfgfldsCNZ9Km8f2DSP3IxuAOBAXwfCr6oOYP%2F6Br8kkSQ5KL%2B%2B3VknEKzwKVZSaPk%2FKPaJtlT7pgCvUlQwF9wlHkLqD9L54CFclbjg2ygyFJBhSrILi32D%2FM6JNBvDNxRv6OVzBGvyYj39Nybt4UvPHGGhPOqq0hteBq%2FRca1hCcNBs7qds%2BGkj1eMDqmrrHo7rXrPvL6tMuOzY4U%2B2BwOOMSWFtw%2FjD3eG8RRo555i4BqbUZB2suyCTSHyunFcYCmjUOvVz46LyaWog8VwDlze2cLQgo4sASta4uhETB0oiz4to25%2B4mHM08CERZufilJkS0UPyJ40tvq%2FHhGikbM5iT4LPrFO%2FP1QZekvDMg9iQJzfQrXMLJU0bG5gv%2Bq5ScpxF7aRyuJ9gHaZsiBjueX8HUQeFrqvhUOnOiYBEyOfUBRNZsdZdCBppKXW7BKkUcazIBI6rhMT%2FSXMPyKxM0GOqUBBzQEne4kZmGpWU1E6oz41ulkIVxbdpHdznLrOoxMbYwE2OP1Vo1DBfk8V6l0nIFsH6ZmoPjjYLgOa7VzfWkLEELbkV69SX2wFmdYy8EozAF5VzxPdNVS6S6dWl3Lqvww9dw2t0C6Zy7RAay%2B8hQWNZduUCsRB6mzaoMJmbB77fjP385kLrXH99RXSq9dIOwViWrqVQN0TaFV9XUGvGLFFMA%2B7myC&X-Amz-Signature=2882b46a92edc71a207990c7aa7266c9dd777e09611a5297d2ee84541501cab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


When the main purpose of the assignment was given, linkages, a LEGO scissor lift automatically popped up in my head. I had experience with LEGO, so I pitched it to the group and they also liked it.


We designed the base in Onshape and found complications after printing. The stepper motor could not generate enough torque if the meshing of the gears were off, or if they got stuck due to friction. Initially having the gears made of wood caused too much stress on the motor, so it did not move.


![Screenshot_2024-02-09_at_3.19.23_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/b9993418-1e71-4f07-89b2-429f005eb736/Screenshot_2024-02-09_at_3.19.23_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBE3FJD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqhn1K%2FHIGrFgx7d6kfHOipy3r%2FnMRRWGoPuaMsFFxDAiBLz2Lo69DEfD4yi%2BuRN1UNk2sdo4oK4VwxHKBOoc%2Fvwyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMl4XVTaKtj7tkOaZwKtwDQqir1L284D9zV2Xx8HcSpjJShgww2AhyDnXkLi7ydIVmBaZCKz27oJTWbj89aDQKULJhlb%2FwtKUjau%2Bambio5eqSQZsfOH2hTLQ7G3T%2BuV0yKZ9SKexB5RWtICsERlBVs8MMUeSXdxpXd5rcuIhCD60UThEAbiEY1g5UyzugNciye03CKZ%2F%2B9dGFVxbUNn%2F%2Ban99tc0XnQHxHx8coLa87jrS%2BxGGfvhAqhWImHqL3%2Fgk9H%2BB344hs8B8ouo%2BElbZlcHhDyAnBFzjChNPW%2BehSWI0wIlVER3mHaZf7Bd4117wtK8kbonC96f8BOdDk7qoIzHGBBpKg2%2BtMJrGlgyP2wHePIkbDJi6uwjTIJyC5%2FmSMsRHIe3aQoEYzcIbvuGQ2FG%2FZ8P32t05337P1j%2Fd7zzgNscsfA6f67u8WfV9t7nbfLCr99v26XKyDlaidPxc4oDkAkWocoX9kouHnxJpSI%2BW3%2B6cm4safKhdOaHCyQ%2Fi0oCRx96jAunzyqfcw3z5DyRL%2FVXJj8mBgx9tiygIDsS7RCE45A7v1J9g6UE2a9FxoVByqNV%2BdNZaNbWr5ESAyK5c3sB7p7eFXPMt2fR4LkA7XePgfZT%2BQqksqVoYe0LLey0YEARj5dZv6LEwuIvEzQY6pgEXtq9stXzaLcxwzn7w4nX6MxQ4qJ1g8T%2FHWmS3cCF5ChUXHmSwS%2BlcByji9V4gyl1V%2B8hg56AGM5CGwGtKxcrMycyzA3s1Q7LhwYS0JEkQz4Enx0%2BxdNxHpaxpPXQUOHfY5hO7ahr%2FIFuHTRi5oK0%2BUcL1h5mFtXzSQ4PRDSjEhnwawPGMDtWkJjMmEJ02ONqRKvjFwjd7SNVTEQVf8HZGFcKxfjo9&X-Amz-Signature=099122b57e48459ccb521f5257688626aa93e254bbdb4188334c10b9d113a6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


This is where all the components were attached to. The five hole cross was where the stepper motor gave input to the shaft later on.


---


## Gear System


We decided on a gear system, taking inspiration from the last project. The alternative was a rack and pinion. Although useful, we decided to stick to the gear system to follow the rules of no slots or tracks.


![Screenshot_2024-02-09_at_3.23.24_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/3e7246ff-9ac9-486c-b227-a0e3db6671b7/Screenshot_2024-02-09_at_3.23.24_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBE3FJD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqhn1K%2FHIGrFgx7d6kfHOipy3r%2FnMRRWGoPuaMsFFxDAiBLz2Lo69DEfD4yi%2BuRN1UNk2sdo4oK4VwxHKBOoc%2Fvwyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMl4XVTaKtj7tkOaZwKtwDQqir1L284D9zV2Xx8HcSpjJShgww2AhyDnXkLi7ydIVmBaZCKz27oJTWbj89aDQKULJhlb%2FwtKUjau%2Bambio5eqSQZsfOH2hTLQ7G3T%2BuV0yKZ9SKexB5RWtICsERlBVs8MMUeSXdxpXd5rcuIhCD60UThEAbiEY1g5UyzugNciye03CKZ%2F%2B9dGFVxbUNn%2F%2Ban99tc0XnQHxHx8coLa87jrS%2BxGGfvhAqhWImHqL3%2Fgk9H%2BB344hs8B8ouo%2BElbZlcHhDyAnBFzjChNPW%2BehSWI0wIlVER3mHaZf7Bd4117wtK8kbonC96f8BOdDk7qoIzHGBBpKg2%2BtMJrGlgyP2wHePIkbDJi6uwjTIJyC5%2FmSMsRHIe3aQoEYzcIbvuGQ2FG%2FZ8P32t05337P1j%2Fd7zzgNscsfA6f67u8WfV9t7nbfLCr99v26XKyDlaidPxc4oDkAkWocoX9kouHnxJpSI%2BW3%2B6cm4safKhdOaHCyQ%2Fi0oCRx96jAunzyqfcw3z5DyRL%2FVXJj8mBgx9tiygIDsS7RCE45A7v1J9g6UE2a9FxoVByqNV%2BdNZaNbWr5ESAyK5c3sB7p7eFXPMt2fR4LkA7XePgfZT%2BQqksqVoYe0LLey0YEARj5dZv6LEwuIvEzQY6pgEXtq9stXzaLcxwzn7w4nX6MxQ4qJ1g8T%2FHWmS3cCF5ChUXHmSwS%2BlcByji9V4gyl1V%2B8hg56AGM5CGwGtKxcrMycyzA3s1Q7LhwYS0JEkQz4Enx0%2BxdNxHpaxpPXQUOHfY5hO7ahr%2FIFuHTRi5oK0%2BUcL1h5mFtXzSQ4PRDSjEhnwawPGMDtWkJjMmEJ02ONqRKvjFwjd7SNVTEQVf8HZGFcKxfjo9&X-Amz-Signature=9e44045e6f230c3ab25f72014c17f6ae5c81b47cdd12a77e0fe49f989d2e74ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## Linkages


The smaller hole was used to attach the linkages to the gears, so they could have motion. Those linkages were then hooked up to the scissor lift. It was done on both sides so it could go up higher, and it surpassed the 10cm.


![Screenshot_2024-02-09_at_3.28.03_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/26e6b70d-2196-41cf-ad25-497ff9c2005f/Screenshot_2024-02-09_at_3.28.03_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTHURCA%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwbq4lcE8LtYF717eC6SdrhENPb9GyE2ybBwCTSmiShAiEA9nGPidUbeIROKVSqKaVR4iM%2BS6ZbNL6hTCEEKXaPlOwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLWdKn3nXYe1Uss0lCrcAwGab8lB9BuAHmk2Y7lrWxfBfgIhGfnLh9SjB3MeS%2BZ5JyiobSU%2FAhxGKZS57POYHuhVyr6LctpDKonXcVrC2zM8xq3Z%2B6P8eHGiPW6uvqv%2BydLCmip7PKCWo%2F0mV%2FS5mn%2FPgBvutqCcgbkByguRPrd8O%2F08AvpmA5W7UukHrZbUESx38N6JDJIaSoA%2BICRq6qMDKNsj0yd9Immr9LiAnIRUmiJ8zYSehxnOwbavsGubJCvWLWlsvCXxSzP%2FCxtX0d5u5e%2FyauTt46p5%2FF8fNXI0ycT%2FAwAhrRH6BsXVymTmVtb3cNNd5BObR2amuUmSCB9BW1QidD6cjs9J94K5SRwdsO5WpuYrgugocH1Wt%2F3dStTAWqBA7KvuhAdhxDOYWlOUR61%2B%2F%2FgD19YvWM76d4PcvGonc%2Foox98EFumrUkTKuh5TlWugmp%2BaMX%2F8vFPWi7UBRLlenG7Quy71bAzOd0qGTbtDT7is4VE2N%2FHL8hiKfCUUBzZMLTKFzDB9t4I2xQlDhhrZMBPggytRpkjGCmGH0NycC1jJNleHm%2BgKmf2CvTVu0Ci8FkCiQ6I1Nd%2B2bp7jtvNVu8QZ9bKDa1sK9HRoNHFHeSiQNVziuIF1gtVfXZlAlKRNbMI0Il%2B3MM6KxM0GOqUB1gaLa6IjSWgPauYa3D8PxMNPygz0y3ErAnrAX3eGURMVd0%2B%2FFOC7Aty9MbpPTd2ahN1vOPn32lURQvbMbkXmoV6bc91eirAHXXUq5fbXc2R5CLHn13RsosCMpWJZLB88H2wLpt4A4SX7KC88%2BdxcDFo%2Fh%2Fl3b9u6jGhz1S3HI1HgRKt4UF9DpWKv0LypJd6K%2FwdzHa2kSKjY5hrz0CI96JxDoXv3&X-Amz-Signature=4b586d0edaf6edee81b239940879f024322fc3747aaeb4c5c43d8ae6bc01e206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Screenshot_2024-02-09_at_3.30.15_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/c0a7ebd2-d7a9-404c-ab3e-eab43ca16aad/Screenshot_2024-02-09_at_3.30.15_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTHURCA%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwbq4lcE8LtYF717eC6SdrhENPb9GyE2ybBwCTSmiShAiEA9nGPidUbeIROKVSqKaVR4iM%2BS6ZbNL6hTCEEKXaPlOwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLWdKn3nXYe1Uss0lCrcAwGab8lB9BuAHmk2Y7lrWxfBfgIhGfnLh9SjB3MeS%2BZ5JyiobSU%2FAhxGKZS57POYHuhVyr6LctpDKonXcVrC2zM8xq3Z%2B6P8eHGiPW6uvqv%2BydLCmip7PKCWo%2F0mV%2FS5mn%2FPgBvutqCcgbkByguRPrd8O%2F08AvpmA5W7UukHrZbUESx38N6JDJIaSoA%2BICRq6qMDKNsj0yd9Immr9LiAnIRUmiJ8zYSehxnOwbavsGubJCvWLWlsvCXxSzP%2FCxtX0d5u5e%2FyauTt46p5%2FF8fNXI0ycT%2FAwAhrRH6BsXVymTmVtb3cNNd5BObR2amuUmSCB9BW1QidD6cjs9J94K5SRwdsO5WpuYrgugocH1Wt%2F3dStTAWqBA7KvuhAdhxDOYWlOUR61%2B%2F%2FgD19YvWM76d4PcvGonc%2Foox98EFumrUkTKuh5TlWugmp%2BaMX%2F8vFPWi7UBRLlenG7Quy71bAzOd0qGTbtDT7is4VE2N%2FHL8hiKfCUUBzZMLTKFzDB9t4I2xQlDhhrZMBPggytRpkjGCmGH0NycC1jJNleHm%2BgKmf2CvTVu0Ci8FkCiQ6I1Nd%2B2bp7jtvNVu8QZ9bKDa1sK9HRoNHFHeSiQNVziuIF1gtVfXZlAlKRNbMI0Il%2B3MM6KxM0GOqUB1gaLa6IjSWgPauYa3D8PxMNPygz0y3ErAnrAX3eGURMVd0%2B%2FFOC7Aty9MbpPTd2ahN1vOPn32lURQvbMbkXmoV6bc91eirAHXXUq5fbXc2R5CLHn13RsosCMpWJZLB88H2wLpt4A4SX7KC88%2BdxcDFo%2Fh%2Fl3b9u6jGhz1S3HI1HgRKt4UF9DpWKv0LypJd6K%2FwdzHa2kSKjY5hrz0CI96JxDoXv3&X-Amz-Signature=45f71c8bb41424e5080a4180df57a9399218766dba2e688e578e635c13ac1907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Screenshot_2024-02-09_at_3.28.20_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/4ad75d9b-5b15-4ce3-a730-b8d1f03bfbce/Screenshot_2024-02-09_at_3.28.20_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUW4JNW6%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX29mXozxrBAh4RQ20pO77yBtVMPuTMvanOzwDLcKnZwIhAJF0G1srRabZgcXLAq35bGdNfX%2Bb53doaChKII8yOo4yKv8DCFcQABoMNjM3NDIzMTgzODA1IgxQRLdCRrE9Nln9nDQq3AMrFxMULk%2FX6hDhYjkQFHOCtXXGP4TjOk3EPL0I%2FxmRz7S8Xoo6K4foCeUF%2BMbTMEa0sztHf6vgzUI2TwnYCK1Vtz2NugztnxbeQ4vBCmcAGqWDR5emRA%2BrSocx3J3J6IrJNIJUk74cyS4w4W4ettLp%2FsI1Bcm6KUN2mkZpZQV7e5y71R4f%2FptZcu00OfcH%2FVnA3j2MN8t3Ptdn0k%2FvWgCVTXgbPHeMCXoZgLAkEkEVPCmbQzF6TWfayxYR8zKonKPWJJ9fmlGZcdAwlwei%2BjE%2FQPdKqm8FuzHpU61PWXwoirHaOcFPdalbkKtEAl%2BHbYb7D%2BsY8wOzYsmpISx3QggRsFiXgQV%2BDVcjYeLiewpIap1frB8Sewvg5ax0lrsxG%2F2NwIDc2XW9krSzgAYtmXnrk0r81aBXcwPEl9Rs0S4AExqdM%2FfmHlHdxmNfz%2B8kkCXrv4ZX1OyDTqDagf%2FmJ6XelCZxuz5ynF%2Bd6iXDRm24JhwGZba%2Fa9jYLXSsQAm2bCXgnT4wvFIf1ZfI%2FIpYo9jSCB60ASUsNuJ4aBvE0NM4eMm2%2FAIevEocE8CW5UOQxMOYl4T54tFGPfBFLqSfA%2B1jkqCaHJOxekh4kA02ezLkO5CRBoWyr12jc9ybszDli8TNBjqkAbNQNWvdUo1tjIG8rRaPKJPiwHa2dXZs%2B72bbOdlHot8SCnp17UBgtRMs91ssewNCYR9rnyPfsCORoOuFufmyX4bkh7yO%2BtsQSY2Nq3K55XyKCeUZjbbeuZYfMjInBx3rSrkyMznq8CRkTRUZUS0VTbcC1wKIgX%2FN96K75VYjEFAvvrRjBbsxaHYD8939InPB7vAOtYmLprPNHccJOZQ%2BeQExNGK&X-Amz-Signature=b93e152cf95960dd311aed8d88b745793d120d8c8782f3324045fd6d5c431511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Top View                                                                Back View


![B2E94DC3-715F-4687-8AE5-1CC0EC8A300F_1_201_a.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/a62a465f-0422-4ce2-9cf2-01cfc699a8d9/B2E94DC3-715F-4687-8AE5-1CC0EC8A300F_1_201_a.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMIQTGD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHETN%2B4g9EIK8kIOUx6a9%2BzGk4tsC%2FuaPkuZZMg6aOcFAiBoXACA71Aqi1HiCqb0dR%2Bjcgo%2F8yOIO9MKNRDmzQlh7yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM62EwSVJ3%2FsY4ZTuCKtwDHVqkrANLnR6PSIf%2FFmIv7PzjJDlYrvSwTxRx41KXsOJKLSy71N8GtyjyAYSOAacEaRs%2FXHDJ%2FTrvz1%2BFCENpx96BrN%2FHTPjf7IPzbmC6VWk1G2LuJTwMRsjO5QR0Zp4csyi698R77AzPLuv%2F4Lgcd6LpfQsUwEHjJqksaHwubKEPjZddVVWXMCKC32DYFSG%2F9UG1TQtIzAiM3Z%2BisgPzrsDRLx1TEwwqfFZu%2BMxEhw1eXRnmHf%2BoWd9eJMtUUTWeieOS77NDzLYMUR5vQIgmV6TKjIWZ2SA%2BG0RTrdIXZOdDtUJyhk%2FYL4knhVN4HBed%2Fx7E53zCb7g0BwTYPf4cca9FH2MIINRa%2FA4f8v6JU26jZ3ZNqFshF1Ruyx1uy16RqEV1%2BpMQJLSrvxjytUCjY98DRoLHsPVFwZlRF6xNVPeab%2BhXcalIC1beddJYch8b7ymq7wQVTMMVdqicxQbfLvMWQjdi0zoOGjQip1bVztsIeRGLKyHae4iZXziOdvhiSdLdxSomm950g9NrayTkBhDmD4ms2HXtjgZFy1mUqAkwprsvnwEjQaObESHhdWOMxXDH20EsoTOc1jmWdMNbnSzpVqSpj%2BbicraF%2FR%2F%2FV6PEzPCwJRjOLAvYbwow2IzEzQY6pgF1G2WQ4uiI3BrbB5N84joPXOyyvv1oijl7DRNK4RhRd3%2FbCoMhUWd7nAxlVW7XREqDv4FQwHz0N06KXYktj2cXq8R6HYMBTTXIcKsJu0RkQYeq8EdlkfcKZd5OgkdqzMHjvo7wZFrrjRvTXz8eLSxw6ffugd%2FaMqFDHBeeKTd8OShDUimWl%2F4nygaI8Knq3ccwrsJUbuzWFmf7JI318V1DL%2FyP3QHE&X-Amz-Signature=b898d9b86cfa12f4c7769d5f4d0f4f8f9a091e9f27b3c6bcb28bb922904a44d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_0909.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/e5672d00-0cdf-4fb7-8d29-f4a9cdbf332e/IMG_0909.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV7KLTTM%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUkC364PwSVQvT5b3PsuhKRwZEC4xCa%2Bv0%2FdUx7z9TVwIhAPdu6AdNRuXaaf82Uo1j7XVqfuH84bqxV9dJ102tdMTEKv8DCFcQABoMNjM3NDIzMTgzODA1Igxk4YJDXcM9sxnR2MYq3APB%2BdZuoEo1ovkLei%2BbE95JFs4fF%2BjAdFayKf%2BvaivT5KJg%2Bcfn0Lass2eQKwMIttTocWg81AatswTdiIge2K8cx5lO0wf%2BbmNlZUpNwsOK0BbZRp9jbgG5eFxwivF9GPFcJJmOz5BjUZQKP8K3tSl%2BjtJboIPtZRcIfA0UY8qKv6RuwxqGTybzTRSgGswBSsb2GJL7xpILBMppV7ZmRHuIScSSLUmBwmVxFKqBKaOz3ssx1smten8OY3YNMj5d7Ui3bCol4%2BBOozSmTssTTnjGWghckNfhcg63eclO9E1N11vUIOG3DVUqToCC%2F9wrRoe1I5uWRdDyCuaqLjXetxwQe29aSxNCnsSjCNO4u37Y57Jx1BZw0zVknS9rB0xpRdGcnrrK5axOCnHWhZPG8%2B7APXLSSLkDH3Q7kYB2neh3k1TbphLN1JIDHv8pY85qttbeUpa3GL5Z%2BHKEFT6eZLzSArI1EMnp1sFdM%2BhDatmTg1otuom2Uibd3VM4nqaNJqJn7gw%2F2Zbs3DD3BbzOOte9qQ5IUFphIohVCXIgExf90JJrgDgVr%2FrUs9X4b34fZrpdgni%2F7yUOyPrm9sKHhpzVl6f0Cdc8u2crValTW3uUMPbYTmcdXAKw%2FSH29jDrisTNBjqkAdVSDgo4blXMq8oGDsoWYwFKF3bsjQKinJKjeHoXDB9RUjFlnzdmxUF90QYCs44v%2BBcazsgOiw8KCpek%2B044fLI69XbtjwpQkPIxXjE2XGoEMSaUQ6h0Uu61lIlTM6HbSJFU9V8LPbtlIgEsBHp5nkB0bbnZmYGnaqJp8F2Mlhag5F2kk78ewoyjeKO769sHD4ocgCqWAYlgK%2BjrkaqxbQDa95fr&X-Amz-Signature=874663034bcf64b21d5bccac05f73486dcb47f25dd04823ffbd8f382f3685893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Back View Mechanism


![IMG_0911-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/d2cc1e4a-3a78-4808-a61d-4eda39c1ad50/IMG_0911-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBE3FJD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqhn1K%2FHIGrFgx7d6kfHOipy3r%2FnMRRWGoPuaMsFFxDAiBLz2Lo69DEfD4yi%2BuRN1UNk2sdo4oK4VwxHKBOoc%2Fvwyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMl4XVTaKtj7tkOaZwKtwDQqir1L284D9zV2Xx8HcSpjJShgww2AhyDnXkLi7ydIVmBaZCKz27oJTWbj89aDQKULJhlb%2FwtKUjau%2Bambio5eqSQZsfOH2hTLQ7G3T%2BuV0yKZ9SKexB5RWtICsERlBVs8MMUeSXdxpXd5rcuIhCD60UThEAbiEY1g5UyzugNciye03CKZ%2F%2B9dGFVxbUNn%2F%2Ban99tc0XnQHxHx8coLa87jrS%2BxGGfvhAqhWImHqL3%2Fgk9H%2BB344hs8B8ouo%2BElbZlcHhDyAnBFzjChNPW%2BehSWI0wIlVER3mHaZf7Bd4117wtK8kbonC96f8BOdDk7qoIzHGBBpKg2%2BtMJrGlgyP2wHePIkbDJi6uwjTIJyC5%2FmSMsRHIe3aQoEYzcIbvuGQ2FG%2FZ8P32t05337P1j%2Fd7zzgNscsfA6f67u8WfV9t7nbfLCr99v26XKyDlaidPxc4oDkAkWocoX9kouHnxJpSI%2BW3%2B6cm4safKhdOaHCyQ%2Fi0oCRx96jAunzyqfcw3z5DyRL%2FVXJj8mBgx9tiygIDsS7RCE45A7v1J9g6UE2a9FxoVByqNV%2BdNZaNbWr5ESAyK5c3sB7p7eFXPMt2fR4LkA7XePgfZT%2BQqksqVoYe0LLey0YEARj5dZv6LEwuIvEzQY6pgEXtq9stXzaLcxwzn7w4nX6MxQ4qJ1g8T%2FHWmS3cCF5ChUXHmSwS%2BlcByji9V4gyl1V%2B8hg56AGM5CGwGtKxcrMycyzA3s1Q7LhwYS0JEkQz4Enx0%2BxdNxHpaxpPXQUOHfY5hO7ahr%2FIFuHTRi5oK0%2BUcL1h5mFtXzSQ4PRDSjEhnwawPGMDtWkJjMmEJ02ONqRKvjFwjd7SNVTEQVf8HZGFcKxfjo9&X-Amz-Signature=5b9e854ec891f5f99623bd426705a807e1509072c2d4423ffefc793252c88148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## Electronics/Code


As for the electronic sections, we used the wiring diagram provided by Briana Bouchard (Ph.D) below.


![Screenshot_2024-02-09_at_3.35.30_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/083fa827-ac81-45d5-90f5-dd01af2c3b39/Screenshot_2024-02-09_at_3.35.30_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSOJ7K2%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD42BDPzSsj1NIN3szJbfKRSImdgZe9VGHNBRnJkYjTAgIgcCVZnOWHxtkelVXhBTGoPjZ9zakToKQESeBD7W3F2I8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDH8fZJccQmT593LunircA4FRh9I%2Fg1F0lV6mhZiaKikhKuJsEtfkd1UFTFTEBxXOy0PjEbb1HRIUUb3Jm4cfJJd6qn0BDM%2FZs9yf1%2BIDElKF%2BGbmSX1hx7xvvEYjdeH%2Bt%2Fppp3F6ZTc7KXhpuqHLdnLvX5FOJsT8BjoDih7qZ5sWgaIauSb7nLA9i3%2FnFN0ry%2FAeF2tmRTTommO24dD5wpj8Kcflx2ZYoUv6wOp7PH05lQb%2FsiNNIa6GhQds7joHAnLqzptxii5LIiWJIakmFwxc8v5UU4d2u10xQOSlhKIHb1sBNqz5HAvtUx%2FHbWFBzcsW%2B20W76N5ngqRl4o0TptVPqbJxhMiQCaQqsocvKjlIPPVZZqPQGGfjpR7d64%2BJL4byXt6gx9vSkoaKRBbk4sU9%2Fx2bNR2azZo7v925LiyWS%2F1HoBTEKEUNtAhdREhzan08eNJIIj2pSxIux1xVMgMYCsNL64iRFh1V9NN46OMKcGXe26OAD1N%2BfKiC4sY9B84gwQLTmvswYHVpHgSNCm4Kor1swGlraFlc0ahDdXDtbvCVuOlp5vXmvzySsJ1fdPLKWK9dN8aMY0wEpBAR7EH2HSe5X45WfP0PgszNQ2IuZTq5QpQARxENqET1l7lCPhCLcyrDi7Oo9PuMPqKxM0GOqUBvLhGmHgbKgUnbmUNA5qwxfQMESiuhP3yjU8xoaJ70gSsm0FDKOo5HlwfC%2FzWfQakkIRdEEW9oUvs8VO43jmsU73aFI7Hqd7oKLWmflMpMDVaLeuD4Bt3c%2BYMONp0Y%2FY1wykEKgVi%2F9Qjq9nosVTTTlbxeMgKG4VhUDPcY%2Bh8Lr5%2Fwjrpy%2FwMRCzXHnvbPh2OFOEqm%2Bx4zu7s%2Bf%2BdAP5ZunWUL9Im&X-Amz-Signature=1da54adc6a9cda2056bf0405dfe7f240e8ef00d1f131f0a3699e203ec6b552e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


We decided to use a lever switch on either side of the gears, on the backside. This way, the motion could be more automated when pressed. It turned out to be successful and the automation worked. 

<details>
<summary>CODE HERE</summary>

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


</details>

