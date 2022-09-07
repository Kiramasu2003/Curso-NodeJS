const{getUsuarioSync} = require('./usuarios/usuarios');//No existe el directorio xD

console.log('Inicio de programa');
console.log('inicio');

const usuario1 = getUsuarioSync(1);
console.log('usuario1 :', usuario1);

const usuario2 = getUsuarioSync(2);
console.log('usuario2 :', usuario2);

console.log('fin');
console.timeEnd('inicio')

