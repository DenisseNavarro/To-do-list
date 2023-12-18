const date = document.querySelector('#profileContainer__date')
const list = document.querySelector('#list')
const input = document.querySelector('#input')
const buttonEnter = document.querySelector('#enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const linetrough = 'line-trough'
let id = 0


function addTask(task,id,done,removed) {
    if(removed){return}

    const DONE = done ?check :uncheck
    const LINE = done ?lineTrough :''

    const element = `
                     <li class="taskListContainer__item" id="element">
                     <i class="far ${DONE}" data="done" id="${id}"></i>
                     <p class="taskListContainer__text ${LINE}">${task}</p>
                     <i class="fas fa-trash de" data="removed" id="0"></i>
                     </li>
                    
                     `
    list.insertAdjacentHTML("beforeend",element)
}
function taskDone(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.taskListContainer__text').classList.toggle(line-trough)
}

buttonEnter.addEventListener('click',()=> {
    const task = input.value
    if(task) {
        addTask(task,id,false,false)
    }
    input.value= ''
    id++
})

document.addEventListener('keyup',function(event){
    if (event.key=='Enter') {
        const task = input.value
        if(task) {
            addTask(task,id,false,false)
        }
        input.value =''
        id++

    }
})

list.addEventListener('click',function (event) {
    const element = event.target
    const elementData = element.attributes.data.value
    if (elementData==='done'){
        taskDone(element)
    }
    else if (elementData==='removed'){
        taskRemoved(element)
    }
})