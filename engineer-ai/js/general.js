$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });

 $(".trainer-card").on("mouseenter", function () {
    $(this).addClass("flip");
  })
  $(".trainer-card").on("mouseleave", function () {
    $(this).removeClass("flip");
  })

  $(".trainer-card").on("touchstart", function () {
    $(this).closest(".trainers").find(".trainer-card").removeClass("flip");
    $(this).toggleClass("flip");
  })

  // Slider jQuery
  var window_width = $(window).width(),
    slider_item = $(".fitness-slider li").length;
  $(".fitness-slider li:first-child").addClass('active');
  $(".fitness-slider li").height(window_width * 0.226);
  $(".fitness-slider li").width(window_width);
  $(".fitness-slider ul").width(window_width * slider_item);

  $(".next-btn").click(function () {
    var dataIndex = $(".fitness-slider li.active").data("index")+1;
    $(".prev-btn").removeClass("disable");
    if ($(".fitness-slider li.active").next().length) {
      $(".fitness-slider li.active").addClass('next').next().addClass('active');
      $(".fitness-slider li.next").removeClass('active next');
      var current_active = $(".fitness-slider li.active").index();
      $(".fitness-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
    }
    if(dataIndex == 4){
      $(this).addClass("disable");
    }
  })

  $(".prev-btn").click(function () {
    var dataIndex = $(".fitness-slider li.active").data("index")-1;
    $(".next-btn").removeClass("disable");
    if ($(".fitness-slider li.active").prev().length) {

      $(".fitness-slider li.active").addClass('prev').prev().addClass('active');
      $(".fitness-slider li.prev").removeClass('active prev');
      var current_active = $(".fitness-slider li.active").index();
      $(".fitness-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
    }
    if(dataIndex == 1){
      $(this).addClass("disable");
    }
  })

  $(window).resize(function (event) {
    window_width = $(window).width(),
      slider_item = $(".fitness-slider li").length;
    $(".fitness-slider li:first-child").addClass('active');
    $(".fitness-slider li").height(window_width * 0.226);
    $(".fitness-slider li").width(window_width);
    $(".fitness-slider ul").width(window_width * slider_item);
    var current_active = $(".fitness-slider li.active").index();
    $(".fitness-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");

  });
  /*mobile menu*/
  $(".toggle-menu").click(function () {
    $("html,body").toggleClass("open-menu");
  });

});
/* Window scroll */
$(window).scroll(function () {

  var scrollTopPos = $(window).scrollTop() / 2 - 180;
  $(".fitness-slider li.active .bg_img").css({ "transform": "translate3d(0," + scrollTopPos + "px,0)" })
});