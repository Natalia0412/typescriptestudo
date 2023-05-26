"use strict";
// => number
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
console.log(`number ponto flutante ${num1}`);
console.log(`number Hexadecimal`, num2);
console.log(`number octadecimal`, num3);
console.log(`number Binario`, num4);
// ==> Exemplos: bigint
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
