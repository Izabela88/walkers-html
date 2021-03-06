// Code from https://codepen.io/JoseRosario/pen/BWqMwK*
function toggleHamburgerIcon() {
  let wrapperMenu = document.querySelector('.wrapper-menu');

  wrapperMenu.addEventListener('click', function () {
    wrapperMenu.classList.toggle('open');
  });
}

/* My code starts here
    Open and close sidebar for small devices*/
const hamburgerIcon = document.querySelector('.wrapper-menu');
const closeButtons = document.querySelectorAll('.close-sidebar');

let openSidebar = true;

toggleHamburgerIcon();

function handleSidebar() {
  if (openSidebar) {
    openMenu();
    openSidebar = false;
  } else {
    closeMenu();
    openSidebar = true;
  }
}

function openMenu() {
  document.getElementById('my-sidebar').style.width = '50%';
}

function closeMenu() {
  document.getElementById('my-sidebar').style.width = null;
}

hamburgerIcon.addEventListener('click', function (e) {
  handleSidebar();
});

function toggleWrapperMenuOnResize() {
  if (window.innerWidth >= 1150) {
    closeMenu();
    openSidebar = true;
    let wrapperMenu = document.querySelector('.wrapper-menu.open');
    if (wrapperMenu) {
      wrapperMenu.classList.toggle('open');
    }
  }
}

window.addEventListener('resize', toggleWrapperMenuOnResize);

/* After pressing sidebar links and scrolling to a given section,
    the sidebar closes automatically*/
for (const button of closeButtons) {
  let wrapperMenu = document.querySelector('.wrapper-menu');
  button.addEventListener('click', function (e) {
    if (window.innerWidth < 1150) {
      wrapperMenu.classList.toggle('open');
      handleSidebar();
    }
  });
}


// Change navbar background color on scrolling
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');

  if (window.pageYOffset > 100 && window.innerWidth > 1150) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hide and show navbar on scrolling

// Variable which stores position of page
let previousPosition;
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  // Get the scroll position
  let currentPosition =
    window.pageYOffset || document.documentElement.currentPosition;
  // Check weather the page is scrolled up or down
  if (currentPosition > previousPosition && window.innerWidth > 1150) {
    header.style.top = '-200px';
  } else {
    header.style.top = '0';
  }
  previousPosition = currentPosition;
});

// Change active menu item (link) on page scroll
window.addEventListener('scroll', (e) => {
  let sections = document.querySelectorAll('.section');
  let navLinks = document.querySelectorAll('.nav-link');
  for (let [i, section] of sections.entries()) {
    let box = section.getBoundingClientRect();
    if (box.top <= 10 && box.bottom >= 20) {
      navLinks[i].classList.add('active');
    } else {
      navLinks[i].classList.remove('active');
    }
  }
});