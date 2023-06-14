var playerchoice;
var computerchoice;
var arr=["rock","paper","scissors"];
var playerscore = 0;
var computerscore = 0
function getchoice()
{
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

function winner(p,c)
{
    document.getElementById("bruh").innerHTML="";
    if(p===c)
    {
        var events = "Tie, You played "+p+" and Computer played "+c;
        document.getElementById("text").innerHTML = events;
        return 0;
    }
    else if((p==="paper" && c==="rock")||(p==="scissors" && c==="paper")||(p==="rock" && c==="scissors"))
    {
        playerscore++;
        document.getElementById("p").innerHTML = playerscore;
        var events = "You Win This Round, You played "+p+" and Computer played "+c;
        document.getElementById("text").innerHTML = events;
    }
    else
    {
        computerscore++;
        document.getElementById("c").innerHTML = computerscore;
        var events = "You Lose This Round, You played "+p+" and Computer played "+c;
        document.getElementById("text").innerHTML = events;
        
    }
}
function check(event)
{
    playerchoice=event;
    computerchoice = getchoice();
    winner(playerchoice,computerchoice)
    if(playerscore===5)
    {
        document.getElementById("bruh").innerHTML="You Win";
        playerscore = 0;
        computerscore = 0;
        document.getElementById("c").innerHTML = computerscore;
        document.getElementById("p").innerHTML = playerscore;
        var events = "";
        document.getElementById("text").innerHTML = events;
    }
    else if(computerscore==5)
    {
        document.getElementById("bruh").innerHTML="You Lose";
        playerscore = 0;
        computerscore = 0;
        document.getElementById("c").innerHTML = computerscore;
        document.getElementById("p").innerHTML = playerscore;
        var events = "";
        document.getElementById("text").innerHTML = events;
    }
}