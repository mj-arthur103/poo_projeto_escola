class Pessoa{
    #nome;
    #matricula;
    #estado;
    constructor(nome, matricula, estado){
        this.#nome = nome;
        this.#matricula = matricula;
        this.#estado = estado;
    }

    getNome(){
        return this.#nome;
    }
    setNome(nome){
        this.#nome = nome;
    }

    getMatricula(){
        return this.#matricula;
    }
    setMatricula(matricula){
        this.#matricula = matricula;
    }

    getEstado(estado){
        return this.#estado;
    }
    setEstado(estado){
        this.#estado = estado;
    }
    
}