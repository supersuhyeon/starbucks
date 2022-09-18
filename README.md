## Starbucks website

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/94214512/190929817-db8dd6e8-fb71-4bbe-89e0-40eaf177de18.gif)

This is a Starbucks clone.<br>
[starbucks-website](https://keen-brattain-12f8a3.netlify.app/)

### Goal of the project

1. Build a commercial website with HTML,CSS, and Javascript
2. Use Javascript Libraries
3. Study and create GitHub branches and merges

### Languages

HTML, CSS, and Javascript

### Features

1. GSAP & Scroll To Plugin <br>
   [how to use scroll to plugin](https://greensock.com/scrolltoplugin/) <br>
   [GSAP easing](https://greensock.com/docs/v2/Easing)

```js
gsap.to(element, time, option);
// 또는
TweenMax.to(element, time, option);
gsap.to(window, 0.7, {
  scrollTo: 0,
});
```

2. Swiper <br>
   [how to use Swiper](https://swiperjs.com/get-started)

```html
<!-- in HEAD -->
<link
  rel="stylesheet"
  href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css"
/>
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

```js
new Swiper(element, option);
new Swiper(".swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});
```

3. Youtube API <br>
   [how to use Youtube API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

```js
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      },
    },
  });
}
```

4. Lodash<br>
   [how to use Lodash API](https://lodash.com/docs/4.17.15)

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
  integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww=="
  crossorigin="anonymous"
></script>
```

5. ScrollMagic <br>
   [how to use ScrollMagin API](http://scrollmagic.io/docs/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

### Self-reflection

This was my first clone project implementing HTML, CSS, and basic Javascript grammar. I still remember how excited I was to learn about APIs because it saves a lot of time and makes my website look more dynamic. I'm very interested in learning more about the fundamentals behind these APIs so I can make my own in the future.
<br>
It was also good to learn about and practice branches and merges in GitHub. I'm excited to learn how powerful GitHub and its functions are in a team environment.
