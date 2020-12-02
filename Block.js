class Block {
    constructor(x, y, w, h, c) {
        var options = {
            restitution: 0.4,
            friction: 0
        }
        this.body = Bodies.rectangle(x, y, w, h)
        this.width = w;
        this.height = h;
        this.color = c;
        this.visibility = 255;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(this.color);
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();

    }
    score() {
        if (this.visibility < 0 && this.visibility > -1005) {
            score++;
        }
    }
}