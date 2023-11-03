
const datos = {

    nombre:"",
    email: "",
    mensaje:"",

 }
const formulario = document.querySelector(".formulario");
const nombre= document.querySelector("#nombre");
const email= document.querySelector("#email");
const mensaje= document.querySelector("#mensaje");

nombre.addEventListener("input", leertexto);
email.addEventListener("input",leertexto);
mensaje.addEventListener("input",leertexto );
//el evento sumit 
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    //validar formulario
    const{nombre, email,mensaje}= datos;
    
    if(nombre===""|| email===""||mensaje===""){
        mostrarError("todos los campos son oblogatorios")
        return// corta la ejecucion
    }
    //enviar formulario
    formularioValidado(" el formulario fue enviado")
})


function leertexto (evento){
    datos[evento.target.id]= evento.target.value
    // console.log(datos)
    
}
function mostrarError(mensaje){
    const error = document.createElement("P")
    error.textContent= mensaje;
    error.classList.add("error");
    formulario.appendChild(error);
    
    setTimeout(() => {
        error.remove()
    }, 3000);
}
function formularioValidado(mensaje){
    const validado = document.createElement("P")
    validado.textContent= mensaje;
    validado.classList.add("validado");
    formulario.appendChild(validado);
    
    setTimeout(() => {
        validado.remove()
    }, 3000);
}


