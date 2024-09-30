const evens = [1,2,3,4,5,6];
const odds  = evens.map((v) => v + 1);
console.log(odds);
const pairs = evens.map( (v) => { 
    return {
        even: v, 
        odd: v + 1
    }
});
const nums  = evens.map( (v, i) =>  v + i);
console.log(nums);
const fives = [];
nums.forEach( (v) => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
console.log(fives);