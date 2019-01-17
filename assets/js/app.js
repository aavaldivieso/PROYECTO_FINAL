$(document).ready(function(){

  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currenImg.removeClass('active').css('z-index, -10');
      nextImg.addClass('active').css('z-index', 10);

    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  
});﻿
//append prepend click() evento.ready delegación de eventos