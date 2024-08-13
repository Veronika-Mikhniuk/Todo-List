const $ = document.querySelector.bind(document) //assigned context: this = document

const formElement = $('#form')
const inputFormElement = $('.form-input')
const todoTasksBlock = $('.todo-block')
const deleteAllButtonElement = $('.delete-all_btn')
const deleteLastButtonElement = $('.delete-last_btn')
const totalTaskValueElement = $('.total-tasks')
const completedTaskValueElement = $('.completed-tasks')
const showAllButtonElement = $('.show-all_btn')
const showCompletedButtonElement = $('.show-done_btn')
const searchInputElement = $('.search-input')

const showCompleted = { //declared as object, because it is impossible to override variables when import
    value: false
}


export {
    formElement,
    inputFormElement,
    todoTasksBlock,
    deleteAllButtonElement,
    deleteLastButtonElement,
    totalTaskValueElement,
    completedTaskValueElement,
    showAllButtonElement,
    showCompletedButtonElement,
    showCompleted,
    searchInputElement
}