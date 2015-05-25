jQuery(document).ready(function($) {
	$(".dot").click(function(event) {
		$(".dot").animate({opacity: 0}, 100)
		$(this).animate({opacity: 1}, 100)
	});
	$("#dot2").click(function(event) {
		$(".gift img").attr("src","img/gift_ipair.png");
		$("#price-name,#congrauation").text("IPadAir");
		$("#question").text("IPadAir採用Retina顯示器？");
		$("#ans1").text("是");
		$("#ans2").text("否");
	});
	$("#dot1").click(function(event) {
		$(".gift img").attr("src","img/gift_ip6.png");
		$("#price-name,#congrauation").text("IPone6");
		$("#question").text("IPone6搭載哪一款晶片？");
		$("#ans1").text("A7晶片");
		$("#ans2").text("A8晶片");
	});
	$("#dot3").click(function(event) {
		$(".gift img").attr("src","img/gift_m8.png");
		$("#price-name,#congrauation").text("HTC M8");
		$("#question").text("HTC M8搭配哪款處理器？");
		$("#ans1").text("雙核心");
		$("#ans2").text("四核心");
	});
	$("#join").click(function(event) {
		$("#table1").hide(000);
		$("#table2").fadeIn(500);
	});
});  