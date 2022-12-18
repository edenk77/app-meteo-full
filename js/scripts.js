$(document).ready(function(){

	// var lat = 50.8497245441805;
	// // var lng = 4.353161433994454;
	// var lat = 51.2178118871473;
	// var lng = 3.224220843793024;
	
	
	function loadmeteo(url){
		$.ajax({
			// 1) on définit le fichier vers lequel on envoye la requête POST
		//  url : 'https://www.prevision-meteo.ch/services/json/lat='+lat+'lng='+lng,
		// url : 'https://www.prevision-meteo.ch/services/json/'+ville,
		url : url,
	  
		// 2/ on spécifie la méthode  
		type : 'GET', // Le type de la requête HTTP, ici  POST
	  
		// 3) on définit les variables POST qui sont ennvoyées au fichier .php qui les récupère sous forme de $_POST["nom"] 
		data : { 
				// nom: nom, 
				// prenom: prenom, 
				// genre: genre
				}, // On fait passer nos variables au script coucou.php
		
		// 4) format de retour du fichier php dans "data"
		dataType : 'json',
		
		// 5) fonction à effectuer en cas de succès
		success : function(monArray){ //  contient le HTML renvoyé
			
			console.log(monArray);
	  
	  
			var html = '';
			  // console.log(monArray);
			
			//  html += '<div class="contenu col-12 col-lg-4">';
			
			//  html += '</div>';
			// NOM
			 $(".location").html(monArray.city_info.name);
			 $(".temp").html(monArray.current_condition.tmp);
			 $(".date").html(monArray.current_condition.date);
			 $("#lastUpdated").html(monArray.city_info.sunrise);
			 $("#lastUpdated2").html(monArray.city_info.sunset);
			 $(".conditions").html(monArray.current_condition.condition);

			 $(".day").html(monArray.fcst_day_1.day_short);
			 $(".conditions").html(monArray.fcst_day_1.condition);
			 $(".high").html(monArray.fcst_day_1.tmin);
			 $(".low").html(monArray.fcst_day_1.tmax);

			 $(".day2").html(monArray.fcst_day_2.day_short);
			 $(".conditions2").html(monArray.fcst_day_2.condition);
			 $(".high2").html(monArray.fcst_day_2.tmin);
			 $(".low2").html(monArray.fcst_day_2.tmax);

			 $(".day2").html(monArray.fcst_day_2.day_short);
			 $(".conditions2").html(monArray.fcst_day_2.condition);
			 $(".high2").html(monArray.fcst_day_2.tmin);
			 $(".low2").html(monArray.fcst_day_2.tmax);

			 $(".day3").html(monArray.fcst_day_2.day_short);
			 $(".conditions3").html(monArray.fcst_day_2.condition);
			 $(".high3").html(monArray.fcst_day_2.tmin);
			 $(".low3").html(monArray.fcst_day_2.tmax);

			 $("._5 img").attr('src', monArray.current_condition.icon).attr('alt', monArray.current_condition.condition);
			 
			 $(".inner").attr('src', monArray.fcst_day_1.icon).attr('alt', monArray.fcst_day_1.icon);
	
		
		} // success
	  
	  
			}); //  ajax function         
	  
	} // fonction loadmeteo
	
	 
	
	
	
	 $( "#go" ).click(function() {
		var ville = $('#ville').val();
		loadmeteo('https://www.prevision-meteo.ch/services/json/'+ville);
	
	}); // click
	
	
	
	
	
	  if (navigator.geolocation) {
	
		navigator.geolocation.getCurrentPosition(function(position){
	
		  var lat = position.coords.latitude ;
	
		  var lng = position.coords.longitude;    
	
	
	
		 loadmeteo('https://www.prevision-meteo.ch/services/json/lat='+lat+'lng='+lng);
	
	
		 $.ajax({
		  // 1) on définit le fichier vers lequel on envoye la requête POST , 
	
	  url : 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&result_type=locality&key=AIzaSyCKcTQ-zk45bUB2U-0mIhYELU1CKbrSFTI',
	  //https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding
	
	  // 2/ on spécifie la méthode  
	  type : 'GET', // Le type de la requête HTTP, ici  GET
	
	  // 4) format de retour du fichier php dans "data"
	  dataType : 'json',
	  
	  // 5) fonction à effectuer en cas de succès
	  success : function(data){ //  contient le HTML renvoyé
		   
		var monArray = data.results;
	
		//   console.log(data);
		//   console.log("______________________");
		  console.log(data);
	
		  // monArray.forEach(function(ligne,i) {
	
	
			// $('h1').text(data.results[0].formatted_address)
	
			// $(".location").html(data.results[0].address_components[0].long_name);
			setTimeout(() => {
				$(".location").html(data.results[0].address_components[0].long_name);
			}, "500")
		   
	
	
	
	
		  //    }); // foreach
	
	  
			} // success
		  }); // intro ajax function  
	
	 })
	
	  } else {
	
		console.log("Browser doesn't support geolocalisation !")
	
	  }
	
	
	
	
	
	
	
	}); // ready