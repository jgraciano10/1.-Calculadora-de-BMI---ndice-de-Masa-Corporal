// En esta funcion vamos a calcular el IBM teninedo en cuanta el peso y la altura
function indice(peso, altura){
    let IBM = peso / altura**2
    console.log(IBM)
    if (IBM<18.5){
        console.log("Su peso se considera bajo en proporcion con su altura")

    }else if (IBM>=18.5 && IBM<=24.9){
        console.log("Su peso se considera normal en proporcion con su altura")

    }else if (IBM>=25 && IBM<=29.9){
        console.log("Su peso se considera en sobrepeso en proporcion con su altura")

    }else{
        console.log("obesidadSu peso se considera en obesidad en proporcion con su altura")
    }
}

function saveInput() {
    const userPeso = document.getElementById('userPeso').value;
    const userAltura = document.getElementById('userAltura').value;
    // You can now use 'userInput' to store or process the input further.
    indice(userPeso,userAltura)
    
  }



