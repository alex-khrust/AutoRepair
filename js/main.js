$(document).ready(function ()  {
// =======================================================================
  // Слайдер slick----------------------------------------------------------
  $('#home-header-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false,
    nextArrow: '.btn_home-header-slider--up',
    prevArrow: '.btn_home-header-slider--dawn'
  });
  
  $('#home-news-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '.btn_home-news-slider--left',
    nextArrow: '.btn_home-news-slider--right',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
  $('#home-testimonials-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '.btn_home-testimonials-slider--left',
    nextArrow: '.btn_home-testimonials-slider--right'
  });
  
  $('#related-products-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: true,
    nextArrow: '.btn_related-products-slider--right',
    prevArrow: '.btn_related-products-slider--left',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
// // Hamburger -----------------------------------------
  
  $('.basket-icon').hover(function () {
    $('.basket__review').addClass('basket__review--open');
  }, function () {
    $('.basket-icon').data('timer', setTimeout(function () {
      $('.basket__review').removeClass('basket__review--open');
    }, 500));
  });

// -----------------------------------------------------------------------
  // popup ---------------------------------------------
  // var elements1 = $('.modal-overlay, .modal-overlay>.modal');
  
  // $('.report-btn').click(function(){
  //   elements1.addClass('active');
  //   $('header, section').css({filter:'blur(4px)', transition:'.3s'});
  //   $('html').css({overflow:'hidden'});
  // });
  //
  // $('.close-modal').click(function(){
  //   elements1.removeClass('active');
  //   $('header, section').css({filter:'none', transition:'.3s'});
  //   $('html').css({overflow:'none'});
  // });
  
  // $('.products-list__item--img').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   closeOnContentClick: true,
  //   closeBtnInside: true,
  //   fixedContentPos: true,
  //   mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  //   image: {
  //     verticalFit: true
  //   },
  //   zoom: {
  //     enabled: true,
  //     duration: 300 // don't foget to change the duration also in CSS
  //   }
  // });
  
  $('.gallery__list').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: true,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
  
  
  $('.products__item--gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: true,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
//-----------------------------------------------------------------------
//   Обрезание текста по количеству строк --------------------
  $(".slide-content>p>span").text(function(i, text) {
    
    if (text.length >= 200) {
      text = text.substring(0, 200);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex); // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });
  
  $(".services__list--item>p").text(function(i, text) {
    
    if (text.length >= 150) {
      text = text.substring(0, 150);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex); // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });
  
  $(".footer-info--text").text(function(i, text) {
    
    if (text.length >= 175) {
      text = text.substring(0, 175);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + ('...'); // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });
  
  $(".news__list--item p>span").text(function(i, text) {
    
    if (text.length >= 200) {
      text = text.substring(0, 200);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + ('...'); // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });
  
  
  $(".sidebar__product--top_rated .item-text span, .related-products-slider .item-text span").text(function(i, text) {
    
    if (text.length >= 35) {
      text = text.substring(0, 35);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + ('...'); // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });
  
  
  $(".search-results-list__item--desc span").text(function(i, text) {
    
    if (text.length >= 300) {
      text = text.substring(0, 300);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + ('...'); // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });
  
  
  $(".sidebar__blog-list .item-text span").text(function(i, text) {
    
    if (text.length >= 70) {
      text = text.substring(0, 70);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + ('...'); // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });
  
  $(".blog-page__list--item .blog-text span").text(function(i, text) {
    
    if (text.length >= 305) {
      text = text.substring(0, 305);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + ('...'); // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });
  //-----------------------------------------------------------------------
  /* slider-range price --------------------------------------------------------*/
  
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 200000,
      values: [ 30053, 144402 ],
      slide: function( event, ui ) {
        $( "#minCost" ).val( "$" + ui.values[ 0 ]);
        $( "#maxCost" ).val("$" + ui.values[ 1 ]);
      }
    });
    $( "#minCost" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
    $( "#maxCost" ).val("$" + $( "#slider-range" ).slider( "values", 1 ));
  } );
  
//-----------------------------------------------------------------------
// input +/-   ----------------------------------------------------------
  $(function() {
    $('.down').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.up').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });
//-----------------------------------------------------------------------
  // sidebar ------------------------------------------------
  $('#closeSidebar, .overlay').on('click', function () {
    // hide sidebar
    $('#sidebar').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
  });
  
  $('#openSidebar').on('click', function () {
    // open sidebar
    $('#sidebar').addClass('active');
    // fade in the overlay
    $('.overlay').addClass('active');
  });
//---------------------------------------------------------------
});
// $-end ==============================================================




// Fullscreen Video-----------------------------------------------------------
var video = document.getElementById("home-video");
var btn = document.getElementById("btn_play-video-text");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Stop video";
  } else {
    video.pause();
    btn.innerHTML = "Watch video";
  }
}
// --------------------------------------------------------------------------------
// Custom Select --------------------------------------------------------
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("customSelect");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// ----------------------------------------------------------------------

