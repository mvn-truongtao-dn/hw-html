let array = [
    {
        a:1,
        b:2
    },
    {
        a:2,
        b:3
    }
    
]
for(let i of array) {
    console.log(i);
}

const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex((e)=>e>5);
console.log(first);
