var $j = jQuery.noConflict(),
	formUrl = "http://thesummitfw.com/vendor/sendgrid-php.php"
	//formUrl = "http://sjmize.dev.ambassador.am/vendor/sendgrid-php.php";
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
		ajaxLoading();
		
		$j.ajax({
			url: formUrl,
			type: 'GET',
			dataType: 'json',
			data: data,
			success: function(d){
				ajaxUpdate(d.statusTitle,d.status);
			},
			error: ajaxError,
			crossDomain: false
		})
	});
	$j("#application").on("submit",function(event){
		event.preventDefault();
		ajaxLoading();
		var isValid = true;
		$j(this).find("input,textarea,select").each(function(){
			if($j(this).val().length<1){
				$j(this).closest(".form-group").addClass("has-error");
				isValid = false;
			}
		});
		if(!isValid){
			ajaxInvalid();
			return 0;
		}else{
			$j(".has-error").removeClass("has-error");
			var vals = $j(this).serializeObject();			
			var data = {
				to: $j("#email").val(),
				subject: "Thanks for reaching out to us!",
				name: $j("#name").val(),
				title: "Are you ready for this?",
				body: $j("#fname").val() + ", thanks for your interest in <a href='http://cookspringfw.com'>CookSpring</a>.  We'll follow up with you quickly so we can get you moving! <br /><br />Your Friends at CookSpring",
				phone: $j("#phone").val(),
				app: true
			};			
			vals = $j.extend(vals,data);
			$j.ajax({
				url: formUrl,
				type: 'GET',
				dataType: 'json',
				data: vals,
				success: function(d){
					ajaxUpdate(d.statusTitle,d.status);
				},
				error: ajaxError,
				crossDomain: false				
			});
		}
	});
	
	if($j("#member-data").length){
		$j.getJSON("https://api.airtable.com/v0/appf7AikwGn1IfZMA/CookSpring%20Members?api_key=keycxV47OKNroS5ID&maxRecords=9999&view=Current%20Members%20(Public)",function(v){
			var r = v.records.sort(function(){return 0.5 - Math.random() });
			$j.each(r,function(i,el){
				if(el.fields.Logo){
					$j("#member-data").append("<div class='member col-md-3'><img class='img-responsive' src='" + el.fields.Logo[0].url + "' /></div>");
				}
			});			
		});

		$j("#member-data");
	}
});

function ajaxLoading(){
	$j("#ajax-title").text("Loading...");
	$j("#ajax-msg").text("Loading...");
	$j("#ajax").modal("show");
}
function ajaxError(){
	$j("#ajax-title").text("Error");
	$j("#ajax-msg").text("Sorry, there was an error. Please call us at 260.446.3200.  Thanks!");	
	$j("#ajax").modal("show");	
}
function ajaxUpdate(title,msg){
	$j("#ajax-title").text(title);
	$j("#ajax-msg").text(msg);	
}
function ajaxInvalid(){
	$j("#ajax-title").text("Validation Error");
	$j("#ajax-msg").text("Please fill out all of the form fields.  Thanks!");
	$j("#ajax").modal("show");	
}

$j.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $j.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};