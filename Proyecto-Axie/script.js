var contEnergia = document.getElementById("actualEnergy");
contEnergia = 3;
var cantRondas = document.getElementById("roundNumber");
cantRondas = 1;

let maximaEnergia, divisor;
divisor = "/"
maximaEnergia = 10

function moreEnergy(){
    contEnergia += 1

    if (contEnergia >= 10){
        contEnergia = 10
        alert("No se puede tener mas de 10 energias")
    }
    document.getElementById("actualEnergy").innerHTML = contEnergia;
}

function lessEnergy(){
    contEnergia -= 1

    if (contEnergia <= 0){
        contEnergia = 0
        alert("No se puede tener menos de 0 energias")
    }
    document.getElementById("actualEnergy").innerHTML = contEnergia;
}

function newRound(){
    moreEnergy()
    moreEnergy()
    cantRondas += 1

    if (cantRondas == 10){
        alert("Entro en muerte subita")
    }

    document.getElementById("roundNumber").innerHTML = cantRondas;
    document.getElementById("actualEnergy").innerHTML = contEnergia;
}

function newGame(){
    contEnergia = 3
    cantRondas = 1
    alert("Entro en una nueva partida")
    document.getElementById("roundNumber").innerHTML = cantRondas;
    document.getElementById("actualEnergy").innerHTML = contEnergia;
}





