
class Square{
    constructor(side){
        this.perimetre = side*4;
        this.area = side*side;
        this.showSide = function(){
            console.log('hola',this.side)
        }
    };
};

const pequeño = new Square(2);

console.log(pequeño)

