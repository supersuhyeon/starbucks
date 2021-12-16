# ☕️ Starbucks
김수현의 스타벅스 랜딩 페이지(홈페이지) 예제입니다.

[master 브랜치로 이동]  
[signin 브랜치로 이동]

[master 브랜치로 이동]:https://github.com/supersuhyeon/starbucks/tree/master
[signin 브랜치로 이동]:https://github.com/supersuhyeon/starbucks/tree/signin

![Starbucks예제사진!](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/main_screenshot.jpg)

# GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)]은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다. [ScrollToPlugin]은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.

[GSAP(The GreenSock Animation Platform)]:https://greensock.com/gsap/
[ScrollToPlugin]:https://greensock.com/scrolltoplugin/

>자바스크립트 지식이 뛰어나지 않아도 충분히 사용할 수 있음
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

[.to() 사용법][GSAP Easing]

[.to() 사용법]:https://greensock.com/docs/v3/GSAP/gsap.to()
[GSAP Easing]:https://greensock.com/docs/v2/Easing

```
gsap.to(요소, 시간, 옵션)
// 또는
TweenMax.to(요소, 시간, 옵션)
```
```
gsap.to(window, .7, {
  scrollTo: 0
});
```