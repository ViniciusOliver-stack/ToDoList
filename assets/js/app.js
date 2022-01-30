//Elementos
const inputTodo = document.querySelector('#input-todo')
const btnTodo = document.querySelector('#btn-todo')
const listTodo = document.querySelector('.list-todo')
const modalDialog = document.querySelector('#modal-dialog')

//Eventos
btnTodo.addEventListener('click', addTodo)
document.addEventListener('DOMContentLoaded', getTodos)

listTodo.addEventListener('click', checkAndDelete)

//Funções
function clickModal(){
    const modal = document.querySelector('body')
    modal.addEventListener('click', (evento) =>{
        if(evento.target.id == 'modal-dialog' || evento.target.className == 'btn-fechar' || evento.target.className == 'btn-inferior-fechar'){
         modalDialog.classList.remove('mostrar')
        }
    })
 
    modalDialog.classList.add('mostrar')
 }

function addTodo(e){
    e.preventDefault()
    if(inputTodo.value === ''){
        document.getElementById('title').innerHTML = "Ops 😕, preencha o campo corretamente"
        document.getElementById('btn-fechar').innerHTML = 'Fechar'
        clickModal()
    }else{
        criarTodos()
    }
    
}

function criarTodos(){
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-list')
    todoLi.innerText = inputTodo.value
    todoDiv.appendChild(todoLi)

    salvarTodo(inputTodo.value)

    const btnCheck = document.createElement('button')
    btnCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>'
    btnCheck.classList.add('check-btn')
    todoDiv.appendChild(btnCheck)

    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>'
    btnDelete.classList.add('trash-btn')
    todoDiv.appendChild(btnDelete)
        
    listTodo.appendChild(todoDiv)

    document.querySelector('#input-todo').value = ''
}
   

function checkAndDelete(e){
    const item = e.target
    const todo = item.parentNode
    if(item.classList[0] === 'trash-btn'){
        removeLocalStorage(todo)
        todo.remove()
    }
    if(item.classList[0] === 'check-btn'){
        todo.classList.toggle('completed')
    }
}


function salvarTodo(todo){
    let todos

    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(){
    let todos

    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo){
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
    
        const todoLi = document.createElement('li')
        todoLi.classList.add('todo-list')
        todoLi.innerText = todo
        todoDiv.appendChild(todoLi)
    
        const btnCheck = document.createElement('button')
        btnCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>'
        btnCheck.classList.add('check-btn')
        todoDiv.appendChild(btnCheck)
    
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>'
        btnDelete.classList.add('trash-btn')
        todoDiv.appendChild(btnDelete)
            
        listTodo.appendChild(todoDiv)
    })
}

function removeLocalStorage(todo){
    let todos
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}