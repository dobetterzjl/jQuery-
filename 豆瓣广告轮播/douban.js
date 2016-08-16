$(function(){
	$li = $('.list li');
	var index=0;
	$li.on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.item').eq($(this).index()).show().siblings().hide();
		index = $(this).index();
	});
	setInterval(function(){
		index++;
		if(index == $li.length){
			index = 0;
		}
		$li.eq(index).trigger('click');
	},2000)
});