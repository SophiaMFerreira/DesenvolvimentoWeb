/*let minas = ["Belo Horizonte", "Betim", "Juiz de Fora"]
let rio = ["Rio De Janeiro", "Niteroi", "Campus"]
let sp = ["Sao Paulo", "Campinas", "Sao Jose dos Campos"]

const objCidades = `
    "MinasGerais": ${minas},  
    "RioDeJaneiro": ${rio},
    "SaoPaulo": ${sp}
  }`;*/


  /*const objCidades = `
    "MinasGerais": ["Belo Horizonte", "Betim", "Juiz de Fora"],  
    "RioDeJaneiro": ["Rio De Janeiro", "Niteroi", "Campus"],
    "SaoPaulo": ["Sao Paulo", "Campinas", "Sao Jose dos Campos"]
  }`;*/

const objCidades = [["Belo Horizonte", "Betim", "Juiz de Fora"], ["Rio De Janeiro", "Niteroi", "Campus"], ["Sao Paulo", "Campinas", "Sao Jose dos Campos"]]


function populaCidades() {
    selectEstado = document.getElementById("estado").value;
    selectCidades = document.getElementById("cidade");
    //console.log(objCidades.MinasGerais)
    //console.log(objCidades.MinasGerais[0])

    if (selectEstado == "MinasGerais") {
        selectCidades.innerHTML = `<option value="${objCidades[0][0].replace(" ", "")}">${objCidades[0][0]}</option>
                                    <option value="${objCidades[0][1].replace(" ", "")}">${objCidades[0][1]}</option>
                                    <option value="${objCidades[0][2].replace(" ", "")}">${objCidades[0][2]}</option>`;
    }else{
        if (selectEstado == "MinasGerais") {
            selectCidades.innerHTML = `<option value="${objCidades[1][0].replace(" ", "")}">${objCidades[1][0]}</option>
                                    <option value="${objCidades[1][1].replace(" ", "")}">${objCidades[1][1]}</option>
                                    <option value="${objCidades[1][2].replace(" ", "")}">${objCidades[1][2]}</option>`;
        } else {
            selectCidades.innerHTML = `<option value="${objCidades[2][0].replace(" ", "")}">${objCidades[2][0]}</option>
                                    <option value="${objCidades[2][1].replace(" ", "")}">${objCidades[2][1]}</option>
                                    <option value="${objCidades[2][2].replace(" ", "")}">${objCidades[2][2]}</option>`;
        }
    }


        /*selectCidades.innerHTML = `<option value="${objCidades.MinasGerais[0].replace(" ", "")}">${objCidades.MinasGerais[0]}</option>
                                  <option value="${objCidades.MinasGerais[1].replace(" ", "")}">${objCidades.MinasGerais[1]}</option>
                                  <option value="${objCidades.MinasGerais[2].replace(" ", "")}">${objCidades.MinasGerais[3]}</option>`;
                        
    
    
    selectCidades.innerHTML = `<option value="${objCidades.MinasGerais[0].replace(" ", "")}">${objCidades.MinasGerais[0]}</option>
                                  <option value="${objCidades.MinasGerais[1].replace(" ", "")}">${objCidades.MinasGerais[1]}</option>
                                  <option value="${objCidades.MinasGerais[2].replace(" ", "")}">${objCidades.MinasGerais[3]}</option>`;
    
        
            
            
                                  objCidades.MinasGerais.forEach(cidade => {
                const opcao = document.createElement("option");
                opcao.value = cidade.replace(" ", "");
                const textoOpc = document.createTextNode(`${cidade}`)
                opcao.appendChild(textoOpc)
                selectCidades.appendChild(opcao)  
            });*/
            
}
