const form = document.getElementById('form')
const input = document.getElementById('input')

const todoLi = document.getElementById('todos')
const todos=JSON.parse(localStorage.getItem('todos'))
if(todos){
    toda.forEach(todo=>addTodo(todo))
}
 
form.addEventListener('sumbit',(e)=>{e.preventDefault()
addTodo()
})
function addTodo(todo){
    let todoText= input.value

    if(todo){
        todoText=todo.text
    }
    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('Completed')
        }
        todoEl.innerText= todoText
        todoEl.addEventListener('click', ()=>todoEl.classList.toggle('Completed'))
        todoEl.addEventListener('contextmenu', (e)=>{
e.preventDefault()
todoEl.remove()

        })
        todoLi.appendChild(todoEl)
        
        input.value=''
        updateLS()
    }
} 
function updateLS(){
    todosEl=document.querySelectorAll('li')
}
