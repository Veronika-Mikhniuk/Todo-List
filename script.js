import {
    getTodosFromStorage,
    render
} from './helpers.js'

import {
    formElement,
    todoTasksBlock,
    deleteAllButtonElement,
    deleteLastButtonElement,
    showAllButtonElement,
    showCompletedButtonElement,
    searchInputElement
} from './declarations.js'

import {
    handleSubmitForm,
    handleClickButtonDeleteAll,
    handleClickButtonDeleteLast,
    handleChangeCheckbox,
    handleClickButtonClose,
    handleClickButtonShowCompleted,
    handleClickButtonShowAll,
    handleInputSearchBox
} from './handlers.js'



// Add event listeners
formElement.addEventListener('submit', handleSubmitForm)
deleteAllButtonElement.addEventListener('click', handleClickButtonDeleteAll)
deleteLastButtonElement.addEventListener('click', handleClickButtonDeleteLast)
todoTasksBlock.addEventListener('change', handleChangeCheckbox)
todoTasksBlock.addEventListener('click', handleClickButtonClose)
showAllButtonElement.addEventListener('click', handleClickButtonShowAll)
showCompletedButtonElement.addEventListener('click', handleClickButtonShowCompleted)
searchInputElement.addEventListener('input', handleInputSearchBox)


// Initialization
render(getTodosFromStorage())