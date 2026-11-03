//o main ele é um arquivo de fachada, serve seria só para chamar os metodos que estão dentro da classe sem ter q usar o "new"
let turmas = [];

// devolve a turma escolhida no <select> da aba Listar
function turmaSelecionada(){
    let i = document.getElementById("turma-lista").value;
    return turmas[i];
}

function salvarTurma(){
    let t = Interface.salvarTurma();
    if(t){
        turmas.push(t);
        Interface.atualizarTurmas(turmas);
    }
}

function listar(){
    Interface.listar(turmaSelecionada());
}

function editarNome(i){
    let aluno = turmaSelecionada().getAluno(i);
    let novoNome = prompt("Digite o novo nome do aluno:", aluno.getNome());
    if(novoNome !== null && novoNome.trim() !== "") {
        aluno.setNome(novoNome);
        listar();
    }
}

function editarNota(i){
    let aluno = turmaSelecionada().getAluno(i);
    let notaAtual1 = prompt("Digite a nova nota 1 do aluno:", aluno.getNota1());
    if(notaAtual1 !== null && notaAtual1 !== "" && notaAtual1 >= 0 && notaAtual1 <= 10) {
        aluno.setNota1(parseFloat(notaAtual1));
    }

    let notaAtual2 = prompt("Digite a nova nota 2 do aluno:", aluno.getNota2());
    if(notaAtual2 !== null && notaAtual2 !== "" && notaAtual2 >= 0 && notaAtual2 <= 10) {

        aluno.setNota2(parseFloat(notaAtual2));
    }

    let notaAtual3 = prompt("Digite a nova nota 3 do aluno:", aluno.getNota3());
    if(notaAtual3 !== null && notaAtual3 !== "" && notaAtual3 >= 0 && notaAtual3 <= 10) {
        aluno.setNota3(parseFloat(notaAtual3));
    }

    let novaMedia = aluno.gerarMedia(aluno.getNota1(), aluno.getNota2(), aluno.getNota3()); //Recalcula a média, situação e nota de recuperação
    aluno.gerarEstado(novaMedia);
    aluno.gerarNotaRecuperacao();
    listar();
}

function salvar(){
    // primeiro vê em qual turma o aluno vai entrar
    let i = document.getElementById("turma-aluno").value;
    if(turmas.length == 0 || i === ""){
        alert("Cadastre uma turma antes de cadastrar alunos.");
        return;
    }

    let aluno = Interface.salvar();
    if (aluno) {
        turmas[i].adicionarAluno(aluno); // coloca o aluno no vetor de alunos da turma
        Interface.atualizarTurmas(turmas); // atualiza a quantidade de alunos na tabela de turmas
    }
}
