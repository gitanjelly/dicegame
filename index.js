
var randomNumber1 = Math.random(randomNumber1);
var randomNumber2 = Math.random(randomNumber2);

function dice(x){
    x = (x*6)+1;
    x = Math.floor(x);
    return x;
}

var op1 = dice(randomNumber1);
var op2 = dice(randomNumber2);
switch (op1){
    case 1:
        document.querySelector(".img1").setAttribute("src","../dice game/images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","../dice game/images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","../dice game/images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","../dice game/images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","../dice game/images/dice5.png");
        break;
    case 6:
        break;

}

switch (op2){
    case 1:
        document.querySelector(".img2").setAttribute("src","../dice game/images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","../dice game/images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","../dice game/images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","../dice game/images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","../dice game/images/dice5.png");
        break;
    case 6:
        break;

}

if (op1>op2){
    document.querySelector("h1").textContent = "Player 1 wins!";
} else if (op2>op1) {
    document.querySelector("h1").textContent = "Player 2 wins!";
} else {
    document.querySelector("h1").textContent = "It's a draw.";
}