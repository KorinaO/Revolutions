
//https://www.digital.ink/blog/sticky-navigation-visible-scroll-up/ by Utsab Karki
let lastScrollPosition = window.scrollY;
const body = document.body;

window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);

function handleScroll() {
    const windowScrollTop = window.scrollY;
    const currScrollPosition = windowScrollTop;

    // Determine Scrolling
    if (windowScrollTop <= 0) {
        // At the top
        body.classList.remove('scrolling', 'scrolling-up', 'scrolling-down');
    } else if (currScrollPosition < lastScrollPosition) {
        // Scrolling Up
        body.classList.add('scrolling', 'scrolling-up');
        body.classList.remove('scrolling-down');
    } else {
        // Scrolling Down
        body.classList.add('scrolling', 'scrolling-down');
        body.classList.remove('scrolling-up');
    }

    lastScrollPosition = currScrollPosition;
}

var popover = new bootstrap.Popover(document.getElementById('floatingBtn'), {
  trigger: 'focus'
})