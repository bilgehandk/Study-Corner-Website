const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const datePicker = document.getElementById('datePicker');
const updateBtn = document.getElementById('updateBtn');
const weekHeading = document.getElementById('weekHeading');

addBtn.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please enter a task!');
    } else {
        const li = document.createElement('li');
        li.innerHTML = `${input.value} <button class="deleteBtn">Delete</button>`;
        list.appendChild(li);
        input.value = '';

        const deleteBtn = li.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    }
});

updateBtn.addEventListener('click', () => {
    const date = new Date(datePicker.value);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    weekHeading.innerText = date.toLocaleDateString(undefined, options);
});
