class Stone{
constructor(x,y){
    var opt={
        restitution:.8,
        friction:0.9,
        density:12
    }
    this.body = Bodies.rectangle(x, y, 150, 40, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
}


}
