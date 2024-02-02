function roll(imgName){
    var randomNumber1 = Math.floor((Math.random()+1)*3);

    if(randomNumber1===1) document.getElementsByClassName(imgName)[0].setAttribute("src","./images/dice1.png")
    else if(randomNumber1===2) document.getElementsByClassName(imgName)[0].setAttribute("src","./images/dice2.png")
    else if(randomNumber1===3) document.getElementsByClassName(imgName)[0].setAttribute("src","./images/dice3.png")
    else if(randomNumber1===4) document.getElementsByClassName(imgName)[0].setAttribute("src","./images/dice4.png")
    else if(randomNumber1===5) document.getElementsByClassName(imgName)[0].setAttribute("src","./images/dice5.png")
    else document.getElementsByClassName(imgName)[0].setAttribute("src","./images/dice6.png")

    return randomNumber1;
}

if(roll("img1")>roll("img2")) document.querySelector("h1").innerHTML = "Player 1 Wins";
else if(roll("img2")>roll("img1")) document.querySelector("h1").innerHTML = "Player 2 Wins";
else document.querySelector("h1").innerHTML = "Draw";


