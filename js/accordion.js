const professionCards = document.querySelectorAll('.profession-card');

professionCards.forEach(clickedCard => {
    clickedCard.addEventListener('click', () => {
        
        professionCards.forEach(otherCard => {

            if (otherCard !== clickedCard) {

                otherCard.classList.remove('expand');
            }
        });

        clickedCard.classList.toggle('expand');
    });
});