const inputText = document.getElementById("input_text");

const outputCard = document.getElementById("output_card");
let lista = document.createElement("ul");
let item;

const btnAgregar = document.getElementById("btn_agregar");
const btnOrdenar = document.getElementById("");
let btnEliminar = document.createElement("button");

btnAgregar.addEventListener("click", crearLista);

const listaDeTareas = [];

function crearLista() {
  if (validarInput()) {
    listaDeTareas.push(inputText.value.trim());
    imprimirLista();
  }
  inputText.value = "";
}

function validarInput() {
  return inputText.value.trim() != "";
}

function imprimirLista() {
  lista.classList.add("lista");
  crearItem();
  crearBtnEliminar();
  outputCard.append(lista);
  console.log(listaDeTareas);
}

function crearItem() {
  item = document.createElement("li");
  item.classList.add("tarea");
  listaDeTareas.forEach((elemento) => {
    item.textContent = elemento;
    lista.appendChild(item);
  });
}

function crearBtnEliminar() {
  btnEliminar = document.createElement("button");
  btnEliminar.classList.add("btn_eliminar");

  item.appendChild(btnEliminar);
  btnEliminar.addEventListener("click", eliminarTarea);
}

function eliminarTarea() {
  console.log(btnEliminar);
}
