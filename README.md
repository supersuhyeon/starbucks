# ☕️ Starbucks

김수현이 스타벅스 랜딩 페이지(홈페이지)를 만들어봤습니다.

[master 브랜치로 이동](https://github.com/supersuhyeon/starbucks/tree/master)  
[signin 브랜치로 이동](https://github.com/supersuhyeon/starbucks/tree/signin)

![starbuckspage](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/main_screenshot.jpg)

# GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)]은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다. ScrollToPlugin은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.

[GSAP(The GreenSock Animation Platform)]: https://greensock.com/gsap/ "GSAP으로 이동합니다"

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>  

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

[.to()사용법] 
[GSAP Easing]

[.to()사용법]:https://greensock.com/docs/v3/GSAP/gsap.to()

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

# Swiper

[Swiper]는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.

[Getting Started With Swiper]
> [2021.08.26 Updated] Swiper 6버전을 사용합니다. 7버전과의 사용법이 다르기 때문에 6버전을 유지합니다.

```
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

[Swiper API](옵션)을 확인하세요!
```
new Swiper(요소, 옵션);
```

```
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
```

[Swiper]:https://swiperjs.com/
[Getting Started With Swiper]:https://swiperjs.com/get-started
[Swiper API]:https://swiperjs.com/swiper-api

# Youtube API

[IFrame Player API]를 통해 YouTube 동영상을 제어할 수 있습니다.

[IFrame Player API]:https://developers.google.com/youtube/iframe_api_reference?hl=ko

유튜브 영상이 출력될 위치에 요소를 지정(생성)합니다.

```
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

`onYouTubePlayerAPIReady` 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않습니다!
그리고 함수는 전역(Global) 등록해야 합니다!

[플레이어 매개변수(PlayerVars)]에서 더 많은 옵션을 확인할 수 있습니다.

[플레이어 매개변수(PlayerVars)]:https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters

```
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}
```

# ScrollMagic

[ScrollMagic] 은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리입니다.
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용합니다.

[ScrollMagic]:https://github.com/janpaepke/ScrollMagic

[ScrollMagic API]

[ScrollMagic API]:http://scrollmagic.io/docs/

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

```
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)

```

# Lodash

[Lodash]는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.

[Lodash]:https://lodash.com/

[Lodash API]  
[Lodash throttle]

[Lodash API]:https://lodash.com/docs/4.17.15
[Lodash throttle]:https://lodash.com/docs/4.17.15#throttle

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```

# JS Strict Mode

JavaScript를 '엄격 모드'로 사용합니다.
파일 혹은 함수의 최상단에 작성해야 합니다.

```
'use strict';
````

> 'Strict Mode'는 ECMAScript 5 버전에 있는 새로운 기능으로써, 프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다. 이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.

### 엄격모드의 장점
-일반적인 코딩 실수에서 예외 처리
-안전하지 않은 액션에 대한 예외 처리 (ex: 전역 객체로 접근)
-혼란스럽거나 제대로 고려되지 않는 기능들을 비활성화

# 랜덤한 숫자를 생성하는 함수
```
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
```