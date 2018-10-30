$(document).ready(function(){

	console.log('Hello from jQuery! 555');

// Селекторы css
	$('#btn-open-form').click(function(e){
		e.preventDefault();		
		console.log('Click');		
		$(this).hide();
		$('.booking-form-wrapper').slideDown(1000);
	});

	// phone-mask
	$('.phone-mask').mask('+7 (999) 999-9999');



});