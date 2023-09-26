/*

Advanced Interface Design with CSS | Assignment 1 | Emperor Music Streaming Application

Christopher Blouin

*/

// Assign document query selectors to variables matching the respective html element id's.
const toggleMenu = document.getElementById("toggle-menu");
const menuOpen = document.getElementById("open-menu");
const menuClose = document.getElementById("close-menu");
const backToTopButton = document.querySelector('#back-to-top');

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

// Add an event listener to the window object to track the position of the scroll on the Y Axis.
window.addEventListener('scroll', function () {
  // IF the window.scrollY is greater than or equal to 320px, the back to top button will be displayed.
  if (window.scrollY >= 320) {
    backToTopButton.style.display = 'block';
  }
  // ELSE hide the back to top button.
  else {
    backToTopButton.style.display = 'none';
  }
});

// Function to scroll to the top of the page when invoked.
function scrollToTop() {
  window.scrollTo({ top: 0, behaviour: 'smooth' });
}

// Attach the scrollToTop function to the back to top button, with a click event listener.
backToTopButton.addEventListener('click', scrollToTop);
