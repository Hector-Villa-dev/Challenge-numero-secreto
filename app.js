// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
  const inputAmigos = document.getElementById("amigo");
  const nombreAmigo = inputAmigos.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, ingrese un nombre");
    return;
  }

  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre "${nombreAmigo}" ya está en la lista`);
    return;
  }

  amigos.push(nombreAmigo);
  inputAmigos.value = "";
  actualizarLista();
}

function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear, por favor agrega al menos uno");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

  amigosSorteados.push(amigoSorteado);
  amigos.splice(indiceAleatorio, 1);

  if (amigos.length === 0) {
    alert(
      "¡Sorteo completado! Estos fueron todos los participantes:\n" +
      amigosSorteados.join(", ")
    );
  }

  actualizarLista();
}