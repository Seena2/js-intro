//ES6 New Features

const arr= [2,25,46,58,654];
//expressions
const adder=arr.map(n=>n+1);
console.log(adder);
const nums=arr.map((v,i)=>v+i);
console.log(nums);
var pairs = arr.map(v => ({even: v, odd: v + 1}));
console.log(pairs);

//Statements
const fives=[];
arr.forEach(n=>{
    
    if(n%5===0){
        fives.push(n);
    }
});
console.log(fives);

//Lexical
let bob={
    _name:'Caala',
    _friends:[],
    printFriends(){
        this._friends.forEach(f=>
            console.log(this._name + "Knows"+f)
        );
    }
}



