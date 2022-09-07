import scrollSpy from 'simple-scrollspy';

scrollSpy('.rs-scroll-nav', {
    sectionClass    : '.rs-scroll-section',
    menuActiveTarget: 'li > a',
    offset          : 100,
    smoothScroll    : false,
});
