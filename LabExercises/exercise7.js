//Adds two numbers
function sum(a, b){
    return a+b;
}
if(sum(3,2)!=5){error}

//Subtracts two numbers
function diff(a, b){
    return a-b;
}
if(diff(3,2)!=1){error}

//Multiplies two numbers
function mult(a,b){
    return a*b;
}
if(mult(3,2)!=6){error}

//Divides two numbers
function div(a,b){
    return a/b;
}
if(div(4,2)!=2){error}

//Writes a name into a string
function sayHello(name){
    let a = 'Hello';
    return a+' '+ name;
}
if(sayHello('Ian')!='Hello Ian'){error}