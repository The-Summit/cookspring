(function() {
	if(window.location.href.indexOf("nonav")>0){
		$(".navbar,.purechat-widget,.chat").remove();
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
	if($("#member-data").length){loadMembers()}
	if($("#Map").length){
		var h = $(window).height() - $(".navbar-brand img").height() - 75;
		map = $("#Map").mapplic({
			sidebar: false,
			height: h,
			markers: false,
			fullscreen: false,
			fillcolor: false,
			hovertip: false
		});
	}
});

function loadMembers(){
		$.getJSON("https://api.airtable.com/v0/appf7AikwGn1IfZMA/CookSpring%20Members?api_key=keycxV47OKNroS5ID&maxRecords=9999&view=Current%20Members%20(Public)",function(v){
			var r = v.records.sort(function(){return 0.5 - Math.random() });
			var masterCls = [];
			$.each(r,function(i,el){
				if(el.fields.Logo){
					$.each(el.fields.Industry,function(i,e){
						masterCls.indexOf(e) === -1 ? masterCls.push(e) : "";
					});
					var cls = el.fields.Industry.toString().replace(/[^a-z\,]+/ig,"-").replace(","," ").toLowerCase();
					$("#member-data").append("<div class='member col-xs-6 col-md-3 " + cls +"'><a href='" + el.fields.Website + "'><img class='img-responsive' src='" + el.fields.Logo[0].url + "' /></a></div>");
				}
			});
			$.each(masterCls,function(i,e){
				var data = e.replace(/[^a-z\,]+/ig,"-").toLowerCase()
				$(".holder .btn-group-vertical").append('<button class="btn btn-group btn-default" data-filter=".'+ data+'">' + e +'</button>');
			})
			$grid = $("#member-data").isotope({
				itemSelector: '.member',
				layoutMode: 'fitRows'
			});
			$grid.imagesLoaded().progress( function() {
			  $grid.isotope('layout');
			});
			$(".holder .btn-group-vertical").on("click", "button",function(){
				var filterValue = $( this ).attr('data-filter');
				console.log(filterValue);
				$grid.isotope({filter:filterValue});
			});
			$(".holder .btn-group-vertical").each( function( i, buttonGroup ) {
				var $buttonGroup = $( buttonGroup );
				$buttonGroup.on( 'click', 'button', function() {
					$buttonGroup.find('.btn-success').removeClass('btn-success');
					$( this ).addClass('btn-success');
				});
			});			
		});	
}