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
  console.log(openSidebar);

  if (openSidebar) {
    openMenu();
    openSidebar = false;
    console.log('open');
  } else {
    closeMenu();
    openSidebar = true;
    console.log('close');
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
  if (window.innerWidth >= 1050) {
    closeMenu();
    openSidebar = true;
    console.log('close');
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
    if (window.innerWidth < 1050) {
      wrapperMenu.classList.toggle('open');
      handleSidebar();
    }
  });
}
