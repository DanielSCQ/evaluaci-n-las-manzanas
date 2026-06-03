const precioNormal=2000;
const precioDescuento=1500;
var cantidad=11;
let subtotal;
let total=0;

    for(let i=1; i<= cantidad;i++){
        if(i<=10){
            subtotal=precioNormal;
        }else{
            subtotal=precioDescuento;
        }
        total=total+subtotal;
    }
    console.log("total a pagar:$"+total);