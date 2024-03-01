document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to input elements to rotate caret icons
    Array.from(document.getElementsByTagName('input')).forEach((e, i) => {
        e.addEventListener('keyup', () => {
            if (e.value.length > 0) {
                document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
            } else {
                document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
            }
        });
    });

    // Toggle menu visibility
    let menu_btn = document.getElementsByClassName('bi-three-dots')[0];
    let menu_bx = document.getElementById('menu_bx');

    menu_btn.addEventListener('click', () => {
        menu_bx.classList.toggle('ul_active');
    });

    // Scroll to "Offers" section when "Start your search" button is clicked
    var startSearchButton = document.querySelector('button');
    var targetSection = document.querySelector('.offers');

    startSearchButton.addEventListener('click', function () {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to "Subscribe" section when "Register" button is clicked
    var registerButton = document.getElementById('registerLink');
    var subscribeSection = document.querySelector('.destination');
    //subscribeSection.scrollIntoView({ behavior: 'smooth' });

    registerButton.addEventListener('click', function () {
        subscribeSection.scrollIntoView({ behavior: 'smooth' });
    });
});
