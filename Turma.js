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
    getAluno(i){
        return this.#alunos[i];
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