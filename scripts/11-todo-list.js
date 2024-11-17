const input = document.querySelector('.js-input');
const addButton = document.querySelector('.js-button');
const todoEl = document.querySelector('.js-todo-list')
const dateInput = document.querySelector('.js-input-date')

const todoList = [{
    name: 'wash dishes',
    dueDate: '2022-12-22'
}]

renderTodoList()

addButton.addEventListener('click', () => {
    const name = input.value;
    todoList.push(
        {
            name,
            dueDate: dateInput.value
        }
    )
    console.log(todoList);
    input.value = "";

    renderTodoList()
})


function renderTodoList() {

    todoEl.innerHTML = ""
    let todoListHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        const { name, dueDate } = todoList[i]
        todoListHTML = `
        <p>${name}</p>
        <p>${dueDate}</p>
        <button class="remove-button" onclick="
            todoList.splice(${i}, 1);
            renderTodoList()
        ">Delete</button>`
        todoEl.innerHTML += todoListHTML;
    }
}