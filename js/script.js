var $j = jQuery.noConflict();
$j(function() {
	$j("#contactSubmit").on("click",function(){
		$j("#contact").modal("hide");
		$j("#ajax-title").text("Loading...");
		$j("#ajax-msg").text("Loading...");		
		$j.getJSON("http://sjmize.dev.ambassador.am/vendor/sendgrid-php.php?title=Hello!&body=Welcome!&to=spencer.mize@thesummitfw.com",function(d){
			$j("#ajax").modal("show");
			$j("#ajax-title").text(d.statusTitle);
			$j("#ajax-msg").text(d.status);
		});
	});
});