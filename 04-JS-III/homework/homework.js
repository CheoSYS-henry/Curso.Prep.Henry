// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i]+1;
  }

  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let str = "";
  
    for (i = 0; i < palabras.length; i++) {
      if (i === 0) {
        str = palabras[i];
      } else if (i>0) {
        str = `${str} ${palabras[i]}`;
      }
      if (i===(palabras.length-1)){
        return str;
      }      
    }
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let igual = false;
    
      for (i = 0; i<array.length; i++) {
        if (array[i] === elemento) {
          igual = true;
        } 
      }
    
      return igual;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
        
          for (i = 0; i < numeros.length; i++) {
            suma = suma + numeros[i];
          }
        
          return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  
    for (i = 0; i < resultadosTest.length; i++) {
      suma = suma + resultadosTest[i];
    }
  
    let prom = suma / resultadosTest.length;
  
    return prom;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let grande = 0;
  
  for (i = 0; i < numeros.length; i++) {
    if (grande < numeros[i]) {
      grande = numeros[i];
    }
  }

  return grande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if (arguments.length===0) return 0;
  if (arguments.length===1) return arguments[0];
  let multiplicacion=1;

  for (i=0;i<arguments.length;i++){
      multiplicacion=multiplicacion*arguments[i];
  }

  return multiplicacion;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};