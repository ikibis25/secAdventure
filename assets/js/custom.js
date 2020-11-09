/*
Copyright (c) 2017 
------------------------------------------------------------------


-------------------------------------------------------------------*/

 (function ($) {
	 "use strict";
	 var Adventure = {
		 initialised: false,
		 version: 1.0,
		 mobile: false,
		 init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- Adventure Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.Main_slider();
			this.Most_visited();
			this.testimonial_slider();
			this.Timer();
			this.TeamSlider();
			this.ClientSlider();
			this.listGrid();
			this.responsive_menu();
			this.selectDropdown();
			// this.Wow_animation();
		    this.MailFunction();
			
		},
		
		/*-------------- Adventure Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/

		// main slider

		Main_slider: function(){
			if($('.ad_slider .owl-carousel').length > 0){	
			$('.ad_slider .owl-carousel').owlCarousel({
				   loop:true,
					margin:0,
					items:1,
					touchDrag:true,
					mouseDrag:true,
					autoplay:false,
					autoplayTimeout:4000,
					autoplaySpeed:1000,
					Speed:1000,
					nav:false,
					dots:true,
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
				})
				}
        	},

        	// most visited destination slider

        	Most_visited: function(){
        		if($('.mostvisited_section .owl-carousel').length > 0){	
        		$('.mostvisited_section .owl-carousel').owlCarousel({
					    loop:true,
					    delay:100,
					    margin:20,
					    nav:true,
					    navText: [ '<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>' ],
					    autoplay:true,
					    dots:false, 
					    responsive:{
					        0:{
					            items:1
					        },
					        768:{
					            items:2
					        },
					        1000:{
					            items:3,
					            margin:30
					        }
					    }
					});
        		}

        	},

        	// testimonial slider

        	testimonial_slider: function(){
        		if($('.testimonial_slider .owl-carousel').length > 0){	
        		$('.testimonial_slider .owl-carousel').owlCarousel({
					    loop:true,
					    delay:100,
					    margin:20,
					    nav:true,
					    navText: [ '<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>' ],
					    autoplay:false,
					    dots:false, 
					    responsive:{
					        0:{
					            items:1
					        },
					        768:{
					            items:1
					        },
					        1000:{
					            items:1
					        }
					    }
					});
        		}
        	},

        	// team slider

        	TeamSlider:function(){
        			if($('.team_slider .owl-carousel').length > 0){	
        		$('.team_slider .owl-carousel').owlCarousel({
					    loop:true,
					    delay:100,
					    margin:20,
					    nav:false,
					    autoplay:false,
					    dots:false, 
					    responsive:{
					        0:{
					            items:1
					        },
					        600:{
					            items:2
					        },
					        1000:{
					            items:3,
					            margin:30
					        }
					    }
					});
        		}
        	},

        	// timer js

        	Timer: function(){
        		 function makeTimer() {

			var endTime = new Date("december 30, 2017 12:00:00 PDT");			
			var endTime = (Date.parse(endTime)) / 1000;

			var now = new Date();
			var now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span><br></span>");
			$("#hours").html(hours + "<span><br></span>");
			$("#minutes").html(minutes + "<span><br></span>");
			$("#seconds").html(seconds + "<span><br></span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);

        	},

        	// client slider

        	ClientSlider:function(){
        			if($('.client_slider .owl-carousel').length > 0){	
        		$('.client_slider .owl-carousel').owlCarousel({
					    loop:true,
					    delay:100,
					    margin:20,
					    nav:false,
					    autoplay:false,
					    dots:false, 
					    responsive:{
					        0:{
					            items:2
					        },
					        600:{
					            items:4
					        },
					        1000:{
					            items:6,
					        }
					    }
					});
        		}
        	},

        	listGrid: function(){
        		
			    $('#list').click(function(event){event.preventDefault();$('#products .item').removeClass('grid-group-item');$('#products .item').addClass('list-group-item');});
			    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
				  
        	},

        	// dropdown js
        	

        	responsive_menu:function(){
				 $(".temp_menu ul li").find('.submenu').parent().addClass('dropdown');
				 $(".temp_menu ul li.dropdown").append('<div class="show-submenu"><i class="fa fa-angle-down"></i></div>');

				$(".temp_menu ul li.dropdown").on("click", ".show-submenu", function(e) {
					e.stopPropagation();
					
					$(this).html($(this).html() == '<i class="fa fa-angle-down"></i>' ? '<i class="fa fa-angle-up"></i>' : '<i class="fa fa-angle-down"></i>');
				});
				
				$('.temp_menu ul li.dropdown .show-submenu').click(function() {
					$('.temp_menu ul li.dropdown .show-submenu').not($(this)).
					parent().find('.submenu').hide();
					$(this).parent().find('.submenu').toggle();
				});
			},


        	// select dropdown

        	selectDropdown: function(){
        		function getSelectedValue(id) {
				  return $("#" + id).find("dt a span.value").html();
				}

				$(".dropdown_s i").click(function(e) {
					$(".dropdown_s ul").hide();
				  $(this).parent().find("ul").toggle();
				  e.preventDefault();
				});

				$(".dropdown_s dd ul li a").click(function() {
				  var text = $(this).html();
				  $(this).parents('.dropdown_s').find('dt a span').html(text);
				  $(this).parents('.dropdown_s').find('dd ul').hide();
				}); 

				$(document).bind('click', function(e) {
				    var $clicked = $(e.target);
				    if (! $clicked.parents().hasClass("dropdown_s"))
				        $(".dropdown_s dd ul").hide();
				});
        	},

        	// mail function

        	MailFunction: function(){
        		function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});
        	}
        	

		};

	Adventure.init();

		/* ------ Fixed menu --------*/
        $(window).scroll(function(){
         var window_top = $(window).scrollTop() + 1; 
          if (window_top > 400) {
           $('.ad_header').addClass('menu_fixed animated fadeInDown');
          } else {
           $('.ad_header').removeClass('menu_fixed animated fadeInDown');
          }
         });

	// Load Event
	// Loader js
	   $(window).on('load', function() {
		  $('#status').fadeIn(); // will first fade out the loading animation 
  		  $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
          $('body').delay(1000).css({'overflow':'visible'});

	// window height

		var h = window.innerHeight;
		$(".ad_slider .item").css("height", h);
		$(".ad_slider .item").css("width", "100%");
		
	
   });

	   
}(jQuery));
