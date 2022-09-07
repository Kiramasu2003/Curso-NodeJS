

const deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido}`;
    }
}
//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;
//const { nombre, apellido, poder, edad = 0 } = deadpool;//esto es la desestructuracion

function imprimeHeroe(nombre, apellido, poder, edad = 0 ){

    console.log(nombre, apellido, poder,edad);
}

//console.log(deadpool.getNombre());
//console.log('');
//imprimeHeroe(deadpool);

const heroes= ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [ , , h3] = heroes;
console.log(h3);

