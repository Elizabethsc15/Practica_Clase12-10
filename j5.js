function calcoperacion(numer1,numer2,Operacion){
    let resulop=0;
    switch(Operacion){
        case '+':
            resulop =numer1+numer2;
            break;
        case '-':
            resulop =numer1-numer2;
            break;
        case '/':
            resulop =numer1/numer2;
            break;
        case '*':
            resulop =numer1*numer2;
            break;
    }
    return resulop;
}

function calcular(){
    let numero1 = 
    parseInt(document.getElementById("numero").value);
    console.log(numero1)
    let numero2 = 
    parseInt(document.getElementById("numero2").value);
    console.log(numero2)
    let Operacion=
    document.getElementById("Operacion").value;
    console.log(typeof Operacion)
    let resultado=
    document.getElementById("Resultado");
    resultado.value=calcoperacion(numero1,numero2,Operacion);
    console.log(resultado);
};