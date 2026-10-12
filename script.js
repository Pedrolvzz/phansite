let votosSim = Number(localStorage.getItem("phansite-votosSim") ?? 0);
let votosNao = Number(localStorage.getItem("phansite-votosNao") ?? 0); 

const botaoSim = document.querySelector("#votar-sim");
const botaoNao = document.querySelector("#votar-nao");
const preenchimento = document.querySelector(".preenchimento");
const porcentagem = document.querySelector(".porcentagem");

function atualizarVotacao() {
    const total = votosSim + votosNao;
    
    const percentual = total === 0
    ? 0
    : (votosSim / total) * 100;

    preenchimento.style.width = `${percentual}%`;

    porcentagem.textContent = total === 0
    ? "Sem votos"
    : percentual.toFixed(1).replace(".", ",") + "%"

    localStorage.setItem("phansite-votosSim", votosSim);
    localStorage.setItem("phansite-votosNao", votosNao);
}



botaoSim.addEventListener("click", function () {
    votosSim++;
    atualizarVotacao();
});

botaoNao.addEventListener("click", function () {
    votosNao++;
    atualizarVotacao();
});

atualizarVotacao();

const formulario = document.querySelector("#form-comentario");
const campoComentario = document.querySelector("#texto-comentario");
const listaComentarios = document.querySelector("#lista-comentarios");

const comentarios = JSON.parse(
  localStorage.getItem("comentarios") ?? "[]"
);

function mostrarComentarios() {
  listaComentarios.replaceChildren();

  for (const texto of comentarios) {
    const comentario = document.createElement("p");

    comentario.classList.add("comentario");
    const autor = document.createElement("strong");
    autor.classList.add("autor-comentario");
    autor.textContent = "Anon: ";
    
    comentario.appendChild(autor);
    comentario.appendChild(document.createTextNode(texto));

    listaComentarios.appendChild(comentario);
  }
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campoComentario.value.trim();

  if (texto === "") {
    return;
  }

  comentarios.unshift(texto);

  localStorage.setItem("comentarios", JSON.stringify(comentarios));

  mostrarComentarios();
  formulario.reset();
});

mostrarComentarios();