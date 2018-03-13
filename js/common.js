$(function(){
	// nav
	$(".head_nav li").on("mouseover",function(){
		var $that = $(this);
		var $num =  $that.children(".nav-menu");
		$(".nav-menu").hide();
		$(".hover_nav").hide();
		if ($num.length==1) {
			$(".hover_nav").show();
			$that.children(".nav-menu").show();
		}
		
	})
	$(".head_nav li").on("mouseout",function(){
		var $that = $(this);
		$(".nav-menu").hide();
		$(".hover_nav").hide();
		
	})
	// 搜索
	$(".s_select").on("mouseover",function(){
		var $that = $(this);
		var menu = $that.children(".search_bar")
		menu.show()
		$(".ico-sel").css("transform","rotateZ(180deg)")
	})
	$(".s_select").on("mouseout",function(){
		var $that = $(this);
		var menu = $that.children(".search_bar")
		menu.hide()
		$(".ico-sel").css("transform","rotateZ(0deg)")
	})

	$(".search_bar").on("click","li",function(){
		var $that = $(this);
		var $text = $that.text();
		var bar = $(".search_bar");
		$(".typeName").text($text);
	})
	// 下拉
	function drown(item){
		item.on("click",function(){
			var $that = $(this);
			var menu = $that.children("ul")
			if (menu.is(":hidden")) {
				$(".select_wrap").hide();
				menu.slideDown(150)
				$(".ico-sel").css("transform","rotateZ(180deg)")
			}else{
				menu.slideUp(150)
				$(".ico-sel").css("transform","rotateZ(0deg)")
			}
		})
	}
	drown($(".form_select"))
	
	$(".select_wrap").on("click","li",function(){
		var $that = $(this);
		var $text = $that.text();
		$that.parents(".select_wrap").siblings("input").val($text);
		// $that
	})
	// 单/返/多
	$(".tab_form").on("click","span",function(){
		var $that = $(this), target = $that.data('target');
		$that.addClass("active").siblings("span").removeClass("active")
		var $rab_bg= $(".tab_bg");
		 switch(target){
	        case 'one_way':
	       		$(".form_date").addClass("disabled");
	       		$(".form_date").children("input").addClass("disabled").attr('disabled',"true");
	       		$("#multipass").addClass("hide").siblings("div").removeClass("hide")
	        break;
	        case 'Round_trip':
	       		$(".form_date").removeClass("disabled");
	       		$(".form_date").children("input").removeClass("disabled").removeAttr("disabled");

	       		$("#multipass").addClass("hide").siblings("div").removeClass("hide")
	        break;
	        case 'multipass':
	       		$(".form_date").removeClass("disabled");
	       		$(".form_date").children("input").removeClass("disabled").removeAttr("disabled");
	       		$("#multipass").removeClass("hide").siblings("div").addClass("hide")
	        break;
	   
	    }
	})
	// 底部ico
	$(".link_ico").on("mouseover",function(){
		var $that = $(this);
		$that.find(".link_wrap").addClass("fadin");
		return false;
	})
	$(".link_ico").on("mouseout",function(){
		var $that = $(this);
		$that.find(".link_wrap").removeClass("fadin")
	})
	// 机票侧边选中
	$(".aside_list").on("click",".img-check",function(){
		var $that = $(this);
		if ($that.hasClass("check")) {
			$that.removeClass("check")
		}else{
			$that.addClass("check")
		}
	})
	// 行程详情
	$(".flight-item").on("click",function(){
		var $that = $(this);
		var info = $that.find(".detaWrap");
		if (info.is(":hidden")) {
			info.removeClass("hide");
			$(".ico-top").css("transform","rotateZ(180deg)")
		}else{
			info.addClass("hide");
			$(".ico-top").css("transform","rotateZ(0deg)")
		}
	})
	// 添加乘客
	var Text = 1;
	$(".pass-num").text(Text);
	$("#add_Btn").on("click",function(){
		Text++;
		var $that  = $(this);
		var $table = $that.parents(".pass");
	    var $tr = $(".pass-list").clone(false).removeClass('hide pass-list');
	    if ($table.find('.pass-grounp').length) {
	        $tr.insertBefore($table.find('.add-num'));
	    } else {
	        $table.find('.add-num').append($tr);
	    }
		$(".pass-num:last").text(Text);
		// 日历
		$(".form_datetime").datetimepicker({
            language: 'zh-CN',
            todayHighlight: true,
            format: "yyyy-mm-dd",
            autoclose: true,
            clearBtn: true,
            minuteStep: 10,
            pickerPosition:"bottom-left",
            minView: "month"
        });
        $('.tel_Iphone').kuCity();
		// 下拉框
       $(this).parents("div[class='pass']").find("div.arrow").each(function () {
   		    $(this).unbind("click").click(function () {
   		    	console.log(1)
                var menu = $(this).children("ul");
                if (menu.is(":hidden")) {
                   $(".dropdown").hide();
			       menu.slideDown(150)
                } else {
                   menu.slideUp(150)
                }
            })

       })
       $(".dropdown").on("click","li",function(){
			var $that = $(this);
			var $text = $that.text();
			$that.parents(".dropdown").siblings("div").text($text);
			// $that
		})
	})
	// 下拉框
	 $(".arrow").on("click",function(){
		var $that = $(this);
		var menu = $that.children("ul")
		if (menu.is(":hidden")) {
			$(".dropdown").hide();
			menu.slideDown(150)
		}else{
			menu.slideUp(150)
		}
	})
	$(".dropdown").on("click","li",function(){
		var $that = $(this);
		var $text = $that.text();
		$that.parents(".dropdown").siblings("div").text($text);
		// $that
	})
})