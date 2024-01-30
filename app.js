let listaDeNumerossorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você descobriu em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é Maior');
        }
        tentativas++;
        limparCampo()
        console.log(numeroSecreto)
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1)
    let quantidadeDeElementosNaLista = listaDeNumerossorteados.length;
    if(quantidadeDeElementosNaLista == 10){
        listaDeNumerossorteados = [];
    };
    if(listaDeNumerossorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio
    } else
        listaDeNumerossorteados.push(numeroEscolhido);
        console.log(listaDeNumerossorteados);
        return numeroEscolhido;    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}