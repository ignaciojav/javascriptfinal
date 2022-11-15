
//carrito
const carrito = [];
const usuario= []


class Productos {
    constructor(id,nombre,imagen,precio,){
        this.id=id
        this.nombre=nombre
        this.imagen=imagen
        this.precio=precio
        
    }
}





const carritoX = JSON.parse(localStorage.getItem("carrito"));

if(carritoX !== null) {
    for (const pract of carritoX) {
         carrito.push(new Productos(pract.id, pract.nombre,pract.imagen,pract.precio));
        
    }
    }