/*let faker = require('faker');
let arrayNombres = [];
let nombres = {}

for(let i=0; i<100; i++){
	const nombre = faker.name.firstName();
	arrayNombres.push(nombre);
	nombres[nombre.charAt(0)] = [];
}

for (let i = arrayNombres.length - 1; i >= 0; i--) {
	nombres[arrayNombres[i].charAt(0)].push(arrayNombres[i]);
}

console.log(nombres);*/

let faker = require('faker');
let nombres = {}

for(let i=0; i<100; i++){
    const nombre = faker.Name.firstName();

    if(!(nombre.charAt(0) in nombres))
      nombres[nombre.charAt(0)] = [];

    nombres[nombre.charAt(0)].push(nombre);
}

console.log(nombres);