const buildTemplate = ({ id, createdAt, text, isChecked }) => { //destructurization
    return `
        <div class="todo-block__wrapper row gx-2 mb-3 p-2 w-100 d-flex align-items-center ${isChecked ? 'done-todo' : ''}">
            <div class="col-1 ps-2 pe-3">
                <input class="form-check-input" type="checkbox" data-id="${id}" ${isChecked ? 'checked' : ''}>
            </div>
            <div class="col-9">
                <p class="todo__text mb-0 p-2 ${isChecked ? 'crossed' : ''}">${text}</p>
            </div>
            <div class="col-2">
                <div class="row g-2 d-flex flex-column align-items-end">
                    <button type="button" class="btn-close" data-id="${id}" aria-label="Close"></button>
                    <p class="todo__date mb-0 p-1 col-11">${createdAt}</p>
                </div>
            </div>
        </div>
    `
}

export {
    buildTemplate
}