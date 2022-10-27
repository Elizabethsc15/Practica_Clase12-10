let equipos = [
    "Tigres", "Rayados", "America"
];

console.log("Tipo de dato: ", typeof equipos);
console.log("Datos del array: ", equipos);
console.log("Total de equipos: ", equipos.length);
console.log("Primer equipo: ", equipos[0]);
console.log("Último equipo: ", equipos[equipos.length - 1])
console.log("Nuevo equipo: ");
equipos.push("Necaxa");

console.log(equipos)

console.log("Último equipo y eliminado: ", equipos.pop());
console.log("Equipos después de la eliminación: ", equipos)

let materias = ["Desarrollo Web", "Almacenes", "Finanzas"];

let grupo52 = {
    "nombre" : "grupo 52",
    "semestre" : 5,
    "carrera" : "LTI",
    "materias" : materias
}
    
console.log("Objeto creado:");
console.log(grupo52);
    
console.log("Elemento mal referenciado: ", grupo52[1]);

console.log("Elemento bien referenciado: ",grupo52["carrera"]);

console.log("Elemento bien referenciado y simplificado: ", grupo52.carrera);

console.log("Primer materia: ", grupo52.materias[0]);

grupo52.facultad = "FACPyA";
console.log("Objeto con el nuevo elemento: ", grupo52);
    
document.write("<marquee>Hola!</marquee>");
document.write(`
    <ul>
        <li>LTI</li>
        <li>LA</li>
        <li>CP</li>
        <li>LNI</li>
        <li>LGRS</li>
    </ul>
`);

console.log("Estructuras de condición");

let calif = 90;

if( calif => 90 ) {
    console.log("Sos un championship")
}

if( calif >= 90 ) {
    console.log("Excelente!")
}
else {
    console.log("No excelente :(");
}

if( calif => 95 && calif <= 100  ) {
    console.log("Championship");
}
else if( calif == 92 ) {
    console.log("Atalaya");
}
else if( calif == 0 ) {
    console.log("Burro, salte de LTI");
}
else {
    console.log("Ni pa la muela padrino");
};
    
let numero = 2;
    
switch (numero) {
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
    default:
        break;
};
    
for( let i=1; i<=100; i++) {
    let codigo = "<marquee>" + i + "</marquee>";
    document.write(codigo );
};
    
for( let i=10; i>=1 ; i-- ) {
    document.write(i + "<br>")
};