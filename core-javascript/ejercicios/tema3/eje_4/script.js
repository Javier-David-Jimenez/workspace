function analyze_wheels() {
   
    let diameter = parseFloat(document.getElementById("diameter").value);
    let thickness = parseFloat(document.getElementById("thickness").value);
    let  answer = "";

   

    if (diameter <= 0 ||  thickness <= 0) {
         answer = "Si el diametro o el grosor de la rueda es 0 o menor esa rueda no existe"
    } else if (diameter > 1.4) {
         answer = "La rueda es para un vehículo grande.";  
        if (thickness < 0.4) {
             answer += " El grosor para esta rueda es inferior al recomendado.";
        }
    } else if (diameter > 0.8 && diameter <= 1.4) {
         answer = "La rueda es para un vehículo mediano.";
        if (thickness < 0.25) {
             answer += " El grosor para esta rueda es inferior al recomendado.";
        }
    } else {
         answer = "La rueda es para un vehículo pequeño.";
    }


    document.getElementById("result").innerHTML =  answer;
}