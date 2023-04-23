
// --------- OBJETO CON NUESTRAS EXPRESIONES REGULARES ---------------
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    password: /^.{4,12}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    telefono: /^\d{7,14}$/ 
};

$(document).ready(function(){
    $("#formulario").validate({
		rules: {
                    rut: {required: true, minlength: 9, maxlength: 10},
                    nombre: { required: true, minlength: 3, maxlength: 20},
                    email: { required:true, email: true},
                    celular: { required: true, minlength: 9, maxlength: 12},
                    edad: { required: true, min: 18, max: 35},
                    apellidop: { required: true, minlength: 3, maxlength: 20},
                    apellidom: { required: true, minlength: 3, maxlength: 20},
                    profesion: { required: true},
                    motivacion: { required: true}
        }
    });
});


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
    
    const datos = [rut , nombre, apellido, apellidom, profesion, edad, genero, mail,motiv]

    for (var i = 0; i < datos.length; i++){
        if (datos[i] == ''){
            message = ''
            console.log('a')
        } 
        else{
            message =  fecha_hoy 
        + '\n\nEstimado responsable de recursos humanos ' +  
        'yo ' + nombre + ' ' + apellido +' '+ apellidom + ' ,rut : '+ rut +' , pretendo postular al trabajo, ' +
        'soy un/a ' + genero.toLowerCase() + ' de ' + edad + ' años, fui ' + profesion + ' quiero trabajar porque ' + motiv + 
        ' , mi mail de contacto es: ' + mail 

        if (genero == 'No binario'){
            message = fecha_hoy 
            + 'Estimado responsable de recursos humanos, ' +  
        'yo ' + nombre + ' ' + apellido +' '+ apellidom + ', rut : '+ rut +' , pretendo postular al trabajo, ' 
        + ' tengo ' + edad +' años, soy una persona ' + genero.toLowerCase() + ' fui ' + profesion + ' quiero trabajar porque ' + motiv + 
        ' , mi mail de contacto es: ' + mail 
        }
        console.log('b')
    }
    }
    //document.write('Estimado responsable de recursos humanos' +  rut )
    carta.innerText = message

};
