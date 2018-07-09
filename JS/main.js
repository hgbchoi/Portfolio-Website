$('#wrapper').css("display", "none");

$(window).on("load", function() {
$('#pre-load').fadeOut(100);
$('#wrapper').delay(200).fadeIn(200);
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
        scrollTop: $("#about").position().top - $(window).height()*0.1
    }, 500);
});

$("#skills-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").position().top - $(window).height()*0.2
    }, 500);
});

$("#projects-button").click(function() {
    $('html, body').animate({
      scrollTop: $("#projects").position().top - $(window).height()*0.1
    }, 500);
});

$("#contact-button").click(function() {
  $('html, body').animate({
        scrollTop: $("#contacts").position().top - $(window).height()*0.1
    }, 500);
});

$(window).scroll(function(){
  if ($(window).scrollTop() > ($(window).height()*0.9)){
        $('#jumboButtonBox').addClass('sticky');
    } else {
        $('#jumboButtonBox').removeClass('sticky');
    }

});

$(window).scroll(function(){
  if ($('#jumboButtonBox').hasClass('sticky')){
    ($('.about-section').css('padding-top', 100));
  } else {
        ($('.about-section').css('padding-top', 0));
  }
});

//Submit Form by ajax & clientside validation

var validName;
var validEmail;
var valiSubject;
var validContent;

function validateEmail(){
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = $('#form-email').val();

  if (!regex.test(email) || email == ''){
    validEmail = false;
    $('#form-email').addClass("error");
  } else {
    validEmail = true;
    $('#form-email').removeClass("error");
  }
}

function validateName(){
  var regex = /^[a-zA-Z]/;
  var name = $('#form-name').val();

    if (!regex.test(name) || name == ''){
      validName = false;
      $('#form-name').addClass("error");
    } else {
      validName = true;
      $('#form-name').removeClass("error");
    }

}

function validateSubject(){

  var subject = $('#form-subject').val();

    if (subject == ''){
      validSubject = false;
      $('#form-subject').addClass("error");
    } else {
      validSubject = true;
      $('#form-subject').removeClass("error");
    }

}

function validateMessage(){

  var content = $('#form-content').val();

    if (content == ''){
      validContent = false;
      $('#form-content').addClass("error");
    } else {
      validContent = true;
      $('#form-content').removeClass("error");
    }
}

$("#form-email").focusout(function(){
  validateEmail();
});

$("#form-name").focusout(function(){
  validateName();
});

$("#form-subject").focusout(function(){
  validateSubject();
});

$("#form-content").focusout(function(){
  validateMessage();
});

$('form').submit(function(event){

event.preventDefault();

validateEmail();
validateName();
validateSubject();
validateMessage();

if(validName && validEmail && validSubject && validContent){

$.ajax({
  type:"POST",
  url: "contact-form.php",
  data: $('#contactForm').serialize(),
  success:function(data){
    $(".failed").css("display", "none");
    $(".success").fadeIn(200).delay(500).fadeOut(200);

}});
} else {
  $(".success").css("display", "none");
    $(".failed").fadeIn(200).delay(500).fadeOut(200);

    return false;
}

});


});
