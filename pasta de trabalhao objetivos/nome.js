 const botoes = document.querySelectorAll(".botao");
  const texto=document.querySelectorAll(".aba-conteudo");
   const contadores=document.querySelectorAll(".contador");
     const tempoObejetivo1= new Date("2024-10-05T00:00:00");
      const tempoObejetivo2= new Date("2025-08-05T00:00:00");
        const tempoObejetivo3= new Date("2026-09-05T00:00:00");
          const tempoObejetivo4= new Date("2027-10-05T00:00:00");
             const tempoAtual=new Date;
     //Declara quais elementos vão ser lidos. O script vai ler todos que tiverem a classe "botao".

     for(let i=0;i <botoes.length;i++){
          //Variável "i" é igual a 0, mas enquanto essa variável for menor que a quantidade de elementos nessa lista, aumentamos o valor de "i", ou seja, i será a quantidade de botões.
      botoes[i].onclick = function() {
          for(let j=0;j<botoes.length;j++) {
            botoes[j].classList.remove("ativo");
              texto[j].classList.remove("ativo");
        }
                //Remove a classe "ativo" de todos os botões.
                  botoes[i].classList.add("ativo");
                      texto[i].classList.add("ativo");

        //Adiciona a classe ativo só no botão clicado.
    }
} 
 contadores[0].textContent=calculaTempo(tempoObejetivo1);
  contadores[1].textContent=calculaTempo(tempoObejetivo2);
   contadores[2].textContent=calculaTempo(tempoObejetivo3);
    contadores[3].textContent=calculaTempo(tempoObejetivo4);

      function calculaTempo(tempoObejetivo){
         let tempoAtual=new Date ();
           let  tempoFinal=tempoObejetivo-tempoAtual;
              let segundos=Math.floor(tempoFinal/1000);
                let minutos=Math.floor(segundos/60);
                   let horas=Math.floor(minutos/60);
                     let dias=Math.floor(horas/24);

    segundos%=60;
    minutos%=60;
    horas%=24;

    return dias+"dias"+horas+"horas"+minutos+"minutos"+segundos+"segundos" 
 }
 comecacronometro();
  function comecacronometro(){
   atulizacronometro();
     setInterval(atulizacronometro,1000);
 }
       function atulizacronometro(){

 }