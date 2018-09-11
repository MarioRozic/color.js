class RGB {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    get color() {
        return `(RGB ${this.r},${this.g},${this.b})`;
    }
}

const rgb = new RGB(100, 200, 300);
// u live share imas tipkice skroz u vrhu malene
console.log(rgb.color)
       