$(document).ready(function(){
	$(".button1").click(function(){
	 $.myalert("提示","这里是提示框的内容");
	});
	
	$(".button2").click(function(){
		$.myalert("title","message","1");
		//setTimeout(function(){alert("1");},2000);
	});
	
	$(".button3").click(function(){
		$.myconfirm("确认框提示标题","确认框提示内容");
	});
	
	var windowwidth = $(window).width();
	var windowheight = $(window).height()
	$(".button4").click(function(){
		adddiv = '<div class="adddiv">提示内容</div>'
		$('body').append(adddiv);
		$('.adddiv').css({
			'top':windowheight/2+'px',
			'left':windowwidth/2+'px',
			'position': 'absolute',
			'background':'black',
			'color':'white',
			'text-align':'center',
			'height':'30px',
			'width':'100px',
			'border-radius':'10px',
			'line-height':'30px'
		}).show();
		setTimeout(function(){
			$('.adddiv').fadeOut();
		},1000);
	});
	
	$(".button5").click(function(){
		var imgshow = '<img class="imgshow" src="img/loading.gif">';
		$('body').append(imgshow);
		$(".imgshow").css({
			'top':windowheight/2+'px',
			'left':windowwidth/2+'px',
			'position': 'absolute',
			'text-align':'center',
			'height':'100px',
			'width':'100px'
		}).show();
	});
	
	$(".button6").click(function(){
		var imgshow = '<img class="imgshow" src="img/loading.gif">';
		$('body').append(imgshow);
		$(".imgshow").css({
			'display':'none'
		})
	});
	
	$.extend({
		myalert:function(head,content,tip){
			addalert = '<div class="contain"><h3>'+head+'</h3><p>'+content+'</p><div class="footer_sure">确定</div></div>';
			$("body").append(addalert)
			$(".footer_sure").click(function(){
				alert(tip)
				$(".contain").css("display","none")
			});
		},
		
		myconfirm:function(head,content){
			addconfirm = '<div class="addconfirm"><h3>'+head+'</h3><p>'+content+'</p><div class="juage"><span class="cancle">取消</span><span class="sure">确定</span></div></div>'
			alterconfirm = $("body").append(addconfirm)
			$(".cancle").click(function(){
					$(".addconfirm").css("display","none")
			});
			$(".sure").click(function(){
				alert("callback");
				$(".addconfirm").css("display","none")
			});
		}
	});
});
