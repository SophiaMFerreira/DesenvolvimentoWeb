function validaSenha() {
    let senha = document.getElementById("senha")
    let liTamanho = document.getElementById("tamanho")
    let liLetras = document.getElementById("letras")
    let liCaracteresEspeciais = document.getElementById("caracteresEspeciais")
    
    if((senha.value != "")){
        if (senha.value.length >= 8) {
            liTamanho.style.color = "#008000"
        }else {
            liTamanho.style.color = "#f72121"
        }

        let BoleanLetrasMaiuscula = false
            let BoleanLetrasMinuscula = false
            let BoleanCaracteresEspeciais = false
            for (let i = 0; i < senha.value.length; i++) {
                if (senha.value.charCodeAt(i) >= 65 && senha.value.charCodeAt(i) <= 90) {
                    BoleanLetrasMaiuscula = true
                } else {
                    if (senha.value.charCodeAt(i) >= 97 && senha.value.charCodeAt(i) <= 122) {
                        BoleanLetrasMinuscula = true
                    } else {
                        if ((senha.value.charCodeAt(i) >= 33 && senha.value.charCodeAt(i) <= 64) || (senha.value.charCodeAt(i) >= 91 && senha.value.charCodeAt(i)) || (senha.value.charCodeAt(i) >= 123 && senha.value.charCodeAt(i) <= 126)){
                            BoleanCaracteresEspeciais = true
                        }
                    }
                }
            }

            if(BoleanLetrasMaiuscula && BoleanLetrasMinuscula){
                liLetras.style.color = "#008000"
            } else {
                liLetras.style.color = "#ff0000d7"
            }

            if(BoleanCaracteresEspeciais){
                liCaracteresEspeciais.style.color = "#008000"
            } else {
                liCaracteresEspeciais.style.color = "#ff0000d7"
            }
    }

    let confSenha = document.getElementById("confirmaSenha")

    if(senha.value == confSenha.value){
        document.getElementById("senhaConfonfirmacao").style.color = "#008000"
    } else {
        document.getElementById("senhaConfonfirmacao").style.color = "#ff0000d7"
    }
}

