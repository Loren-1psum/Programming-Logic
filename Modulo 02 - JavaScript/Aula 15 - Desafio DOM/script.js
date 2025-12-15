const alunos = [];

const nomeInput = document.getElementById('nomeAluno');
const notaInput = document.getElementById('notaAluno');
const listaAlunos = document.getElementById('listaAlunos');


// Função para atualizar a lista
function atualizarLista(alunosExibidos) {
  listaAlunos.innerHTML = '';
  
  alunosExibidos.forEach(aluno => {

    const li = document.createElement('li');

    // Observação: Notei que o toFixed arredonda, mas o código não percebe que o valor foi arredondado,
    // Por exemplo: se for digitado 6.99, a nota será considerada vermelha, mas aparecerá 7.0 no output do site, sendo que 7.0 é nota verde.
    li.textContent = `${aluno.nome} - Nota: ${aluno.nota.toFixed(1)}`;
    li.className = aluno.nota >= 7 ? 'aprovado' : 'reprovado';
    listaAlunos.appendChild(li);
  });
}


// Cadastro funcionalidade (Dá Trigger quando clica no botão)
document.getElementById('btnCadastrar').addEventListener('click', () => {

  const nome = nomeInput.value.trim();
  const nota = parseFloat(notaInput.value);

  if(nome === '' || isNaN(nota) || nota < 0 || nota > 10){
    alert('Por favor, informe um nome e uma nota válida entre 0 e 10.');
    return;
  }


  // Adiciona o aluno ao array
  alunos.push({ nome, nota });


  // Atualiza a lista com todos os alunos
  atualizarLista(alunos);


  // Limpa os campos (Quando você cadastra alguém, os campos já ficam limpos, e foca no campo de nome,
  // para você já poder digitar e cadastrar o próximo aluno sem precisar clicar de novo.)
  nomeInput.value = '';
  notaInput.value = '';
  nomeInput.focus();

});


// Filtra os alunos aprovados

document.getElementById('btnFiltrarAprovados').addEventListener('click', () => {

  const aprovados = alunos.filter(aluno => aluno.nota >= 7);
  atualizarLista(aprovados);

});


// Mostra todos os alunos

document.getElementById('btnMostrarTodos').addEventListener('click', () => {

  atualizarLista(alunos);

});
