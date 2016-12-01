;(function($){
	window.dialog = function(options){
		var settings = $.extend({
			width:400,
			height:300
		},options);
		var html='<div class="dialog-mask"></div>'+
				'<div class="dialog-container">'
					+'<div class="dialog-wrapper">'
						+'<div class="dialog-header">'
							+'<span class="dialog-title">'+settings.title+'</span>'
							+'<span class="dialog-close">[x]</span>'
						+'</div>'
						+'<div class="dialog-content">'+settings.url+'</div>'
						+'<div class="dialog-footer">'+settings.footer+'</div>'
					+'</div>'
				+'</div>';
			$(document.body).append(html);
		
		var $mask = $('.dialog-mask').show();
		var $container = $('.dialog-container').css({
			width:settings.width,
			height:settings.height,
			marginLeft:-settings.width/2,
			marginTop:-settings.height/2
		}).show();
		$('.dialog-close').on('click',function(){
			$mask.hide();
			$container.hide();
		});
		$('.dialog-content').load('content.html');
	}
})(jQuery);