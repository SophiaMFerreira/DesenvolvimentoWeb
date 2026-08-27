let valorAcumulado = 0;

function verificaNatural() {
    let numero1 = document.getElementById("input1")
    let numero2 = document.getElementById("input2")
    
    if((numero1.value != "") && (numero1.value > 0)){
        numero1.style.backgroundColor = "#33ff00cb" 
    } else{
        numero1.style.backgroundColor = "#ff0000d7"
    }
    if((numero2.value != "") && (numero2.value > 0)){
        numero2.style.backgroundColor = "#33ff00cb" 
    } else{
        numero2.style.backgroundColor = "#ff0000d7"
    }

    if([(numero1.value != "") && (numero1.value > 0)] && [(numero2.value != "") && (numero2.value > 0)]){
        return CalculaProduto(numero1.value, numero2.value)
    } else {
        document.getElementById("produto").innerHTML = ("Informe números maiores do que zero!")
    }

    if((numero1.value != "") && (numero2.value != "")){
        document.getElementById("botao").disabled = true
    } else{
        if((numero1.value != "") || (numero2.value != "")){
            document.getElementById("botao").disabled = true
        }
    }
}

function CalculaProduto(inteiro1, inteiro2) {    
    produto = inteiro1 * inteiro2
    document.getElementById("produto").innerHTML = ("Produto: " + `${inteiro1}` + " x " + `${inteiro2}` + " = " + `${produto}`)
    document.getElementById("botao").disabled = false
    return produto  
}

function acumula(novoValor) {    
    valorAcumulado += novoValor
    document.getElementById("acumulado").innerHTML = ("Valor acumulado: " + `${valorAcumulado}`)

    document.getElementById("input1").value = ""
    document.getElementById("input1").style.backgroundColor = "#ff0000d7"

    document.getElementById("input2").value = ""
    document.getElementById("input2").style.backgroundColor = "#ff0000d7"

    document.getElementById("botao").disabled = true
}

