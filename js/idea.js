document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.idea-card-container');
    const frontCard = document.querySelector('.idea-card-front');
    const closeButton = document.querySelector('.close-idea-card');
    const professionsImage = document.querySelector('.professions-image-wrapper img');

    // Função para abrir o card
    function openCard() {
        cardContainer.classList.add('is-flipped');
        document.body.classList.add('light-theme');
        if (professionsImage) {
            professionsImage.src = 'img/sessions/brain_color.gif'; // Caminho para a imagem colorida
        }
    }
    

    // Função para fechar o card
    function closeCard(event) {
        // Impede que o clique no "X" acione a abertura novamente
        event.stopPropagation(); 
        cardContainer.classList.remove('is-flipped');
        document.body.classList.remove('light-theme');
        if (professionsImage) {
            professionsImage.src = 'img/sessions/brain_black.gif'; // Caminho para a imagem cinza
        }
    }

    // Adiciona os eventos de clique
    if (cardContainer) {
        frontCard.addEventListener('click', openCard);
        closeButton.addEventListener('click', closeCard);
    }
});