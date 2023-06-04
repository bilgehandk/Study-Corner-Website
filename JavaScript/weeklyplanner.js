var weekCount = 1;
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const datePicker = $( "#datePicker" );
const updateBtn = document.getElementById('updateBtn');
const weekHeading = document.getElementById('weekHeading');
const mainTable = document.getElementsByClassName('maintable');
const li = document.createElement('li');

// Initialize the datepicker
datePicker.datepicker();

addBtn.addEventListener('click', () => {
    if (input.value === '' || weekCount === 1) {
        alert('Please enter a task or choose a date!');
    } else {
        console.log(`list${weekCount}`);
        const list = document.getElementById(`list${weekCount}`);

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
    const date = new Date(datePicker.datepicker('getDate'));
    if (!date) {
        alert('Please select a valid date!');
        return;
    }
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const weekDiv = document.createElement('div');
    weekDiv.classList.add('week');

    const h2 = document.createElement('h2');
    h2.id = 'weekHeading' + (++weekCount);
    h2.innerText = date.toLocaleDateString(undefined, options);

    const ul = document.createElement('ul');
    ul.id = `list${weekCount}`;
    weekDiv.appendChild(h2);
    weekDiv.appendChild(ul);
    weekDiv.id = 'count' + weekCount;

    mainTable[0].appendChild(weekDiv);
});


mobiscroll.setOptions({
    locale: mobiscroll.localeTr,
    theme: 'ios',
    themeVariant: 'light'
});

$(function () {
    $('#demo-one-input').mobiscroll().datepicker({
        controls: ['calendar'],
        display: 'anchored'
    });

    $('#demo-init-inline').mobiscroll().datepicker({
        controls: ['calendar'],
        display: 'inline'
    });
});