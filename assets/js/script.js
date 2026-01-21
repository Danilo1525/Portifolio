const elementoTexto = document.querySelector(".texto-dinamico");
const palavras = ["Front-end", "FullStack", "Back-End", "Criativo"];
let indicePalavra = 0;
let indiceLetra = 0;
let isApagando = false;

function digitar() {
  if (!elementoTexto) return; // Evita erro se o elemento não existir

  const palavraAtual = palavras[indicePalavra];

  if (isApagando) {
    elementoTexto.textContent = palavraAtual.substring(0, indiceLetra - 1);
    indiceLetra--;
  } else {
    elementoTexto.textContent = palavraAtual.substring(0, indiceLetra + 1);
    indiceLetra++;
  }

  let velocidade = isApagando ? 50 : 100;

  if (!isApagando && indiceLetra === palavraAtual.length) {
    velocidade = 2000;
    isApagando = true;
  } else if (isApagando && indiceLetra === 0) {
    isApagando = false;
    indicePalavra++;
    if (indicePalavra === palavras.length) {
      indicePalavra = 0;
    }
  }

  setTimeout(digitar, velocidade);
}

document.addEventListener("DOMContentLoaded", digitar);
