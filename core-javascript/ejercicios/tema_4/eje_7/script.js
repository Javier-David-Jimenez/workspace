function learn_multiply() {
    let x = 1; 
    let question_div = document.getElementById('question_div'); 
    let result_div = document.getElementById('result_div'); //me comi el result_div al cambiarle los nombres pero seguia funcionando por eso no me dic cuenta

    function show_multiply() {
        while (5 == 5) { 
            let result  = x * 2;

            question_div.innerHTML += `<p>¿Cuánto es la multiplicación de 2 * ${x}?</p>`;
            
            setTimeout(function() {
                result_div.innerHTML += `<p>= ${result}</p>`;
            }, 100); 

            x++; 

            setTimeout(function() {
                show_multiply();
            }, 150); 

            return; 
        }
    }

    show_multiply();
}



