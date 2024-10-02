/*let nombre: string = "Santiago";
nombre = "Borda";
let numero: number = 25
console.log(numero);

//Creando un objeto 

type address = {
    city?: String,
    country?: String,
    ad?: String,

}

type estudiante = {
    firstName: String,
    lastName: String,
    //tipos de union
    age?: Number | String,
    address: address,

}

const E1:  estudiante = {
    firstName: "Carlos",
    lastName: "Marcelo",
    age: 19,
    address: {
        city: "Rio De Janeiro",
        country: "Brazil",
        ad: "SCN Quadra 02, Bloco G, 70712-907 Brasilia, DF, Brasil"
    }
}

const E2:  estudiante = {
    firstName: "Santiago",
    lastName: "Borda",
    age: 19,
    address: {
        city: "Bogotá",
        country: "Colombia",
        ad: "Calle 32-bisur 13-19"
    }
}

//funcion para la informacion del estudiante 
const mostrarEstudiante = (estudiante: estudiante): String => {
    const {firstName, lastName} = estudiante ;
    return `Nombre del Estudiante: ${firstName} apellido: ${lastName}`
}
console.log(mostrarEstudiante(E1));
*/


// Arreglos
//Arreglo de estudiante
//recorrer el arreglo de estudiante 
//imprimiendo nombre y apellido
//utilizando el metodo de arrelgos forEach

type Estudiante = {
    firstName: String,
    lastName: String,
    age?: Number | String,
}

let estudiantes: Estudiante[] = [];


const agregarEstudiante = (estudiante: Estudiante) => {
    estudiantes.push(estudiante);
}

const eliminarEstudiantePorEdad = (age: number) => {
    const indice = estudiantes.findIndex(estudiante => estudiante.age === age);
    if (indice !== -1) {
        estudiantes.splice(indice, 1);
    } else {
        console.log(`Estudiante con la edad ${age} no encontrado.`);
    }
}

const actualizarApellidoPorNombre = (nombre: string, nuevoApellido: string) => {
    const estudiante = estudiantes.find(estudiante => estudiante.firstName === nombre);
    if (estudiante) {
        estudiante.lastName = nuevoApellido;
    } else {
        console.log(`Estudiante con el nombre ${nombre} no encontrado.`);
    }
}

agregarEstudiante({
    firstName: "Santiago",
    lastName: "Borda",
    age: 19
}
),

agregarEstudiante({
    firstName: "Juan", 
    lastName: "Perez",
    age: 20
})

eliminarEstudiantePorEdad(18)
actualizarApellidoPorNombre("Juan", "Hernandez");

console.log(estudiantes);

