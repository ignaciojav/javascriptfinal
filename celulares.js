let carta= document.getElementById("misproductos");
let stock1 = 1;

//USUARIO
const usuarioAObjeto = JSON.parse(localStorage.getItem("usuario"));

let miCuenta = document.getElementById("micuenta")
usuarioAObjeto != undefined ?
  miCuenta.innerText= usuarioAObjeto : miCuenta.innerText= "MICUENTA";
  //---- api------------------------------------------------
  const API_URL = "https://my-json-server.typicode.com";
  const HTMLResponse = document.getElementById("misproductoscelulares");

 
  function renderizarProductos (){
  
    fetch(`${API_URL}/ignaciojav/celulares/productosCelu`)
    .then ((response)=>response.json())
    .then((productosCelu)=>{
    
        for(const producto of productosCelu){
       
            HTMLResponse.innerHTML += `
            <div class="card col-sm-2">
                    <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
                    <div class ="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $ ${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-primary">Agregar al Carro</button>
                </div>
                </div>
            `;
            
        
        
    }
        productosCelu.forEach((producto)=>{
            document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
          agregarAlCarro(producto);
        })
        })
    
    }
    )}
renderizarProductos();
function restarStock(productoRestado){
  console.log (productoRestado.stock);

}
//funcion agrega al carro
function agregarAlCarro(productoComprado){ if (usuarioAObjeto!= undefined){
  if ( productoComprado.stock != 0){
  carrito.push(productoComprado);
  restarProducto(productoComprado)
  console.table(carrito);
  Swal.fire({
    title: productoComprado.nombre,
    text: 'Se agrego al carrito',
    imageUrl: productoComprado.imagen,
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: productoComprado.nombre,
    
  })

  }else{ Swal.fire('Producto agotado')}}else{ window.location.href="./login.html"}
  
  
  //envio al storage el carrito
   localStorage.setItem("carrito", JSON.stringify(carrito));
  
  // funcion que resta stock
   function restarProducto(productoComprado1){
    stock1= productoComprado1.stock -1
    productoComprado.stock = stock1
    
    }
  }