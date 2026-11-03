class Turma{
    #professor;
    #curso;
    #alunos;

    constructor(professor, curso){
        this.#professor = professor;
        this.#curso = curso;
        this.#alunos = [];
    }

    adicionarAluno(aluno){
        this.#alunos.push(aluno);
    }
    getAluno(nome){
        for(let i=0; i<this.#alunos.length; i++){
            if(this.#alunos[i].getNome() == nome){
                return this.#alunos[i];
            }
        }
        return null;
    }
    getAlunos(){
        return this.#alunos;
    }
    getQuantidadeAlunos(){
        return this.#alunos.length;
    }

    getProfessor(){
        return this.#professor;
    }
    setProfessor(){
        return this.#professor = professor;
    }

    getCurso(){
        return this.#curso;
    }
    setCurso(){
        return this.#curso = curso;
    }
}//fim classe