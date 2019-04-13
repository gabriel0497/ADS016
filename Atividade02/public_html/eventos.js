
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

function validarCursos(){
    total = 0;
    caixas = document.querySelectorAll(`input[type=checkbox]`);
    for(i=0; i<caixas.length; i++){
        if(caixas[i].checked){
            total++;
            return true;
        }//fim if
    }//fim for
    
    if(total == 0 || total > 2){
        msg = document.createElement(`span`);
        msg.setAttribute(`id`, `erroCurso`);
        msg.innerHTML = `Pelo menos um curso deve ser escolhido e no maximo dois`;
        caixas[0].insertAdjacentElement("beforebegin", msg);
        return false;
    }//fim if
    
    msg = document.getElementById(`erroCurso`);
    if(msg) document.forms[0].removeChild(msg);
    return true;
}//fim function

function validarBolsa(event){
    radios = document.querySelectorAll(`input[type = radio]`);
    for (i = 0; i<radios.length; i++){
        if(radios[i].checked){
            msg = document.getElementById(`erroBolsa`);
            if(msg) document.forms[0].removeChild(msg);
            return true;
        }//fim if
    }//fim for
    
    msg = document.creatElement(`span`);
    msg.setAttribute(`id`, `erroBolsa`);
    msg.innerHTML = `Uma Bolsa deve ser escolhida.`;
    radios[0].inserAdjacentElement("beforebegin", msg);
    return false;
 
}//fim fuction

function validarFormulario(){
    return validarMatricula() &&
      validarNome() &&
      validarEmail() &&
      validarCursos() &&
      validarBolsa();

}//fim function