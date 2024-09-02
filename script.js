document.addEventListener('DOMContentLoaded', () => {
    const leesMeerButtons = document.querySelectorAll('.leesMeerBtn');
    const inklapButtons = document.querySelectorAll('.inklapBtn');

    // Functie om alle blogs in te klappen
    function collapseAllBlogs() {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            const gridContainer = card.closest('.grid');

            // Terug naar grid weergave als het full-width is
            if (gridContainer && gridContainer.classList.contains('full-width')) {
                gridContainer.classList.remove('full-width');
                gridContainer.classList.add('grid-3-columns');
            }

            // Verberg de lange tekst
            const extraTexts = card.querySelectorAll('.extraText');
            extraTexts.forEach(text => text.style.display = 'none');

            // Verberg de inklap knop
            card.querySelector('.inklapBtn').style.display = 'none';

            // Laat de lees verder knop weer zien
            card.querySelector('.leesMeerBtn').style.display = 'block';
        });
    }

    leesMeerButtons.forEach(button => {
        button.addEventListener('click', function() {
            collapseAllBlogs();  // Alle blogs worden eerst ingeklapt

            const card = this.closest('.card');
            const cardBody = card.querySelector('.card-body');
            const gridContainer = card.closest('.grid');

            // Wanneer iemand klikt op verder lezen bij een blog, zien ze de blog full-screen
            if (gridContainer) {
                gridContainer.classList.remove('grid-3-columns');
                gridContainer.classList.add('full-width');
            }

            // Alle tekst getoond
            const extraTexts = cardBody.querySelectorAll('.extraText');
            extraTexts.forEach(text => text.style.display = 'block');

            // Verberg de lees verder knop
            this.style.display = 'none';

            // Laat in plaats daarvan de inklap knop zien
            card.querySelector('.inklapBtn').style.display = 'block';
// Scroll naar het begin van de blog
card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
        });
    });

    inklapButtons.forEach(button => {
        button.addEventListener('click', function() {
            collapseAllBlogs();  // Alle blogs worden ingeklapt

            // Haal het doel op uit het data-id attribuut
            const targetId = this.getAttribute('data-id').replace('inklap', 'blogger');
            const targetElement = document.getElementById(targetId);

            // Scroll naar het specifieke element
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Slideshows instellen (hier blijft de originele code ongewijzigd)
    function showSlide(slides, index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[index].style.display = "block";
    }

    function setupSlideshow(slideshowClass, prevBtnClass, nextBtnClass) {
        let slides = document.querySelectorAll(slideshowClass + " img");
        let index = 0;

        showSlide(slides, index);

        document.querySelector(prevBtnClass).addEventListener('click', function() {
            index = (index > 0) ? index - 1 : slides.length - 1;
            showSlide(slides, index);
        });

        document.querySelector(nextBtnClass).addEventListener('click', function() {
            index = (index < slides.length - 1) ? index + 1 : 0;
            showSlide(slides, index);
        });
    }

    setupSlideshow(".anna-slide", ".anna-prev", ".anna-next");

    // Initiele verborgen tekst en inklap knoppen instellen
    document.querySelectorAll('.extraText').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.inklapBtn').forEach(btn => btn.style.display = 'none');
});
