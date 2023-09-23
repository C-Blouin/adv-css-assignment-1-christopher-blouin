// Assign document query selectors to variables matching the respective html element id's.
const toggleMenu = document.getElementById('toggle-menu');
const menuOpen = document.getElementById('open-menu');
const menuClose = document.getElementById('close-menu');

// Assign the menu links variable to select all the links in the navigation menu.
const menuLinks = document.querySelectorAll('#toggle-menu ul li a');

// Add event listeners to open and close the navigation menu.
menuOpen.addEventListener('click', () => {
  toggleMenu.classList.toggle('show__nav');
});

menuClose.addEventListener('click', () => {
  toggleMenu.classList.toggle('show__nav');
});

// This function will be called whenever a link in the menu is clicked, it will slide the menu out of the viewport as my CSS has a class named .show__nav which will slide the menu out of the viewport.
function closeMenu() {
  toggleMenu.classList.remove('show__nav');
}

// Add event listeners on each link in the menu to close the menu when a link is clicked. It will invoke the closeMenu function on each link click.
menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
