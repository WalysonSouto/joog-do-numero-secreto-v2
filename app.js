let listaNumeroDeSorteado =  [];
let numeroMaximoJogo = 10;
let numeroSecreto = criarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', `Escolha um numero de 1 a ${numeroMaximoJogo}!`);
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(`O botão foi clicado, o numero secreto é ${numeroSecreto}`);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Parabens!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentaiva';
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!` 
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor');
        }else {
        exibirTextoNaTela('p', 'O numero secreto é maior');
        }
    } tentativas++;
      limparCampo();  
        
}

function criarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximoJogo + 1);
    let qtdElementosNaLista = listaNumeroDeSorteado.length;
    
    if(qtdElementosNaLista == numeroMaximoJogo){
        listaNumeroDeSorteado = [];
    }
    if(listaNumeroDeSorteado.includes(numeroEscolhido)){
        return criarNumeroAleatorio();
    }else {
        listaNumeroDeSorteado.push(numeroEscolhido);
        console.log(listaNumeroDeSorteado);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = criarNumeroAleatorio();
    mensagemInicial();
    tentativas = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}







//let titulo = document.querySelector('h1');
//titulo.innerHTML = ('Jogo do numero secreto');
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = ('Escolha um numero de 1 a 10');