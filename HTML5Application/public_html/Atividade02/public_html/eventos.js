function validarMatricula(event) {
    if (isNaN(this.value) || this.value <= 0) {
      msg = document.createElement('span');
      msg.setAttribute('id', 'erroMatricula');
      msg.innerHTML = 'Matrícula deve ser um número maior que 0.';
      this.insertAdjacentElement("afterend", msg);
     return false; 
    }

    msg = document.getElementById('erroMatricula');
    document.forms[0].removeChild(msg);
    return true; 
}

