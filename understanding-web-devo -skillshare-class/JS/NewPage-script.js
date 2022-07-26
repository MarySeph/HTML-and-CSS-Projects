$(document).ready(function() {
	console.log('jQuery loaded');

	$('.navbar-brand').on('click', function() {
		alert('CONGRATULATIONS');
		$('#hidden-text').show();

	});


});