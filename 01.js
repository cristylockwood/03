
let numero = parseInt(prompt("Digite um número inteiro positivo: "));


if (numero >= 0) {
  console.log("Contagem Regressiva:");
  for (let i = numero; i >= 0; i--) {
    console.log(i);
  }
} else {
  console.log("Por favor, insira um número inteiro positivo.");
}
