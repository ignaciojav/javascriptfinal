const usuarioAObjeto = JSON.parse(localStorage.getItem("usuario"));
let miCuenta = document.getElementById("micuenta")

usuarioAObjeto != undefined ?
  miCuenta.innerText= usuarioAObjeto : miCuenta.innerText= "MICUENTA";