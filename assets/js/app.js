$(document).ready(function() {

  $('.prev').on('click', function(){

    var prevImg = $('img.active').prev('.slider-inner img');
    if(prevImg.length == 0) {
      prevImg = $('.slider-inner img:last');
    }

    $('img.active').removeClass('active');
    prevImg.addClass('active');
  });

  $('.next').on('click', function() {

    var nextImg = $('img.active').next('.slider-inner img');
    if(nextImg.length == 0) {
      nextImg = $('.slider-inner img:first');
    }

    $('img.active').removeClass('active');
    nextImg.addClass('active');
  });

  
});﻿
//append prepend click() evento.ready delegación de eventos