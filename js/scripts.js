// querySelector - retorna 0 o 1 elementos del documento es decir de todo el html
const heading = document.querySelector('#heading');  //Se recomienda acceder por el id con #
heading.textContent = 'Nuevo Heading';
console.log(heading);


// querySelectorAll - retorna todos los que concuerden con tal selector 
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = 'Nuevo enlace';
// Se puede modificar el href
enlaces[0].href = 'http://google.com';
// Se pueden agregar nuevas clases
enlaces[0].classList.add('nueva-clase');
// Se pueden eliminar clases
enlaces[0].classList.remove('nueva-clase');

// getElementById - ya casi no se usa
const heading2 = document.getElementById('heading');
console.log(heading2);

// Crear HTML con createElement
// Generar un nuevo enlace, entre comillas simples va en mayuscula
const nuevoEnlace = document.createElement('A');

// Agrega el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agrega el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agrega la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agrega al documento
const navegacion = document.querySelector('.navegacion');
// appendChild nos permite agregar un elemento e insertarlo en otro lugar
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos - addEventListener
console.log(1);

// Window - Es el objeto global, todo el documento con todas las funciones

// load espera a que el JS y los archivos que dependen del HTML esten listos
window.addEventListener('load', function () {
    console.log(2);
});

// Otra forma de hacer lo anterior
window.onload = function () {
    console.log(4);
}

// DOMContentLoaded solamente espera a que se descargue el HTML, pero no espera CSS o Imagenes - Es más rápido
document.addEventListener('DOMContentLoaded', function () {
    console.log(5)
});

console.log(3);



// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// // evento sirve para ver en la consola que contiene esa funcion a la hora de dar click
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     // Evita que se haga la accion por default que en este caso es la de recargar la pagina y enviar el formulario
//     // Es util para validar un formulario
//     evento.preventDefault();
//     console.log('Enviando formulario...');
// });




// Eventos de los Inputs y Textarea
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// Objeto global que se va a utilizar en varias funciones
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// input ayuda a tener una validacion en tiempo real
nombre.addEventListener('input', function (e) {
    // value permite ver el valor de lo que se escribe en el input
    //console.log(e.target.value);
});

// Para evitar repetir codigo y usar un evento para cada input se puede hacer con una funcion
nombre.addEventListener('input', leetTexto);
email.addEventListener('input', leetTexto);
mensaje.addEventListener('input', leetTexto);

function leetTexto(e) {
    // Obtiene el valor de lo que se esta escribiendo
    // console.log(e.target.value);

    // Obtiene el id de cada propiedad del objeto datos, para asignarle el valor de lo que se escribe en el input
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}


// Evento de Submit - Se usa cuando se quiere mandar el formulario, por lo tanto se tiene que seleccionar el formulario 
// y no solo el boton de enviar
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function (evento) {
    // Previene la accion de recargar la pagina
    evento.preventDefault();


    // Validar formulario
    // extraer los valores con destructuring
    const { nombre, email, mensaje } = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //Corta la ejecucion del codigo, por lo tanto si se cumple esta condicion previene la ejecucion del codigo
    }

    // Mensaje de Enviado correctamente
    mostrarAlerta('Enviado Correctamente');
});

// Refactoring - Minimizando lineas de codigo para hacerlo mas legible y evitar repetir codigo
function mostrarAlerta(mensaje, error = null) { // En caso de que la alerta sea correcta, se mantiene el error por defecto como null
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    // Si existe un error se manda el mensaje de error en pantalla
    if (error) {
        alerta.classList.add('error');
    } else {
        // Si todo está correcto se agrega la clase de correcto
        alerta.classList.add('correcto');
    }

    // Se agrega al formulario el elemento html
    formulario.appendChild(alerta);

    // Mensaje desaparece despues de 5 segundos
    setTimeout(() => {
        // remove sirve para eliminar un elemento html
        alerta.remove();
    }, 5000);
}