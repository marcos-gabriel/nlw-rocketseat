// Coments
Sdocument.write("Hello, friend")

// VARIAVEIS, TIPOS DE DADOS
var myvar = "He" //pode ser let tbm
const myconst = "He"

document.write(myvar + myconst)

// String
const s1 = "Isso é uma string"
const s2 = 'Isso também é uma string'
const s3 = `Isso é uma string também`

document.write (s1)

// Number
const n1 = 1
const n2 = 12

document.write(n1 + n2)

// Boolean - true or false
const bTrue = true
const bFalse = false

// ESTRUTURA DE DADOS
// Objeto: possuem propriedades e funcionalidades
const pessoa = {
  altura: "1,80m",
  idade: 24,
  solteiro: true,
  correr(){
    return "run Forest"
  }
}

document.write(pessoa.correr())

// Array - Vetores
const colecaoDeDados = ["Blue", "Green", 1, {name:"My Name"}]

document.write(colecaoDeDados[3].name)

// FUNÇÕES - funcionalidades - atalhos - reuso de códigos
// registrar a função
function sayMyName() {
  document.write("Heisenberg")
}

// executar a função
sayMyName()

// Outra forma
function sayMyName(name) {
  document.write(name)
}

// executar a função
sayMyName("Heisenberg")
sayMyName(" Sam Sepiol")

// CONDIÇÕES
const notaFinal = 7

if(notaFinal < 5) {
  document.write("Reprovado")
} else {
  document.write("Aprovado")
}

// Repetições - loop
for (i = 0; i < 10;i++ ) {
  document.write(`<p>${i}</p>`)
}

