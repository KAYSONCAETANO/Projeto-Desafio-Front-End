document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.idea-card-container');
    const frontCard = document.querySelector('.idea-card-front');
    const closeButton = document.querySelector('.close-idea-card');

    // Função para abrir o card
    function openCard() {
        cardContainer.classList.add('is-flipped');
    }

    // Função para fechar o card
    function closeCard(event) {
        // Impede que o clique no "X" acione a abertura novamente
        event.stopPropagation(); 
        cardContainer.classList.remove('is-flipped');
    }

    // Adiciona os eventos de clique
    if (cardContainer) {
        frontCard.addEventListener('click', openCard);
        closeButton.addEventListener('click', closeCard);
    }
});