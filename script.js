let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

function cadastrarAluno() {
  let nome = document.getElementById("nome").value;
  let idade = parseInt(document.getElementById("idade").value);

  if (!nome || isNaN(idade)) {
    alert("Por favor, insira o nome e a idade do aluno.");
    return;
  }

  let maiorIdade = idade >= 18;

  let aluno = {
    nome: nome,
    idade: idade,
    maiorIdade: maiorIdade
  };

  alunos.push(aluno);
 
  localStorage.setItem("alunos", JSON.stringify(alunos));

  document.getElementById("nome").value = '';
  document.getElementById("idade").value = '';

  window.location.href = 'listagem.html';
}
