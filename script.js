document.addEventListener('DOMContentLoaded', function() {
    const translateToEnglish = document.getElementById('translateToEnglish');
    const translateToDutchBack = document.getElementById('translateToDutchBack');
    const translateToEnglishBack = document.getElementById('translateToEnglishBack');
    const translateToDutch = document.getElementById('translateToDutch');

    const dutchContent = document.querySelectorAll('.dutch');
    const englishContent = document.querySelectorAll('.english');
    const englishButton = document.querySelectorAll('.englishButton');
    const dutchButton = document.querySelectorAll('.dutchButton');

    function showDutch() {
        dutchContent.forEach(element => element.style.display = 'block');
        englishContent.forEach(element => element.style.display = 'none');
        englishButton.forEach(button => button.style.display = 'block');
        dutchButton.forEach(button => button.style.display = 'none');
        setupSlideshow(".anna-slide", ".anna-prev", ".anna-next"); 
    }

    function showEnglish() {
        dutchContent.forEach(element => element.style.display = 'none');
        englishContent.forEach(element => element.style.display = 'block');
        englishButton.forEach(button => button.style.display = 'none');
        dutchButton.forEach(button => button.style.display = 'block');
        setupSlideshow(".anna-slide", ".anna-prev", ".anna-next"); 
    }

    translateToEnglish.addEventListener('click', function(event) {
        event.preventDefault();
        showEnglish();
    });

    translateToDutchBack.addEventListener('click', function(event) {
        event.preventDefault();
        showDutch();
    });

    translateToEnglishBack.addEventListener('click', function(event) {
        event.preventDefault();
        showEnglish();
    });

    translateToDutch.addEventListener('click', function(event) {
        event.preventDefault();
        showDutch();
    });

    // Standaard de Engelse inhoud tonen bij het laden van de pagina
    showDutch();

    function showSlide(slides, index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[index].style.display = "block";
    }

    function setupSlideshow(slideshowClass, prevBtnClass, nextBtnClass) {
        const slideshows = document.querySelectorAll('.slideshow-container');
        slideshows.forEach(slideshow => {
            let slides = slideshow.querySelectorAll(slideshowClass + " img");
            let prevBtn = slideshow.querySelector(prevBtnClass);
            let nextBtn = slideshow.querySelector(nextBtnClass);
            let index = 0;

            showSlide(slides, index);

            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', function() {
                    index = (index > 0) ? index - 1 : slides.length - 1;
                    showSlide(slides, index);
                });

                nextBtn.addEventListener('click', function() {
                    index = (index < slides.length - 1) ? index + 1 : 0;
                    showSlide(slides, index);
                });
            }
        });
    }
});





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

