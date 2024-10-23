function consultar_precio(idioma) {
    // Preguntar el producto al cliente
    let producto = prompt("¿De qué producto quieres saber el precio? (Ejemplo: merluza, atún, salmón)").toLowerCase();

    // Definir los precios en función del producto
    let precio;

    switch (producto) {
        case 'merluza':
            if (idioma === 'español') {
                precio = "El precio de la merluza es 12€ por kilo.";
            } else if (idioma === 'english') {
                precio = "The price of hake is €12 per kilo.";
            }
            break;

        case 'atún':
            if (idioma === 'español') {
                precio = "El precio del atún es 15€ por kilo.";
            } else if (idioma === 'english') {
                precio = "The price of tuna is €15 per kilo.";
            }
            break;

        case 'salmón':
            if (idioma === 'español') {
                precio = "El precio del salmón es 18€ por kilo.";
            } else if (idioma === 'english') {
                precio = "The price of salmon is €18 per kilo.";
            }
            break;

        default:
            if (idioma === 'español') {
                precio = "Lo siento, no tenemos ese producto.";
            } else if (idioma === 'english') {
                precio = "Sorry, we don't have that product.";
            }
            break;
    }

    // Mostrar el precio o el mensaje de error
    alert(precio);
}