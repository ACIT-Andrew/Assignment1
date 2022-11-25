let notesArray = [
    {title:"note one",body:"This is my first note." }
]

const body = document.querySelector('body')
const aside = document.querySelector('aside')
const mainGrid = document.querySelector('#main-grid')
const newDarkBtns = document.querySelectorAll('.new-dark-buttons button')
const newNote = document.querySelector('button.new')
const darkSwitch = document.querySelector('button.theme')
const textBox = document.querySelector('textarea')
const saveBtn = document.querySelector('button.save')
const cancelBtn = document.querySelector('button.cancel')

// Theme Changing
let changeTheme = (e) =>{
    body.classList.toggle('dark')
    aside.classList.toggle('dark')
    mainGrid.classList.toggle('dark')
    textBox.classList.toggle('dark')
    darkSwitch.classList.toggle('dark')
}
let buttonText = (e)=>{
    if (darkSwitch.textContent == 'Dark Theme'){
        darkSwitch.textContent = 'Light Theme'
    }
    else if (darkSwitch.textContent == 'Light Theme'){
        darkSwitch.textContent='Dark Theme'
    }
}
darkSwitch.addEventListener('click', changeTheme)
darkSwitch.addEventListener('click', buttonText)

// Hide and reset
let hide = (e)=>{
    textBox.setAttribute('hidden', '')
    saveBtn.setAttribute('hidden', '')
    cancelBtn.setAttribute('hidden', '')
}
let reset = (e)=>{
    if (textBox.hasAttribute('hidden')){
        textBox.value = ''
    }
    textBox.removeAttribute('hidden', '')
    saveBtn.removeAttribute('hidden', '')
    cancelBtn.removeAttribute('hidden', '')
}
cancelBtn.addEventListener('click', hide)
newNote.addEventListener('click', reset)

let saveLog = (e)=>{
    prompt('Please enter a title for your new note.', '')
}
saveBtn.addEventListener('click', saveLog)
