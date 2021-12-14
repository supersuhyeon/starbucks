 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.

 function onYouTubeIframeAPIReady() {
     //<div id="player"></div>
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8', //최조 재생할 유튜브 영상 ID
     playerVars: {//영상을 재생하기 위한 변수들
        autoplay: true, //자동재생유무
        loop: true, //반복재생유무
        playlist: 'An6LvWQuj_8' //반복재생할 유튜브 영상 ID 목록
     },
     events:{
        onReady: function(event){
            //온레디라는 메소드가 실행되면 어떻게 처리를 할거냐?
            event.target.mute() //음소거처리

        }

     }
   });
 }


