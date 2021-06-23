// JavaScript Document
$(function () {
$.scrollUp();
$("#jquery-accordion-menu").jqueryAccordionMenu();
//顶部导航切换
	$("#nav li").click(function(){
		$("#nav li.active").removeClass("active")
		$(this).addClass("active");
	})
	//菜单导航切换
	$(".menu").click(function(){
		$(this).toggleClass("active");
		$(".nav").toggleClass("sel");
	})
	$("#yuyue a").click(function(){
		$("#yuyue").find(".sel").removeClass("sel");
		$(this).parent().toggleClass("sel");
		})
  $("#zys a").click(function(){
		$("#zys").find(".active").removeClass("active");
		$(this).parent().toggleClass("active");
		})
	$("#viewAll").click(function(){
		$(this).toggleClass("viewAll2");
		$("#viewAll2").toggle();
		})
var $container = $('.js_container');
$container.on('click', '#showToast', function () {
        $('#toast').show();
        setTimeout(function () {
            $('#toast').hide();
        }, 5000);
    });
$container.on('click', '#showLoadingToast', function () {
        $('#loadingToast').show();
        setTimeout(function () {
            $('#loadingToast').hide();
        }, 5000);
    });

$container.on('click', '#showDialog1', function () {
        $('#dialog1').show();
        $('#dialog1').find('.weui_btn_dialog').on('click', function () {
            $('#dialog1').hide();
        });
    });
$container.on('click', '#showDialog2', function () {
        $('#dialog2').show();
        $('#dialog2').find('.weui_btn_dialog').on('click', function () {
            $('#dialog2').hide();
        });
    });
		
});