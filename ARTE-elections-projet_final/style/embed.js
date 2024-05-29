jQuery(document).ready(function(){
	//set 16/9 height on each iframe teaser
	jQuery('.arte_block iframe').each(function( index ) {

		var iframeWidth = $(this).width();

		var iframeHeight = Math.round((iframeWidth*9)/16);

		jQuery(this).attr('height', iframeHeight);
		jQuery(this).parents('.arte_block').css('height', iframeHeight);
	});
});