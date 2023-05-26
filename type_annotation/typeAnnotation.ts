let nome: string = 'Natália Barros';
console.log(nome);

//=> arrays
let animais: string[] = ['Elefante', 'Gato'];
console.log(animais);

//=> Objetos 
let carro : {
    nome: string,
    ano: number,
    preco: number
};

carro ={
    nome: 'Toyota Etios',
    ano: 2023,
    preco: 80.000
};

console.log(carro);

//==> functions
function multiplicarNumeros(num1: number, num2: number) {
    return num1 + num2;
}

console.log(multiplicarNumeros(2,4));