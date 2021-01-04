
   
  function display_menu() {
    $(".wrapper__header__nav__menu__mobile_menu__list").toggle(function(){
      $('.wrapper__header__nav__menu__mobile_menu__list>i').toggleClass("fa-times  fa-bars");
     // $('.header-nav-dropdown-mobile').hide();
      $('#dropdown-mobile').removeClass("active");
    });
  }
  function display_sidebar() {

    $(".services1-content-sidebar").toggle(function(){
      $('.header-side-nav>i').toggleClass("fa-times fa-ellipsis-h");
    });

  }
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $("#dropdown>a").click(function(e){
      e.preventDefault();
      $('.wrapper__header__nav__menu__list__items__dropdown').toggle();
    });
   
    $("#dropdown-mobile").click(function(e){
      e.preventDefault();
      $('.wrapper__header__nav__menu__mobile_menu__list__items__dropdown__list').toggle();
      // toggle(function(){
      //   $('#dropdown-mobile').toggleClass("active");
      // });
    });
    
});
