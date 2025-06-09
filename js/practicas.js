//si valor luedo del "." es mayor a cinco redondea a nro más alto, sino a más bajo
var precio=Math.round(399.6);
document.write("precio redondeado: ", precio)

document.write("<br>")

//redondea sin importar decimal, redondea hacia ariiba
var precio=Math.ceil(299.79) 
document.write("precio redondeado: ",precio)

document.write("<br>")

//redondea sin importar decimal, redondea hacia abajo
var precio=Math.floor(543.2)
document.write("precio redondeado: ", precio)

document.write("<br>")

//calcula valor máximo de una secuencia
var maximo=Math.max(39,1,33,2999)
document.write("Valor máximo: ", maximo)

document.write("<br>")

//calcula valor mínimo de una secuencia
var minimo=Math.min(39,1,33,2999)
document.write("Valor mínimo: ", minimo)

document.write("<br>")

//valor aleatorio

var aleatorio=Math.round (Math.random()*10)
document.write("valor aleatorio: ",aleatorio)