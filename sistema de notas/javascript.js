let body = document.body
let formAluno = document.getElementById('form-aluno')

formAluno.addEventListener("submit", (event)=>{//('click', function(){}) atribuindo a função 
     event.preventDefault() //Cancela o evento se for cancelável, sem parar a programação do mesmo
     //Se bim1 <> e bim2 <> "" Então
     if(formAluno.nome.value == ""){
          alert("Preencha o nome")
     }else if(formAluno.serie.value == ""){
          alert("Preencha a serie")
     }else if(formAluno.materia.value == ""){
          alert("Selecione uma matéria")
     }else if(
          formAluno.bim1.value != "" &&
          formAluno.bim2.value != "" &&
          formAluno.bim3.value != "" &&
          formAluno.bim4.value != "" 
     ){//media bim1, bim2, bim3 e bim4
          formAluno.media.value = (Number(formAluno.bim1.value) +
                                   Number(formAluno.bim2.value) +
                                   Number(formAluno.bim3.value) +
                                   Number(formAluno.bim4.value))/4
          gerarRelatorio()
          //relatorio
     }else{
          alert("Preencha todos os campos")
     }
})
function gerarRelatorio(){
     let tbody = document.getElementById('relatorio')
     tbody.innerHTML = `<tr>
                            <td class="center">${formAluno.nome.value}</td>
                            <td class="center">${formAluno.serie.value}</td> 
                            <td class="center">${formAluno.materia.value}</td>
                            <td class="center">${formAluno.bim1.value}</td>
                            <td class="center">${formAluno.bim2.value}</td>
                            <td class="center">${formAluno.bim3.value}</td>
                            <td class="center">${formAluno.bim4.value}</td>
                            <td class="center">${formAluno.media.value}</td>
                            <td class="center">${formAluno.media.value > 7 ? "Aprovado" : "Reprovado"}</td>
                        </tr>`   
}