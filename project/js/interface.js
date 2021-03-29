$('.pf_slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
	vertical:true,
	prevArrow:'.prev_btn',
	nextArrow: '.next_btn'
});

//포트폴리오 a 기본이벤트 제거
$('.portfolio a').click(function(e){
	e.preventDefault();
});


// 클릭시 큰화면으로 전환
$('.portfolio a').click(function(){
    var bigPic = document.querySelector('#main_pic');
    var smallPic = document.querySelectorAll('.small_pic');
    for(var i=0;i<smallPic.length;i++){
        smallPic[i].addEventListener('click',changePic);
    }
    function changePic() {
        var newPic = this.src;
        bigPic.setAttribute('src',newPic);
    }
});

