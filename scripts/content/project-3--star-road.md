
## About This Project:


“Use your color sensor to autonomously navigate a maze by following a specific color line. Your team is also encouraged to attempt one of the following challenges (or all of them if you so choose!).


Challenges:

1. A robot that can traverse every line in every color
2. Travel one line in one direction and return through another line
3. Switch line to follow at the intersection
4. Speed changes based on line color”

---


![LineFollower-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/36698996-7d45-4a8a-852a-a0886a2ed881/LineFollower-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMA7YSD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfrSdtVROwFDsKdLJ%2B3%2BuKx8yEi5wioy2uHjkuw25QdwIgRKtQ3xhLql4hf9r0wuODeDN7ft%2Bc7cCA696uMtm41dAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJH8wk%2FpnxBJnNurgircA%2BqGdurT9Cq7CXJQT%2Bn0%2FG3Lwfy45eo3NK4FDACEc6Ao6CEjR7ZxskJSX%2BqUmVEPB%2BbQgxcUEMi%2FuNAJDL7gRBYWH%2FeVkhdPpr440KdfUGGSX7qlMpdymCSy750wR61ScRguQdH2T9ap%2BYjgYr5zWtFVJUWFBdhpyZAxJh0SAemkl3hm56TZX8HaLQw7CkaMtYCgUZmGWapIoDXqX4rgY%2B0saU5lolr2lXPIDK8MSUuaFZX6Kh0vARm%2BsjDzIKCv8MP9H6SWEoa%2FNisPeDN6RJLvUrx%2B4DCuM17loDRFz6p0uuQfHbQV8Du38GIdyRvURx6Uy6K%2F9uxt5MBygbUTyVRkuEEOWQbzrE%2BxjZcClFAVmBGxy9AZ2nrn%2B%2FfFnyISxq3nVryXF2X6KucOJGgFaO2rVZrLE%2F1oq9rCn9JC4zMoHaYjqeQcx%2FBvrQKdYUalhCEvSOPF2bBtzjFsQ4zud60I689Jg5dk0bZWKkFT4Dq3GDA2SIE%2FVzMhk7ztDMnhBw8jnKe0xwlbYLQ30j%2FAwTNIql1ntihSIEZwVsWW5R1jFch9FLL2azjwLYUunX%2Fqx076uxt2URSHrSgx7WQKs2nUX8Z0oKjUBrkrqFzqP3K65nzoSXnnyLekxeB%2BMNWLxM0GOqUBIQce23DuPCOLKie%2FfBOnEQpjPwY3Zn6N95l%2FttRiB4NXquSKE%2ByaGCddXmmLlFpjcjWld6Zo0m1mEKdCNSWFf2rgXcDS16tDP8nI88jmq37bZSr9UbnVG0JjOGwBblHcomBrYWZiSmpEZsw%2FSqJtqXJ2RZNfN358UA7%2Fp7Z%2BOq%2BIeWn6Mhu1Old1ORNE5oZXAjhwgEpAq4CTlMll9qlkDrQFXX1r&X-Amz-Signature=e62bfbf8cd49c1860fff2976295d020450f4d33148e85bfd0cce70ba6dc56df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![LineFollower-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/6f4918f4-cf83-4407-afa6-21a15199d64a/LineFollower-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMA7YSD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfrSdtVROwFDsKdLJ%2B3%2BuKx8yEi5wioy2uHjkuw25QdwIgRKtQ3xhLql4hf9r0wuODeDN7ft%2Bc7cCA696uMtm41dAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJH8wk%2FpnxBJnNurgircA%2BqGdurT9Cq7CXJQT%2Bn0%2FG3Lwfy45eo3NK4FDACEc6Ao6CEjR7ZxskJSX%2BqUmVEPB%2BbQgxcUEMi%2FuNAJDL7gRBYWH%2FeVkhdPpr440KdfUGGSX7qlMpdymCSy750wR61ScRguQdH2T9ap%2BYjgYr5zWtFVJUWFBdhpyZAxJh0SAemkl3hm56TZX8HaLQw7CkaMtYCgUZmGWapIoDXqX4rgY%2B0saU5lolr2lXPIDK8MSUuaFZX6Kh0vARm%2BsjDzIKCv8MP9H6SWEoa%2FNisPeDN6RJLvUrx%2B4DCuM17loDRFz6p0uuQfHbQV8Du38GIdyRvURx6Uy6K%2F9uxt5MBygbUTyVRkuEEOWQbzrE%2BxjZcClFAVmBGxy9AZ2nrn%2B%2FfFnyISxq3nVryXF2X6KucOJGgFaO2rVZrLE%2F1oq9rCn9JC4zMoHaYjqeQcx%2FBvrQKdYUalhCEvSOPF2bBtzjFsQ4zud60I689Jg5dk0bZWKkFT4Dq3GDA2SIE%2FVzMhk7ztDMnhBw8jnKe0xwlbYLQ30j%2FAwTNIql1ntihSIEZwVsWW5R1jFch9FLL2azjwLYUunX%2Fqx076uxt2URSHrSgx7WQKs2nUX8Z0oKjUBrkrqFzqP3K65nzoSXnnyLekxeB%2BMNWLxM0GOqUBIQce23DuPCOLKie%2FfBOnEQpjPwY3Zn6N95l%2FttRiB4NXquSKE%2ByaGCddXmmLlFpjcjWld6Zo0m1mEKdCNSWFf2rgXcDS16tDP8nI88jmq37bZSr9UbnVG0JjOGwBblHcomBrYWZiSmpEZsw%2FSqJtqXJ2RZNfN358UA7%2Fp7Z%2BOq%2BIeWn6Mhu1Old1ORNE5oZXAjhwgEpAq4CTlMll9qlkDrQFXX1r&X-Amz-Signature=c89a37c2c7968fdf07bbe7ef8f7f3b8f8a601d3c9668811d7082272978d60502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## Color Sensor


![Screenshot_2024-02-22_at_11.56.06_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/6f65d321-756f-430e-89a1-29d629df942b/Screenshot_2024-02-22_at_11.56.06_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMA7YSD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfrSdtVROwFDsKdLJ%2B3%2BuKx8yEi5wioy2uHjkuw25QdwIgRKtQ3xhLql4hf9r0wuODeDN7ft%2Bc7cCA696uMtm41dAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJH8wk%2FpnxBJnNurgircA%2BqGdurT9Cq7CXJQT%2Bn0%2FG3Lwfy45eo3NK4FDACEc6Ao6CEjR7ZxskJSX%2BqUmVEPB%2BbQgxcUEMi%2FuNAJDL7gRBYWH%2FeVkhdPpr440KdfUGGSX7qlMpdymCSy750wR61ScRguQdH2T9ap%2BYjgYr5zWtFVJUWFBdhpyZAxJh0SAemkl3hm56TZX8HaLQw7CkaMtYCgUZmGWapIoDXqX4rgY%2B0saU5lolr2lXPIDK8MSUuaFZX6Kh0vARm%2BsjDzIKCv8MP9H6SWEoa%2FNisPeDN6RJLvUrx%2B4DCuM17loDRFz6p0uuQfHbQV8Du38GIdyRvURx6Uy6K%2F9uxt5MBygbUTyVRkuEEOWQbzrE%2BxjZcClFAVmBGxy9AZ2nrn%2B%2FfFnyISxq3nVryXF2X6KucOJGgFaO2rVZrLE%2F1oq9rCn9JC4zMoHaYjqeQcx%2FBvrQKdYUalhCEvSOPF2bBtzjFsQ4zud60I689Jg5dk0bZWKkFT4Dq3GDA2SIE%2FVzMhk7ztDMnhBw8jnKe0xwlbYLQ30j%2FAwTNIql1ntihSIEZwVsWW5R1jFch9FLL2azjwLYUunX%2Fqx076uxt2URSHrSgx7WQKs2nUX8Z0oKjUBrkrqFzqP3K65nzoSXnnyLekxeB%2BMNWLxM0GOqUBIQce23DuPCOLKie%2FfBOnEQpjPwY3Zn6N95l%2FttRiB4NXquSKE%2ByaGCddXmmLlFpjcjWld6Zo0m1mEKdCNSWFf2rgXcDS16tDP8nI88jmq37bZSr9UbnVG0JjOGwBblHcomBrYWZiSmpEZsw%2FSqJtqXJ2RZNfN358UA7%2Fp7Z%2BOq%2BIeWn6Mhu1Old1ORNE5oZXAjhwgEpAq4CTlMll9qlkDrQFXX1r&X-Amz-Signature=8208661bfc11802445b35978e982b81c62faa6057b0f3aaccecccdb57c8e7f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


We were given a color sensor for this project to detect a line. A color sensor emits light from a transmitter and later absorbs the reflected light with a receiver. Because of external factors, though, and the way the color sensor works, ambient light can skew sensor readings and cause problems down the road.

<details>
<summary>A Snippet of Code to Interpret the RGB data (Red Shown Below)</summary>

![Screenshot_2024-02-23_at_1.01.16_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/dd511cd0-e822-4247-9aa5-45b98d1ba6c5/Screenshot_2024-02-23_at_1.01.16_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZ4YUF5%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtDywRsxvo1EXFroj5skEeDSnKeqi%2B0LKyoLLoy9HKTAiAS0yJyo%2F2oWedfxKjTjslNz0EEc8YchCu1ODGHK4P6Vyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM6MCUvMcmXwkzYzGlKtwDXzGa4JaSHsp7EyZSL96gDEjaC48803PMdWzrZk4XgXS9%2F77CIk1LonvUc%2BdEIoNElRO%2B4vOta5Mv6M5S08hnss4MpJrU9AnaA%2B25tnfBBQDB%2FhmHuWLobCwPLMWiTb7jrvawNvXqHR72hG8KDAtjZfMrQ5yh4AhXon4lyhNGIdzb1zp8WodyIUnb79J1vc9zgmtAJqAEXSlbXNYqdR6t2ufsCefYox2ke6JcaqKNqMrfPOf7ntyUVlNsNRN8D%2BIwT1S2FOMAxHS5k2sEa9Z4Nca7%2FZ2NdagNqaoapd3ilaeFTfcbQCU0mlVxF1B6UUob2x9KA2UrkuHtMoP5igAO1%2BP2ib1J0zRkfaUY4n4bJyxOnTrvB76QDuML38s6ZfQhqvbiw2%2B8U0zVBZFLIz7dHzorklK7Cro%2FBCE2b8iqoygAlr5lC6I4OnXFhdZ5CUaRw3vZh0PFoUWa9EY67US%2BsMxGEmMADl4uic6TWhmV974vbwT3N1mNn4T7XMmfCfUpG2KJlGVPKH7nnkxNtb2y0GRodaxMmaOAg8SUOLlORvDmkGzj2FxZBVtOUgo8ZV3VMK8C031t1z%2BJAOt2sqZveYekzQcVgawn5xQ8H1LfFTQ3oj1aQGTJ85uT8T0w%2FYrEzQY6pgGpLAjUNsYgjudv2qhtysiaELvb7T7x2oxfpvPGg%2BMxu1PCtqxzB%2F0WOj3SWUk0FLMb4DXL281ZNdc6blBzCS%2BBwmhOpyhtEBjFhB2qModqEdGSp6mHVQT3Q7zXLqSMLDedUMzzUK29mrx4vCRkqByXarCECgd8hGPb94%2BJrkP03uHvv%2F1IpsHTdypE%2FTo3l%2F5iZ6nSgFOpAZvm%2F1%2FIDuaI8F%2BHa5Ik&X-Amz-Signature=ed5a429881e77c160d11e477bb9c0b3824a3e685614a6a4e3757712b7907585c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The RGB values were given in the thousands place,
Red- 32,354.836… /// Green-4,453.4734… /// Blue-35,063.023…


The last variable ‘red = ’ Divided this value into double digits. It was later printed with int() so it could give cleaner, easier-to-read values.


![Screenshot_2024-02-23_at_1.08.10_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/f285aa5f-1524-43c3-bd5a-c81c5caae0de/Screenshot_2024-02-23_at_1.08.10_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZ4YUF5%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtDywRsxvo1EXFroj5skEeDSnKeqi%2B0LKyoLLoy9HKTAiAS0yJyo%2F2oWedfxKjTjslNz0EEc8YchCu1ODGHK4P6Vyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM6MCUvMcmXwkzYzGlKtwDXzGa4JaSHsp7EyZSL96gDEjaC48803PMdWzrZk4XgXS9%2F77CIk1LonvUc%2BdEIoNElRO%2B4vOta5Mv6M5S08hnss4MpJrU9AnaA%2B25tnfBBQDB%2FhmHuWLobCwPLMWiTb7jrvawNvXqHR72hG8KDAtjZfMrQ5yh4AhXon4lyhNGIdzb1zp8WodyIUnb79J1vc9zgmtAJqAEXSlbXNYqdR6t2ufsCefYox2ke6JcaqKNqMrfPOf7ntyUVlNsNRN8D%2BIwT1S2FOMAxHS5k2sEa9Z4Nca7%2FZ2NdagNqaoapd3ilaeFTfcbQCU0mlVxF1B6UUob2x9KA2UrkuHtMoP5igAO1%2BP2ib1J0zRkfaUY4n4bJyxOnTrvB76QDuML38s6ZfQhqvbiw2%2B8U0zVBZFLIz7dHzorklK7Cro%2FBCE2b8iqoygAlr5lC6I4OnXFhdZ5CUaRw3vZh0PFoUWa9EY67US%2BsMxGEmMADl4uic6TWhmV974vbwT3N1mNn4T7XMmfCfUpG2KJlGVPKH7nnkxNtb2y0GRodaxMmaOAg8SUOLlORvDmkGzj2FxZBVtOUgo8ZV3VMK8C031t1z%2BJAOt2sqZveYekzQcVgawn5xQ8H1LfFTQ3oj1aQGTJ85uT8T0w%2FYrEzQY6pgGpLAjUNsYgjudv2qhtysiaELvb7T7x2oxfpvPGg%2BMxu1PCtqxzB%2F0WOj3SWUk0FLMb4DXL281ZNdc6blBzCS%2BBwmhOpyhtEBjFhB2qModqEdGSp6mHVQT3Q7zXLqSMLDedUMzzUK29mrx4vCRkqByXarCECgd8hGPb94%2BJrkP03uHvv%2F1IpsHTdypE%2FTo3l%2F5iZ6nSgFOpAZvm%2F1%2FIDuaI8F%2BHa5Ik&X-Amz-Signature=87d5871950efb7453c450947ab25bacf7b208c9628877c48e041f94569e0cef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


---


## DC Motors with H-Bridge Control


![Screenshot_2024-02-23_at_12.48.00_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/9cb64a6c-e3aa-4ee5-bef9-8f57cc4d4c92/Screenshot_2024-02-23_at_12.48.00_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMA7YSD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfrSdtVROwFDsKdLJ%2B3%2BuKx8yEi5wioy2uHjkuw25QdwIgRKtQ3xhLql4hf9r0wuODeDN7ft%2Bc7cCA696uMtm41dAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJH8wk%2FpnxBJnNurgircA%2BqGdurT9Cq7CXJQT%2Bn0%2FG3Lwfy45eo3NK4FDACEc6Ao6CEjR7ZxskJSX%2BqUmVEPB%2BbQgxcUEMi%2FuNAJDL7gRBYWH%2FeVkhdPpr440KdfUGGSX7qlMpdymCSy750wR61ScRguQdH2T9ap%2BYjgYr5zWtFVJUWFBdhpyZAxJh0SAemkl3hm56TZX8HaLQw7CkaMtYCgUZmGWapIoDXqX4rgY%2B0saU5lolr2lXPIDK8MSUuaFZX6Kh0vARm%2BsjDzIKCv8MP9H6SWEoa%2FNisPeDN6RJLvUrx%2B4DCuM17loDRFz6p0uuQfHbQV8Du38GIdyRvURx6Uy6K%2F9uxt5MBygbUTyVRkuEEOWQbzrE%2BxjZcClFAVmBGxy9AZ2nrn%2B%2FfFnyISxq3nVryXF2X6KucOJGgFaO2rVZrLE%2F1oq9rCn9JC4zMoHaYjqeQcx%2FBvrQKdYUalhCEvSOPF2bBtzjFsQ4zud60I689Jg5dk0bZWKkFT4Dq3GDA2SIE%2FVzMhk7ztDMnhBw8jnKe0xwlbYLQ30j%2FAwTNIql1ntihSIEZwVsWW5R1jFch9FLL2azjwLYUunX%2Fqx076uxt2URSHrSgx7WQKs2nUX8Z0oKjUBrkrqFzqP3K65nzoSXnnyLekxeB%2BMNWLxM0GOqUBIQce23DuPCOLKie%2FfBOnEQpjPwY3Zn6N95l%2FttRiB4NXquSKE%2ByaGCddXmmLlFpjcjWld6Zo0m1mEKdCNSWFf2rgXcDS16tDP8nI88jmq37bZSr9UbnVG0JjOGwBblHcomBrYWZiSmpEZsw%2FSqJtqXJ2RZNfN358UA7%2Fp7Z%2BOq%2BIeWn6Mhu1Old1ORNE5oZXAjhwgEpAq4CTlMll9qlkDrQFXX1r&X-Amz-Signature=4f5eb1278d1e606f86112599499d31a6ad6a7eb458c1fa19dafde408b8ab0545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Using an H-bridge's 6 control pins, we were able to control the forward and backward spin direction. We were also able to control speed using PWM, also known as Pulse Width Modulation.

<details>
<summary>Motor</summary>

Any electronic device plugged into the Raspberry PI has to be initialized. Libraries have to be imported, and values set to 0. The DC motors would not move if told to start at a ‘High’ position and later told to be ‘LOW’, where they're expected to either stop or spin backward based on other configurations. This was a test code to make the DC motors spin and make sure they work.

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


### Top View                                                                Side View


![040E321A-81AF-4BA6-93EE-6DE32DAF52FA.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/98de3b47-8ced-4c82-9908-d08cbd39e69a/040E321A-81AF-4BA6-93EE-6DE32DAF52FA.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BYAVMV%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFUsWmmRFkXsZ3hL646W1LqfFbb68J%2FcdLRjHAPHqkfAiEAmLVschmGLMI0b41o1ewkna4K8%2B9tcjef%2BQ8mQMyD%2B0Aq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKAGFZmG%2BWStQY8z2CrcA6YgD6j2riWooThnqMecuJx11UG%2Fxv0fsM5gjH982O4K%2BMGvnSHMssFwv0xa5lOlVB8HOdHg70bin5D2RgA5VZuK85ECYkcziMhnA64He9MgILauOeYvDC%2F8mpSp2cZpUOUMHNJwn70wG1%2BMpUxIyUHhbZHR6aRLsZoXfnxPsRStJH%2B3U7zIcQDDPiOYugwFmCgI7hiSXmgPbbq8MlD%2BpDbSqpyhjyrK6jhtCLbNPxd8dlu%2BwpN1kv2P%2BtMql3c3l9k%2BnA0MMY9fNsdb5kQF7rCC%2B3EO%2B7wY64sapee%2BkI8NW3lUl5XnUQd6KAS3bjdtun%2BOzkhIT6Z0MpeZ8Q%2Fkou9wo4ySA4q1uWRY%2BFP%2FM9WZ9JKWgcFGl3HGajrwBiVk%2BKqR1Z38htn%2FrigeZaLBV9udtdwomXJdokO4aicAyGrLHpRT92hI0%2Bkh0TSCtJbO8cFT3cjhttB%2Fapg2c4cV0VdDrk%2Fo2EnWE3GPWr1hBlIm%2FFJNVU9g4w0MEPDR7QId3LaeXjJf%2F0%2FTmUvg4pIrebDQiEDhJXjjm3SuN7zJuvfRqp3lxoHAOWjxit9qh64qRP2nyiDDkunDHzaumWN1hsPxqptHcXjO8BsbbaggjwxIuPcpMzdkvclwhNsyMO2KxM0GOqUBrYDP2qTO0j2pgXymo4Lc1BASxRzhcbEVJoidD7fGBluZeJgMf9hgWad9FYVApelF5czdFvqJlbJYrzOPHzDYam%2BPnEhS77I7Fh9rWTAOuOoiWZ7yd39JolnINIf56UHTM7Ai%2FbcNMXnYOMIrhlEB1pf57px8ORp91yt9DiIgYUOQRMvwV3%2FyPwlfYevLtAc4sDCOEQl4XoRTcom139lucqSpqeSi&X-Amz-Signature=6ae5b069508bde3be1f0dd535730270d824526bcc9b755d5b3b0812d18c73d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![27116FE4-A977-48C9-BB80-DB95F7A6845F.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/b03b394e-6a08-47c8-b383-3457c37ec11a/27116FE4-A977-48C9-BB80-DB95F7A6845F.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJTBBDH%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICms4iWta4SXIyzfsi68O2EK6J6HYbxs7KnF5hiz%2BREiAiEAnFBiRoBoKJqYe%2FkeVXILuSFNw9C93H6oMNH9EdjD2JIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNZ9xomjAmEy8E6ADyrcA5NbfuOvOc0odyBmxiFLqHaRZb409XllEuFSQ532UTAMHK7Kd4TUAEOL1QKMHyIsFwuZX3VUrcWmVPgRVwGRZPe37GEGlckFsI9iKLu%2FDO5J4Yug19VoKre%2B3VB60neWpji0K9HuACHAx%2Bu0u5enGeDfnD5jd7EW%2FbB6CnCYA3qGqeaCAaTpdLjsgZRGIXGlvvnc%2B6SHcUBfAF9x0PnXgIO34WjE7Tz%2Bm%2FFPETC2vSlWB8%2BLkee7KsbEo5RqvmPJwFvCFSyHXAxnL%2F31gFMM1kJhWosECfYDFoPlGvlGnd1MV8DOAmKX2gpJREwVWI9Hi34JfOQ0ftbEkvaRlIzO0knCBSdNZqTY2zRg2k%2BIiuJm5WXQ9Qs4G6ApVsWksJA%2FV%2Bv2fGul522zcQvGVcvSHr%2Fk58uF%2FoIad7VhW8eO26FnPfTbG7kYLzttrBQ9%2FtFTzzQQk2vpE%2FguAPUvaQeIUoGWfmfiqEtCUdbmpnD9kkD8X082kpEwJz4BA85xg%2BRbFri04MntJ%2F7n5Yd69styjpitDzcUHi0zf45TW6grEcf3h3ZdE9T%2BzAL%2BVUsXKKJvDIqvM0O8iG0NoLTiuvvEXOYZF08j3%2BaP4pyO0hFYEpT9X2JhEwwrhbojNwhQMOWLxM0GOqUBR5p67zqzstlHxawEqlnwmLFnM%2Be0VMoEvOiQtkMhG6%2B1Z8WSGUaVfltRsv3mC%2FqGd0M9DIiocIIzySrpXKzjRTyVzNjU6wjACtHTlWwPTbRc%2BORpy%2BG1up8%2BEyeax7kl63cP63Q1SrRhXB%2BFNPmyE763I1gwgXBnFFC8%2B4mJ6RHUPzeFa6HnoLjpStDvt71Cpll3JR0GXvahAadyH%2BBbF8qJJOkI&X-Amz-Signature=efed7f84f8b5f4d2c76482e4d6149cb58f0e06e6d6ccb4fc6d6d3a34da305c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


###                                                           Sensor View


![DE5C070C-87DB-474C-93F0-2DB409548647.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/3885b6a8-5e17-412f-9955-9570ebf3a35c/DE5C070C-87DB-474C-93F0-2DB409548647.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMA7YSD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfrSdtVROwFDsKdLJ%2B3%2BuKx8yEi5wioy2uHjkuw25QdwIgRKtQ3xhLql4hf9r0wuODeDN7ft%2Bc7cCA696uMtm41dAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJH8wk%2FpnxBJnNurgircA%2BqGdurT9Cq7CXJQT%2Bn0%2FG3Lwfy45eo3NK4FDACEc6Ao6CEjR7ZxskJSX%2BqUmVEPB%2BbQgxcUEMi%2FuNAJDL7gRBYWH%2FeVkhdPpr440KdfUGGSX7qlMpdymCSy750wR61ScRguQdH2T9ap%2BYjgYr5zWtFVJUWFBdhpyZAxJh0SAemkl3hm56TZX8HaLQw7CkaMtYCgUZmGWapIoDXqX4rgY%2B0saU5lolr2lXPIDK8MSUuaFZX6Kh0vARm%2BsjDzIKCv8MP9H6SWEoa%2FNisPeDN6RJLvUrx%2B4DCuM17loDRFz6p0uuQfHbQV8Du38GIdyRvURx6Uy6K%2F9uxt5MBygbUTyVRkuEEOWQbzrE%2BxjZcClFAVmBGxy9AZ2nrn%2B%2FfFnyISxq3nVryXF2X6KucOJGgFaO2rVZrLE%2F1oq9rCn9JC4zMoHaYjqeQcx%2FBvrQKdYUalhCEvSOPF2bBtzjFsQ4zud60I689Jg5dk0bZWKkFT4Dq3GDA2SIE%2FVzMhk7ztDMnhBw8jnKe0xwlbYLQ30j%2FAwTNIql1ntihSIEZwVsWW5R1jFch9FLL2azjwLYUunX%2Fqx076uxt2URSHrSgx7WQKs2nUX8Z0oKjUBrkrqFzqP3K65nzoSXnnyLekxeB%2BMNWLxM0GOqUBIQce23DuPCOLKie%2FfBOnEQpjPwY3Zn6N95l%2FttRiB4NXquSKE%2ByaGCddXmmLlFpjcjWld6Zo0m1mEKdCNSWFf2rgXcDS16tDP8nI88jmq37bZSr9UbnVG0JjOGwBblHcomBrYWZiSmpEZsw%2FSqJtqXJ2RZNfN358UA7%2Fp7Z%2BOq%2BIeWn6Mhu1Old1ORNE5oZXAjhwgEpAq4CTlMll9qlkDrQFXX1r&X-Amz-Signature=7c8ba8a71ca2e72c66d3414135a9bdb899204e29a8c24bdbfabcd2aac0f1163f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Because of the complexity of the code and trying to incorporate PID (Proportion, Integral, Derivative) control, we wanted a car to work, as we did not know if we understood PID properly.


---


## Electronics/Code


![IMG_1DBDE1F62B86-1.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/b6ad5b6d-d3c8-45de-811c-26c66435c5e9/IMG_1DBDE1F62B86-1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMA7YSD%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfrSdtVROwFDsKdLJ%2B3%2BuKx8yEi5wioy2uHjkuw25QdwIgRKtQ3xhLql4hf9r0wuODeDN7ft%2Bc7cCA696uMtm41dAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJH8wk%2FpnxBJnNurgircA%2BqGdurT9Cq7CXJQT%2Bn0%2FG3Lwfy45eo3NK4FDACEc6Ao6CEjR7ZxskJSX%2BqUmVEPB%2BbQgxcUEMi%2FuNAJDL7gRBYWH%2FeVkhdPpr440KdfUGGSX7qlMpdymCSy750wR61ScRguQdH2T9ap%2BYjgYr5zWtFVJUWFBdhpyZAxJh0SAemkl3hm56TZX8HaLQw7CkaMtYCgUZmGWapIoDXqX4rgY%2B0saU5lolr2lXPIDK8MSUuaFZX6Kh0vARm%2BsjDzIKCv8MP9H6SWEoa%2FNisPeDN6RJLvUrx%2B4DCuM17loDRFz6p0uuQfHbQV8Du38GIdyRvURx6Uy6K%2F9uxt5MBygbUTyVRkuEEOWQbzrE%2BxjZcClFAVmBGxy9AZ2nrn%2B%2FfFnyISxq3nVryXF2X6KucOJGgFaO2rVZrLE%2F1oq9rCn9JC4zMoHaYjqeQcx%2FBvrQKdYUalhCEvSOPF2bBtzjFsQ4zud60I689Jg5dk0bZWKkFT4Dq3GDA2SIE%2FVzMhk7ztDMnhBw8jnKe0xwlbYLQ30j%2FAwTNIql1ntihSIEZwVsWW5R1jFch9FLL2azjwLYUunX%2Fqx076uxt2URSHrSgx7WQKs2nUX8Z0oKjUBrkrqFzqP3K65nzoSXnnyLekxeB%2BMNWLxM0GOqUBIQce23DuPCOLKie%2FfBOnEQpjPwY3Zn6N95l%2FttRiB4NXquSKE%2ByaGCddXmmLlFpjcjWld6Zo0m1mEKdCNSWFf2rgXcDS16tDP8nI88jmq37bZSr9UbnVG0JjOGwBblHcomBrYWZiSmpEZsw%2FSqJtqXJ2RZNfN358UA7%2Fp7Z%2BOq%2BIeWn6Mhu1Old1ORNE5oZXAjhwgEpAq4CTlMll9qlkDrQFXX1r&X-Amz-Signature=ad49bf844c199604d0254fbacf1dfe9a3d1108ae8516d7626791120d6338577a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Above is the wiring diagram for the 2 Color Sensors and corresponding DC motors. The code was written to detect any color that was not white. We followed the track below (Blue course).

<details>
<summary>Course</summary>

![IMG_1337.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/39551220-13aa-4a96-bd9e-e7a66eed61bb/IMG_1337.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7O5UOGR%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCffPTY7EsKgw4edyxsgbhmSpVXi6AGUrfESNRpheXdHAIgYg9XIMg2aS3lOgOd9yBrQLNXbuqmZATLxwbcVh4u7Aoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFoQHE2SVm0%2FpMfCTCrcA627bMHu34rA9u8%2BmU2vnbf4O2uVxCOZpsRIfYdLwd57JeBPe1wEB1Yxe01YFMwBgotMif3hVsZ3L4T%2Fjgkbwvp3xH4xvbdjqnXjqEM2gT6vyKFvtPQwtBPne2vTw0B%2Bh2rZ%2Ba0F8iyi1Ip5iyKQc2L6GWhDEuU0PDzLclr%2BjGY2%2BPATLCVpyjuqIud%2FjopDRIYrYTyfiQ1MO0n3feK0MiQwwGvlPfI2lwwA%2FiFeNrzMMCT%2BoQTj5s%2Bi3pvoaVrcDe8lQ%2FdiJICMYX3P9ucORqObApzML9%2BEDlcBPXAtpixzT5pZwdqVNgLlg7fszXWDj%2FuDMl1wvafHbcFn9MOGrfvNK6%2BI8G1Hm5EVPhCc0eRZOLxj0lyW57NhKrT63C3zWwfA78lrqF1N8rJoHBwtYiFV0NexFxbojZWOYW3TjaGaoho2eWfFali0sapQgsEXcPhxvQSONEl78IZQAFFJxBTzPH2dtb%2BvgZgQ6Ynht73NxOy%2BztK%2BFBoVyH4af8nVDoix6%2F9%2BjdGQAcJlV8ps%2BmSxYTxJrsLmSc5q2KEZfVLtmpWQzBHuErogT15n4ClotDIm6zZ4RXVREo7zsvqfGeIZf8ml9Rc62Vr3K7P0e8CZRMUNr%2BS9OasEO2O9MIeMxM0GOqUBKeHP1Dx%2B2GydluCSgZrIIqCcBGRKHpPP%2BcVpwttwJCa47TxZyajhfvQgqBmEUZlzrZ6GRPpUv1L6j531%2FOzR4V7twMQHJUwk7wz9xOQwvvzll0dF0sbUVLkumElzFmJdeR8BCRH1bQ3%2BH93pVMrdG5sWfjGoTfuhZXVp48xuEwk0ikClvZgTOAbJQD9Rq644EtIQRLPdWopBK3PL2EZ%2Fqqi9wmNV&X-Amz-Signature=3da12137d5dd3373f047aa51e089c5934d2d0c6e29c9954984670a9f31e019f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


 If neither color sensor detected a color, the motors would drive forward. If the left color sensor detected blue, it would slow the motor down so it could readjust itself as necessary, and the right one would speed up. If it overshot, and the suitable color sensor detected blue, it would slow down, and the left would speed up to readjust. Since a steering mechanism wasn't made, we used this to steer left and right. The PID control was used to see if the colors detected were within a range t and would also move the motors accordingly. The proportion part was used to make this work.

<details>
<summary>FINAL CODE HERE</summary>

```python
import RPi.GPIO as GPIO
import time

# Assign GPIO pin numbers to variables
# left color sensor
l_s2 = 26
l_s3 = 19
l_sig = 13

# right color sensor
r_s2 = 16
r_s3 =5
r_sig = 21

# motor
in1 = 5
in2 = 0
in3 = 11
in4 = 27
ena = 6
enb = 22
cycles = 10
#motor1 = GPIO.PWM(ena, 6)
# Set PWM frequency
pwm_freq = 50

# Set initial motor speeds
left_speed = 15
right_speed = 15

# Setup GPIO and pins
GPIO.setmode(GPIO.BCM)

# right color sensor
GPIO.setup(r_s2, GPIO.OUT)
GPIO.setup(r_s3, GPIO.OUT)
GPIO.setup(r_sig, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

# left color sensor
GPIO.setup(l_s2, GPIO.OUT)
GPIO.setup(l_s3, GPIO.OUT)
GPIO.setup(l_sig, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

# Setup PWM for motors
GPIO.setup(ena, GPIO.OUT)
GPIO.setup(enb, GPIO.OUT)
pwm_a = GPIO.PWM(ena, pwm_freq)
pwm_b = GPIO.PWM(enb, pwm_freq)
pwm_a.start(left_speed)
pwm_b.start(right_speed)

# Set the GPIO pins as output and initialize them to low
GPIO.setup(in1, GPIO.OUT)
GPIO.setup(in2, GPIO.OUT)
GPIO.setup(in3, GPIO.OUT)
GPIO.setup(in4, GPIO.OUT)
GPIO.output([in1, in2, in3, in4], GPIO.LOW)

# Function to set motor speed
def set_speed_a(speed):
    pwm_a.ChangeDutyCycle(speed)
    pwm_a.start(speed)

def set_speed_b(speed):
    pwm_b.ChangeDutyCycle(speed)
    pwm_b.start(speed)

# Function to drive motor forward
def forwardr():
    GPIO.output(in1, GPIO.HIGH)
    GPIO.output(in2, GPIO.LOW)
    #time.sleep(1)

def forwardl():
    GPIO.output(in3, GPIO.LOW)
    GPIO.output(in4, GPIO.HIGH)
    #time.sleep(1)

def stopr():
    GPIO.output(in1, GPIO.LOW)
    GPIO.output(in2, GPIO.LOW)
    # time.sleep(1)

def stopl():
    GPIO.output(in3, GPIO.LOW)
    GPIO.output(in4, GPIO.LOW)
    # time.sleep(1)

def stop_all():
    stopr()
    stopl()
    # time.sleep(2)

# Function to detect color from the right sensor
def DetectColorRight():
    GPIO.output(r_s2, GPIO.LOW)
    GPIO.output(r_s3, GPIO.LOW)
    # time.sleep(0.1)
    start_time = time.time()
    for count in range(cycles):
        GPIO.wait_for_edge(r_sig, GPIO.FALLING)
    duration = time.time() - start_time
    red = cycles / duration / 1000

    GPIO.output(r_s2, GPIO.LOW)
    GPIO.output(r_s3, GPIO.HIGH)
    # time.sleep(0.1)
    start_time = time.time()
    for count in range(cycles):
        GPIO.wait_for_edge(r_sig, GPIO.FALLING)
    duration = time.time() - start_time
    blue = cycles / duration / 1000

    GPIO.output(r_s2, GPIO.HIGH)
    GPIO.output(r_s3, GPIO.HIGH)
    # time.sleep(0.1)
    start_time = time.time()
    for count in range(cycles):
        GPIO.wait_for_edge(r_sig, GPIO.FALLING)
    duration = time.time() - start_time
    green = cycles / duration / 1000

    return red, blue, green

    
# Function to detect color from the left sensor
def DetectColorLeft():
    GPIO.output(l_s2, GPIO.LOW)
    GPIO.output(l_s3, GPIO.LOW)
    # time.sleep(0.1)
    start_time = time.time()
    for count in range(cycles):
        GPIO.wait_for_edge(l_sig, GPIO.FALLING)
    duration = time.time() - start_time
    red = cycles / duration / 1000

    GPIO.output(l_s2, GPIO.LOW)
    GPIO.output(l_s3, GPIO.HIGH)
    # time.sleep(0.1)
    start_time = time.time()
    for count in range(cycles):
        GPIO.wait_for_edge(l_sig, GPIO.FALLING)
    duration = time.time() - start_time
    blue = cycles / duration / 1000

    GPIO.output(l_s2, GPIO.HIGH)
    GPIO.output(l_s3, GPIO.HIGH)
    # time.sleep(0.1)
    start_time = time.time()
    for count in range(cycles):
        GPIO.wait_for_edge(l_sig, GPIO.FALLING)
    duration = time.time() - start_time
    green = cycles / duration / 1000
    
    return red, blue, green

try:
    while True:
        left_red, left_blue, left_green = DetectColorLeft()
        right_red, right_blue, right_green = DetectColorRight()

        print('left blue', left_blue)
        print('right blue', right_blue)

        if left_blue >= 30 and right_blue >= 30:
            print('both white')
            forwardr()
            forwardl()
            set_speed_a(15)  
            set_speed_b(15)  

        if left_blue >= 25 and right_blue <= 35:
            stop_all()
            print('in r white and left b')

            while left_blue >= 25 and right_blue <= 35:
                set_speed_a(20)
                set_speed_b(5)
                forwardr()

                left_red, left_blue, left_green = DetectColorLeft()
                right_red, right_blue, right_green = DetectColorRight()
            #if right_blue >= 26:
               # stop_all()  
               # time.sleep(1)

        if right_blue >= 25 and left_blue <= 35:
            stop_all()
            print('in l white and r blue')

            while right_blue >= 25 and left_blue <= 35:
                set_speed_a(5)
                set_speed_b(20)
                forwardl()

                left_red, left_blue, left_green = DetectColorLeft()
                right_red, right_blue, right_green = DetectColorRight()
                
            #if left_blue >=26:
               # stop_all()
               # time.sleep(1)
        
        time.sleep(0.1)

except KeyboardInterrupt:
        GPIO.cleanup()
        pwm_a.stop()
        pwm_b.stop()
```


</details>

