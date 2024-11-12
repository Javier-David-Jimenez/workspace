/* Script de ejemplo  */

//Añadimos un event listener al botón HTML.
let button = document.getElementById('button');
button.addEventListener('click', ajaxCheckWeather);

function ajaxCheckWeather() {

    //obtenemos la información que necesitamos del formulario
    let ubicacion = document.getElementById('location').value;

    //Mostramos la ubicación en el documento HTML
    muestraUbicacion(ubicacion);


    /* LLAMADA AJAX*/
    //usamos la API provista en   https://openweathermap.org/current#name */
    //config llamada AJAX
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + ubicacion + "&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d"
    //ejemplo  url = "https://api.openweathermap.org/data/2.5/weather?q=Pamplona,es&&lang=es&appid=xxxxxxxx"


    //hacemos llamada AJAX, gestionamos respuesta con responseManager(resp)
    //gestionamos los errores con una alerta
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => responseManager(JSON.parse(result)))
        .catch(error => alert('error', error));
}

/*funcion principal que gestiona la respuesta a la llamada AJAX
le decimos que coger entre los datos  que nos devuelve la llamada
*/

function responseManager(resp) {
    console.log(resp);
    cambiaIcono(resp.weather[0].icon);
    muestraDesc(resp.weather[0].description);
    muestraTemp(resp.main.temp);
    muestraHum(resp.main.humidity);
}
/*funciones auxiliares para cambiar el HTML/CSS*/

function cambiaIcono(nombreIco) {
    //añade o cambia el icono que tiene el id icono
    //utiliza iconos que se enecuentran en el directorio "img" y que tienen el nombre en formato  nombreIco@2x.png
    let icono = document.getElementById('icono');
    icono.src = "img/" + nombreIco + "@2x.png";
}

function muestraDesc(desc) {
    //Lleva un texto ( que contiene la descripción de la previsión) a la página HTML
    let prev = document.getElementById('prevision');
    prev.innerHTML = desc;
}

function muestraUbicacion(ubicacion) {
    //Lleva un texto (que contiene la ubicación pedida por el usuario) a la pagina HTML
    let elemento = document.getElementById('ubicacionPedida');
    elemento.innerHTML = ubicacion;
}

/*coge la temperatura en kelvin y lo pasa a Cº como cogia 2 decimales del ajax
le puse el toFixed(2) porque me daba muchos decimales el ºC es un miniextra
*/
function muestraTemp(temp) {
    let temperatura = document.getElementById('temp');
    let tempCelsius = temp - 273.15;
    temperatura.innerHTML = tempCelsius.toFixed(2) + " °C";
}

//Cogemos la humedad y la metemos en el html en humidity
function muestraHum(humidity) {
    let humedad = document.getElementById('humidity');
    humedad.innerHTML = humidity;
}