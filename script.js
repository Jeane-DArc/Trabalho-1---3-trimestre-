'use strict';

var pontosJogador1 = 0, pontosJogador2 = 0, pontosTurno = 0, jogadorAtivo = 0;

document.getElementById("score--0").textContent = 0;
document.getElementById("score--1").textContent = 0;

document.querySelector(".btn--roll").addEventListener('click', () => {

    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'dice-' + roll + '.png';

    if(roll == 1){
        pontosTurno = 0;
        document.getElementById("current--" + jogadorAtivo).textContent = 0;
        if(jogadorAtivo == 0){
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--active");
            jogadorAtivo = 1;
        }else{
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--active");
            jogadorAtivo = 0;
        }
    }else{
        pontosTurno += roll;
        document.getElementById("current--" + jogadorAtivo).textContent = pontosTurno;
    }
});

document.querySelector(".btn--hold").addEventListener('click', () => {

    if(jogadorAtivo == 0){
        pontosJogador1 += pontosTurno;
        document.getElementById("score--0").textContent = pontosJogador1;

        if(pontosJogador1 >= 100){
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--winner");
        }else{
            pontosTurno = 0;
            document.getElementById("current--0").textContent = 0;
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--active");
            jogadorAtivo = 1;
        }
    }else{
        pontosJogador2 += pontosTurno;
        document.getElementById("score--1").textContent = pontosJogador2;

        if(pontosJogador2 >= 100){
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--winner");
        }else{
            pontosTurno = 0;
            document.getElementById("current--1").textContent = 0;
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--active");
            jogadorAtivo = 0;
        }
    }
});

document.querySelector('.btn--new').addEventListener('click', () => {
    jogadorAtivo = 0;
    pontosJogador1 = 0;
    pontosJogador2 = 0;
    pontosTurno = 0;
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
    document.getElementById("score--0").textContent = 0;
    document.getElementById("score--1").textContent = 0;
    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;
});