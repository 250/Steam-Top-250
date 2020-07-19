new class {
    constructor() {
        this.initRankingHoverItems();
    }

    initRankingHoverItems() {
        document.querySelectorAll('.compact.ranking li > .title:not(:last-child)').forEach(a => {
            const shadow = a.nextElementSibling;

            // Prevent rapid re-entry when shape is clipped.
            shadow.style.pointerEvents = 'none';

            a.addEventListener('mouseenter', _ => {
                // Cancel any currently running animation on re-entry.
                shadow.classList.remove('animate');
                // Reflow hack to force immediate application.
                shadow.offsetWidth;

                shadow.classList.add('animate');
            })
            a.addEventListener('animationend', _ => {
                shadow.classList.remove('animate');
            })
        });
    }
};