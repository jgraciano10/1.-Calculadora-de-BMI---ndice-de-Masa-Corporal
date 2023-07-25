// En esta funcion vamos a calcular el IBM teninedo en cuanta el peso y la altura
function indice(peso, altura){
    let IBM = peso / altura**2
    console.log(IBM)
    if (IBM<18.5){
        console.log("bajo peso")

    }else if (IBM>=18.5 && IBM<=24.9){
        console.log("normal")

    }else if (IBM>=25 && IBM<=29.9){
        console.log("sobrepeso")

    }else{
        console.log("obesidad")
    }
}


