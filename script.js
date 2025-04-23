document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});
