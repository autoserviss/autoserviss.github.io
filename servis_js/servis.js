
//-----------------jquery start----------------------------------------
$(document).ready(function(){

//----------------- cursor wait event ---------------------------------
$(window).on('beforeunload', function(){
	$('*').css("cursor", "wait");
	});
	
//----------------- Checkeng delay -----------------------------------
$("#checkeng-img").delay(20000).fadeIn();

$("body").mousemove(function(){
	$("#checkeng-img").hide();
	$("#checkeng-img").delay(20000).fadeIn();
});
	
//----------------- menu click event ----------------------------------
	$('.icon-hamburg').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {$('*').addClass('act');}
			else {$('*').removeClass('act');}
	});
	
//----------------- Menu galvena click event -------------------------------
	$(".galvena-click").click(function(){
		$("#centr-pakalpojumi, #centr-publikacijas, #centr-kontakti, article").hide();
		$("main, #centr-galvena").show();
		$('*').removeClass("active-navbar act act-benzina act-dizela act-elektro");
		$(".benzina-atvert, .dizela-atvert, .elektro-atvert").text("Lasīt tālāk:");
		$(".galvena-click").addClass("active-navbar");
	});

//----------------- Menu pakalpojumi click event ---------------------------
	$(".pakalpojumi-click").click(function(){
		$("#centr-galvena, #centr-publikacijas, #centr-kontakti, article").hide();
		$("main, #centr-pakalpojumi").show();
		$('*').removeClass("active-navbar act act-benzina act-dizela act-elektro");
		$(".benzina-atvert, .dizela-atvert, .elektro-atvert").text("Lasīt tālāk:");
		$(".pakalpojumi-click").addClass("active-navbar");
	});
	
//----------------- Menu publikacijas click event ---------------------------
	$(".publikacijas-click").click(function(){
		$("#centr-galvena, #centr-pakalpojumi, #centr-kontakti, article").hide();
		$("main, #centr-publikacijas").show();
		$('*').removeClass("active-navbar act act-benzina act-dizela act-elektro");
		$(".benzina-atvert, .dizela-atvert, .elektro-atvert").text("Lasīt tālāk:");
		$(".publikacijas-click").addClass("active-navbar");
	});
	
//----------------- Menu kontakti click event ---------------------------
	$(".kontakti-click").click(function(){
		$("#centr-galvena, #centr-pakalpojumi, #centr-publikacijas, article").hide();
		$("main, #centr-kontakti").show();
		$('*').removeClass("active-navbar act act-benzina act-dizela act-elektro");
		$(".benzina-atvert, .dizela-atvert, .elektro-atvert").text("Lasīt tālāk:");
		$(".kontakti-click").addClass("active-navbar");
	});
	
//----------------- benzina-atvert click event -----------------------------
	$('.benzina-atvert').click(function() {
		$(this).toggleClass('act-benzina');
			if($(this).hasClass('act-benzina')) {
				$('*').addClass('act-benzina');
				$(".benzina-atvert").text("Aizvērt:");
			}
			else {$('*').removeClass('act-benzina');$(".benzina-atvert").text("Lasīt tālāk:");}
	});

//----------------- dizela-atvert click event -----------------------------
	$('.dizela-atvert').click(function() {
		$(this).toggleClass('act-dizela');
			if($(this).hasClass('act-dizela')) {
				$('*').addClass('act-dizela');
				$(".dizela-atvert").text("Aizvērt:");
			}
			else {$('*').removeClass('act-dizela');$(".dizela-atvert").text("Lasīt tālāk:");}
	});

//----------------- elektro-atvert click event -----------------------------
	$('.elektro-atvert').click(function() {
		$(this).toggleClass('act-elektro');
			if($(this).hasClass('act-elektro')) {
				$('*').addClass('act-elektro');
				$(".elektro-atvert").text("Aizvērt:");
			}
			else {$('*').removeClass('act-elektro');$(".elektro-atvert").text("Lasīt tālāk:");}
	});

//--------------------jquery end---------------------------------------
});
