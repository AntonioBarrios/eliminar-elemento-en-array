//Permite eliminar un elemento dado de un array 

const eliminarElemento = function(arreglo, valor){
  return arreglo.filter((elemento) => {
    return elemento != valor;
  });
}
