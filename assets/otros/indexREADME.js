/**********************************************
**              DEFINICIONES                 **
**********************************************/
const formulario = document.forms[0];

function evaluarForm(e){
  
  e.preventDefault();

  const [...elementos] = e.target.elements;
  const valores = elementos.map(e => e.value.trim())
  valores.pop();
  
  if (valores.includes('')) alert('Debe llenar todos los campos'); 
}

/**********************************************
**                   EVENTOS                 **
**********************************************/
formulario.addEventListener('submit', evaluarForm);


//? El grupo decidió realizar la subida de Etzel con 
//? el método mostrado por el profesor. 
//? Esta es mi propia versión del control de campos del form


