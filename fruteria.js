function calculartotalmanzanas(cantidadcomprada){
let totalfactura =0;

    for (let i = 1; i<=cantidadcomprada; i++){
        if (i<=10){
            totalfactura += 2000;
        }else {
            totalfactura += 1500;
        }
    }
}