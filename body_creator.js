class body{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
 
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
    display(r,g,b){
        var pos=this.body.position;
        rectMode(CENTER);
        noStroke();
        fill(r,g,b);
        this.r=r;
        this.g=g;
        this.b=b;
        rect(pos.x,pos.y,this.w,this.h);
    }
}