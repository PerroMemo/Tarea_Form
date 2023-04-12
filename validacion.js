const email = document.getElementById('email');
const pass = document.getElementById('password');

const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    
    if (email.value === '' || email.value == null) {
        messages.push('Email necesario')
        console.log("Aa")
    }
    if (pass.value.length <= 6){
        messages.push('La contraseña debe ser mas larga que 6')
    }

    

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }
    }


)