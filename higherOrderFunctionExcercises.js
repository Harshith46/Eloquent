//1
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a,b)=> a.concat(b)));


//2
function loop(a, test, body, update){
  for(let i=a; test(i); i=body(i)){
    update(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);


//3
function every(array, test) {
  for(let event of array){
    if(!test(event)){
      return false;
    } 
    }
  return true;
  }

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
