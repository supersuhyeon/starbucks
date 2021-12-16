


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){

    console.log(window.scrollY);
    if(window.scrollY > 500){
//화면이 스크롤될때마다 윈도우라는 객체부분에 있는 scrollY라는 속성부분의 값이 그때그떄마다
//갱신이 됩니다 이 scrollY라는 값을 통해서 화면이 위에서 몇px지점에 있는지 파악가능

//배지숨기기
//gsap이란 javascript의 애니메이션 라이브러리, to()라는 매소드를 사용해서 여러 옵션들을
//지정할수있는데 그 옵션은 우리가 css에서 사용하는 기능을 사용할수있다
//gsap.to(요소,지속시간,옵션);
gsap.to(badgeEl, 0.6, {
    opacity:0,
    display: 'none'
});

//버튼보이기
gsap.to('#to-top', .2, {

    x: 0  //제자리로돌아오기
});

} else { 

        //배지 보이기
        gsap.to(badgeEl, 0.6, {
            opacity:1,
            display:'block'
        });
        //버튼숨기기
        gsap.to('#to-top', .2, {

            x: 100  //x축으로 얼마나 가겠는가 오른쪽으로 100px만큼 가겠다
        });
    }
}, 300));
//윈도우 부분에 스크롤이벤트를 통해서 결국에 화면에 스크롤을 하면 수십개의 함수가 실행되는데
//throttle 이라는 기능을 사용해 그것을 0.3초 단위로 부화를 줘서 함수가 우루루 실행되는것을 방지한다
//_.throttle(함수, 시간)

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function(){

    gsap.to(window, .7, {
        scrollTo : 0 //스크롤투 플러그인이 있어야 움직임

    });

});



const fadeEls = document.querySelectorAll('.visual .fade-in');
//우리는 html에서 fadein이라는 div를 4개를 만들었고
fadeEls.forEach(function(fadeEl,index){
    //그 네개가 한번씩 반복되면서 이러한 함수가 실행되는데 
    //첫번째 반복할때 이 index의 값은 숫자 0이다
    //foreach뜻 : fadeEls들을 반복시킬껀데 fadeEl(반복중인요소), index(반복중인번호)로 기능하게하라 
gsap.to(fadeEl,1,{
delay:(index+1)*.7,

//그래서 0에다가 0.7을 곱하면 어짜피 0이 되니까 delay가 없는게 되겠다 그래서
//0에다가 숫자 1을 더해서 거기다가 0.7을 곱하면 처음 반복되는 fade-in 이라는 클래스를
//가진 요소는 0.7초 후에 애니메이션이 동작할거고, 두번째는 1.4초, 세번째요소는 2.1초, 2.7초 뒤에 동작 
opacity:1

});

});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction:'vertical',
    autoplay:true,
    loop:true
});
//new : 자바스크립트 생성자. 여러 객체를 다룰수있음.

new Swiper('.promotion .swiper-container',{
    slidesPerView:3, //한번에 보여줄 슬라이드 개수
    spaceBetween:10, //슬라이드 사이 여백, 10픽셀 간격으로
    centeredSlides:true, //1번슬라이드가 가운데 보이기
    loop:true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {

        prevEl:'.promotion .swiper-prev', //이전슬라이드보는버튼
        nextEl:'.promotion .swiper-next' //다음슬라이드보는버튼
    }
});


new Swiper('.awards .swiper-container',{

    autoplay: true,
    loop : true,
    spaceBetween : 30,
    slidesPerView: 5,
    navigation: {

        prevEl : '.awards .swiper-prev',
        nextEl : '.awards .swiper-next'
    }
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
//프로모션이 숨겨졌니? = 안숨겨져있다 ---->보이고있다

promotionToggleBtn.addEventListener('click', function(){

    isHidePromotion = !isHidePromotion
    //느낌표뒷쪽값을 반대로 만들어주세요라는 뜻 지속적으로 반대로 만들어준다
if(isHidePromotion){ 
    //숨김처리
promotionEl.classList.add('hide');
//프로모션의요소 hide클래스가 추가가되더라

}else{
//보임처리
promotionEl.classList.remove('hide');
}

})


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size){

    //gsap.to(요소, 시간, 옵션);
gsap.to(selector, //선택자
    random(1.5,2.5), //애니메이션 동작시간
    { //옵션

    y: size,
    repeat: -1,
    yoyo:true,
    ease:Power1.easeInOut, //이지함수를 통해 우리가 원하는 움직임을 제어할수있음
    delay: random(0, delay)
}); 

}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){

new ScrollMagic
    .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());

});

