setTimeout(()=> {
    console.log('Hola mundo');
}, 1000);

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: "Fernando"
    }

    setTimeout(() => {
        callback(usuario);
    },1500);
}

//Un callback es una funcion que se ejecuta despues de que se ejecuta otra funcion

getUsuarioById(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});