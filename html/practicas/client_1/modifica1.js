//1 Cambia titulo de la página

document.title = 'Color complicado de Navarra'


/*
Antes lo tenia dentro del siguiente elemento con las body *[class] etc.. pero no llegaba a muchas de las
supongo que porque no tenian class o id(esto lo he pensado despues de hacer esto) Asi llega a todas las
etiquetas marcadas aunque en las últimas lineas de la web estan en blanco, hay algo que las sobreescribe
de blanco. Podría haber puesto important, pero con esta funcion llenaria toda el html de important y 
seria muy mala practica. 
*/
document.querySelectorAll("span, p, title, div, h1, h2, label, a").forEach(element => {
    element.style.color = "green";
});
/*
Este cambia todos los fondos a rojo, tota los colores de las imagenes, rota las imagenes poniendolas boca abajo y 
las estira un poco. 
He puesto espacios y saltos de linea para verlo mas claro, como si fuese un css
He atacado a las body *[class], body *[id]  para llegar mas adentro del body basico y cambiar todos los backgrounds
de divs internos. en este caso body*[id] no es necesario pero lo he puesto para recordarme que tambien se podria 
acceder a todos los id. 
Con el *[Class]  sería suficiente pero dejo body para que veas por donde empece

*/
const style = document.createElement('style');
style.innerHTML = 
    `body, *[class], body *[id], span, p, title, div, h1, h2, label, a { 
    background-color: red;
    color : green; 
    }

    img { 
    filter: hue-rotate(90deg); transform: rotate(180deg) skew(30deg, 10deg); 
    }
    ` 
;
document.body.appendChild(style);



// Selecciona la clase de  "contenedor-destacados" en este caso un div
let inserto = document.querySelector(".contenedor-destacados");

/*
 Crea el elemento h1 y añado el texto dentro de la etiqueta para ponerlo 
 en la parte de arriba del .contenedor-destacados seleccionado
*/
let encabezado = document.createElement("h1");
encabezado.textContent = "LOS MEJORES LINKS:";
inserto.prepend(encabezado);

// Añade el texto al final del contenido del div seleccionado
inserto.append("Hasta aqui los mejores links");

/*
Selecciona el  <span> dentro del <div class ="highlights-title>"
y sustituyo el texto por  un "efecto subrayado algo cutre"
*/
let span = document.querySelector("div.highlights-title"); // 
span.textContent = "___________________________________________________________";





/* Creamos nodos HTML */
/*
var miEtiqueta = document.createElement("h1");
var miTexto = document.createTextNode("ESTE TITULO MOLA MAS");
var element = document.getElementsByTagName("body")[0];
miEtiqueta.appendChild(miTexto);
element.appendChild(miEtiqueta);
*/



///////////////////////////////////////////////////////////////




const style = document.createElement('style');
style.innerHTML = "html, body, * { color: green; font-family: Arial, sans-serif; }";
document.head.appendChild(style);


const style = document.createElement('style');
style.innerHTML = "html, body, body * { color: blue; font-family: Arial, sans-serif; }";
document.head.appendChild(style);



document.getElementsByTagName('html')[0].style.backgroundColor = "red";

document.getElementsByTagName('html')[0].style.color = "#45b63a";
document.html.style.cssText = "background-color: red; color: green; font-family: Arial;";

document.getElementsByClassName('ltr yui3-js-enabled webkit js chrome chrome129 chrome129-0 linux secure')[0].style.color = "blue";
document.getElementsByClassName('ltr')[0].style.color = "blue";

document.getElementById("body").style.color = "#45b63a";

document.body.style.color ='#45b63a'
document.body.style.backgroundColor ='#45b63a'

Object.assign(document.body.style, {
    backgroundColor: "red",
    color: "green",
    fontFamily: "Arial"
});


Object.assign(document.html.style, {
    backgroundColor: "pink",
    color: "#45b63a",
    fontFamily: "Arial"
});


const style = document.createElement('style');
style.innerHTML = "html, body, * { color: green; font-family: Arial, sans-serif; }";
document.head.appendChild(style);
