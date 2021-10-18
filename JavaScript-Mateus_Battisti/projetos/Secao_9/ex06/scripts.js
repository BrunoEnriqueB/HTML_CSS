let array1 = [0, 1, 2, 3, 4, 5, 6];
let array2 = [0, 1, 2, 3];
let array3 = [0, 1, 2, 3, 4];


let tamanhoArray = (array) => {
    if (array.length > 5) {
        console.log("Muitos elementos!");
    }else if (array.length < 5) {
        console.log("Poucos elementos!");
    }else {
        console.log("Quantidade certa de elementos!");
    }
}

tamanhoArray(array1);
tamanhoArray(array2);
tamanhoArray(array3);