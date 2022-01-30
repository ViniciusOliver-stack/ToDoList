//Selecionar Elementos
const todoInput = document.querySelector('#input-todo')
const todoBtn = document.querySelector('#btn-todo')
const todoList = document.querySelector('.list-todo')

//Eventos               //Ao carregar o conteúdo do DOM, quero que vc disprare um evento
document.addEventListener('DOMContentLoaded', getTodos)
todoBtn.addEventListener('click', addTodo)
todoBtn.addEventListener('click', limparTexto)
todoList.addEventListener('click', checkAndDelete)

//Funções
function addTodo(evento){
    if(todoInput.value === ''){
        alert('Preencha corretamente o campo de adicionar tarefa')
    }else{
        evento.preventDefault()

        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        const todoLi = document.createElement('li')
        todoLi.classList.add('todo-list')
        todoLi.innerText = todoInput.value
        todoDiv.appendChild(todoLi)

        saveLocal(todoInput.value)

        const checkBtn = document.createElement('button')
        checkBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>'
        checkBtn.classList.add('check-btn')
        todoDiv.appendChild(checkBtn)

        const trashBtn = document.createElement('button')
        trashBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>'
        trashBtn.classList.add('trash-btn')
        todoDiv.appendChild(trashBtn)

        todoList.appendChild(todoDiv)
    }
}

function limparTexto(){
    document.querySelector('#input-todo').value = ''
}

//Marcar e Deletar
function checkAndDelete(e){
    const item = e.target
    const todo = item.parentNode

    if(item.classList[0] === 'trash-btn'){
        todo.remove()
        removeLocalStorage(todo)
    }
    if(item.classList[0] === 'check-btn'){
        todo.classList.toggle('completed')
    }
}


function saveLocal(todo) {
    //Vamos salvar a todo em uma variável
    let todos
    //Vamos fazer uma verificação || A gente não pode ocupar coisa vazia nesse banco

    if(localStorage.getItem('todos') === null) {
        todos = []
    }else{
        //Se não for vazia vamos procurar
        todos = JSON.parse(localStorage.getItem('todos'))//Estamos parcializando nossos valores para JSON
    }

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
    let todos

    if(localStorage.getItem('todos') === null) {
        todos = []
    }else{
        //Se não for vazia vamos procurar
        todos = JSON.parse(localStorage.getItem('todos'))//Estamos parcializando nossos valores para JSON
    }

    todos.forEach( (todo) =>{
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        const todoLi = document.createElement('li')
        todoLi.classList.add('todo-list')
        todoLi.innerText = todo
        todoDiv.appendChild(todoLi)

        const checkBtn = document.createElement('button')
        checkBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>'
        checkBtn.classList.add('check-btn')
        todoDiv.appendChild(checkBtn)

        const trashBtn = document.createElement('button')
        trashBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>'
        trashBtn.classList.add('trash-btn')
        todoDiv.appendChild(trashBtn)

        todoList.appendChild(todoDiv)
    })
}

function removeLocalStorage(todo){
    let todos

    if(localStorage.getItem('todos') === null) {
        todos = []
    }else{
        //Se não for vazia vamos procurar
        todos = JSON.parse(localStorage.getItem('todos'))//Estamos parcializando nossos valores para JSON
    }

    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.getItem('todos', JSON.stringify(todos))
}