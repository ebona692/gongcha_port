        $(function(){
			var slide = $("#slideshow").find("ul");

			var slideCount = $("#slideshow ul li").length;
			var slideWidth = $("#slideshow ul li").width();
			var slideHeight = $("#slideshow ul li").height();
			var sliderUiWidth = slideCount * slideWidth;
			var rollingId;

			$("slideshow").css({width:slideWidth, height:slideHeight});
			$("slideshow ul").css({width:sliderUiWidth, marginLeft:-slideWidth});
			$("slideshow ul li:last-child").prependTo("#slider ul");

			rollingId = setInterval(function () {
			slideStart();
				}, 3000);

			function slideStart() {
				slide.animate({
					left: -slideWidth
				}, 700, function() {
					$("#slideshow ul li:first-child").appendTo("#slideshow ul");
			$(this).css("left", "");
				})
			}
		});

		$(function(){
			var slide = $("#section4").find("ul");

			var slideCount = $("#section4 ul li").length;
			var slideWidth = $("#section4 ul li").width();
			var slideHeight = $("#section4 ul li").height();
			var sliderUiWidth = slideCount * slideWidth;
			var rollingId;

			$("section4").css({width:slideWidth, height:slideHeight});
			$("section4 ul").css({width:sliderUiWidth, marginLeft:-slideWidth});
			$("section4 ul li:last-child").prependTo("#section4 ul");

			rollingId = setInterval(function () {
			slideStart();
				}, 3000);

			function moveLeft() {
				$("#section4 ul").animate({
					left: + slideWidth
				}, 600, function(){
					$("#section4 ul li:last-child").prependTo("#section4 ul");
					$("#section4 ul").css("left","");
				});
			};

			function moveRight() {
				$("#section4 ul").animate({
					left: - slideWidth
				}, 600, function(){
					$("#section4 ul li:first-child").appendTo("#section4 ul");
					$("#section4 ul").css("left","");
				});
			};
			
			$("a.control_prev").click(function(){
				moveLeft();
			});

			$("a.control_next").click(function(){
				moveRight();
			});

			function slideStart() {
				slide.animate({
					left: -slideWidth
				}, 700, function() {
					$("#section4 ul li:first-child").appendTo("#section4 ul");
			$(this).css("left", "");
				})
			}
		});

		$(function(){
			$(".rollover").mouseover(function(){
				$(this).attr("src", $(this).attr("src").replace(".png","_on.png"));
			});
			$(".rollover").mouseout(function(){
				$(this).attr("src", $(this).attr("src").replace("_on.png",".png"));
			});
		});

		$(function(){
			$(".quick").mouseover(function(){
				$(this).attr("src", $(this).attr("src").replace(".png","_on.png"));
			});
			$(".quick").mouseout(function(){
				$(this).attr("src", $(this).attr("src").replace("_on.png",".png"));
			});
		});

		$(function(){
			$("#header_inner").hover(function(){
				$("#header").css({height:"374px"})
			}, function(){
				$("#header").css({height:"110px"})
			});
		});
		
		
		$(function(){
			var tab_id = $(this).attr("data-tab");

			function tabon() {
			$(".tab li").removeclass("on");
			$(".tabcontent").removeclass("on");

			$(this).addClass("on");
			$("#"+tab_id).addClass("on");
			}
		});