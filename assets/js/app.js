const todoInput = document.querySelector('#input-todo')
const todoBtn = document.querySelector('#btn-todo')
const todoList = document.querySelector('.list-todo')


todoBtn.addEventListener('click', addTodo)
todoBtn.addEventListener('click', limparTexto)
todoList.addEventListener('click', checkAndDelete)

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

function checkAndDelete(e){
    const item = e.target

    if(item.classList[0] === 'trash-btn'){
        const toDo = item.parentNode
        toDo.remove()
    }
    if(item.classList[0] === 'check-btn'){
        const checkToDo = item.parentNode
        checkToDo.classList.toggle('completed')
    }

   
}
