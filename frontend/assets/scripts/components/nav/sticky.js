function stickyNav() {
    const header = document.getElementById('masthead');
    const body = document.getElementsByTagName('body')[0];
    const sticky = header.offsetTop + 0;

    if (body.classList.contains('rs-sticky')) {
        if (window.scrollY > sticky) {
            body.classList.add('is-sticky');
        } else {
            body.classList.remove('is-sticky');
        }
    }
}

export {stickyNav};
