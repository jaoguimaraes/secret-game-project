alert('Olá, bem vindo ao jogo do número secreto!');
let numeroSecreto;
let chute;
let tentativas = 1;
let numeroMaximo = 100;

numeroSecreto = parseInt(Math.random() * numeroMaximo +1);

while (chute != numeroSecreto) {
    chute = prompt(`Por favor, entre com seu chute de 1 a ${numeroMaximo}!`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`Você errou, ${chute} é maior que o número secreto`);
        } else {
            alert(`Você errou, ${chute} é menor que o número secreto`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//Opção menos casual de utilização do if else

// if (tentativas > 1) {
//     alert(`Parabéns, você acertou com ${tentativas} tentativas! O número secreto ${numeroSecreto}`);
// } else {
//     alert(`Parabéns, você acertou com ${tentativas} tentativa! O número secreto ${numeroSecreto}`);
// }