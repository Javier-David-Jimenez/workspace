fetch('../datos/datos.json')
    .then(response => response.json())
    .then(datos => {
        // Seleccionar los datos del embalse "Embalse del Val"
        const embalse = datos["Embalse del Ebro"];
        
        /* separamos los datos para trabajaros mejor */
        const precipitaciones = embalse["precipitacion"];
        const temperaturas = embalse["temperatura"];
        const llenado = embalse["llenado"];
        const viento = embalse["viento"];

        // Buscamos los datos máximos y mínimos en las fgechas en las que s eproducen 
        const diaConMasPrecipitacion = precipitaciones.reduce((max, dato) => dato.pacum > max.pacum ? dato : max);
        const diaConTempMaxima = temperaturas.reduce((max, dato) => dato.temp_max > max.temp_max ? dato : max);
        const diaConTempMinima = temperaturas.reduce((min, dato) => dato.temp_min < min.temp_min ? dato : min);
        const diaConMaxLlenado = llenado.reduce((max, dato) => dato.llenado > max.llenado ? dato : max);
        const diaConMinLlenado = llenado.reduce((min, dato) => dato.llenado < min.llenado ? dato : min);
        const diaConMaxViento = viento.reduce((max, dato) => dato.viento_max > max.viento_max ? dato : max);

        // Calcular el día con la mayor ganancia y pérdida de llenado
        let maxGanancia = 0;
        let maxPerdida = 0;
        let diaMaxGanancia = null;
        let diaMaxPerdida = null;

        /*Iterar sobre los días de llenado y calcular las diferencias de llenado entre 
        el dia comprobado y el anterior si la ganancia es mayor actualizamos*/
        for (let i = 1; i < llenado.length; i++) {
            const diferencia = llenado[i].llenado - llenado[i - 1].llenado;

            if (diferencia > maxGanancia) {
                maxGanancia = diferencia;
                diaMaxGanancia = llenado[i];
            }

            // Si la diferencia es menor que la pérdida máxima, actualizamos
            if (diferencia < maxPerdida) {
                maxPerdida = diferencia;
                diaMaxPerdida = llenado[i];
            }
        }

        // Metemos lso resultados en el HTML 
        document.getElementById("resultadoMaxPrecipitacion").innerHTML = 
            `${diaConMasPrecipitacion.fecha}, <h1>MÁXIMA PACUM: ${diaConMasPrecipitacion.pacum} mm.</h1>`;

        document.getElementById("resultadoTempMaxima").innerHTML = 
            `${diaConTempMaxima.fecha}, <h1>TEMPERATURA MÁXIMA: ${diaConTempMaxima.temp_max}°C.</h1>`;

        document.getElementById("resultadoTempMinima").innerHTML = 
            `${diaConTempMinima.fecha}, <h1>TEMPERATURA MÍNIMA: ${diaConTempMinima.temp_min}°C.</h1>`;

        document.getElementById("resultadoMaxLlenado").innerHTML = 
            `${diaConMaxLlenado.fecha}, <h1>LLENADO MÁXIMO: ${diaConMaxLlenado.llenado}%</h1>`;

        document.getElementById("resultadoMinLlenado").innerHTML = 
            `${diaConMinLlenado.fecha}, <h1>LLENADO MÍNIMO: ${diaConMinLlenado.llenado}%</h1>`;

        document.getElementById("resultadoMaxViento").innerHTML = 
            `${diaConMaxViento.fecha}, <h1>VELOCIDAD MÁXIMA VIENTO: ${diaConMaxViento.viento_max} m/s</h1>`;

        document.getElementById("resultadoMaxGananciaLlenado").innerHTML = 
            `${diaMaxGanancia.fecha}, <h1>GANANCIA MÁXIMA VOLUMEN: ${maxGanancia.toFixed(2)}%</h1>`;

        document.getElementById("resultadoMaxPerdidaLlenado").innerHTML = 
            `${diaMaxPerdida.fecha}, <h1>PÉRDIDA MÁXIMA VOLUMEN: ${maxPerdida.toFixed(2)}%</h1>`;

    })
    .catch(error => {
        console.error("Error al cargar el JSON:", error);

        // ERRORES de JSON al cargar
        document.getElementById("resultadoMaxPrecipitacion").textContent = "Error al cargar los datos de precipitaciones.";
        document.getElementById("resultadoTempMaxima").textContent = "Error al cargar los datos de temperatura máxima.";
        document.getElementById("resultadoTempMinima").textContent = "Error al cargar los datos de temperatura mínima.";
        document.getElementById("resultadoMaxLlenado").textContent = "Error al cargar los datos de llenado máximo.";
        document.getElementById("resultadoMinLlenado").textContent = "Error al cargar los datos de llenado mínimo.";
        document.getElementById("resultadoMaxViento").textContent = "Error al cargar los datos de viento.";
        document.getElementById("resultadoMaxGananciaLlenado").textContent = "Error al calcular la ganancia máxima de llenado.";
        document.getElementById("resultadoMaxPerdidaLlenado").textContent = "Error al calcular la pérdida máxima de llenado.";
    });
