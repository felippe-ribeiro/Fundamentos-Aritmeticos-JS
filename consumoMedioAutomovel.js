let distanciaTotal = parseInt(gets());
let consumoCombustivel = parseFloat(gets());
let resultado = parseFloat(distanciaTotal / consumoCombustivel).toFixed(3);

console.log(resultado + " km/l");
