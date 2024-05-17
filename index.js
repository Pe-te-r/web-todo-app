let TodoList = [];
let checkedTodos = []; 

const updateLeftItems = () => {
    const leftItemsCount = TodoList.length - checkedTodos.length;
    const leftItemsElement = document.getElementById('leftItems');
    leftItemsElement.textContent = `${leftItemsCount} Items Left`;
};

const updateCheckedTodos = () => {
    checkedTodos = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="statement"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const todoIndex = parseInt(checkbox.value) - 1;
            checkedTodos.push(TodoList[todoIndex]);
        }
    });
    updateLeftItems(); 
};

const addTodo = () => {
    const showBox = document.getElementById('todoBox');
    const newTodo = document.getElementById("newTodo");

    newTodo.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            let todoItem = newTodo.value.trim();
            if (todoItem !== '') {
                const index = TodoList.length;
                var labelHTML = `
                    <label>
                    <input type="checkbox" name="statement" value="statement${index + 1}">
                    <span class="custom-radio"></span>
                    <span class="oneTodo">${todoItem}</span>
                    </label>
                `;
                showBox.insertAdjacentHTML('beforeend', labelHTML);
                newTodo.value = '';

                const checkbox = showBox.querySelector(`input[type="checkbox"][value="statement${index + 1}"]`);
                checkbox.addEventListener("change", () => {
                    updateCheckedTodos();
                });

                TodoList.push(todoItem);
                updateCheckedTodos(); 
            } else {
                console.log('Enter valid data');
            }
        }
    });
};

addTodo()