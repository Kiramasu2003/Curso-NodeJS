const {getUsuario} = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');

getUsuario(1, (usuario) => {
    console.log('Usuario1: ', usuario);
});

getUsuario(2, (usuario) => {
    console.log('Usuario2: ', usuario);
});

console.log('Fin de programa');