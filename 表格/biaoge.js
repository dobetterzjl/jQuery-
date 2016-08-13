$(function(){
	$("tbody tr:even").css("background-color","#ccc");
	$('.editable').on('click',function(){
		if($(this).children('input').length > 0){
			return false;
		}
		var $input = $('<input type="text" value='+this.innerHTML+'>').css({
			width:$(this).width(),
			border:0,
		});
		$(this).empty().append($input);
		$input.trigger('select');
	});
});