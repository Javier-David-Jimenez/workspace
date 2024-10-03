function analiza_ruedas() {
   
    let diametro = parseFloat(document.getElementById("diametro").value);
    let grosor = parseFloat(document.getElementById("grosor").value);
    let diagnostico = "";

   

    if (diametro <= 0 || grosor <= 0) {
        diagnostico = "Si el diametro o el grosor de la rueda es 0 o menor esa rueda no existe"
    } else if (diametro > 1.4) {
        diagnostico = "La rueda es para un vehículo grande.";  
        if (grosor < 0.4) {
            diagnostico += " El grosor para esta rueda es inferior al recomendado.";
        }
    } else if (diametro > 0.8 && diametro <= 1.4) {
        diagnostico = "La rueda es para un vehículo mediano.";
        if (grosor < 0.25) {
            diagnostico += " El grosor para esta rueda es inferior al recomendado.";
        }
    } else {
        diagnostico = "La rueda es para un vehículo pequeño.";
    }


    document.getElementById("resultado").innerHTML = diagnostico;
}