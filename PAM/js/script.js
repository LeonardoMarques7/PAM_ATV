// 1) Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação qualquer.
alert("Bem vindo");

// 2) Crie um  script em que o usuário clicará com o botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.
function clicado() {
    alert("Botão foi clicado!");
}

//  3)  De exemplo dos seguintes formas de trabalhar com DOM(Document Object Model), e explique: 

// Usando document.getElementById(), ele pega o elemento pelo ID
document.getElementById("outputById").innerText = "Hello World (getElementById)";

// Usando document.getElementsByTagName(), ele pega o elemento pelo nome da sua tag
var divsByTagName = document.getElementsByTagName("div");
divsByTagName[1].innerText = "Hello World (getElementsByTagName)";

// Usando document.getElementsByClassName(), ele pega o elemento por sua classe
var divsByClassName = document.getElementsByClassName("outputByClassName");
divsByClassName[0].innerText = "Hello World (getElementsByClassName)";

// Usando document.querySelector(), seletor CSS especificado
var divByQuerySelector = document.querySelector(".outputByQuerySelector");
divByQuerySelector.innerText = "Hello World (querySelector)";

// Usando document.querySelectorAll(), seletor CSS especificado, em uma NodeList (objeto semelhante a um array)
var divsByQuerySelectorAll = document.querySelectorAll(".outputByQuerySelectorAll");
divsByQuerySelectorAll.forEach(function(element) {
    element.innerText = "Hello World (querySelectorAll)";
});

paragrafo3.innerHTML = "Hello World pelo getElementsByClassName";


const text = document.querySelector(".text");
const button = document.querySelector("#buttonEnviar");
button.addEventListener("click", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;

    if(nome === "") {
        text.innerHTML = "Sem nome";
    } else {
        text.innerHTML = "Seu nome é " + nome;
    }

    
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

    if(profissao === "") {
        profissaoDisplay.innerHTML = "Sem profissão";
    } else {
        profissaoDisplay.innerHTML = "Sua profissão é " + profissao;
    }
    
    
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