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
// u live share imas tipkice skroz u vrhu malene
// Samo HSL, ali ajd razvoji split screen, otvori hsl.js i hsl.py
console.log(rgb.color)


// vidim ali prazno nista se ne dogadja na njemu         
// a jbg sad ..dosta i ovo--- ma ja

// daj da vidim ne znam ja sta rade--       