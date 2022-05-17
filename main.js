window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScrol()
  showBackToTopOnScroll()

  activateMenuOnCurrentSection(home)
  activateMenuOnCurrentSection(services)
  activateMenuOnCurrentSection(about)
}

function activateMenuOnCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2.4

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop

  const sectionEnd = sectionTop + sectionHeight

  const sectionEndPassedLine = sectionEnd <= targetLine

  const sectionBoundaries =
    sectionTopReachedOrPassedTargetLine && !sectionEndPassedLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScrol() {
  if (scrollY > 30) {
    topbar.classList.add('scroll')
  } else {
    topbar.classList.remove('scroll')
  }
}

//console.log(scrollY)    mostra onde

function showBackToTopOnScroll() {
  if (scrollY > 300) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-extended')
}

function closeMenu() {
  document.body.classList.remove('menu-extended')
}
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
#home img,
#home .body2,
#services,
#services header,
#services .card,
#about header,
#about p,
#about img,
#contact h2,
#contact ul,
#contact button,
#contact img
#footer svg,
#footer div`)

const butt = dots.querySelector('button')
function selectingDots() {

  dots.buts.classList.add("pressed")



  //dot1.classList.add('pressed')

  const divId = button.getAttribute('id')

  const dotList = document.querySelector(`#testimonial #dots[button*=${divId}]`)
}

