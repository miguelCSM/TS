// Funciones
function suma(a:number,b:number):number{
    return a+b;
}

const resultado = suma(5,5);

console.log(resultado)

// Arrow Functions 
const sumarFlecha=(a:number,b:number):number=>{
    return a+b;
}

// Argumentos (obligatorios, opcionales y default)
function multiplicar(numero1:number, numero2:number, factor?:number, base:number=10):number {
    if(factor != undefined){
        return numero1*numero2*factor*base;    
    }
    else{
    return numero1*numero2*base;
    }
}

const mult = multiplicar(1,2)

console.log(mult)

// Funciones con objetos de argumentos

interface Pokemon{
    nombre: string,
    lifePoints: number,
    mostrarLp:()=>void;
} 

function curar(pokemon:Pokemon,curarPoints:number):void{
    pokemon.lifePoints += curarPoints;
}

const nuevoPokemon:Pokemon={
    nombre: "Charmander",
    lifePoints:50,
    mostrarLp(){
        console.log('Puntos vida', this.lifePoints);
    }
}

curar(nuevoPokemon,200);

console.log(nuevoPokemon)
