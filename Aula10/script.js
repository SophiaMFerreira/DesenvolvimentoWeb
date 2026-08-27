function verificarDivisores() {
    let numero = document.getElementById("input")

    if (numero.value <= 10 || numero.value >= 1000) {
        window.alert("O número inserido é inválido pois está fora do intervalo!")
        document.getElementById("botao").disabled = true

    } else {
        let contDivisores = 0
        let divisores = ""

        for (let i = 1; i <= numero.value; i++) {
            if(numero.value % i == 0){
               divisores += ` ${i},`
               contDivisores++

               if (contDivisores >= 5) {
                    document.getElementById("input").style.backgroundColor = "#FF0000"
               }
            }
        }
        
        document.getElementById("paragrafo").innerHTML = ("Os divisores de " + `${numero.value}` + " são: " + `${divisores}`)
    }
}


