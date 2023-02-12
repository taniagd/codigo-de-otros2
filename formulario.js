// Esta aplicación crea una lista de invitados.
// Los invitados pueden ser agregados a través de un formulario
// Se pueden borrar invitados de la lista usando el botón


// Cuando se utiliza el querySelector se debe hacer referencia a una clase usando un punto delante del nombre de la clase. La clase se llama $formulario
// Es buena práctica colocar un $ delante de las variables y constantes que hacen referencia a elementos HTML para diferenciarlos del resto.

var $formulario = document.querySelector(".formulario");

//Se hace referencia a los input del formulario desde un scope superior para que puedan ser reutilizados
  var $nombreForm = $formulario.elements[0];
  var $edadForm = $formulario.elements[1];
  var $nacionalidadForm = $formulario.elements[2];

$formulario.onsubmit = function(e) {

// El nombre correcto de la función es preventDefault()
  e.preventDefault();
  
// Los nombres de las variables deben dar contexto de la información almacenada; esto mejora la legibilidad y mantenibilidad del código.
// Es buena práctica colocar un $ delante de las variables y constantes que hacen referencia a elementos HTML para diferenciarlos del resto.
  var nombre = $nombreForm.value;
  var edad = $edadForm.value;
  var i = $nacionalidadForm.selectedIndex;
  var nacionalidad = $nacionalidadForm.options[i].value;
  
// Recuerda que una vez que termines tu aplicación debes borrar todos los console. Los console son utilizados en la fase de desarrollo, no en producción.
//console.log(nombre, edad)
//console.log(nacionalidad)

  if (nombre.length === 0) {
    $nombreForm.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    $edadForm.classList.add("error");
  }

if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

//Este es código repetido que debe eliminarse.
/*var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);*/

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados");
var elementoLista = document.createElement("div");
//Elnombre correcto del método es "add", no "added".
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

//Código duplicado que debe eliminarse
/*var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}*/

// Se agrega un parámetro, elementoLista que es el nodo en donde sera agregada la información del usuario
crearElemento("Nombre", nombre, elementoLista);
crearElemento("Edad", edad, elementoLista);
crearElemento("Nacionalidad", nacionalidad, elementoLista);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  };

// Se agregó para limpiar el formulario cada vez que se agregue un invitado
$nombreForm.value = '';
$edadForm.value = '';
$nacionalidadForm.value = '';
}


// Mover función en otro bloque
// Se agrega un parámetro, elementoLista que es el nodo en donde sera agregada la información del usuario
// Se puede simplificar la creación de estructura HTML usando template string
function crearElemento(descripcion, valor, elementoLista) {
let invitado = document.createElement('p');
invitado.innerHTML = `${descripcion}: ${valor}`;
console.log(invitado)
elementoLista.appendChild(invitado);
}
