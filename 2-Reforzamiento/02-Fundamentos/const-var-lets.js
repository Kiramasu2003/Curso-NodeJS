let nombre = 'Wolverine';//se crea la variable de forma global con var
//con let se crea la variable de forma local
//con const se crea la variable de forma local y no se puede reasignar
//Actualmente se recomienda usar let y const

 if (true) {
     nombre = 'Magneto';//se modifica la variable global
 }

 let nombre2 = 'Wolverine';//se crea la variable de forma global con const

if (true) {
    nombre2 = 'Magneto';//se modifica la variable global
}
console.log(nombre);