(function() {
	if(window.location.href.indexOf("nonav")>0){
		$(".navbar,.purechat-widget,.chat").remove();
	}
	
	if($("#member-data").length){
		$.getJSON("https://api.airtable.com/v0/appf7AikwGn1IfZMA/CookSpring%20Members?api_key=keycxV47OKNroS5ID&maxRecords=9999&view=Current%20Members%20(Public)",function(v){
			var r = v.records.sort(function(){return 0.5 - Math.random() });
			$.each(r,function(i,el){
				if(el.fields.Logo){
					$("#member-data").append("<div class='member col-xs-6 col-md-3'><a href='" + el.fields.Website + "'><img class='img-responsive' src='" + el.fields.Logo[0].url + "' /></a></div>");
				}
			});			
		});
	}
	if($("#temp-data").length){
		$.getJSON("https://www.imonnit.com/json/SensorList/dGhlc3VtbWl0OkNoYXNwMTAxMA==",function(v){
			$.each(v.Result,function(i,el){
				$("#temp-data").append("<h1>" + el.SensorName + "</h1>");
				$("#temp-data").append("<h2>" + el.CurrentReading + "</h2>");
			})
		});
	};
});
var map = "";
$(document).ready(function(){
	var h = $(window).height() - $(".navbar-brand img").height() - 75;
	map = $("#Map").mapplic({
		sidebar: true,
		height: h,
		markers: false,
		fullscreen: false,
		fillcolor: false,
		hovertip: false
	});
});