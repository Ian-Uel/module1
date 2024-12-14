function changeScreen(){
    let x = document.getElementById("dieNum").value;
    console.log(x);
    let displayNum = randomDie(x);
    console.log(displayNum);
    document.getElementById("displayText").textContent = displayNum;
}
function randomDie(num){
    let random = 0;
    while(random==0 || random==num+1){
        const floatRandom = Math.random();
        let roundNum = num++;
        random = Math.round(roundNum*floatRandom);
    }  
    return random;
}

if(randomDie(1)<1 || randomDie(1)>1){error}
if(randomDie(2)<1 || randomDie(2)>2){error}
if(randomDie(4)<1 || randomDie(2)>4){error}
if(randomDie(6)<1 || randomDie(2)>6){error}
if(randomDie(10)<1 || randomDie(2)>10){error}
if(randomDie(11)<1 || randomDie(2)>11){error}