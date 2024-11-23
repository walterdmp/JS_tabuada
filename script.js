function calcular(){
    let numero = Number(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (numero > 0) {
        let tabuada = '';
        for (let i = 1; i <= 10; i++) {
            tabuada += `${i} x ${numero} = ${i * numero}<br>`;
        }
        resultado.innerHTML = tabuada;
    } else {
        resultado.innerHTML = 'Por favor, insira um número positivo.';
    }
}