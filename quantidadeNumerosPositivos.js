let valor = Array(6);
valor[0] = gets();
valor[1] = gets();
valor[2] = gets();
valor[3] = gets();
valor[4] = gets();
valor[5] = gets();
let valoresPositivos = valor.filter(value => value > 0);
console.log(valoresPositivos.length + " valores positivos");
