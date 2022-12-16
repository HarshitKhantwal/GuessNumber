let cGuess;
let userGuess=[];

const init=()=>{
    cGuess=Math.floor(Math.random()*100);
    document.getElementById("gameArea").style.display="none";
    document.getElementById("newButton").style.display="none";
};
const newGame=()=>{
    document.getElementById("newButton").style.display="inline";
    document.getElementById("inputBox").setAttribute("disabled",true);
};
const restartGame=()=>{
    window.location.reload();
};
const calculateCheck=()=> {
    
    let userNumber=document.getElementById("inputBox").value;
    userGuess=[ ...userGuess ,userNumber];
    document.getElementById("guesses").innerHTML=userGuess;
    if(userGuess.length<maxGuess){
    if(userNumber<cGuess){
        document.getElementById("output--res").innerHTML="Your Guess is Low";
        document.getElementById("inputBox").value="";
    }
    else if(userNumber>cGuess){
        document.getElementById("output--res").innerHTML="Your Guess is High";
        document.getElementById("inputBox").value="";
    }
    else{
        document.getElementById("output--res").innerHTML="Congrats You've guessed the correct number";
        document.getElementById("inputBox").value="";
        newGame();
        

    }
    document.getElementById("attempts").innerHTML=userGuess.length;
   
}
    else{
        if(userNumber==cGuess){
        document.getElementById("output--res").innerHTML="Congrats You've guessed the correct number";
        document.getElementById("inputBox").value="";
        newGame();
        }
        else{
            document.getElementById("output--res").innerHTML=`You Lost!! The correct number is ${cGuess}`;
        document.getElementById("inputBox").value="";
        newGame();
        }
    }
    
};
const easyMode=()=>{
    document.getElementById("wlc-screen").style.display="none";
    document.getElementById("gameArea").style.display="block";
    maxGuess=10;
    calculateCheck();
};
const hardMode=()=>{
    document.getElementById("wlc-screen").style.display="none";
    document.getElementById("gameArea").style.display="block";
    maxGuess=5;
    calculateCheck();
};