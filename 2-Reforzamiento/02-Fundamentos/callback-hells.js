const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'

    },
    {
        id: 3,
        nombre: 'Karen'
    }

]


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 3,
        salario: 3000
    }

]

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e=> e.id === id)

    if(empleado){
     callback(null, empleado);
    } else{
    callback( `Empleado con id ${id} no existe`)
    }
}

getEmpleado(3, (err, empleado) => {

    if(err){
    console.log('ERROR!');
    return console.log(err);
    }
    console.log('Empleado de BD');
    console.log(empleado);
});

//getSalario