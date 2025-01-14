//Battle script
console.log('Battle')
// Create ship class w/constructor
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }


    // Method to calc accuracy of hit
    hitAccuracy() {
        return this.accuracy >= Math.random();}

    // GameOver is hull less than 0
    gameOver() { return this.hull <= 0; }

    shipAttack(alien) {
        if (this.hitAccuracy()) {
            alien.hull -= this.firepower;
            document.getElementById("outputHull").innerHTML = alien.hull;
            let shipAttackText = `\n + ${this.name} shot ${alien.name} Hull: ${alien.hull} \n `;
            
            return shipAttackText;
        } else {
            return `${this.name} missed target!`;
        }
    }
}

const heroShip = new Ship('USS Schwarzenegger', 20, 5, .7);
const alienShip = [];
const attackText = document.getElementById("idBattleText");

const enableBtns = () => {
    document.getElementById("attackButton").addEventListener('click', attack);
    document.getElementById("retreatButton").addEventListener('click', retreat);

}


const disableBtns = () => {
    document.getElementById("attackButton").removeEventListener('click', attack);
    document.getElementById("retreatButton").removeEventListener('click', retreat);

}

const pushText = (text) => {
    attackText.innerHTML += text;
}

const reset = () => {

    disableBtns();
    enableBtns();


    attackText.innerHTML = "<br> You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers.";


    heroShip.hull = 20;
    document.getElementById("outputName").innerHTML = heroShip.hull;
    document.getElementById("outputHull").innerHTML = "6";
    alienShip.splice(0, alienShip.length);
    

    const random = Math.floor(Math.random() * 6) + 5;
    for (let i = 0; i < 6; i++) {
        let hull = Math.floor(Math.random() * 4) + 3; //Hull is 3-6
        let firepower = Math.floor(Math.random() * 3) + 2; //Firepower is 2-4
        let accuracy = (Math.floor(Math.random() * 3) + 6) / 10; //Accuracy is 0.6-0.8
        alienShip.push(new Ship("Alien Ship" + (i + 1), hull, firepower, accuracy));
    }
}

const getStatus = () => {
    let temp = `<br>${heroShip.name}<br>Hull - ${heroShip.hull}<br>Firepower - ${heroShip.firepower}<br>Accuracy - ${heroShip.accuracy}<br>`;
 document.getElementById("player").innerHTML = heroShip.hull;
    for (let alien of alienShip) {
        temp += `<br>${alien.name}<br>Hull - ${alien.hull}<br>Firepower - ${alien.firepower}<br>Accuracy - ${alien.accuracy}<br>`
       
    }
    pushText(temp);
    
}

const retreat = () => {
    pushText("\n GAME OVER!");
    alert("GAVE OVER")
    disableBtns();
}

const win = () => {

    if (heroShip.gameOver()) {
        pushText("\nUSS Schwarzenegger GAME OVER!!! Alien beat you!!!");
        disableBtns();
    }

    if (alienShips.length == 0) {
        pushText("\nUSS Schwarzenegger you WON!.");
        disableBtns();
    }
}

const attack = () => {


    while (!heroShip.gameOver() && !alienShip[0].gameOver()) {


        pushText(heroShip.shipAttack(alienShip[0]));


        if (!alienShip[0].gameOver()) {
            pushText(alienShip[0].shipAttack(heroShip));

        } else {
            pushText("<br>You destroyed " + alienShip[0].name + " !<br>")
           
        }
    }
    alienShip.shift();

    //winCheck();
}


reset();
document.getElementById("resetButton").addEventListener("click", reset, false);


console.log(heroShip);


const btnPlay = document.querySelector('#attackButton')

btnPlay.addEventListener('click', promptFunction)

function promptFunction() {
    let playerHull = heroShip.hull;
    
    if (playerHull !== null) {
      console.log(playerHull)
      
      document.getElementById("outputName").innerHTML = playerHull;
    
    } 
  }