// Destructuring -> es la forma en que accedemos a las propiedades de objt, arreglos y argumentos

interface Reproductor{
    volumen:number;
    segundo: number;
    cancion: string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    anio: number;
}

const reproductor: Reproductor={
    volumen:100,
    segundo:30,
    cancion: "La vaca Lola",
    detalles:{
        autor: "La granja de Zenón",
        anio: 2020
    }
}

const autor = "Los meñiques de la casa";

// Destructuring del objeto sería de la siguiente forma:
const {volumen, segundo, cancion, detalles:{autor:autorDetalle},detalles:{anio:anioDetalle} } = reproductor;

console.log('La canción es:', cancion);
console.log("La cancion es:(sin destructuring)", reproductor.cancion);
console.log("El autor es: ", autorDetalle);
console.log("El año es:", anioDetalle);
