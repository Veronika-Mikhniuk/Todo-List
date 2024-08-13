import {
    todoTasksBlock,
    totalTaskValueElement,
    completedTaskValueElement
} from './declarations.js'

import { buildTemplate } from './templates.js'


function getTodosFromStorage() {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []

}

function saveTodosToStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function render(todos) {
    todoTasksBlock.innerHTML = ''

    updateTaskCount()

    todos.forEach(({ id, createdAt, text, isChecked }) => { //destructurization
        todoTasksBlock.insertAdjacentHTML('afterbegin', buildTemplate({ id, createdAt, text, isChecked }))
    })
}

function generateUniqueId() {
    return crypto.randomUUID()
}

function getCurrentDate() {
    return new Date().toLocaleDateString('ru-RU') // optimized: added new method, which formats the date
}

function updateTaskCount() { // combined functions totalTaskCount and completedTaskCount into ONE
    const todos = getTodosFromStorage()
    totalTaskValueElement.innerHTML = todos.length
    completedTaskValueElement.innerHTML = todos.filter(todo => todo.isChecked).length
}


export {
    getTodosFromStorage,
    saveTodosToStorage,
    render,
    generateUniqueId,
    getCurrentDate,
    updateTaskCount
}