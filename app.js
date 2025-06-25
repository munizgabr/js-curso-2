let titulo = document.querySelector('h1');
titulo.innerHTML='Hora do Desafio.';

function consoleClick() {
    console.log('O botão foi clicado');
}

function alertClick() {
    alert('Eu amo JS');
}

function promptClick() {
    let cidade = prompt('Digire o nome de uma cidade:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somarNumeros() {
    let a = parseInt(prompt('Digite o primeiro número:'));
    let b = parseInt(prompt('Digite o segundo número:'));
    let soma = a + b;
    alert(`A soma de ${a} e ${b} é ${soma}.`);
}
