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

let obj = new Object

for (let i = 0; i < localStorage.length; i++) {
    obj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))    
}

let tbody = document.querySelector('tbody')
const save = document.querySelector("#save")

function duplicate(transporter, gst) {
  for (const elem in obj) {    
    if (`${elem}` === transporter && `${obj[elem]}` === gst) {
      return true
    }
  }
  return false
}


function saveData (e) {
  let form = document.querySelector('form')
  e.preventDefault()
  if (trans.value !== '' && gst.value !== '') {
    if (e.target.innerText === 'Submit') {
      // localStorage.setItem(trans.value, gst.value)      
      localStorage.setItem(trans.value, gst.value)
      window.location.reload()
     }
     else if (e.target.innerText === 'Change') {               
        if(!duplicate(trans.value, gst.value)) {          
          localStorage.removeItem(e.target.value)
          localStorage.setItem(trans.value, gst.value)
          form.reset()
        }
        window.location.reload()
     }
  } 
  else {
    alert('empty')
  }
}

save.addEventListener('click', saveData)



let tr, td0, td1, td2, td3, key, value, edit, remove

document.addEventListener('DOMContentLoaded', () => {
  // Load Data from local storage
  const data = Object.keys(obj).sort()    
  for (let i = 0; i < data.length; i++) {
    // Dynamically add data to the table
    counter = document.createTextNode(i + 1)
    key = document.createTextNode(data[i])
    value = document.createTextNode(obj[data[i]])
    
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

  // Edit elements
  edit = document.querySelectorAll('#edit')
  edit.forEach(item => {
    item.addEventListener('click', e => {
      save.innerText = 'Change'
      trans.value = data[e.target.title]
      gst.value = obj[trans.value]
      save.value = data[e.target.title]     
    })
  })
})