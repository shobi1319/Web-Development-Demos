function Play() {
    var dice1 = document.querySelector("#d1 .img1");
    var dice2 = document.querySelector("#d2 .img2");
  
    //number by math.random
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
   //images
    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
  
    //comparing for winner
    var resultText = document.querySelector(".main h1");
    if (randomNumber1 > randomNumber2) {
      resultText.textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      resultText.textContent = "Player 2 Wins!";
    } else {
      resultText.textContent = "It's a Draw!";
    }
  }
  