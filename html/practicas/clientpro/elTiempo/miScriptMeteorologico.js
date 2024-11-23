// Añadimos un event listener al botón HTML.
let button = document.getElementById('button');
button.addEventListener('click', ajaxCheckWeather);

function ajaxCheckWeather() {
    // AQUIIIIIIII: En lugar de obtener la ubicación por nombre, obtenemos latitud y longitud.
    let latitud = document.getElementById('latitude').value;
    let longitud = document.getElementById('longitude').value;

    // Mostramos la ubicación en el documento HTML
    muestraUbicacion(`Lat: ${latitud}, Lon: ${longitud}`);

    /* LLAMADA AJAX 
    AQUIIIIIIII: Cambiamos la URL para usar coordenadas en lugar del nombre de la ciudad.
    Nueva URL con `lat` y `lon`:*/
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d`;

    // Config llamada AJAX
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    // Hacemos llamada AJAX, gestionamos respuesta con responseManager(resp)
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => responseManager(JSON.parse(result)))
        .catch(error => alert('Error al obtener datos:', error));
}

/* AQUIII función principal que gestiona la respuesta a la llamada AJAX  
añado 1 para la localidad*/
function responseManager(resp) {
    console.log(resp);
    cambiaIcono(resp.weather[0].icon);
    muestraDesc(resp.weather[0].description);
    muestraTemp(resp.main.temp);
    muestraHum(resp.main.humidity);
    muestraLug(resp.name);
}

/* funciones auxiliares para cambiar el HTML/CSS */
function cambiaIcono(nombreIco) {
    let icono = document.getElementById('icono');
    icono.src = "img/" + nombreIco + "@2x.png";
}

function muestraDesc(desc) {
    let prev = document.getElementById('prevision');
    prev.innerHTML = desc;
}

function muestraUbicacion(ubicacion) {
    let elemento = document.getElementById('latlong');
    elemento.innerHTML = ubicacion;
}

function muestraTemp(temp) {
    let temperatura = document.getElementById('temp');
    let tempCelsius = temp - 273.15;
    temperatura.innerHTML = tempCelsius.toFixed(2) + " °C";
}

function muestraHum(humidity) {
    let humedad = document.getElementById('humidity');
    humedad.innerHTML = humidity;
}
//AQUIIIIIIII nueva funcion para el nombre del lugar
function muestraLug(name) {
    let lugar = document.getElementById('lugar')
    lugar.innerHTML = name
}