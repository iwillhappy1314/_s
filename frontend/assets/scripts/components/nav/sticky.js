function stickyNav() {
    const header = document.getElementById('masthead');
    const body = document.getElementsByTagName('body')[0];
    const sticky = header.offsetTop + 100;

    if (window.scrollY > sticky) {
        header.classList.add('is-sticky');
        body.classList.add('is-sticky');
    } else {
        header.classList.remove('is-sticky');
        body.classList.remove('is-sticky');
    }
}

export {stickyNav};