class paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2.4
        }
 
        this.body=Bodies.circle(200,490,35,options);
        this.r=50;
        this.image=loadImage("Crumbuled paper.png")
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        noStroke();
        fill(238,130,238);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);
    }
}