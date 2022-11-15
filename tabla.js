




//USUARIO

const usuarioAObjeto = JSON.parse(localStorage.getItem("usuario"));





let miCuenta = document.getElementById("micuenta")
usuarioAObjeto != undefined ?
  miCuenta.innerText= usuarioAObjeto : miCuenta.innerText= "MICUENTA";
  //TITULO CARRITO
let tituloCarrito =document.getElementById("titulocarrito")
tituloCarrito.innerText= "CARRITO DE "+ usuarioAObjeto;

let borrar = document.getElementById("btn-vaciar");
//carrito traido del storage
const jsonAObjeto = JSON.parse(localStorage.getItem("carrito"));

if (jsonAObjeto !== null) {
    for(const jsonAObjeto2 of jsonAObjeto){
      
      //carrito.push(jsonAObjeto2)
        document.getElementById("tablabody2").innerHTML  += `
        <tr>
            <td><img class="img-car" src=${jsonAObjeto2.imagen} alt=""></td>
            <td>${jsonAObjeto2.id}</td>
            <td>${jsonAObjeto2.nombre}</td>
            <td>${jsonAObjeto2.precio}</td>
            <td>
            <button id="btn3${jsonAObjeto2.id}" class="btn btn-danger eliminarcarro">X</button>
            </td>
        </tr>
      `;
     
      let totalCarrito = carrito.reduce((acumulador,jsonAObjeto2)=>acumulador+jsonAObjeto2.precio,0);
     document.getElementById("total").innerText= `Total: ` + totalCarrito;
      
      }
    
    }


  
  //vacio carro-----------------
  borrar.onclick = () => {
    document.getElementById("total").innerText= ` `
    document.getElementById("tablabody2").innerHTML =` `
    localStorage.clear(carrito);
    
  }

// funciones del boton eliminar articulo
const botonBorrarAfi = document.querySelector("#tablabody2");
botonBorrarAfi.addEventListener("click", (e)=> {
    eliminarCarrito(e.target);
    eliminarCarritoArray(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
})

function eliminarCarrito(e) {
  if(e.classList.contains("eliminarcarro")) {
    e.parentElement.parentElement.remove();
    
    }
  }

  function eliminarCarritoArray (e){
    //console.log(e);
    var index = jsonAObjeto.map(carr => carr.nombre).indexOf(e);
    //console.log(index);
    jsonAObjeto.splice(index,1);
    //console.table(jsonAObjeto);
    let totalCarrito = jsonAObjeto.reduce((acumulador,e)=>acumulador+e.precio,0);
    document.getElementById("total").innerText= `Total: ` + totalCarrito;
    //console.table(jsonAObjeto);
    localStorage.setItem("carrito",JSON.stringify(jsonAObjeto));

}

