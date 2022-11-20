const toggleNav = document.querySelector('#mobile')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')

function clicked () {
  sidebar.classList.toggle('show')
  if (sidebar.style.width === '270px') {
    sidebar.style.width = '70px'
  } else {
    sidebar.style.width = '270px'
  }
}
toggleNav.addEventListener('click', clicked)

function setAttributes (elem, attr) {
  for (let key in attr) {
    elem.setAttribute(key, attr[key])
  }
}

let tbody = document.querySelector('tbody')
let tr, td0, td1, td2, td3, key, value, edit, remove

document.addEventListener('DOMContentLoaded', () => {
  // Load Data from local storage
  for (let i = 0; i < localStorage.length; i++) {
    // Dynamically add data to the table
    counter = document.createTextNode(i + 1)
    key = document.createTextNode(localStorage.key(i))
    value = document.createTextNode(localStorage.getItem(localStorage.key(i)))

    // Print Values on table
    tr = document.createElement('tr')
    td0 = document.createElement('th')
    td1 = document.createElement('td')
    td2 = document.createElement('td')
    td3 = document.createElement('td')

    td0.appendChild(counter)
    td1.appendChild(key)
    td2.appendChild(value)
    tr.appendChild(td0)
    tr.appendChild(td1)
    tr.appendChild(td2)

    edit = document.createElement('span')
    edit.innerText = 'edit'
    setAttributes(edit, {
      class: 'material-symbols-outlined edit',
      id: 'edit',
      title: `${i}`
    })
    td3.appendChild(edit)

    remove = document.createElement('span')
    remove.innerText = 'delete'
    setAttributes(remove, {
      class: 'material-symbols-outlined delete',
      id: 'remove',
      title: `${i}`,
      'data-bs-toggle': 'modal',
      'data-bs-target': '#exampleModal'
    })
    td3.appendChild(remove)
    tr.appendChild(td3)
    tbody.appendChild(tr)
  }

  // Remove elements
  remove = document.querySelectorAll('#remove')
  remove.forEach(item => {
    item.addEventListener('click', e => {
      const modal = document.querySelector('#modal')
      modal.classList.add('show-modal')
    })
  })
})
