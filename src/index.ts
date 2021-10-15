// Implementar uina interfaz que acepte objetos

interface SuperHeroe{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrarDireccion:()=>string;
}

interface Direccion{
    calle: string;
    municipio: string;
    estado:string;
    pais:string;
}

//Crear nuevo superHeroe
const superHeore1:SuperHeroe={
    nombre: "Thor",
    edad:30,
    direccion:{
        calle: "Strike ln",
        municipio: "Melbourne",
        estado: "FL",
        pais:"USA"
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.calle + ', ' + this.direccion.pais;
    }
}

const direccion =  superHeore1.mostrarDireccion();
console.log(direccion);

// Ejercicio crear una interfaz que permita tomar los datos de clientes y empleado asociando
// una interface persona :
// Persona => nombre, telefono. direccion
// Empleado => antiguedad, correo, funcion que  muestre los años de antiguedad
// Cliente => RFC, dias credito, función que muestre los días de credito.
