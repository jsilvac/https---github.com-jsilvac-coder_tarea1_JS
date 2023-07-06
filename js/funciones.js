let tipoPago = ['(1) ->Efectivo','(2) -> Debito', '(3) -> Credito','(4) -> Cheque', '(0) -> Salir'];

let nombre = prompt('Igrese nombre: ')
let op= prompt('Elige el tipo de pago a agregar: \n' + tipoPago.join('\n')+ ' y para salir opcion 0 ');
console.log(op);

let total=0;
let efectivo=0;
let debito=0;
let credito=0;
let cheque=0;

while(op != '0'){
    switch(op){
        case '1':
            let efect = parseFloat(prompt('Ingrese el efectivo a sumar'));
            sumaTotal(efect);
            efectivo+=efect;
        break;
        case '2':
            let debi = parseFloat(prompt('Ingrese el debito a sumar'));
            sumaTotal(debi);
            debito+=debi;
        break;
        case '3':
            let credi = parseFloat(prompt('Ingrese el credito a sumar'));
            sumaTotal(credi);
            credito+=credi;
        break;
        case '4':
            let chec = parseFloat(prompt('Ingrese el monto de cheque a sumar'));
            sumaTotal(chec);
            cheque+=chec;
        break;
        default:
            alert('Opcion no valida..🤷🏻‍♂️');
        break
        
    }
    op= prompt('Elige el tipo de pago a agregar: \n' + tipoPago.join('\n'));

}

alert(nombre.toUpperCase() +' tus totales ascienden a un monto de:\n 1 -> Efectivos => $'+devuelveMiles(efectivo.toString())+'.-\n 2 -> Debitos => $'+devuelveMiles(debito.toString())+'.-\n 3 -> Creditos => $'+devuelveMiles(credito.toString())+'.-\n 3 -> Cheque => $'+devuelveMiles(cheque.toString())+'.- \n El monto total de haberes es : \n Total => $'+devuelveMiles(total.toString())+'.-'  );

//devuelveMiles(total.toString());

function sumaTotal(monto){
  if(monto>0){
    total+=monto;
  }
}

function devuelveMiles(monto){
    let nuevoMonto = [];

    for (let i = monto.length - 1; i >= 0; i -= 3) {
      let ini = Math.max(0, i - 2);
      let cad = monto.substring(ini, i + 1);
      nuevoMonto.unshift(cad);
    }
  
    return(nuevoMonto.join('.'));
}