const numeros = document.querySelectorAll('.numero');
const numerosSelecionadosDiv = document.querySelector('.numeros-selecionados');
const jogosDivs = document.querySelectorAll('.jogo');
const gerarBtn = document.querySelector('#gerar');
const limparBtn = document.querySelector('#limpar');
const jogo = document.querySelector('#jogo');



let numerosSelecionados = [];

numeros.forEach(numero => {
  numero.addEventListener('click', () => {
    if (numerosSelecionados.includes(numero.textContent)) {
      numerosSelecionados.splice(numerosSelecionados.indexOf(numero.textContent), 1);
      numero.classList.toggle('selecionado');
    } else if (numerosSelecionados.length < 12) {
      numerosSelecionados.push(numero.textContent);
      numero.classList.toggle('selecionado');
    }
    //numerosSelecionadosDiv.innerHTML = numerosSelecionados.join(" ");
    numerosSelecionadosDiv.innerHTML = numerosSelecionados.map(numero => numero.padStart(2, '0')).join(" - ");

    //jogosDivs[index].innerHTML = jogo.map(numero => `<button class="numero">${numero.toString().padStart(2, '0')}</button>`).join('');


  });
});

    gerarBtn.addEventListener('click', () => {
     if (numerosSelecionados.length === 12) {
      let jogos = [];
        
      jogos.push([
        numerosSelecionados[1],
        numerosSelecionados[3],
        numerosSelecionados[6],
        numerosSelecionados[8],
        numerosSelecionados[9],
        numerosSelecionados[10]
      ]); // jogo 1
  
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[2],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[9]
      ]); // jogo 2
  
      jogos.push([
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[10]
      ]); // jogo 3
  
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[3],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[9],
        numerosSelecionados[11]
      ]); // jogo 4
  
      jogos.push([
        numerosSelecionados[5],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[9],
        numerosSelecionados[10],
        numerosSelecionados[11]
      ]); // jogo 5
  
      jogos.push([
        numerosSelecionados[2],
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[8],
        numerosSelecionados[9],
        numerosSelecionados[11]
      ]); // jogo 6
  
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[2],
        numerosSelecionados[4],
        numerosSelecionados[6],
        numerosSelecionados[10],
        numerosSelecionados[11]
      ]); // jogo 7
  
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[1],
        numerosSelecionados[4],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[8]
      ]); // jogo 8
  
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[1],
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[7],
        numerosSelecionados[9]
      ]); // jogo 9
  
      jogos.push([
        numerosSelecionados[1],
        numerosSelecionados[2],
        numerosSelecionados[3],
        numerosSelecionados[5],
        numerosSelecionados[7],
        numerosSelecionados[8]
      ]); // jogo 10

      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[1],
        numerosSelecionados[2],
        numerosSelecionados[5],
        numerosSelecionados[9],
        numerosSelecionados[10]
      ]); //

      jogosDivs.forEach((jogoDiv, index) => {
        const jogoNumerado = jogos[index];
        const textoJogo = `<div class="tttx">Jogo ${index + 1}: </div> <br>`;
        const numerosBotao = jogoNumerado
          .map(numero => `<button class="numero">${numero}</button>`)
          .join('');

        jogoDiv.innerHTML = textoJogo + numerosBotao;
        jogoDiv.style.display = 'inline-block';
      });
    }
  });

        
        
        /*assim funciona também
         jogosDivs[index].innerHTML = `<button class="numero">${jogo[0]}</button><button class="numero">${jogo[1]}</button> <button class="numero">${jogo[2]}</button> <button class="numero">${jogo[3]}</button><button class="numero">${jogo[4]}</button><button class="numero">${jogo[5]}</button>`;
        jogosDivs[index].style.display = 'inline-block';
    });
    }
    });
    */

      
      limparBtn.addEventListener('click', () => {
      numerosSelecionados = [];      
      numeros.forEach(numero => {
      numero.classList.remove('selecionado'); });
      numerosSelecionadosDiv.innerHTML = "";
      jogosDivs.forEach(jogoDiv => {
      jogoDiv.innerHTML = "";
      jogosDivs.forEach(jogoDiv => 
      jogoDiv.style.display = 'none');

      
      
      });
     
      });
      