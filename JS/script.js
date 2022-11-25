let notesArray = [
    {title:"note one",body:"This is my first note." }
]

const body = document.querySelector('body')
const aside = document.querySelector('aside')
const mainGrid = document.querySelector('#main-grid')
const newDarkBtns = document.querySelectorAll('.new-dark-buttons button')
const darkSwitch = document.querySelector('button.theme')
const saveBtns = document.querySelectorAll('.save-buttons button')
const textBox = document.querySelector('textarea')

let darkBase = (e) =>{
    body.classList.toggle('dark')
    aside.classList.toggle('dark')
    mainGrid.classList.toggle('dark')
    textBox.classList.toggle('dark')
    darkSwitch.classList.toggle('dark')
}
let lightTheme = (e)=>{
    if (darkSwitch.textContent == 'Dark Theme')darkSwitch.textContent = 'Light Theme'
    else if (darkSwitch.textContent == 'Light Theme')darkSwitch.textContent='Dark Theme'
}

darkSwitch.addEventListener('click', darkBase)
darkSwitch.addEventListener('click', lightTheme)