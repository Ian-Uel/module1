console.log(sayHello('Ian'));
console.log(sum(3,2));
console.log(diff(3,2));
console.log(mult(3, 2));
console.log(div(3, 2));

function sum(a, b){
    return a+b;
}
function diff(a, b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function sayHello(name){
    let a = 'Hello';
    return a+' '+ name;
}