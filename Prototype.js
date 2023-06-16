// a function which takes another function as an argument and use it is called Higher order function.
// which is passsed called callback function 

Array.prototype.mymap = function(f){
    let a = [];
    for(let i=0 ; i<= this.length-1 ; i++){
        a.push(f(this[i]))
    }
    
    return a;
    
}


let arr = [1,2,3,4]

let out = arr.mymap(x=>2*x);
 
console.log(out);