/*
  Nesse desafio você irá criar uma lista de estudantes e, 
  cada estudante dentro dessa lista, deverá 
  conter os seguintes dados:
  
  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  - Crie uma função que irá calcular a média das notas de cada aluno;
  - Supondo que a média, para esse concurso é 7, verifique se cada 
    aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
      name: "João",
      PP: 6,
      SP: 6,
  },
  {
      name: "Letícia",
      PP: 10,
      SP: 9,
  },
  {
      name: "Diego",
      PP: 8,
      SP: 10,
  },
  {
      name: "Julia",
      PP: 4.5,
      SP: 5.5,
  },
]

function average(PP, SP){
  return (PP + SP)/2
}

for(let student of students){
  let pass = average(student.PP, student.SP) >= 7
  if(pass){
    alert(`
      A média do(a) aluno(a) ${student.name} é: ${average(student.PP, student.SP)}
      Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `)
  } else {
    alert(`
      A média do(a) aluno(a) ${student.name} é: ${average(student.PP, student.SP)}
      Não foi dessa vez, ${student.name}! Tente novamente!
    `)
  }
}