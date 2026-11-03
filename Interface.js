class Interface{

    constructor(){

    }
    
    static salvarTurma(){
        let professor = document.getElementById("professor").value.trim();
        let curso = document.getElementById("curso").value.trim();

        if(professor == "" || curso == ""){
            alert("Preencha o professor e o curso.");
            return;
        }

        let t = new Turma(professor, curso);

        document.getElementById("professor").value = "";
        document.getElementById("curso").value = "";
        alert("Turma Cadastrada");

        return t;
    }

    // Atualiza os <select> de turma e a tabela de turmas
    static atualizarTurmas(turmas){
        const selects = [document.getElementById("turma-aluno"), document.getElementById("turma-lista")];

        for(let s=0;s<selects.length;s++){
            let selecionada = selects[s].value; // guarda a escolha atual
            let opcoes = "";
            if(turmas.length == 0){
                opcoes = '<option value="">Nenhuma turma cadastrada</option>';
            }
            for(let i=0;i<turmas.length;i++){
                opcoes += '<option value="' + i + '">' + turmas[i].getCurso() + ' - Prof. ' + turmas[i].getProfessor() + '</option>';
            }
            selects[s].innerHTML = opcoes;
            if(selecionada !== ""){
                selects[s].value = selecionada;
            }
        }

        let lista = "<table>";
        lista += "<tr> <th>Curso</th> <th>Professor</th> <th>Qtd. de Alunos</th> </tr>";
        for(let i=0;i<turmas.length;i++){
            lista += '<tr>';
            lista += '<td>' + turmas[i].getCurso() + '</td>';
            lista += '<td>' + turmas[i].getProfessor() + '</td>';
            lista += '<td>' + turmas[i].getQuantidadeAlunos() + '</td>';
            lista += '</tr>';
        }
        lista += '</table>';
        document.getElementById("lista-turmas").innerHTML = turmas.length == 0 ? "" : lista;
    }

    static salvar(){ //isso é um metodo estatico, n vou precisar criar um objeto toda hora para usar, não vou precisar o "new" mais de uma vez
        let nome = document.getElementById("nome").value
        let n1 = Number(document.getElementById("n1").value);
        let n2 = Number(document.getElementById("n2").value);
        let n3 = Number(document.getElementById("n3").value);

        if(nome == ""){
            alert("Coloque o nome do aluno.");
            return;
        }
        
        if(n1 == null || n1 == "" || n2=="" || n2 == null || n3 == null || n3 == "" || 
           n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10){
            
            alert("As notas devem estar entre 0 e 10.");
            return;
        }

        let a1 = new Aluno(nome,n1,n2,n3);
        let m = a1.gerarMedia(n1,n2,n3);
        let e = a1.gerarEstado(m);
        let r = a1.gerarNotaRecuperacao(m);
        
        
        alert("Aluno Cadastrado")
        
        return a1;
    }
    

    static listar(turma) {
        const btnCadastrar = document.getElementById('btn-cadastrar');
        const tabCadastrar = document.getElementById('tab-cadastrar');
        const btnListar = document.getElementById('btn-listar');
        const tabListar = document.getElementById('tab-listar');
        
        btnListar.classList.add('active');
        btnCadastrar.classList.remove('active');
          
        // Ajusta o conteúdo visível
        tabListar.classList.add('active');
        tabCadastrar.classList.remove('active');
          
        let lista = "<table>";
        lista += "<tr> <th>Nome</th> <th>Nota 1</th> <th>Nota 2</th> <th>Nota 3</th> <th>Média</th> <th>Situação</th>  <th>Nota de Recuperação</th> </tr>";
          
        for(let i=0;i<turma.length;i++){
            
          lista += '<tr>';
          lista += '<td>' + turma[i].getNome() + '</td>';
          lista += '<td>' + turma[i].getNota1().toFixed(2) + '</td>';
          lista += '<td>' + turma[i].getNota2().toFixed(2) + '</td>';
          lista += '<td>' + turma[i].getNota3().toFixed(2) + '</td>';
          lista += '<td>' + turma[i].media.toFixed(2) + '</td>';
              
          //Operador ternario igual o if e else "?", implica q a primeira afirmação é true, e se for faz oq está depois, se for false faz oq tá dps do ":"
          let classe = turma[i].estado == "Aprovado" ? "aprovado" : turma[i].estado == "Reprovado" ? "reprovado" : "recuperacao"; 
              
          // Variavel Classe é só para poder adicionar a cor do css
          lista += '<td class="' + classe + '">' + turma[i].estado + '</td>';
          lista += '<td>' + (turma[i].notaRecuperacao !== null ? turma[i].notaRecuperacao.toFixed(2) : '') + '</td>';
          
          lista += '<td class="editar">';
          lista += '<button class="btn_editar" onclick="editarNome(' + i + ')">Editar Nome</button>';
          lista += '<button class="btn_editar" onclick="editarNota(' + i + ')">Editar Notas</button>';
          lista += '</td>';
          lista += '</tr>';
        }
        
        lista += '</table>';
        document.getElementById("lista-alunos").innerHTML = lista;  
    }
        
    static cadastrar(){
        const btnCadastrar = document.getElementById('btn-cadastrar');
        const tabCadastrar = document.getElementById('tab-cadastrar');
        const btnListar = document.getElementById('btn-listar');
        const tabListar = document.getElementById('tab-listar');
        
        btnListar.classList.remove('active');
        btnCadastrar.classList.add('active');
          
        // Ajusta o conteúdo visível
        tabListar.classList.remove('active');
        tabCadastrar.classList.add('active');
        //document.getElementById("media").innerHTML = m;
    }
      
}