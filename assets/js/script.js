// ANIMAÇÃO DE DIGITAÇÃO INFINITA
const elementoTexto = document.querySelector(".texto-dinamico");
const palavras = ["Front-end", "FullStack", "Back-End", "Criativo"];
let indicePalavra = 0;
let indiceLetra = 0;
let isApagando = false;

function digitar() {
  if (!elementoTexto) return;

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

// ANIMAÇÃO AO SCROLL
const observador = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

const elementosAnime = document.querySelectorAll(".anime-scroll");
elementosAnime.forEach((elemento) => observador.observe(elemento));

// ANO ATUAL AUTOMÁTICO
const anoSpan = document.getElementById("ano-atual");
if (anoSpan) {
  anoSpan.textContent = new Date().getFullYear();
}

// MENU MOBILE

const btnMobile = document.querySelector(".btn-mobile");
const navLinks = document.querySelector(".links-navegacao");

function toggleMenu() {
  if (navLinks && btnMobile) {
    navLinks.classList.toggle("ativo");
    btnMobile.classList.toggle("ativo");
  }
}

if (btnMobile) {
  btnMobile.addEventListener("click", toggleMenu);
}

// Fecha o menu ao clicar em um link
document.querySelectorAll(".links-navegacao a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks && btnMobile) {
      navLinks.classList.remove("ativo");
      btnMobile.classList.remove("ativo");
    }
  });
});
