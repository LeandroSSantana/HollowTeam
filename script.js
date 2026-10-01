const container = document.getElementById("personagens");
const telaAbertura = document.getElementById("tela-abertura");
const btnIniciar = document.getElementById("btn-iniciar");
const musicaFundo = document.getElementById("musica-fundo");
const btnSom = document.getElementById("btn-som");

let estaTocando = false;

// Evento do botão de início
btnIniciar.addEventListener("click", () => {
    musicaFundo.volume = 0.5; // Volume a 50%
    musicaFundo.play().then(() => {
        estaTocando = true;
        btnSom.innerText = "🔊";
    }).catch(error => {
        console.log("Autoplay bloqueado pelo navegador.");
    });

    // Revela o botão de som e esconde a abertura
    btnSom.classList.remove("hidden");
    telaAbertura.classList.add("fade-out");
    
    setTimeout(() => {
        telaAbertura.style.display = "none";
        container.classList.remove("hidden");
    }, 800);
});

// Evento do botão de Ligar/Desligar som
btnSom.addEventListener("click", () => {
    if (estaTocando) {
        musicaFundo.pause();
        btnSom.innerText = "🔇";
        estaTocando = false;
    } else {
        musicaFundo.play();
        btnSom.innerText = "🔊";
        estaTocando = true;
    }
});

// Renderização dos personagens
personagens.forEach(personagem => {
    const elemento = document.createElement("div");
    elemento.classList.add("personagem");

    elemento.style.top = personagem.top;
    elemento.style.left = personagem.left;

    elemento.innerHTML = `
        <div class="avatar">
            <img src="${personagem.imagem}" 
            alt="${personagem.nome}"
            style="width: ${personagem.largura};">
        </div>

        <div class="nome-tag">
            ${personagem.apelido}
        </div>
    `;

    elemento.addEventListener("click", () => {
        mostrarInfo(personagem.nome, personagem.bio);
    });

    container.appendChild(elemento);
});

function mostrarInfo(nome, bio) {
    const caixa = document.getElementById("caixa-descricao");

    document.getElementById("info-nome").innerText = nome;
    document.getElementById("info-bio").innerText = bio;

    caixa.classList.remove("hidden");
}
