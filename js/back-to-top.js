$(document).ready(function(){
 	$(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
	// scroll body to 0px on click
    $('#back-to-top').click(function () {

    	// checkes if accordion item is opet
    	if ($('#jetra-link').attr('aria-expanded') === "true") {
    		$('#jetra-link').click();
    	} else {};
    	if ($('#pankreas-link').attr('aria-expanded') === "true") {
    		$('#pankreas-link').click();
    	} else {};
    	if ($('#hemoroidi-link').attr('aria-expanded') === "true") {
    		$('#hemoroidi-link').click();
    	} else {};
    	if ($('#terminalna-link').attr('aria-expanded') === "true") {
    		$('#terminalna-link').click();
    	} else {};
    	
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

	$('#back-to-top').tooltip('show');
});