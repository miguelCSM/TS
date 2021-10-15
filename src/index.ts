// Destructuring de argumentos
interface Producto{
    desc:string; // Descripción del producto
    precio: number;
}

const sonaja: Producto={
    desc:'Sonaja',
    precio: 100
}

const  maquillaje:Producto={
    desc: 'Rubor',
    precio: 80
}
// Recorrer arreglos por medio de foreach del arreglo
// function calculaIVA(productos:Producto[]):number{
//     let total = 0;
//     productos.forEach((producto:Producto)=>{
//         total += producto.precio;
//     });
//     return total*0.16;
    
// }

// const iva = calculaIVA(productos);

// console.log(iva)

// Destructuring
function calculaIVA(productos:Producto[]):[number,number]{
    let total = 0;
    productos.forEach((producto:Producto)=>{
        total += producto.precio;
    });
    return [total,total*0.16 ];
    
}

const productos = [sonaja,maquillaje];

const [total,iva] = calculaIVA(productos);

console.log('total:', total,'\niva:',iva)