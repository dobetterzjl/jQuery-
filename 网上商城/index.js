$(function(){
	//文本框
	$('#header input').on('focus',function(){
		if(this.value==this.defaultValue){
			this.value='';
		}
	}).on('blur',function(){
		if(this.value==''){
			this.value=this.defaultValue;
		}
	});
	/*导航栏*/
	$('.nav li').on('mouseover',function(){
		$(this).children('.jnNav').show();
	}).on('mouseout',function(){
		$(this).children('.jnNav').hide();
	});
	
	//商品分类
	$('.promoted').append("<s class='hot'></s>")
	//大屏广告
	$('#jnImageroll div a').on('mouseover',function(){
		$(this).addClass('chos').siblings().removeClass('chos');
		$('#JS_imgWrap img').eq($(this).index()).fadeIn().parent().siblings().children().fadeOut();
	});








 //最新动态

	$('#jnNoticeInfo .tooltip').hover(function(e){
		this.myTitle=this.title;
		this.title='';
		var $tooltip=$('<div id="tooltip">'+this.myTitle+'</div>');
		$('body').append($tooltip);
		$("#tooltip").offset({
			top:e.pageY+15,
			left:e.pageX+10
		}).show('slow');
		

	},function(){
		$('#tooltip').remove();
		this.title=this.myTitle;

	});
	$('#jnNoticeInfo .tooltip').on('mousemove',function(e){
		$('#tooltip').offset({
			top:e.pageY+15,
			left:e.pageX+10
		});
	});
	//品牌活动
	$('#jnBrandTab li').on('click',function(){
		$(this).addClass('chos').siblings().removeClass('chos');
		var $index=$(this).index();
       $('#jnBrandList').animate({
       		'left' : -$index*790 +'px'
       }
       
       	);

	});
});