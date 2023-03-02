class Circle {

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.growing = true;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        noFill();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    grow() {
        if (this.growing) {
            this.r = this.r + 1;
        }
    }

    edges() {
        return (this.x + this.r  > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0);
    }

}