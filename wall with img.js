class Wall_img {
    constructor() {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(600, 640, 90, 20, options);
        this.w = 90;
        this.h = 20;
        this.image = loadImage("Dustbin.png");
        World.add(world, this.body);
    }
    diplay() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w, this.h);
    }
}


