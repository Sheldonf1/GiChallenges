//initial number of cookies    
var num = 0;

window.onload = function () {
    var name = prompt("What is your name");

    var space = document.getElementById("space");

    space.innerHTML = name + "'s Bakery";
}

var cookie = document.getElementById("cookie");

function cookieClick() {
    num += 1;

    var numbers = document.getElementById("numbers");

    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");

    numbers.innerHTML = num;
    //automatic Granny upgrade to 2x
    if (num >= 30) {
        num += 2;
        upgradeLevel.innerHTML = "Clicker Level";
    }

    //automatic factory upgrade to 10x
    if (num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Granny Level";
    }
}
