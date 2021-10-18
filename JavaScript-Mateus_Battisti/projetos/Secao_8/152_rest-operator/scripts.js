let num = 5;
let num1 = 3;
let num2 = 2;
let num3 = 4;
let num4 = 1;

const imprimirNumeros = (...args) => {
    args.forEach(num => {
        console.log(num);
    });
}

imprimirNumeros(num, num1, num2, num3, num4);
