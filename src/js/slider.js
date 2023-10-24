import './slick.js';
$('.slider-skills__wrapper').slick({
  prevArrow: $('.slider-skills__prev'),
  nextArrow: $('.slider-skills__next'),
  'fade	':true, // затухание
  respondTo: 'min',
  variableWidth:true,
  speed: 500,
});

$('.slider-review__wrapper').slick({
  prevArrow: $('.review__prev'),
  nextArrow: $('.review__next'),
  'fade	':true, // затухание
  padding: '0px',
  slidesToShow:2,
  slidesToScroll:1,
  speed: 500,
  centerPadding:'0px',
  respondTo: 'min',
  variableWidth:true,
  cssEase: 'linear'
});

$('.equipment__list').slick({
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  mobileFirst: true,
  responsive: [{
    breakpoint: 1300,
    settings: 'unslick'
  }]
});






$('.tabs').slick({
  arrows: false,
  infinite: false,
  slidesToScroll: 1,
  variableWidth: true,
  // mobileFirst: true,
  variableWidth: true,
  // responsive: [{
  //   breakpoint: 1100,
  //   settings: 'unslick',
  // }]
});

$('.tab-items').not(':first').hide();
$('.tabs__wrapper .slick-slide').click(function(){
  $('.tabs__wrapper .slick-slide').removeClass('active').eq($(this).index()).addClass('active');
  $('.tab-items').hide().eq($(this).index()).fadeIn();
  console.log($('.tabs__wrapper .slick-slide'))
}).eq(0).addClass('active');


$('.tab__open').click(function(){
  $('.tabs__content').addClass('hide');
});
