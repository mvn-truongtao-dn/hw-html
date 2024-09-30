function foo(x,y,...array) {
    let a = array.length;
    return (x+y) * a;
};

foo(1, 2, 'hello', true, 7) === 9;
console.log(foo(1, 2, 'hello', true, 7));
