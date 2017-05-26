var $j = jQuery.noConflict()
$j(function() {
	if(window.location.href.indexOf("nonav")>0){
		$j(".navbar,.purechat-widget,.chat").remove();
	}
	
	if($j("#member-data").length){
		$j.getJSON("https://api.airtable.com/v0/appf7AikwGn1IfZMA/CookSpring%20Members?api_key=keycxV47OKNroS5ID&maxRecords=9999&view=Current%20Members%20(Public)",function(v){
			var r = v.records.sort(function(){return 0.5 - Math.random() });
			$j.each(r,function(i,el){
				if(el.fields.Logo){
					$j("#member-data").append("<div class='member col-xs-6 col-md-3'><a href='" + el.fields.Website + "'><img class='img-responsive' src='" + el.fields.Logo[0].url + "' /></a></div>");
				}
			});			
		});
	}
	if($j("#temp-data").length){
		$j.getJSON("https://www.imonnit.com/json/SensorList/dGhlc3VtbWl0OkNoYXNwMTAxMA==",function(v){
			$j.each(v.Result,function(i,el){
				$j("#temp-data").append("<h1>" + el.SensorName + "</h1>");
				$j("#temp-data").append("<h2>" + el.CurrentReading + "</h2>");
			})
		});
	};
});