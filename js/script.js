
   
  function display_menu() {
    $(".nav__menu__mobile_menu__list").toggle(function(){
      $('.nav__menu__mobile_menu__list>i').toggleClass("fa-times  fa-bars");
     // $('.header-nav-dropdown-mobile').hide();
      $('#dropdown-mobile').removeClass("active");
    });
  }
  function display_sidebar() {

    $(".services1-content-sidebar").toggle(function(){
      $('.header-side-nav>i').toggleClass("fa-times fa-ellipsis-h");
    });

  }

$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $("#dropdown>a").click(function(e){
      e.preventDefault();
      $('.nav__menu__list__items__dropdown').toggle();
    });
   
    $("#dropdown-mobile>a").click(function(e){
      e.preventDefault();
      $('.nav__menu__mobile_menu__list__items__dropdown__list').toggle();
      // toggle(function(){
      //   $('#dropdown-mobile').toggleClass("active");
      // });
    });
    
});
$("#services").click(function(e){
  e.preventDefault();
  console.log("services");
  $('#services_sublist').toggle();
});
$("#products").click(function(e){
  e.preventDefault();
  $('#products_sublist').toggle();
});

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});


$('input[type=text]').on('focus', function() {
  $("input[type=text]").prev().hide();
});
$('input[type=text]').on('blur', function() {
if($('input[type=text]').val().length==0){
  $("input[type=text]").prev().show();
}
  
});

$('input[type=email]').on('focus', function() {
$("input[type=email]").prev().hide();
});
$('input[type=email]').on('blur', function() {
if($('input[type=email]').val().length==0){
$("input[type=email]").prev().show();
}
});
$('textarea').on('focus', function() {
$("textarea").prev().hide();
});
$('textarea').on('blur', function() {
if($('textarea').val().length==0){
$("textarea").prev().show();
}
});
