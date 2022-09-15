//Esta es para nombre y apelldio ^[a-zA-ZÁ-ÿ\s]{1,40}
//Regla para numdoc y telefono ^\d{7,10}$
// Regla para correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//PASSWORD  ^(?=.^\d)(?=.*[#$%@])(?=*a-z)(?=.^*[A-Z]).{8,}$


const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/, //SOLO LETRAS
    numeros:/^[0-9]{7,10}$/, //SOLO NÚMEROS
    correo:/^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //CORREOS
    password:/^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //PASSWORD
}
//Acceder al formulario 
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");
//Agregar listener de evento submit el formulario que se envia
form.addEventListener('submit',e=>{
    e.preventDefault(); //evitar que se envie el formulario para realizar las validaciones
})

const validarInput=(regla,input,grupo)=>{
    if(regla.test(input.value)){
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} i` ).classList.add('fa-circle-check');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-triangle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible');
    }else{
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-triangle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible');

    
    }
}
const validarCampos=(e)=>{
    console.log("se genero sobre el campo"+e.target.name);
    switch(e.target.name){
        case "numdoc":
            validarInput(reglas.numeros,e.target,e.target.name)
        break;
        case "nombre":
            case "numdoc":
                validarInput(reglas.textos,e.target,e.target.name)
        
        break;
        case "apellido":
            validarInput(reglas.textos,e.target,e.target.name)
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target,e.target.name)
    
        break;
        case "correo":
            validarInput(reglas.correo,e.target,e.target.name)
        break;
        case "password":
            validarInput(reglas.password,e.target,e.target.name)
    
        break;
        default:
            alert("No se ha recibido ")
        
    }
}

campos.forEach((campo)=>{
    campo.addEventListener("keyup",validarCampos);
    campo.addEventListener("blur",validarCampos);
})