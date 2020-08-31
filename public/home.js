$(document).ready(function() {
	$.get('/allnames', data => {
		$('#search-bar').autocomplete({
			source: data,
			position: {
				my: "left+0 top+5%",
			},
		});
	});
});
