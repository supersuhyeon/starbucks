//.search태그안에서 아무데나 (아무태그나) 클릭을해도 focus라는 속성이 실행될수있도록

const searchEl = document.querySelector('.search');
//.search라는 요소를 htmldoctype에서 찾아서 변수 searchEl에 대입해라
const searchInputEl = searchEl.querySelector('input');
//변수 searchEl에서 input태그를 찾아 searchInputEl에 대입해라

searchEl.addEventListener('click', function(){
//변수 searchEl에 click 이라는 이벤트를 추가할테니 잘 청취하고 있다가 click 되면, 

searchInputEl.focus();
//변수 searchInputEl이 focus라는 기능을 실행해라
});

searchInputEl.addEventListener('focus', function(){
//변수 searchInputEl에 focus라는 이벤트를 추가할테니 잘 청취하고 있다가 focus가 되면,
    searchEl.classList.add('focused');
    //변수 searchEl에게 focused라는 클래스명을 추가해라
    searchInputEl.setAttribute('placeholder', '통합검색');
    //searchInputEl은 placeholder이라는 속성을 실행하고 '통합검색' 문자열을 표시하라
    //place holder 뜻 : 내가 입력하면 사라지고 아니면 생김
});

searchInputEl.addEventListener('blur', function(){
    //변수 searchInputEL에 blur라는 이벤트를 추가할테니 잘 청취하고 있다가 blur이 되면,

    searchEl.classList.remove('focused');
    //변수 searchEl에게 focused라는 클래스를 지워라
    searchInputEl.setAttribute('placeholder', '');
    //변수 searchInputEl은 placeholder이라는 속성을 실행하고 '' 빈내용이되게하라)
});



const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); //2021
//this year 이라는 클래스에 텍스트 컨텐츠로 이번해의 날짜 2021이 들어간다 
