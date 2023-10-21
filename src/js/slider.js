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
  centerMode:true,
});