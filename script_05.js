// Pure Javascript

var $desempeno 			= document.querySelector(".form-check-inline #desempeno")			.parentElement.querySelector("span");
var $crecimiento 				= document.querySelector(".form-check-inline #crecimiento")				.parentElement.querySelector("span");
var $innovacion 			= document.querySelector(".form-check-inline #innovacion")			.parentElement.querySelector("span");
var $sst 			= document.querySelector(".form-check-inline #sst")			.parentElement.querySelector("span");
var $bienestar 				= document.querySelector(".form-check-inline #bienestar")				.parentElement.querySelector("span");
var $competencias 			= document.querySelector(".form-check-inline #competencias")			.parentElement.querySelector("span");
var $formacion 	= document.querySelector(".form-check-inline #formacion")	.parentElement.querySelector("span");
var $copasst 	= document.querySelector(".form-check-inline #copasst")	.parentElement.querySelector("span");
var $antiguedad 	= document.querySelector(".form-check-inline #antiguedad")	.parentElement.querySelector("span");
var $mercadeo 	= document.querySelector(".form-check-inline #mercadeo")	.parentElement.querySelector("span");

var txt_content = document.querySelector(".form-check-inline span").textContent;


document.addEventListener("DOMContentLoaded", function(event) {
	console.log("OH ! It's ON ! " + txt_content);

	$desempeno		.style.backgroundImage = "url('01.jpg')";
	$crecimiento				.style.backgroundImage = "url('02.jpg')";
	$innovacion		.style.backgroundImage = "url('03.jpg')";
	$sst			.style.backgroundImage = "url('04.jpg')";
	$bienestar				.style.backgroundImage = "url('05.jpg')";
	$competencias		.style.backgroundImage = "url('06.jpg')";
	$formacion.style.backgroundImage = "url('07.jpg')";
	$copasst.style.backgroundImage = "url('08.jpg')";
	$antiguedad.style.backgroundImage = "url('09.jpg')";
	$mercadeo.style.backgroundImage = "url('10.jpg')";

});

  function validateForm() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var allChecked = true;
    for (var i = 0; i < checkboxes.length; i++) {
      if (!checkboxes[i].checked) {
        allChecked = false;
        break;
      }
    }
    if (allChecked) {
      alert("¡Respuesta correcta!");
      return true;
    } else {
      alert("Sigue intentando");
      return false;
    }
  }