jQuery(function(){

	var $container = $('#container');
	// init
	$container.isotope({
	  // options
	  itemSelector: '.item',
	  layoutMode: 'masonry'
	});

	$("#project-filter").click(function(){
		$container.isotope({
			filter: ".project"
		});
	});

	$("#event-filter").click(function(){
		$container.isotope({
			filter: ".event"
		});
	});

	$("#member-filter").click(function(){
		$container.isotope({
			filter: ".member"
		});
	});

	$('[data-toggle=popover').popover();

	$("a").focus(function(){
		$(this).trigger("blur");
	});
})