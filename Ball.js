class Ball{
    constructor(x,y,raidus){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
      
        this.body = Bodies.circle(x,y,raidus);
        this.raidus= raidus
        this.image = loadImage("sprites/paper.png");

     World.add(world,this.body);
        
    }

    display(){

        translate(this.body.position.x,this.body.position.y)
        fill ("purple");
        rectMode(CENTER);
       image(this.image,0,0,this.raidus);
        
    }
}