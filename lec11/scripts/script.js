const menuButton = document.querySelector('.icon-menu');

menuButton.addEventListener('click', function (e) {
    if(e.target.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open')
    }
})
document.addEventListener('DOMContentLoaded', () => {
    const daElements = document.querySelectorAll('[data-da]');

    daElements.forEach(el => {
        const [breakpointStr, targetSelector] = el.dataset.da.split(',').map(s => s.trim());
        const breakpoint = parseInt(breakpointStr, 10);
        const target = document.querySelector(targetSelector);

        const originalParent = el.parentElement;
        // щоб поставити перед елементом(тобто там де і був елемент)
        const originalNext = el.nextElementSibling;

        const moveElement = () => {
            if (window.innerWidth <= breakpoint) {
                if (!target.contains(el)) target.append(el);
            } else {
                if (!originalParent.contains(el)) {
                    if (originalNext) {
                        originalParent.insertBefore(el, originalNext);
                    } else {
                        originalParent.append(el);
                    }
                }
            }
        };

        moveElement();
        // зміна екрану
        window.addEventListener('resize', moveElement);
    });
});
