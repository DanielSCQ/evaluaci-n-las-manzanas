let pantallas=7;
let total=30000;
let adicional;

    if(pantallas>6){
        console.log("error:maximo 6 pantallas permitidas");
    }else{
        for(let i=3; i<=pantallas; i++){
            adicional=8000;
            total+=adicional;
        }
console.log("total a pagar:$"+total);
    }