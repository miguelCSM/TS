// JS y TS infieren que por el contenido una variable es de cierto tipo
let nombre:string = 'Mariela';

let edad:number | string = 69;

edad = 'cuarenta'

let vivo:boolean | number = true;
vivo = 0

console.log(nombre,edad,vivo)