
$(document).ready(function(){
	// console.log($("#copyright"));
	// console.log($(".clear"));
	// console.log($("#footer_logo > #logo_f"));
	// console.log($("#social_networks + div"));
	// console.log($("#social_networks ~ div"));
	// console.log($("a[href='#']"));
	// console.log($("#copyright > a").parent());
	// console.log($("#copyright").children());
	// // console.log($("div.slider_item p:after-child"));
	// console.log($("div.slider_item p:last-child"));
	// console.log($("div#slider_items > div.slider_item p:nth-child(1)"));
	// var $copir = $("#copyright");
	// $copir.css("color", "red");
	// $copir.css({
	// 	"border":"1px solid #000",
	// 	"font-size":"20px",
	// 	"transform":"rotate(45deg)"
	// });
	// $("div#wrapper > div#header").css("height", function(i, value){
	// 	return (20*(5));
	// });
	// $("div#navigation > ul > li").css("width", function(i, value){
	// 	i++;
	// 	var w = $("div#navigation > ul > li:nth-child("+i+")").width();
	// 	return (w+50);
	// });
	// $('body').on('click', '*', function() {
	// 	console.info("Click on "+this.tagName);
	// });
	// $("div.slider_item").on("click", "p", function(event){
	// 	console.log(event.target);
	// 	console.log(this.tagName);
	// });

	// $(window).on("scroll", function(){
	// 	var b = $("body")[0];
	// 	var scrol = b.scrollTop;
	// 	console.log(scrol);
	// });
	// console.info($("#p_footer").attr("id"));
	// console.info($("#p_footer").attr("class", "ppppppp"));
	// // $("#p_footer").removeAttr("class");
	// $("#p_footer").removeClass("ppppppp");
	// console.info($("#p_footer"));
	$(".nav").click(function(e){
		if (($(this).attr("data-i")) == 1) {
			$(".slider_item").hide();
			$(".slider_item:nth-child(1)")
			.show(1000);
		}
		else if (($(this).attr("data-i")) == 2) {
			$(".slider_item").hide();
			$(".slider_item:nth-child(2)")
			.show(1000);
		}
		else if (($(this).attr("data-i")) == 3) {
			$(".slider_item").hide();
			$(".slider_item:nth-child(3)")
			.show(1000);
		}
		else if (($(this).attr("data-i")) == 4) {
			$(".slider_item").hide();
			$(".slider_item:nth-child(4)")
			.show(1000);
		}
	});
	$(".podmenu").slideUp(1);
	$("#menu_left li a").click(function(e){
		if ($(this).parent().next().hasClass("podmenu")) {
			$(this).parent().next().slideToggle();
		}
	});


});
	

