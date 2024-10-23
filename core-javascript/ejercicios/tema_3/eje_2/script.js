function adivinanza() {
    // Definimos las respuestas correctas
    const respuestaCorrecta1 = "platano";
    const respuestaCorrecta2 = "pera";
    
    // Pregunta 1
    let respuesta1 = prompt("¿Oro parece platano es, el que no lo adivine bien tonto es?");
    
    // Pregunta 2
    let respuesta2 = prompt("Blanca por dentro, verde por fuera. Si no sabes, espera. ¿Qué es? ");
    
    // Variables para almacenar si las respuestas son correctas
    let acierto1 = (respuesta1.toLowerCase() === respuestaCorrecta1);
    let acierto2 = (respuesta2.toLowerCase() === respuestaCorrecta2);
    
    // Verificar las respuestas y mostrar el mensaje correspondiente
    if (acierto1 && acierto2) {
        alert("¡Felicidades! Has acertado las dos respuestas.");
    } else if (acierto1 || acierto2) {
        alert("Casi lo logras, acertaste una de las dos respuestas.");
    } else {
        alert("Lo siento, fallaste en ambas respuestas.");
    }
}