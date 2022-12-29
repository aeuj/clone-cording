

AOS.init();

/* 버튼 클릭시 스크롤 부드럽게 움직이게 하기 */
$('a').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});



/* 스크롤시 navbar borderBottom 값 주기 */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("header__wrap").style.borderBottom = "1px solid rgba(0, 27, 55, 0.1)";
  } else {
    document.getElementById("header__wrap").style.borderBottom = "0px solid rgba(0, 27, 55, 0.1)";
  }
}



/* 스크롤시 fade또는 transition 효과주기 */
// AOS.js 라이브러리 사용
// 스크롤 위치 구하기
// IE not supports, IE 지원 X
// window.scrollY;
// document.scrollingElement.scrollTop;	

// Supports all major browsers
// document.documentElement.scrollTop;
// document.querySelector('html').scrollTop;

// console.log(scrollY);