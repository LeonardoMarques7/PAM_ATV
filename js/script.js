// 1) Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação qualquer.
alert("Bem vindo");

// 2) Crie um  script em que o usuário clicará com o botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.
function clicado() {
    alert("Botão foi clicado!");
}

//  3)  De exemplo dos seguintes formas de trabalhar com DOM(Document Object Model), e explique: document.getElementById();
const paragrafo = document.getElementById("paragrafo"); 
paragrafo.innerHTML= "Hello World";

// Pegamos o elemento pelo id e exibimos uma mensagem dentro dele, agora faremos um de form

const text = document.querySelector(".text");
const button = document.querySelector("#buttonEnviar");
button.addEventListener("click", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;

    text.innerHTML = "Seu nome é " + nome;
})

// 4) Descreva e crie exemplos com suas formas diferente eventos no javascript,segue alguns exemplo: onmouseover
function changeColor() {
    document.getElementById("demo").style.backgroundColor = "#ccc";
    document.getElementById("demo").style.color = "#242424";
}

// 5) De exemplo de os tipos de funções: Arrow Function
const button2 = document.querySelector("#buttonEnviar2").addEventListener("click", (event) => {
    event.preventDefault();

    var profissao = document.getElementById("profissao").value;
    var profissaoDisplay = document.getElementById("profissaoDisplay");
    
    profissaoDisplay.innerHTML = "Sua profissão é " + profissao;
});

// 6)  Desenvolva um script qua ao clicar no botão conta o numero de vezes clicado, em que seja separado o HTML e o JavaScript.

const contadorBtn = document.getElementById("contadorBtn");
const contadorDisplay = document.getElementById("contadorDisplay");

// Variável do contador
let contador = 0;

contadorBtn.addEventListener("click", () => {
    // Vamos adicionar ao contador
    contador++;
    contadorDisplay.classList.remove('button-animate');
    contadorDisplay.offsetWidth; // Trigger reflow to restart animation
    contadorDisplay.classList.add('button-animate');
    contadorDisplay.textContent = contador;
});

//  7) Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.

function converterCaixaAlta(str) {
    return str.toUpperCase();

}

console.log(converterCaixaAlta("Olá, Mundo!"));
console.log(converterCaixaAlta("Este texto está em caixa alta.")); 


function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(10, 2))
console.log(soma(1, 6))
console.log(soma(5, 134))