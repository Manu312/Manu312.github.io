const miTittle= document.querySelector('h1');
miTittle.textContent='Hola mundo!';
/*
document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}
*/
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'Im.jpg') {
      miImage.setAttribute('src','Im2.jpg');
    } else {
      miImage.setAttribute('src', 'Im.jpg');
    }
}
let miButton = document.querySelector('button');
function establecerName(){
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre){
        establecerName();
    }else{        
        localStorage.setItem('nombre',miNombre);
        miTittle.textContent= 'Wtf you are '+ miNombre;
    }
}
if(!localStorage.getItem('nombre')){
    establecerName();
}else{
    let nombreAlmacendo = localStorage.getItem('nombre');
    miTittle.textContent='Wtf you are '+ nombreAlmacendo;
}
miButton.onclick=function(){
    establecerName();
}