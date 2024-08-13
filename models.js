import { generateUniqueId, getCurrentDate } from './helpers.js'

function Todo(text) {
    this.id = generateUniqueId()
    this.createdAt = getCurrentDate()
    this.text = text
    this.isChecked = false
}

export {
    Todo
}