
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
        mostrarAlerta("todos los campos son oblogatorios", "error")
        return// corta la ejecucion
    }
    //enviar formulario
    mostrarAlerta(" el formulario fue enviado")
})


function leertexto (evento){
    datos[evento.target.id]= evento.target.value
    // console.log(datos)
    
}

function mostrarAlerta( mensaje, error=null){
    const alerta= document.createElement("P")
    alerta.textContent=mensaje
    if(error){
        alerta.classList.add("error");

    }else{
        alerta.classList.add("validado")
    }
    formulario.appendChild(alerta);
    
    setTimeout(() => {
        alerta.remove()
    }, 3000);
}


