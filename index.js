const abas = document.querySelectorAll(".aba")

abas.forEach(aba => {
  aba.addEventListener("click", function() {
    
    if (aba.classList.contains("selecionado")) {
      return
    } 

    selecionarAba(aba)
    
    mostrarInformacoesDaAba(aba)
    
    
    
  })
}) 

//========== ABAS ==============
function selecionarAba(aba) {
  // quando o usuário clicar, desmarcar a aba selecionada
  
  const abaSelecionada = document.querySelector(".aba.selecionado")
  abaSelecionada.classList.remove("selecionado")
  
  // marcar a aba clicada como selecionada
  aba.classList.add("selecionado")
  
}

//============CONTEÚDO DAS ABAS==================
function mostrarInformacoesDaAba(aba) {
  
  // Esconder o conteúdo anterior

  const informacaoSelecionada = document.querySelector(".informacao.selecionado")
   informacaoSelecionada.classList.remove("selecionado") 

    // mostrar o conteúdo da aba selecionada
   const informacaoDaAba = `informacao-${aba.id}`
    
    console.log(informacaoDaAba);

  const informacaoMostrada = document.getElementById(informacaoDaAba)
  informacaoMostrada.classList.add("selecionado")
  
}