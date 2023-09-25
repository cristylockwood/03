
let N = parseInt(prompt("Digite um número inteiro positivo N: "));


if (!isNaN(N) && N > 0) {
  let somaQuadrados = 0;

 
  for (let i = 1; i <= N; i++) {
    somaQuadrados += i * i;
  }

  console.log(`A soma dos quadrados dos primeiros ${N} números inteiros positivos é igual a ${somaQuadrados}`);
} else {
  console.log("Por favor, insira um número inteiro positivo válido.");
}
