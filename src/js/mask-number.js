var $ = jQuery.noConflict();

document.addEventListener('DOMContentLoaded',()=>{
  jQuery(function($){
    $(".call__number").mask("+7 (999)-999-99-99");
    $(".questions__number").mask("+7 (999)-999-99-99");
    $(".modal__number").mask("+7 (999)-999-99-99");
  });
})
