const getUsuarioSync = (id) => {
    const startPoint = new Date().getTime();
    while(new Date().getTime() - startPoint <= 3000){}
    return {
        id,
        nombre: `Usuario ${id}`
    }

}

const getUsuario = (id, callback) => {
    const usuario = {
        id,
        nombre: `Usuario ${id}`
    }

    setTimeout(() => {
        callback(usuario);
    },3000);
}

module.exports = {
    getUsuarioSync,
    getUsuario
}