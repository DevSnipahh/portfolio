window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            section.style.opacity = '1';
            section.style.transform = 'translateX(0)';
        }
    });
});
