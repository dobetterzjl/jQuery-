;(function($){
	$.fn.extend({
		tooltip:function(){
			this.hover(function(){
				 this.temptitle = this.title;
				this.title="";
				 this.$tooltip = $('<div class="tooltip">'+
					'<div class="tooltip-arrow"></div>'+
					'<div class="tooltip-inner">'+this.temptitle+'</div>'
					+'</div>').appendTo('.div1');

				 var iLeft=iTop=0;
				 var $toolchild = this.$tooltip.children('.tooltip-arrow');
				 var offset = $(this).offset();
				 if (offset.top<this.$tooltip.outerHeight()+20) {
				 	if (offset.left<this.$tooltip.outerWidth()+20) {
				 		iLeft = offset.left+$(this).width()+20;
				 		
				 		iTop = offset.top - (this.$tooltip.outerHeight()-$(this).height())/2;
				 		$toolchild.addClass('left-arrow');
				 		
				 	}else if (offset.left+this.$tooltip.outerWidth()+20+$(this).width
				 		()> $(window).width()) {
				 		iLeft = offset.left - this.$tooltip.outerWidth()-20;
				 		iTop = offset.top -(this.$tooltip.outerHeight()-$(this).height())/2;
				 		$toolchild.addClass('right-arrow');
				 	}
				 	
				 }else{

				 	iLeft = offset.left -(this.$tooltip.outerWidth()-$(this).width())/2;
				 	iTop = offset.top-this.$tooltip.outerHeight()-20;
				 	if(iLeft<0){
				 		iLeft=20;
				 	}
				 	$toolchild.addClass('bottom-arrow');
				 }
				// var iLeft = $(this).offset().left - (this.$tooltip.outerWidth()-$(this).width())/2;
				this.$tooltip.offset({
					left: iLeft,
					top: iTop
				});

				
			},function(){
				this.$tooltip.remove();
				this.title = this.temptitle;
			});
			return this;
		
		}
	});
})(jQuery);