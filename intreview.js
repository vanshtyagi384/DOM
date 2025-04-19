//question which is frequently ask in interview
Function.prototype.describe = function (){
    console.log(`function name is ${this.name}`);
    
}


function masalaChai(){

}
function greet(name){
    return `hello ${name}`
}


greet.describe();
masalaChai.describe();





//Arrow function 



const add = (a,b) => a + b



// First class function 

function applyOperation(a,b,operation){
    return operation(a,b)

}
const result = applyOperation(5,4,(x,y) => x/y)










// teffin concept
function  createCounter(){
    let count = 0 ;
    return function(){ 
        count ++;
        return count 
    }
}

const counter = createCounter()
console.log(counter());






// no name function 

// this type of function generally come to connect the mongodb 

(function (){
    console.log("hitesh");
    
})()