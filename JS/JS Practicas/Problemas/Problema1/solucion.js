/*
3 chicos entran a un heladeria y quierencomprar un helado
pero los precios  no estan al lado de estante con sus respactivos helados
ellos quieren comprar el helado mas caro que puedan comprar con el dinero que tienen
cada uno tiene distintas cantidades de dinero y tenemos una tabla para saber los precio de cada helado

A
Soluciones a buscar:
- Ingresar el dinero y motrar el helado mas caro que puedan comprar
- Si hay 2 o mas, motrar ambos
- Indicar las vueltas

Roberto - 1.5$
Pedro - 2.7$
Cofla - 3$

Precios de helados:
Helado de nata - 0.6$
Helado de chocolate - 1$
Helado de vainilla - 1.6$
Helado de menta - 1.7$
Helado de arcoiris - 1.8$
Helado de turron - 2.9$
Helado de chocolate con nata - 2.9$


B
Le da el dinero a  un sin techo le dan un boleto de loteria
Solucion a buscar:
-Si dinero para 1, compra 1
-Si dinero para 2, compra 2
-Si dinero para 3, y sobra regala las vueltas //compra 2*
-Debe mostrar que boleto compró y cuanto dinero le sobró

C
Detector de mentiras
Solucion a buscar:
-Si el sospechoso miente, se le da una descarga
-Si el sospechoso no miente, no se hace nada
-Si el aparato no se decide,aclarar que la pregunta debe ser mas clara

*/

console.log("Hola, bienvenido a la heladeria");

let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("Cuanto dinero tienes Pedro?");
let dineroCofla = prompt("Cuanto dinero tienes Cofla?");

dineroCofla = parseInt(dineroCofla);

if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto Compra 1 helado de nata");
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto Compra 1 helado de chocolate");
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert(" RobertoCompra 1 helado de vainilla");
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert(" RobertoCompra 1 helado de menta");
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert(" RobertoCompra 1 helado de arcoiris");
}
else if(dineroRoberto >= 2.9){
    alert(" RobertoCompra 1 helado de chocolate con nata o helado de turron");
}
else {
    alert(" RobertoNo puedes comprar nada");
}

if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro Compra 1 helado de nata");
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro Compra 1 helado de chocolate");
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro Compra 1 helado de vainilla");
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro Compra 1 helado de menta");
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("PedroCompra 1 helado de arcoiris");
}
else if(dineroPedro >= 2.9){
    alert("Pedro Compra 1 helado de chocolate con nata o helado de turron");
}
else {
    alert("PedroNo puedes comprar nada");
}

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla Compra 1 helado de nata");
    alert("y te sobran " + (dineroCofla - 0.6));
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla Compra 1 helado de chocolate");
    alert("y te sobran " + (dineroCofla - 1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla Compra 1 helado de vainilla");
    alert("y te sobran " + (dineroCofla - 1.6));
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla Compra 1 helado de menta");
    alert("y te sobran " + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla Compra 1 helado de arcoiris");
    alert("y te sobran " + (dineroCofla - 1.8));
}
else if(dineroCofla >= 2.9){
    alert("Cofla Compra 1 helado de chocolate con nata o helado de turron");
    alert("y te sobran " + (dineroCofla - 2.9));
}
else {
    alert("Cofla No puedes comprar nada");
}

/*
const definirCompra = (n) => {
    let din = prompt(`Dinero de ${n}`);
    if(din >= 0.6 && din < 1) return (`${n} Compra 1 helado de nata`);
    if(din >= 1 && din < 1.6) return (`${n} Compra 1 helado de chocolate`);
    if(din >= 1.6 && din < 1.7) return (`${n} Compra 1 helado de vainilla`);
    if(din >= 1.7 && din < 1.8) return (`${n} Compra 1 helado de menta`);
    if(din >= 1.8 && din < 2.9) return (`${n} Compra 1 helado de arcoiris`);
    if(din >= 2.9) return (`${n} Compra 1 helado de chocolate con nata o helado de turron`);
    return (`${n} No puedes comprar nada`);   
}

console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Cofla"));
*/