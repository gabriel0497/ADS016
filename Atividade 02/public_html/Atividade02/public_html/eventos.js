function validarMatricula() {
    campo = document.getElementById('inputMatricula');

    if (isNaN(campo.value) || campo.value <= 0) {
      msg = document.createElement('span');
      msg.setAttribute('id', 'erroMatricula');
      msg.innerHTML = 'Matrícula deve ser um número maior que 0.';
      campo.insertAdjacentElement("afterend", msg);
      return false;
    }

    msg = document.getElementById('erroMatricula');
    if (msg) document.forms[0].removeChild(msg);
    return true; 
}

function validarNome() {
    campo = document.getElementById('inputNome');

    if (campo.value == null || campo.value.length === 0) {
      msg = document.createElement('span');
      msg.setAttribute('id', 'erroNome');
      msg.innerHTML = 'Nome é obrigatório.';
      campo.insertAdjacentElement("afterend", msg);
     return false; 
    }

    msg = document.getElementById('erroNome');
    if (msg) document.forms[0].removeChild(msg);
    return true;
}

function validarEmail() {
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
   if (msg) document.forms[0].removeChild(msg);
   return true;
}

function validarCursos() {
    total = 0;
    caixas = document.querySelectorAll('input[type=checkbox]');
    for(i=0; i<caixas.length; i++) {
    	 if (caixas[i].checked) {
          total++; 
    	    return true;
       }
    } 
    if (total == 0 || total > 2) {    
       msg = document.createElement('span');
       msg.setAttribute('id', 'erroCurso');
       msg.innerHTML = 'Pelo menos um curso deve ser escolhido e no máximo dois.';
       caixas[0].insertAdjacentElement("beforebegin", msg);
       return false;
    }
    msg = document.getElementById('erroCurso');
    if (msg) document.forms[0].removeChild(msg);
    return true;
}


function validarBolsa(event) {
    radios = document.querySelectorAll('input[type=radio]');
    for(i=0; i<radios.length; i++) {
    	 if (radios[i].checked) { 
         msg = document.getElementById('erroBolsa');
    	    if (msg) document.forms[0].removeChild(msg);
    	    return true;
       }
    } 

    msg = document.createElement('span');
    msg.setAttribute('id', 'erroBolsa');
    msg.innerHTML = 'Uma bolsa de estudo deve ser escolhida.';
    radios[0].insertAdjacentElement("beforebegin", msg);
    return false;
}

function validarFormulario() {
    return validarMatricula() &&
      validarNome() &&
      validarEmail() &&
      validarCursos() &&
      validarBolsa();
}