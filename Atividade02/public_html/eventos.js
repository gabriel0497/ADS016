
function validarMatricula(){
    campo = document.getElementById('inputMatricula');
    
    if(isNaN(campo.value) || campo.value <= 0){
        msg = document.creatElement('span');
        msg.setAttribute('id', 'erroMatricula');
        msg.innerHTML = 'Matricula  deve ser um numero maior que 0';
        campo.insertAdjacentElement("afterend", msg);
        return false;
    }
    msg = document.getElementById('erroNome');
    if(msg) document.forms[0].removeChild(msg);
    return true;
    
}

function validarEmail(){
    campo = document.getElementById('inputEmail');
    
    regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(campo.value)) {
        msg = document.createElement('span');
        msg.setAttribute('id', 'erroEmail');
        msg.innerHTML = 'Email deve ser no formato nome@dominio.';
        campo.insertAdjacentElement("afterend", msg);
        return false;
    }
    
    msg = document.getElementById('erroEmail');
    if (msg)
        document.forms[0].removeChild(msg);
    return true;    
    
}