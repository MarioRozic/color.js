class HSL {
    constructor(rgb) {
        let { r, g, b } = rgb
        this.r = r;
        this.g = g;
        this.b = b;
    }
    get color() {
        return "HSL" // ???
    }
}

let hsl = new HSL({ r: 100, g: 200, b: 300 })
console.log(hsl.color);
console.log(hsl.r);
// [a, b, c] = [10, 20, 300];
// bzv, samo tipkamo za sad ispisuje samo tu klasu

// sta ovo sad radi ?