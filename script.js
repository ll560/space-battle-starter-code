console.log('Spaceship!')

//const btnPlay = document.querySelector('#btn')

//btnPlay.addEventListener('', promptFunction)





window.onload = function promptFunction() {
    let player = prompt("Please enter your name", " ");
    
    if (player !== null) {
      console.log(player)
      document.getElementById("outputName").innerHTML = player;
      sessionStorage.setItem("player", player);
    
    } 
  }





