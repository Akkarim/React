

const getImagen = async() => {

try {
    const apiKey = 'BcfAPduX1xL6cDCT6BQuISHI1mJ6b94A';
    const resp =  await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

    } catch (err) {

    }
}

getImagen();

// const apiKey = 'BcfAPduX1xL6cDCT6BQuISHI1mJ6b94A';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then( resp => resp.json())
//     .then(({data}) => {
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch (console.warn);



// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
        
        
//         resolve();
//     }, 2000 )
// } );

// promesa.then( () =>{
//     console.log('Then de la promesa')
// } )


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

// Desestructuración

// const persona = {
//     nombre: 'Tony',
//     edad: 45,
//     clave: 'Ironman'
// };

// const {nombre:nombre2, edad, clave} = persona;

// console.log(nombre2);
// console.log(persona.edad);
// console.log(persona.clave);

// import heroes, { owners } from './data/heroes';

// console.log(owners);



// const getHeroById = (id) => {
//     return heroes.find((heroe) => heroe.id === id );
// }

// const getHeoresByOwner = (owner) => heroes.filter((heroe) =>heroe.owner === owner );

// console.log(getHeroById(2));
// console.log(getHeoresByOwner('Marvel'));