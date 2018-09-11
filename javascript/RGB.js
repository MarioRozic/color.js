class RGB {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.c = b;
    }

    get color() {
        return `(RGB ${this.r},${this.g},${this.b})`;
    }
}

const rgb = new RGB(100, 200, 300);

console.log(rgb.color)
console.log(rgb.g)
console.log(rgb.r)    