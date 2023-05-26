// => uso de colchetes
let frutas: string[] = ['abacaxi', 'laranja', 'maca', 'melancia', 'manga'];
console.log(frutas[2]);

// => array object 
let frutas1: Array<string> = ['abacaxi', 'laranja', 'maca', 'melancia', 'manga'];
console.log(frutas1[2]);

// => adicionando mais strings com método 'push'
let idiomas: Array<string> = ['Portugues', 'ingles', 'esanhol', 'frances'];
console.log('antes do push',idiomas);
idiomas.push('Mandarim');
console.log('depois do push',idiomas);

// => identificar tamanho do array - método 'length'
let idiomas1: Array<string> = ['Portugues', 'ingles', 'esanhol', 'frances'];
console.log('quantidade do array idiomas1', idiomas1.length);

// => exemplo de array com spread operator
let listaNumeros = [0,1,2,3,4,5];
console.log('antes do spread operator',listaNumeros);
listaNumeros = [ ... listaNumeros, 6, 7, 8, 9, 10];
console.log('depois do spread operator',listaNumeros);

let linguagensArrays: string[] = new Array('Javascript', 'php', 'java');
function funcaoLinguagens(linguagensArrays:string[]){
    for (let index = 0; index < linguagensArrays.length; index++) {
        console.log(linguagensArrays[index]);
        
    }
}

funcaoLinguagens(linguagensArrays);