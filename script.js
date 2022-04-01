var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = 'rgba(184, 115, 207, 0.541';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checagemVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
} 

function checagemVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checagemSequencia(quadrado1, quadrado2, quadrado3)) {
        mudagemCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudagemVencedor(quadrado1);
        return;
    }
    if (checagemSequencia(quadrado4, quadrado5, quadrado6)) {
        mudagemCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudagemVencedor(quadrado4);
        return;
    }
    if (checagemSequencia(quadrado7, quadrado8, quadrado9)) {
        mudagemCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudagemVencedor(quadrado7);
        return;
    }
    if (checagemSequencia(quadrado1, quadrado4, quadrado7)) {
        mudagemCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudagemVencedor(quadrado1);
        return;
    }
    if (checagemSequencia(quadrado2, quadrado5, quadrado8)) {
        mudagemCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudagemVencedor(quadrado2);
        return;
    }
    if (checagemSequencia(quadrado3, quadrado6, quadrado9)) {
        mudagemCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudagemVencedor(quadrado3);
        return;
    }
    if (checagemSequencia(quadrado1, quadrado5, quadrado9)) {
        mudagemCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudagemVencedor(quadrado1);
        return;
    }
    if (checagemSequencia(quadrado3, quadrado5, quadrado7)) {
        mudagemCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudagemVencedor(quadrado3);
    }
}

function mudagemVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudagemCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#FFFFFF';
    quadrado2.style.background = '#FFFFFF';
    quadrado3.style.background = '#FFFFFF';
}

function checagemSequencia(quadrado1, quadrado2, quadrado3) {
    var igualdade = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        igualdade = true;
    }

    return igualdade;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'rgb(246, 218, 255)';
        quadrado.style.color = 'rgb(246, 218, 255)';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}