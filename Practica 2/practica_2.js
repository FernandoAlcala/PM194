const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Queretaro",
        pais: "MX",
    },
}

// Aplica la desestructuracion
const { nombre, edad, direccion: { ciudad, pais } } = persona;

// Imprime el resultado
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 },
];

const nombres = productos
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre);

console.log(nombres); // ["Laptop", "Monitor"]

const personas  = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 },
];

const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(personaLuis);

personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

const totalEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log(`La suma total de las edades es: ${totalEdades}`)