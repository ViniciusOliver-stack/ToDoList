//Elementos
const inputTodo = document.querySelector('#input-todo')
const btnTodo = document.querySelector('#btn-todo')
const listTodo = document.querySelector('.list-todo')

//Eventos
btnTodo.addEventListener('click', addTodo)

//Funções
function addTodo(e){
    e.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')



    listTodo.appendChild(todoDiv)
}

