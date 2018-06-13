$('#jumbotexth1').delay(1000).animate({
    top: '+50',
}, 0).animate({
  opacity:'1',
  top: '0'
},1000);

$('#jumbotexth2').delay(2000).animate({

    top: '+50',

}, 0).animate({
  opacity:'1',
  top: '0'
},1000);


$('#jumbo').animate({
  width: '0'
},0).animate({
  opacity: '1',
  width: '100%'
},1000)


$('#jumboButtonBox').delay().animate({
  width: '0'
},0).animate({

  opacity: '1',
  width: '100%'
},1000)

$('#jumbo-button-1').delay(1500).animate({
    top: '+50'
}, 0).animate({
  opacity:'1',
  top: '0'
},1000);

$('#jumbo-button-2').delay(1800).animate({
    top: '+50',
}, 0).animate({
  opacity:'1',
  top: '0'
},1000)

$('#jumbo-button-3').delay(2100).animate({
    top: '+50',
}, 0).animate({
  opacity:'1',
  top: '0'
},1000)

$('#jumbo-button-4').delay(2400).animate({
    top: '+50',
}, 0).animate({
  opacity:'1',
  top: '0'
},1000)

$("#about-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});

$("#skills-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 500);
});

$("#projects-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 500);
});

$("#contact-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contacts").offset().top
    }, 500);
});

var offset = $('#jumboButtonBox').offset().top;
$(window).scroll(function(){
  if ($(window).scrollTop() >  offset)   {
        $('#jumboButtonBox').addClass('sticky');
    } else {
        $('#jumboButtonBox').removeClass('sticky');
    }

});
