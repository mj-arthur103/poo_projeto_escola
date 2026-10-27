//o main ele é um arquivo de fachada, serve seria só para chamar os metodos que estão dentro da classe sem ter q usar o "new"
let turma=[];

function listar(){
    Interface.listar(turma);
}

function salvar(){
    let aluno = Interface.salvar();
    turma.push(aluno); //o ".push", é igual o turma[turma.lenght], ele tá armazenando o tamanho do vetor
}
/*
Função de "faxada" para usar o cadastrar, mas a gente tá chamando direto no html

function cadastrar(){
    Interface.cadastrar();
}
*/

