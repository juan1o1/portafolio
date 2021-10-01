;(function(){
	class UserLocation{
		static get(callback){
			if (navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat:location.coords.latitude,
						lng:location.coords.longitude
					})
				})
			}else{
				alert("No pudimos encontrar tu localizacion")
				return{
					lat:0,
					lng:0
				}
			}
		}
	}
	const my_place = {
		lat:6.176093, 
		lng:-75.346114
	}
	UserLocation.get((coords)=>{
		console.log("Encontramos tu ubicación")

	})
})()