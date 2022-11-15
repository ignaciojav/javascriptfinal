
let butonIngresar = document.getElementById("butoningresar");
let cuenta2 = document.getElementById("cuentas")
butonIngresar.onclick = () => {
    login();
 }
 

const usuarios =[
    {
    us:"ignacio_arteta",
    contrasenia:"123456"
},
{
    us:"lucas_gomez",
    contrasenia:"123456"
},
{
    us:"dario_zanelli",
    contrasenia:"123456"
},
];

//funcion usuario-------------------------------------------------------------------


function login () {
 
   
let encontrado = document.getElementById("loginusuario1");
let encontrado2 = document.getElementById("logincontrasenia1");
const user = usuarios.find((usuario)=> usuario.us == encontrado.value);

const cs = usuarios.find((usuario)=> usuario.contrasenia == encontrado2.value);


if ((user!=undefined )&& (cs != undefined)){
    Swal.fire('bienvenido a IGNACIOJAV-TIENDA')
  
 usuario.push(user.us);
 localStorage.setItem("usuario",JSON.stringify(usuario));

  //----------- dirigue a consolas---------

  
  window.location.href="./index.html"
 
  }
  else{ Swal.fire('usuario y/o contrasenia incorrectos!!')
   

}
}
 
