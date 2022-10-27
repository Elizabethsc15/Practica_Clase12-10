let Hi = 8;
console.log("Hora inicial")
console.log(Hi)
let Ftom = 5;
console.log("frecuencia de las tomas")
console.log(Ftom)
let Ttomal = 5;
console.log("Tomas totales")
console.log(Ttomal)

let horas = Hi;

for (i = 1; i <= Ttomal; i++) {
    if (horas > 23) {
        horas -= 24;
    }
    console.log("toma" + "#" + i + " " + horas +"hrs");
    horas += Ftom;
}
