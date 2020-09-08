const menuContainer = document.getElementById('mobile-menu')
const menuIcon = document.getElementById('menu-icon')
const menuCloseIcon = document.getElementById('menu-close-icon')

menuIcon.addEventListener('click', event => {
  event.preventDefault()

  if (!menuContainer.classList.contains('mobile-menu_opened')) {
    menuContainer.classList.add('mobile-menu_opened')
  }
})

menuCloseIcon.addEventListener('click', event => {
  event.preventDefault()

  if (menuContainer.classList.contains('mobile-menu_opened')) {
    menuContainer.classList.remove('mobile-menu_opened')
  }
})
