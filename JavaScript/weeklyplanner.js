var count = 1;
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const datePicker = $("#datePicker");
const updateBtn = document.getElementById('updateBtn');
const weekHeading = document.getElementById('weekHeading');
const mainTable = document.getElementsByClassName('maintable');
const li = document.createElement('li');

// Initialize the datepicker
datePicker.datepicker();

addBtn.addEventListener('click', () => {
    if (input.value === '' || count === 1) {
        alert('Please enter a task or choose a date!');
    } else {
        console.log(`list${count}`);
        const list = document.getElementById(`list${count}`);

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
    const date = datePicker.datepicker('getDate');
    if (!date) {
        alert('Please select a valid date!');
        return;
    }
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const weekDiv = document.createElement('div');
    weekDiv.classList.add('week');

    const h2 = document.createElement('h2');
    h2.id = 'weekHeading' + (++count);
    h2.innerText = date.toLocaleDateString(undefined, options);

    const ul = document.createElement('ul');
    ul.id = `list${count}`;
    weekDiv.appendChild(h2);
    weekDiv.appendChild(ul);
    weekDiv.id = 'count' + count;

    mainTable[0].appendChild(weekDiv);
});


$(function() {
    $("#datePicker").datepicker();
  });