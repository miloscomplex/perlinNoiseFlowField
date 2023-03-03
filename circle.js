class Circle {

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.growing = true;
        this.xoff = 0;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        //stroke(random(100,255));
        stroke(255)
        strokeWeight(2);
        noFill();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        //point(this.x, this.y);
    }

    grow() {
        if (this.growing) {
            this.r++
        }
    }

    edges() {
        return (this.x + this.r  > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0);
    }

}