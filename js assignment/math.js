const length = 9;
const diagonal = Math.sqrt(2) * length;
console.log(`The diagonal of the square is ${diagonal} units long`);

const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`The area of the triangle is ${area} units squared`);

const radius = 4;
const pi = Math.PI;
const circumference = 2 * pi * radius;
const surfaceArea = pi * radius * radius;
console.log(`The circumference of the circle is ${circumference} units long`);
console.log(`The surface area of the circle is ${surfaceArea} units squared`);