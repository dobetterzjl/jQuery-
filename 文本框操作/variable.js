$(function(){
	var $iptRequired = $(':input[required]');
	var $info = $('<span></span>');
	
	$iptRequired.each(function(){
		$(this).after($('<strong style="color:red;"> * </strong>'));
	}).on('focus',function(){
		if(this.value==""){
			
			$(this).next().after($info.addClass('error').text('必填项'));
	}	
	}).on('keyup',function(){
		var min = $(this).attr('min');
		if(min && this.value.length >=min){
			$(this).next().after($info.removeClass('error').addClass('success').text('输入格式正确'));
		}else if(min &&this.value.length<min && this.value.length>0){
			$(this).next().after($info.removeClass('success').addClass('error').text('请至少输入'+min+'位字符'));	
		}else if (this.value==""){
			$(this).next().after($info.removeClass('success').addClass('error').text('必填项'));
		}
		// if(this.value.length>=6){
		// 	$(this).next().after($info.removeClass('error').addClass('success').text('输入格式正确'));
		// }else{
		// 	$(this).next().after($info.removeClass('success').addClass('error').text('请至少输入6位字符'));
		// }
	});
});