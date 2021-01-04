
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
	
//----------------- Menu Galvena click event -------------------------------
	$(".galvena-click").click(function(){
		$('*').removeClass('act');
	});
	
//----------------- Menu Pakalpojumi click event -------------------------------
	$(".pakalpojumi-click").click(function(){
		$('*').removeClass('act');
		$("#centr-pakalpojumi, #centr-publikacijas").hide();
		$("main, #centr-galvena").show();
		$('*').removeClass("active-navbar act act-benzina act-dizela act-elektro");
		$(".benzina-atvert, .dizela-atvert, .elektro-atvert").text("Lasīt tālāk:");
		$(".galvena-click").addClass("active-navbar");
	});

//----------------- Menu Uznemumiem click event -------------------------------
	$(".uznemumiem-click").click(function(){
		$('*').removeClass('act');
	});

//----------------- Menu Publikacijas click event -------------------------------
	$(".publikacijas-click").click(function(){
		$('*').removeClass('act');
	});

//----------------- Menu Kontakti click event -------------------------------
	$(".kontakti-click").click(function(){
		$('*').removeClass('act');
	});

//----------------- Menu LVRU click event -------------------------------
	$(".lvru-click").click(function(){
		$('*').removeClass('act');
	});

//----------------- cenas-atvert click event -----------------------------
	$(".remove-cenas").css({"display": "none"});
	$('.cenas-atvert').click(function() {
		$(this).toggleClass('act-cenas');
			if($(this).hasClass('act-cenas')) {
				$('*').addClass('act-cenas');
				$(".cenas-atvert").text("Aizvērt:");
				$(".remove-cenas").css({"display": "block"});
				$('.remove-vai').empty();
			}
			else {$('*').removeClass('act-cenas');$(".cenas-atvert").text("Lasīt tālāk:");$('.remove-vai').text("Vai ");$(".remove-cenas").css({"display": "none"});}
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
	
//----------------- RU cenas-atvert click event -----------------------------
	$(".remove-cenas-ru").css({"display": "none"});
	$('.cenas-atvert-ru').click(function() {
		$(this).toggleClass('act-cenas');
			if($(this).hasClass('act-cenas')) {
				$('*').addClass('act-cenas');
				$(".cenas-atvert-ru").text("Закрыть:");
				$(".remove-cenas-ru").css({"display": "block"});
				$('.remove-vai-ru').empty();
			}
			else {$('*').removeClass('act-cenas');$(".cenas-atvert-ru").text("Читать дальше:");$('.remove-vai-ru').text("Или ");$(".remove-cenas-ru").css({"display": "none"});}
	});
	
//----------------- RU benzina-atvert click event -----------------------------
	$('.benzina-atvert-ru').click(function() {
		$(this).toggleClass('act-benzina');
			if($(this).hasClass('act-benzina')) {
				$('*').addClass('act-benzina');
				$(".benzina-atvert-ru").text("Закрыть:");
			}
			else {$('*').removeClass('act-benzina');$(".benzina-atvert-ru").text("Читать дальше:");}
	});

//----------------- RU dizela-atvert click event -----------------------------
	$('.dizela-atvert-ru').click(function() {
		$(this).toggleClass('act-dizela');
			if($(this).hasClass('act-dizela')) {
				$('*').addClass('act-dizela');
				$(".dizela-atvert-ru").text("Закрыть:");
			}
			else {$('*').removeClass('act-dizela');$(".dizela-atvert-ru").text("Читать дальше:");}
	});

//----------------- RU elektro-atvert click event -----------------------------
	$('.elektro-atvert-ru').click(function() {
		$(this).toggleClass('act-elektro');
			if($(this).hasClass('act-elektro')) {
				$('*').addClass('act-elektro');
				$(".elektro-atvert-ru").text("Закрыть:");
			}
			else {$('*').removeClass('act-elektro');$(".elektro-atvert-ru").text("Читать дальше:");}
	});

//--------------------jquery end---------------------------------------
});
