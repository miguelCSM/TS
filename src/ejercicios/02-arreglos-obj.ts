// Arreglo
let arreglo:(string | number | boolean)[] = []

arreglo.push(1)
arreglo.push('dos')
arreglo.push(true)

console.log(arreglo)

let habilidades:string[] = ['JS','C','TS']

//Objeto
// const persona1={
//     nombre:'Miguel',
//     habilidades: ['JS','C','TS'],
//     edad:30
// }

// const personas2 = {
//     nombre: 'Virkov',
//     edad: 21,
//     musica: ['Urbano', 'Rock', 'Salsa']
// }

// Para que los objetos luzcan como el desarrollador quiere es necesario 
// implementar una o varias interfaces
// Una interface es una clase tonta que permite tipas los parametros de un objeto

interface Persona{
    nombre: string;
    edad: number;
    habilidades: string[];    
    musica?:string[];// Parametro opcional
}

const persona1:Persona={
    nombre:'Miguel',
    habilidades: ['Python', 'Matlab'],
    edad:30
}

const persona2:Persona={
    nombre:'Carlos',
    habilidades: ['JS', 'TS'],
    edad:19,
    musica:['Reggae', 'Ska', 'Funk']
}

persona1.musica = ['Norteña']; // Cada objeto nos permite modificar sus propiedades
// mediante el nombre de la propiedad y punto

persona2.habilidades=['HTML']

const personas = [persona1,persona2];

console.log(personas)

console.table(persona1)