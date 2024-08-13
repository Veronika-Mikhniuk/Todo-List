import {
    formElement,
    inputFormElement,
    showCompleted,
    searchInputElement
} from './declarations.js'

import {
    getTodosFromStorage,
    saveTodosToStorage,
    render
} from './helpers.js'

import { Todo } from './models.js'

function handleSubmitForm(event) {
    event.preventDefault()
    const todos = getTodosFromStorage()
    const { value: inputText } = inputFormElement //destructurization
    const { value: searchText } = searchInputElement //destructurization

    if (inputText.trim() !== '') {

        const todo = new Todo(inputText)

        todos.push(todo)
        saveTodosToStorage(todos)

        formElement.reset()

        let filteredTodos = todos //new one is nesessary for filtering when ShowCompleted button ON and SearchInput have text

        if (showCompleted.value) { //destructurization
            filteredTodos = filteredTodos.filter(filteredTodo => filteredTodo.isChecked)
        }

        if (searchText) {
            filteredTodos = filteredTodos.filter(filteredTodo => filteredTodo.text.toLowerCase().includes(searchText.toLowerCase()))
        }

        render(filteredTodos)
    }
}

function handleClickButtonDeleteAll() {
    const todos = getTodosFromStorage()
    todos.length = 0
    saveTodosToStorage(todos)
    render(todos)
}

function handleClickButtonDeleteLast() {
    const todos = getTodosFromStorage()
    todos.pop()
    saveTodosToStorage(todos)
    render(todos)
}

function handleChangeCheckbox({ target }) { //destructurization
    const todos = getTodosFromStorage()
    if (target.type === 'checkbox') {
        let { dataset: { id: atributeId } } = target //destructurization

        todos.forEach(todo => {
            if (todo.id == atributeId) {
                todo.isChecked = target.checked
            }
        })

        saveTodosToStorage(todos)
        render(todos)
    }
}

function handleClickButtonClose({ target }) { //destructurization
    const todos = getTodosFromStorage()
    if (target.classList.contains('btn-close')) {
        const { dataset: { id: atributeId } } = target //destructurization

        const index = todos.findIndex(todo => todo.id == atributeId)

        if (index !== -1) {

            todos.splice(index, 1)
            saveTodosToStorage(todos)
            render(todos)
        }
    }
}

function handleClickButtonShowCompleted() {
    const todos = getTodosFromStorage()
    showCompleted.value = true
    searchInputElement.value = ''
    const completedTodos = todos.filter(todo => todo.isChecked)
    render(completedTodos)
}

function handleClickButtonShowAll() {
    const todos = getTodosFromStorage()
    showCompleted.value = false
    searchInputElement.value = ''
    render(todos)
}

function handleInputSearchBox() {
    const todos = getTodosFromStorage()
    let { value: searchInputValue } = searchInputElement //destructurization
    if (showCompleted.value) {
        const completedTodos = todos.filter(todo => todo.isChecked)
        const searchedTodos = completedTodos.filter(completedTodo => completedTodo.text.toLowerCase().includes(searchInputValue.toLowerCase()))
        render(searchedTodos)
    } else {
        const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchInputValue.toLowerCase()))
        render(searchedTodos)
    }

}

export {
    handleSubmitForm,
    handleClickButtonDeleteAll,
    handleClickButtonDeleteLast,
    handleChangeCheckbox,
    handleClickButtonClose,
    handleClickButtonShowCompleted,
    handleClickButtonShowAll,
    handleInputSearchBox
}