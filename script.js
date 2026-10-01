const container = document.getElementById("personagens");
const telaAbertura = document.getElementById("tela-abertura");
const btnIniciar = document.getElementById("btn-iniciar");

// Evento do botão de início
btnIniciar.addEventListener("click", () => {
    // Faz a tela de abertura sumir com animação
    telaAbertura.classList.add("fade-out");
    
    // Mostra a área dos personagens após a transição
    setTimeout(() => {
        telaAbertura.style.display = "none";
        container.classList.remove("hidden");
    }, 800); // Tempo igual ao da transição do CSS (0.8s)
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
