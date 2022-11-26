let notesArray = [
    {title:"note one",body:"This is my first note."},
    {title:"note two",body:"This is the second note."}
]

const body = document.querySelector('body')
const aside = document.querySelector('aside')
const notesList = document.querySelector('aside ul')
let notesItem = document.querySelectorAll('aside li')
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

// Save new note
let saveLog = (e)=>{
    let save = prompt('Please enter a title for your new note.', '')
    let newSave = {}
    li = document.createElement('li')
    if(save !== null){
        newSave.title = save
        newSave.body = textBox.value
        notesArray.push(newSave)
        li.textContent = save
        notesList.append(li)
    }
}
saveBtn.addEventListener('click', saveLog)

// Open note
let open = (e)=>{
    console.log(e.target.textContent)
    for (let i of notesArray){
        if (e.target.textContent === i.title){
            textBox.value = i.body
        }
    }
}
notesList.addEventListener('click', open)
