console.log("Ola mundo");
//alert("Bem-vindo ao JavaScript!");
//declarando uma variável
//let nome = window.prompt("Qual é o seu nome?");
//console.log("Olá, " + nome + "!"); //imprime no console
//document.writeln(nome); //imprime na página

//criar a funçao de que recebe o clique do botao
function mudarTexto() {
    console.log("Botão clicado!");
    let texto = window.prompt("Digite uma frase: ");
    console.log(texto);
    //recuperar o elemento h2 html
    document.getElementById("texto").textContent = texto;
} 

//obter o elemento botao
let botao = document.getElementById("button");
console.log(botao);

//associar o evento de clique ao botao
botao.onclick = function(e) {
    e.epreventDefault(); //impede o comportamento padrão do botão
    let idade = document.getElementById("idade").value;
    console.log(idade);

    let resultado = document.getElementById("resultado");

    if (idade >= 18) {
        resultado.textContent = "Você é maior de idade.";
    } else {
        resultado.textContent = "Você é menor de idade.";
    }
};