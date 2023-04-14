// --------- GUARDAMOS NUESTRO FORMULARIO E INPUTS EN CONSTANTES ---------------
const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")


// --------- OBJETO CON NUESTRAS EXPRESIONES REGULARES ---------------
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // AQUI LE ESTAMOS DICIENDO QUE EN EL CAMPO USUARIO ACEPTE LETRAS MINUSCULAS Y MAYUSCULAS DE LA A HASTA LA Z, NÚMEROS DEL 0 HASTA EL 9, GUIONES BAJOS, GUIONES MEDIO Y UNA CANTIDAD MINIMA DE 4 CARACTERES Y MAXIMA DE 16 CARACTERES
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    password: /^.{4,12}$/, // SÓLO ACEPTARA UN MINIMO DE 4 DIGITOS Y UN MÁXIMO DE 12 DIGITOS
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
    telefono: /^\d{7,14}$/ // ACEPTARA MINIMO 7 Y MAXIMO 14 NÚMEROS
}


// -------------- OBJETO CON NUESTROS CAMPOS ----------------------
const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}


// --------- SWITCH PARA SELECCIONAR EL INPUT DONDE ÉSTE HACIENDO FOCO EL USUARIO  ---------------
const validarFormulario = (e) => {
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break;
    }
}


// -------------- VALIDAMOS NUESTROS INPUTS ------------------------
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        console.log("Funciona");
    } else {
           document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
           document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
           document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
           document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
           document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
           campos[campo] = false;
           console.log("Funciona");
        }
}


// --------- VALIDAMOS NUESTRAS PASSWORD'S ---------------
const validarPassword2 = () => {
    let inputPassword1 = document.getElementById("password");
    let inptPassword2 = document.getElementById("password2");

    if (inputPassword1.value !== inptPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[password] = false;
        console.log("Funciona");
    } else {
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[password] = true;
        console.log("Funciona");
    }
}


// --------- CAPTURAMOS CADA VEZ QUE EL USUARIO PRESIONA UNA TECLA ---------------
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});



// --------- VALIDAMOS TODO NUESTRO FORMULARIO ---------------


function crearCarta(){

    var fecha_hoy = new Date()
    var dd = String(fecha_hoy.getDate()).padStart(2, '0')
    var mm = String(fecha_hoy.getMonth() + 1).padStart(2, '0')//January is 0!
    var yyyy = fecha_hoy.getFullYear()
    fecha_hoy = mm + '/' + dd + '/' + yyyy

    const carta = document.getElementById('carta')
    const rut = document.getElementById('rut').value
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido-paterno').value
    const apellidom = document.getElementById('apellido-materno').value
    const profesion = document.getElementById('profesion').value
    const edad = document.getElementById('edad').value
    const genero = document.getElementById('genero').value
    const mail = document.getElementById('email').value
    const motiv = document.getElementById('motivacion').value
    
    
    message =  fecha_hoy 
     + 'Estimado responsable de recursos humanos ' +  
    '\nyo ' + nombre + ' ' + apellido +' '+ apellidom + ' ,rut : '+ rut +' , pretendo postular al trabajo, ' +
    'soy un/a ' + genero.toLowerCase() + ' de ' + edad + ' años, fui ' + profesion + ' quiero trabajar porque ' + motiv + 
    ' , mi mail de contacto es: ' + mail 

    if (genero == 'No binario'){
        message = fecha_hoy 
        + 'Estimado responsable de recursos humanos, ' +  
       'yo ' + nombre + ' ' + apellido +' '+ apellidom + ', rut : '+ rut +' , pretendo postular al trabajo, ' 
       + ' tengo ' + edad +' años, soy una persona ' + genero.toLowerCase() + ' fui ' + profesion + ' quiero trabajar porque ' + motiv + 
       ' , mi mail de contacto es: ' + mail 
    }
    
    //document.write('Estimado responsable de recursos humanos' +  rut )
    carta.innerText = message
    
    
    
};