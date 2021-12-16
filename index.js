const buttons = document.querySelectorAll('.button')
const emailBtn = document.querySelector('.emailBtn')
const tooltipText = document.querySelector('.tooltipText')

emailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText("miloclack@gmail.com");
    tooltipText.style.visibility = 'visible';
    setTimeout(() => {
        tooltipText.style.visibility = 'hidden';
    }, 2200);
})

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let url = e.target.firstElementChild.href
        if (e.target.classList.contains('projectLink')) {
            window.open(url);
        } else {
            window.open(url, '_self');
        }
    })
})

