// Usamos la API de Geolocalización para obtener coordenadas
navigator.geolocation.getCurrentPosition(
    (position) => {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        muestraUbicacion(`Lat: ${latitud}, Lon: ${longitud}`);
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d`;
        
        fetch(url)
            .then(response => response.text())
            .then(result => responseManager(JSON.parse(result)))
            .catch(error => alert('Error al obtener datos:', error));
    },
    (error) => alert('Error al obtener ubicación: ' + error.message)
);
