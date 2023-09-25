
let numero = parseInt(prompt("Digite um número inteiro positivo: "));


if (numero >= 0) {
  let soma = 0;

 
  for (let i = 1; i <= numero; i++) {
    soma += i;
  }

  console.log(`A soma dos números antecessores a ${numero} é igual a ${soma}`);
} else {
  console.log("Por favor, insira um número inteiro positivo.");
}
