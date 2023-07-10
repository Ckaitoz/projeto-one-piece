const personagens = document.querySelectorAll(".personagem");
personagens.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagem.classList.add('selecionado');
        personagemSelecionado.classList.remove('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDestricaoPersonagem(personagem);
    })
})

function alterarDestricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricao.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `SRC/imagens1/${idPersonagem}.webp`;
}
