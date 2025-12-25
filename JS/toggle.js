
const toggle = document.getElementById('burger');
const checkbox = document.getElementById('burgerCheck');
const list = document.getElementById('nav_menu');
const links = list.querySelectorAll('a');



toggle.addEventListener('click', () => {
  checkbox.checked = !checkbox.checked;   // triggers animation
  list.classList.toggle('nav_menu');   // shows menu
});



// This js will close the menu when a link is clicked
links.forEach( function (link) {
        link.addEventListener('click', () => {
            checkbox.checked = false; // uncheck the checkbox to trigger animation
            list.classList.remove('nav_menu'); // hide the menu
        });
    });

    // this js will close the menu when a cursor click outsude the menu
    document.addEventListener('click', function(event) {
        const isClickInside = list.contains(event.target) || toggle.contains(event.target);
        if (!isClickInside) {
            checkbox.checked = false; // uncheck the checkbox to trigger animation
            list.classList.remove('nav_menu'); // hide the menu
        }   
    });

