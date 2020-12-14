
// Desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre:nombre2, edad, clave} = persona;

console.log(nombre2);
console.log(persona.edad);
console.log(persona.clave);





















/*const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
};

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona.nombre);
console.log(persona2.nombre);*/

//const arreglo = new Array( 100);
// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);

// const arr2 = arr.map(function(x){
//     return x * 2;
// });

// console.log(arr);
// console.log(arr2);