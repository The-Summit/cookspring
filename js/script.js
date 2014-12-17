var $j = jQuery.noConflict();
$j(function() {
	$j("#contactSubmit").on("click",function(){
		var isValid = true;
		$j(".form-control").each(function(){
			if($j(this).val().length<1){
				$j(this).closest(".form-group").addClass("has-error");
				isValid = false;
			}
		});
		if(!isValid){
			return 0;
		}else{
			$j(".has-error").removeClass("has-error");
		}
		var data = {
			to: $j("#email").val(),
			subject: "Thanks for reaching out to us!",
			name: $j("#name").val(),
			title: "Are you ready for this?",
			body: $j("#name").val().split(" ")[0] + ", thanks for your interest in <a href='http://cookspringfw.com'>CookSpring</a>.  We'll follow up with you quickly so we can show you around! <br /><br />Your Friends at CookSpring",
			phone: $j("#phone").val()
		};
		
		$j("#contact").modal("hide");
		$j("#ajax-title").text("Loading...");
		$j("#ajax-msg").text("Loading...");
		$j("#ajax").modal("show");
	
		$j.ajax({
			url: "http://thesummitfw.com/vendor/sendgrid-php.php",
			type: 'GET',
			dataType: 'json',
			data: data,
			success: function(d){
				$j("#ajax-title").text(d.statusTitle);
				$j("#ajax-msg").text(d.status);
			},
			error: function(){
				$j("#ajax-title").text("Error");
				$j("#ajax-msg").text("Sorry, there was an error. Please call us at 260.446.3200.  Thanks!");		
			},
			crossDomain: false
		})
	});
});