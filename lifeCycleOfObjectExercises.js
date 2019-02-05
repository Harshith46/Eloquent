1) class Vec {
  constructor(x, y){
    this.x= x;
    this.y=y;
  }
  
  plus(new1){
     return new Vec(this.x+new1.x, this.y+new1.y);
  }
  
  minus(new1){
    return new Vec(this.x-new1.x, this.y-new1.y);
  }
  
  length(){
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
}


2) class Group {
  
  constructor() {
    this.arr1=[];
  }
  delete(value){
    this.arr1=this.arr1.filter((a)=> a!==value);
  }
  has(value){
    return this.arr1.includes(value);
  }
  
  add(value){
    if(!this.has(value)){
    this.arr1.push(value);
    }
  }
   
  static from(arr){
    let group=new Group;
    for(let i of arr) {
    group.add(i);
    } return group;
  }
}

3)class Group {
  
  constructor() {
    this.arr1=[];
  }
  delete(value){
    this.arr1=this.arr1.filter((a)=> a!==value);
  }
  has(value){
    return this.arr1.includes(value);
  }
  
  add(value){
    if(!this.has(value)){
    this.arr1.push(value);
    }
  }
   
  static from(arr){
    let group=new Group;
    for(let i of arr) {
    group.add(i);
    } return group;
  }
  
  [Symbol.iterator]() {return new GroupIterator(this)};

}

class GroupIterator{
  constructor(group){
    this.group=group;
    this.i=0;
  }
  
  next(){
    if(this.i>=this.group.length){
    return {done: true};
    } else {
      let res1= {value: this.group[this.i], done: false};
      this.i++;
      return res1;
    }
  }
}

4)let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map,"one"));


