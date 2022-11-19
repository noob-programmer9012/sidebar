const toggleNav = document.querySelector('#mobile')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const sticks = document.querySelectorAll('.sticks')

function clicked () {
  sidebar.classList.toggle('show')
  main.classList.toggle('hide')
}

toggleNav.addEventListener('click', clicked)

toggleNav.addEventListener('mouseover', () => {
  sticks.forEach(item => {
    item.classList.add('focused')
  })
})

toggleNav.addEventListener('mouseout', () => {
  sticks.forEach(item => {
    item.classList.remove('focused')
  })
})
