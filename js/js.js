var topa1=$(window).width()/1.591;

$(window).scroll(function(){
	var pixel=$(window).scrollTop();
	$("div#pixel").html(pixel);
});
$(document).ready(function(){	

		$(".ampliar, .hovergris").click(function(){
		$("a").click(function(event){
  event.preventDefault();});
		var pop=$(this).data("orden");
		$(".trian").css("display","none");
		$('.trian[data-orden="'+pop+'"]').css("display","block");
		$("#opacidad, #fondo").css("display","block");
		$("#lightbox").css("top",50+$(window).scrollTop());
		$("#cerrar").css("top",40+$(window).scrollTop());
		$(".imag").css("z-index","0");
		$(".imag").attr("src","img/"+pop+".png").css("z-index","1");
		if(pop>6)
			{$("#peq").css("margin-left","-900px");
			$("#botondcha").css("display","none");
			$("#botonizda").css("display","block");}
		else if(pop<6)
			{$("#peq").css("margin-left","-300px");
			$("#botondcha").css("display","block");
			$("#botonizda").css("display","none");}
			

});
		$(document).bind('keydown',function(e){
		if ( e.which == 27 ) {
    	$("#opacidad").css("display","none");
                };
});
		$("#cerrar, #fondo").click(function(){
		$("#opacidad").css("display","none");

});
		$(".mini").click(function(){
			var apli=$(this).data("orden");
			$(".trian").css("display","none");
			$('.trian[data-orden="'+apli+'"]').css("display","block");
			$(".imag").css("z-index","0");
			$(".imag").attr("src","img/"+apli+".png").css("z-index","1");

		});
		$("#botondcha").click(function(){
			$("#peq").animate({"margin-left":"-900px"},400);
			$("#botondcha").css("display","none");
			$("#botonizda").css("display","block");

			});
		
		$("#botonizda").click(function(){
			$("#peq").animate({"margin-left":"-300px"},400);
			$("#botondcha").css("display","block");
			$("#botonizda").css("display","none");
		});
});