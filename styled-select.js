jQuery.fn.styledSelect = function(options) {

	var prefs = {
		coverClass : 'select-replace-cover',
		innerClass : 'select-replace',
		adjustPosition : { top:0, left:0 },
		selectOpacity : 0
	}

	if (options) jQuery.extend(prefs,options);
	
	return this.each(function(){
	
		var $selElm = jQuery(this);

		$selElm.wrap('<span><'+'/span>');
		$selElm.after('<span><'+'/span>');

		var $selReplace = $selElm.next(),
			$selCover = $selElm.parent();

		$selElm.css({
			'opacity': prefs.selectOpacity,
			'visibility': 'visible',
			'position': 'absolute',
			'top' :0,
			'left': 0,
			'display': 'inline',
			'z-index': 1
		});

		$selCover.addClass(prefs.coverClass).css({
			'display': 'inline-block',
			'position': 'relative',
			'top' :prefs.adjustPosition.top,
			'left' :prefs.adjustPosition.left,
			'z-index': 0,
			'vertical-align': 'middle',
			'text-align': 'left'
		});

		$selReplace.addClass(prefs.innerClass).css({
			'display': 'block',
			'white-space': 'nowrap'
		});

		$selElm.bind('change',function() {
			jQuery(this).next().text(this.options[this.selectedIndex].text);
		})

		$selReplace.text($selElm.children('option').eq($selElm.context.selectedIndex).text());
		$selCover.width($selElm.width()+'px');

	});

}
