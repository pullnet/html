
/*スクロールでヘッダーデザインを変更*/
$(function () {
  var $win = $(window),
    $header = $('header'),
    $logo = $('.logo img'),
    $width = $(window).width(),
    animationClass = 'is-animation',
    scrollNum = 100;

    var path = location.pathname;

    $win.on('load scroll' , imgChange);
    $win.on('resize', imgChange);

    function imgChange() {
      console.log(path);
      $width = $(window).width();
      var value = $(this).scrollTop();
      if ( $width > 1200 && path =='/' ){
        if (value > scrollNum ) {
          $header.removeClass(animationClass);
          $logo.attr('src', 'https://komuzu.co.jp/wp_2022/wp-content/themes/Komus-lively-theme2022/img/common/logo.svg');
          scrollFlag = false;
        } else {
          $header.addClass(animationClass);
          $logo.attr('src', 'https://komuzu.co.jp/wp_2022/wp-content/themes/Komus-lively-theme2022/img/common/logo_s.svg');
          scrollFlag = true;
        }
      }else {
        $header.removeClass(animationClass);
        $logo.attr('src', 'https://komuzu.co.jp/wp_2022/wp-content/themes/Komus-lively-theme2022/img/common/logo.svg');
        scrollFlag = false;
      }
    }

});

/*TOP ABOUTスマホ構造変更*/
$(function () {
  $ttl = $('#js-about-ttl'),
  $(window).on('load', aboutChange);
  $(window).on('resize', aboutChange);

  function aboutChange() {
    $width = $(window).width();
    if ( $width <= 768 ){
      $ttl.appendTo('.about_img');
    }else {
      $ttl.prependTo('.about_text');
    }
  }
});


/*TOP FVスライダー*/
jQuery(function ($) {
  $('.fv_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed:4000,
    autoplay:true,
    fade: true,
    dots: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    swipe: false,
    swipeToSlide: false,
  });
});


/*TOP POINTスライダー*/
jQuery(function ($) {
  var $carousel = $('.point_slider');

  $(window).on('load', sliderSetting);
  $(window).on('resize', sliderSetting);

      function sliderSetting(){

        var width = $(window).width();

        if(width >= 0){
          $carousel.not('.slick-initialized').slick({
              arrows: false,
              slidesToShow: 5,
              dots:false,
              autoplay:true,
              autoplaySpeed:1000,
              speed:2000,
              responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 4,
                  }
                }, {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 3,
                  }
                }, {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    centerMode:true,
                    centerPadding:'50px',
                  }
                }
              ]
            });
              
        } else {
            //$('.slide.slick-initialized').slick('unslick');
        }
    }

    sliderSetting();

    $(window).resize( function() {
        sliderSetting();
    });

});


/*TOP VOICE スライダー*/
jQuery(function ($) {
  $('.voice_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          initialSlide: 4,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '100px',
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '70px',
        }
      }

    ]
  });

});

/*TOP CASE スライダー*/
jQuery(function ($) {
  $('.case_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:'600px',
    dots: false,
    arrows: true,
    autoplaySpeed: 4000,
    speed: 800,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<img src="https://komuzu.co.jp/wp_2022/wp-content/themes/Komus-lively-theme2022/img/common/slider_arrow_l.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="https://komuzu.co.jp/wp_2022/wp-content/themes/Komus-lively-theme2022/img/common/slider_arrow_r.svg" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerPadding:'450px',
        }

      }, {
        breakpoint: 1400,
        settings: {
          centerPadding:'400px',
        }
      }, {
        breakpoint: 1300,
        settings: {
          centerPadding:'350px',
        }
      }, {
        breakpoint: 1100,
        settings: {
          centerPadding:'150px',
        }
      }, {
        breakpoint: 769,
        settings: {
          centerMode:false,
          centerPadding:'0px',
          swipe: true,
          swipeToSlide: true,
        }
      }
      
    ]
  });

});

/*TOP MATERIAL スライダー*/
$(function(){
  $(window).on('load', sliderSetting);
  $(window).on('resize', sliderSetting);
  function sliderSetting(){

      var width = $(window).width();

      if(width <= 768){
          $('.material_slider').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true,
            centerPadding:'600px',
            dots: false,
            arrows: true,
            autoplaySpeed: 4000,
            speed: 800,
            swipe: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            prevArrow: '<img src="img/common/slider_arrow_l.svg" class="slide-arrow prev-arrow">',
            nextArrow: '<img src="img/common/slider_arrow_r.svg" class="slide-arrow next-arrow">',
            responsive: [
              {
                breakpoint: 1500,
                settings: {
                  centerPadding:'450px',
                }
        
              }, {
                breakpoint: 1400,
                settings: {
                  centerPadding:'400px',
                }
              }, {
                breakpoint: 1300,
                settings: {
                  centerPadding:'350px',
                }
              }, {
                breakpoint: 769,
                settings: {
                  centerMode:false,
                  centerPadding:'0px',
                  swipe: true,
                  swipeToSlide: true,
                }
              }
              
            ]
          });
      } else {
          $('.slide.slick-initialized').slick('unslick');
      }
  }

  sliderSetting();

  $(window).resize( function() {
      sliderSetting();
  });
});


/*タブ切替*/
jQuery(function ($) {
  $('.tab_btn_list .tab_btn').click(function() {
    var index = $('.tab_btn_list .tab_btn').index(this);
    console.log(index);
    $('.tab_btn_list .tab_btn, .tab_area .tab_box').removeClass('active');
    $(this).addClass('active');
    $('.tab_area .tab_box').eq(index).addClass('active');
  });
});
jQuery(function ($) {
  $('.tab_under_title div').click(function() {
    $('.tab_under_title div').removeClass('active');
    $(this).addClass('active');
    let currentContent = $('#' + $(this).data('id'));
    $('.faq_under dl, .company_list').removeClass('active');
    if (currentContent.length) {
        currentContent.addClass('active');
    }
  });
});
// $(function() {
//   let tabs = $(".tab_under_title h2");
//   $(".tab_under_title h2").on("click", function(){
//     $(".active").removeClass("active"); 
//     $(this).addClass("active"); 
//     const index = tabs.index(this);
//     $(".faq_under dl").removeClass("active").eq(index).addClass("active");
//     $(".tab_triangle").removeClass("active").eq(index).addClass("active");
//     $(".company_list").removeClass("active").eq(index).addClass("active");
//   })
// });


/*スムーススクロール*/
jQuery(function ($) {
  var headerHeight = 150;

  $("a[href^='#']").click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "body" : href);
    var position = target.offset().top - headerHeight;
    $("html, body").animate({
      scrollTop: position
    }, 500, "swing");
    return false;
  });
});


/*ハンバーガーメニュー*/
$(function() {
  function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById("js-hamburger");
    var blackBg = document.getElementById("js-menu-bg");
    // クリックしたときにクラス付与
    hamburger.addEventListener("click", function() {
      body.classList.toggle("nav-open");
      hamburger.classList.toggle("active");
    });
    // クリックしたときにクラス付与
    blackBg.addEventListener("click", function() {
      body.classList.remove("nav-open");
      hamburger.classList.remove("active");
    });
  }
  toggleNav();
});