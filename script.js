/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada 
aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Ruan",
    frstExam: 3,
    scndExam: 2
  },
  {
    name: "Augusto",
    frstExam: 10,
    scndExam: 5
  },
  {
    name: "Ruds",
    frstExam: 8,
    scndExam: 6
  },
  {
    name: "Nico",
    frstExam: 10,
    scndExam: 9
  }
]

function gradeAvg(students){
  return (students.frstExam + students.scndExam) / 2 ;
}

for(let student of students){
  if(gradeAvg(student) >= 7){
    alert(`O aluno ${student.name} teve uma nota de ${gradeAvg(student)} e passou no concurso.`)
  }
  else{
    alert(`O aluno ${student.name} teve uma nota de ${gradeAvg(student)} e não passou no concurso.`)
  }
}



