class Move {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class Shape extends Move {

   constructor(id,x,y){
       super(x,y);
       this.id = id;
   }
    alo () {
        console.log(this.x);
    }
}

var a = new Shape(23,"sd","sd");
a.alo();