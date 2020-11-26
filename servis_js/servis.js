//-----------------jquery start----------------------------------------
$(document).ready(function(){

//----------------- cursor wait event ---------------------------------
$(window).on('beforeunload', function(){
	$('*').css("cursor", "wait");
	});

//----------------- menu click event ----------------------------------
	$('.icon-hamburg').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {$('*').addClass('act');}
			else {$('*').removeClass('act');}
	});
	
//----------------- galvena click event -------------------------------
	$(".galvena-click").click(function(){
		$("#midle_pakalpojumi").hide();
		$("#midle_cont").show();
		$(".pakalpojumi-click").removeClass("active-navbar");
		$(".galvena-click").addClass("active-navbar");
		$('*').removeClass('act');
	});

//----------------- pakalpojumi click event ---------------------------
	$(".pakalpojumi-click").click(function(){
		$("#midle_cont").hide();
		$("#midle_pakalpojumi").show();
		$(".pakalpojumi-click").addClass("active-navbar");
		$(".galvena-click").removeClass("active-navbar");
		$('*').removeClass('act');
	});

//--------------------jquery end---------------------------------------
});
