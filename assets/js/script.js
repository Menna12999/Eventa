let sideWidth = $('.sidebar').outerWidth();
    console.log(sideWidth);
/********************show navbar********************************/
$('.bars').click(function(){
    $('.navbar-box').css({left:`0px`,transition:'left 1s'});
  })
/********************hide navbar********************************/
$('#closeBtn').click(function(){
$('.navbar-box').css({left:`-${sideWidth}px`,transition:'left 1s'});
})
/********************loading********************************/
$(document).ready(function(){
    $('#loading').fadeOut(2000,function(){
        $('body').css({'overflow-y':'visible'},1000)
    })
})
/**********aos **************/
AOS.init();
/*************************btn-up***************************************************************** */
$(window).scroll(function(){
	let top = $(window).scrollTop();
	let homeHeight = $('#home').height();
	console.log(homeHeight);
	if(top>homeHeight){
	 $('#btn-up').show();
	}
	else{
	 $('#btn-up').hide();
 
	}
 
 })
$('#btn-up').click(function(){
    $('html,body').animate({
    scrollTop:0
    },500)
  })
   /*****************************************scroll smooth****************************************************/
   $('.navbar-box ul li a').click(function(){
	let sectionId = $(this).attr('href')
	let sectionTop = $(sectionId).offset().top;
	 console.log(sectionTop);
	 $('html,body').animate({
		scrollTop:sectionTop,
		},1000)
	
	  })

/**********************about******************************/

$('.about-box').each(function(){
  $(this).hover(function (){
    $(this).css({'border-top-color':'rgba(225, 19, 123, 1)'},{'transition':'0.4s'})
    $(this).find(".btn-box").fadeIn();
  }
  ,function(){
    $(this).css({'border-top-color':'transparent'},{'transition':'0.4s'})
    $(this).find(".btn-box").fadeOut(500);
  }
)})

/************************************accordion in section schedule****************************************************/

$('.show-details').click(function(){
  $(this).toggleClass('fa-chevron-down fa-chevron-up')
 $(this).closest(".schedule-box").find('[class="accordion"]').slideToggle('slow');
})

/****************************************count down**************************************** */
function makeTimer() {
		var endTime = new Date("24 october 2024 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".day-no").html(days);
			$(".hours-no").html(hours);
			$(".minuts-no").html(minutes);
			$(".seconds-no").html(seconds);		

	}

	setInterval(function() { makeTimer(); }, 1000);

	/*************************************sponsers************************************************* */

	$( '.owl-carousel' ).owlCarousel({
		items: 5,
		
		dots: false,
		
		responsiveClass: true,
		responsive: {
			0:{
			  items: 2
			},
			480:{
			  items: 2
			},
			769:{
			  items: 3
			},
			992:{
             items:3
			},
			1024:{
				items:4
			   },
			   1300:{
				items:5
			   }
		}
	});

	/**********************************************countdown words*************************************************** */

	let maxLength = 100;
	$('textarea').keyup(function() {
	  let length = $(this).val().length;
	  let remainingWords = maxLength-length;
	  $('#chars').text(remainingWords);
	});

	/******************************************************************************************************** */
     
     