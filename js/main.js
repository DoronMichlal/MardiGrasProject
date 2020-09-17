let scrollDiv = document.getElementById('scrollUpDivWrapper');

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollDiv.style.display = 'block';
    } else {
        scrollDiv.style.display = 'none';
    }
}

/* Click Function */
scrollDiv.addEventListener('click', function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});
