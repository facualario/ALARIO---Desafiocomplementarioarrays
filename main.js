// Se crea un array que contendra los productos como objetos dentro del mismo, con su codigo de identificacion, su nombre y su precio

const productos = [{ id:02, producto:"Hondo", precio:400},
    { id:01, producto:"Playo", precio:450},
    { id:04, producto:"Aceitero", precio:200},
    { id:06, producto:"Posacuenco", precio:100},
    { id:03, producto:"Entrada", precio:300},
    // { id:05, producto:"Servilletero", precio:150},

]
//Agrego un producto mas con push

productos.push({ id:05, producto:"Servilletero", precio:150},)

console.log(productos)

//Muestro por consola el nombre de los productos con su precio

for (const producto of productos){
    console.log("El producto " + producto.producto + " tiene un precio de " + producto.precio)}

//Solicito al usuario cual es su preferencia para ordenar el array y en base a esto creo condicionales para los distintos tipos de ordenamientos


let orden = prompt("Ingresar numero segun criterio de ordentamiento de los productos:1 para orden alfabetico; 2 precio ascendente; 3 precio descendente ")

if( orden == 1){
    productos.sort((a, b) => {
    if (a.producto < b.producto) {
        return  -1
    } 
    if (a.producto > b.producto) {
        return  1
    } 
    return  0
    })
    console.log("Los productos ordenados por orden alfabetico quedan de la siguiente manera")
}

else if ( orden == 2) { 
    productos.sort((a, b) => {
        if (a.precio < b.precio) {
            return  -1
        } 
        if (a.precio > b.precio) {
            return  1
        } 
        return  0
    })
    console.log("Los productos ordenados por precio ascendente quedan de la siguiente manera")
}
else if ( orden == 3) { 

    productos.sort((a, b) => {
        if (a.precio < b.precio) {
            return  1
        } 
        if (a.precio > b.precio) {
            return  -1
        } 
        return  0
    })
    console.log("Los productos ordenados por precio descendente quedan de la siguiente manera")
}

else {alert ("El numero ingresado no es valido, no se ordenara el array")}


console.log(productos)
