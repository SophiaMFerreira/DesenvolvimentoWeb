let arrayTextos = []; 

function modificaLista() {
    //addEventListener(button,)
    
    let texto = document.getElementById("texto").value
        texto = texto.toLowerCase()
    let lista = document.getElementById("lista")
    let butao = document.getElementById("butao")
    
    if((texto != "")){
        arrayTextos[arrayTextos.length] = texto
        arrayTextos.sort()


        while (lista.hasChildNodes()) {
            lista.removeChild(lista.firstChild);
        }

        for (let i = 0; i < arrayTextos.length; i++) {
            const li = document.createElement("li")
            const textoLi = document.createTextNode(`${arrayTextos[i]}`)
            li.appendChild(textoLi)
            lista.appendChild(li)      
        }
        
        document.getElementById("texto").value = ""
        document.getElementById("texto").focus()
    }
}

