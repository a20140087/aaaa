var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre: ");
var c = 0;
var i = 0;

var  p1 = prompt("¿En que departamento se encuentra el lago titicaca?\nA: Tacna\nB: Puno\nC: Cusco");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1;
}
 
var  p2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA: Lima e Ica\nB: Arequipa y Tacna\nC: Piura y Tumbes");
if (p1 == "C"){
    c = c + 1;
}else{
    i = i + 1;
}

var  p3 = prompt("Plato típico de la Selva peruana\nA: Tacacho con cecina\nB: Arroz con pollo\nC: Lomo saltado ");
if (p1 == "A"){
    c = c + 1;
}else{
    i = i + 1;
}

if (c > i){
    document.write("Lo haz hecho bien..." + var nombre <br></br>);
}
if (c < i){
    document.write("Puedes hacerlo mejor..." + var nombre <br></br>);
}