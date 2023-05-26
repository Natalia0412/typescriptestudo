// => uso simples de tuplas
// não posso usar push se a minha tupla já não estiver com dados
let pessoa: [string, string, number];
pessoa = ['Natália', 'Desenvolvedora junior', 26];
console.log(pessoa);
pessoa.push('linda', 'maravilhosa', 26);
console.log(pessoa);

let pessoa1: [string, string, number];
pessoa1= ['Natália Barros', 'linda', 26]
console.log(pessoa1[1]);

// tuplas com labels

let pessoa2: [nome: string, posicao: string, idade: number] = ['Natália Barros', 'Desenvolvedora junior', 26];
console.log(pessoa2[1]);


// => usando tuplas com spread operator
// declara que o primeiro item do array é string, e depois usa o strip operator indicando que o resto  dos itens é do tipo string
let listaFrutas: [string, ... string[]] = ['laranja', 'maça', 'uva'];
console.log(...listaFrutas);

