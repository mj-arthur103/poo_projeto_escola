class Interface{

    constructor(){

    }
    
    static salvar(){ //isso é um metodo estatico, n vou precisar criar um objeto toda hora para usar, não vou precisar o "new" mais de uma vez
        let nome = document.getElementById("nome").value
        let n1 = Number(document.getElementById("n1").value);
        let n2 = Number(document.getElementById("n2").value);
        let n3 = Number(document.getElementById("n3").value);
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
        lista += "<tr> <th>Nome</th> <th>Média</th> <th>Situação</th>  <th>Nota de Recuperação</th> </tr>";
          
        for(let i=0;i<turma.length;i++){
            
          lista += '<tr>';
          lista += '<td>' + turma[i].nome + '</td>';
          lista += '<td>' + turma[i].media.toFixed(2) + '</td>';
              
          //Operador ternario igual o if e else "?", implica q a primeira afirmação é true, e se for faz oq está depois, se for false faz oq tá dps do ":"
          let classe = turma[i].estado == "Aprovado" ? "aprovado" : turma[i].estado == "Reprovado" ? "reprovado" : "recuperacao"; 
              
          // Variavel Classe é só para poder adicionar a cor do css
          lista += '<td class="' + classe + '">' + turma[i].estado + '</td>';
          lista += '<td>' + (turma[i].notaRecuperacao !== null ? turma[i].notaRecuperacao.toFixed(2) : '') + '</td>';
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