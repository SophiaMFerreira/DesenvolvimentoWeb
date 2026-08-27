// 1. Todas as Funções e Métodos para Strings
const texto = "  Olá, Mundo!  ";

console.log(texto.charAt(1)); // Retorna o caractere na posição 1
console.log(texto.charCodeAt(1)); // Retorna o código UTF-16 do caractere
console.log(texto.concat(" Bem-vindo!")); // Concatena strings
console.log(texto.endsWith("!")); // Verifica se termina com "!"
console.log(texto.includes("Mundo")); // Verifica se contém "Mundo"
console.log(texto.indexOf("M")); // Retorna a posição da primeira ocorrência
console.log(texto.indexOf("o", 5)); // Começa a busca a partir do índice 5
console.log(texto.lastIndexOf("o")); // Retorna a posição da última ocorrência
console.log(texto.lastIndexOf("o", 8)); // Procura até o índice 8
console.log(texto.length); // Retorna o tamanho da string
console.log(texto.localeCompare("Olá, Mundo!")); // Compara duas strings
console.log(texto.match(/Mundo/)); // Retorna a correspondência encontrada
console.log(texto.match(/[A-Z]/g)); // Retorna todas as letras maiúsculas
console.log(texto.normalize()); // Normaliza a string
console.log(texto.padEnd(20, "*")); // Preenche a string até um determinado tamanho
console.log(texto.padStart(20, "*")); // Preenche a string no início
console.log(texto.repeat(2)); // Repete a string
console.log(texto.replace("Mundo", "JavaScript")); // Substitui parte da string
console.log(texto.replace(/o/g, "0")); // Substitui todas as ocorrências de "o" por "0"
console.log(texto.search("Mundo")); // Retorna o índice da correspondência
console.log(texto.search(/[A-Z]/)); // Retorna o índice da primeira letra maiúscula
console.log(texto.slice(2, 8)); // Retorna parte da string
console.log(texto.slice(-6)); // Retorna os últimos 6 caracteres
console.log(texto.split(",")); // Divide a string em array
console.log(texto.split("")); // Divide cada caractere da string
console.log(texto.startsWith("Olá")); // Verifica se começa com "Olá"
console.log(texto.startsWith("Mundo", 5)); // Verifica a partir do índice 5
console.log(texto.substring(2, 8)); // Retorna parte da string
console.log(texto.substring(8, 2)); // Ordem invertida ainda funciona
console.log(texto.toLocaleLowerCase()); // Converte para minúsculas considerando locale
console.log(texto.toLocaleUpperCase()); // Converte para maiúsculas considerando locale
console.log(texto.toLowerCase()); // Converte para minúsculas
console.log(texto.toUpperCase()); // Converte para maiúsculas
console.log(texto.trim()); // Remove espaços extras
console.log(texto.trimEnd()); // Remove espaços do final
console.log(texto.trimStart()); // Remove espaços do início


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Todas as Funções e Métodos para Objetos
const pessoa = { nome: "João", idade: 30, profissao: "Desenvolvedor" };

console.log(Object.assign({}, pessoa, { cidade: "São Paulo" })); // Copia e adiciona propriedades
console.log(Object.create(pessoa)); // Cria um novo objeto baseado em outro
console.log(Object.defineProperty(pessoa, "salario", { value: 5000 })); // Define uma nova propriedade
console.log(Object.entries(pessoa)); // Retorna um array de pares chave/valor
console.log(Object.freeze(pessoa)); // Congela o objeto impedindo alterações
console.log(Object.fromEntries([["nome", "Maria"], ["idade", 25]])); // Cria um objeto a partir de um array de pares
console.log(Object.getOwnPropertyNames(pessoa)); // Retorna propriedades do objeto
console.log(Object.getPrototypeOf(pessoa)); // Retorna o protótipo do objeto
console.log(Object.hasOwn(pessoa, "nome")); // Verifica se o objeto tem a propriedade (ES2022)
console.log(Object.is(25, "25")); // Compara dois valores
console.log(Object.isExtensible(pessoa)); // Verifica se o objeto pode ser estendido
console.log(Object.isFrozen(pessoa)); // Verifica se o objeto está congelado
console.log(Object.isSealed(pessoa)); // Verifica se o objeto está selado
console.log(Object.keys(pessoa)); // Retorna as chaves do objeto
console.log(Object.values(pessoa)); // Retorna os valores do objeto
console.log(Object.preventExtensions(pessoa)); // Impede a adição de novas propriedades
console.log(Object.seal(pessoa)); // Sela o objeto impedindo adição e remoção de propriedades

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. JSON - Conversão e Manipulação
/*
JSON (JavaScript Object Notation) é um formato leve para troca de dados.
Ele é baseado em texto e pode ser facilmente lido e escrito.
Usado para armazenar e transmitir informações entre sistemas.
*/

const jsonString = JSON.stringify(pessoa); // Converte objeto em JSON
console.log("JSON String:", jsonString);

const jsonObject = JSON.parse(jsonString); // Converte JSON em objeto
console.log("Objeto convertido:", jsonObject);

// Exemplo de JSON válido
const exemploJSON = '{ "nome": "Ana", "idade": 25, "cidade": "Rio de Janeiro" }';
const objExemplo = JSON.parse(exemploJSON); // Converte JSON para objeto
console.log(objExemplo.nome); // Acessando propriedade do objeto

// Criando um JSON a partir de um objeto
const novoObjeto = { produto: "Notebook", preco: 2500, estoque: true };
const jsonConvertido = JSON.stringify(novoObjeto);
console.log("JSON do objeto:", jsonConvertido);

// JSON com dados de um usuário - Implementação no HTML
const usuarioJSON = `{
    "nome": "Alice",
    "idade": 28,
    "cidade": "São Paulo"
  }`;
  
  // Converte JSON para objeto JavaScript
  const usuario = JSON.parse(usuarioJSON);
  
  // Cria um novo elemento <div> e define seu conteúdo
  const divUsuario = document.createElement("div");
  divUsuario.innerHTML = `<h2>${usuario.nome}</h2>
                          <p>Idade: ${usuario.idade}</p>
                          <p>Cidade: ${usuario.cidade}</p>`;
  
  // Adiciona ao corpo da página
  document.body.appendChild(divUsuario);
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Funções Essenciais
// Arrays
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.map(n => n * 2)); // Multiplica cada número por 2
console.log(numeros.filter(n => n % 2 === 0)); // Filtra números pares
console.log(numeros.reduce((acc, n) => acc + n, 0)); // Soma os números

// Datas
const agora = new Date();
console.log(agora.toLocaleDateString()); // Data formatada
console.log(agora.getFullYear()); // Ano atual


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Funções Matemáticas Principais (Math)
console.log(Math.round(4.7)); // Arredonda para o inteiro mais próximo
console.log(Math.floor(4.7)); // Arredonda para baixo
console.log(Math.ceil(4.3)); // Arredonda para cima
console.log(Math.trunc(4.9)); // Remove a parte decimal
console.log(Math.pow(2, 3)); // Calcula potência (2³ = 8)
console.log(Math.sqrt(16)); // Raiz quadrada de 16
console.log(Math.abs(-10)); // Valor absoluto (10)
console.log(Math.max(10, 20, 30)); // Retorna o maior valor
console.log(Math.min(10, 20, 30)); // Retorna o menor valor
console.log(Math.random()); // Retorna um número aleatório entre 0 e 1
console.log(Math.PI); // Retorna o valor de PI
console.log(Math.E); // Retorna a constante de Euler
console.log(Math.log(10)); // Logaritmo natural de 10
