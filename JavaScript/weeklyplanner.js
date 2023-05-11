var count = 1;
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const datePicker = document.getElementById('datePicker');
const updateBtn = document.getElementById('updateBtn');
const weekHeading = document.getElementById('weekHeading');
const mainTable = document.getElementsByClassName('maintable');

addBtn.addEventListener('click', () => {
    
    if (input.value === '' || count === 1) {
        alert('Please enter a task! or Choose date!');
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
    const date = new Date(datePicker.value);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const weekDiv = document.createElement('div'); // create new div element
    console.log(weekDiv);
    weekDiv.classList.add('week'); // add the 'week' class to the div
   
    const h2 = document.createElement('h2'); // create new unordered list element
    h2.id = 'weekHeading'+(++count); // set the id of the list element to a new unique value
    h2.innerText = date.toLocaleDateString(undefined, options);
   
    const ul = document.createElement('ul'); // create new unordered list element
    ul.id = `list${count}`; // set the id of the list element to a new unique value
    weekDiv.appendChild(h2); // add the list element to the new div element
    weekDiv.appendChild(ul); // add the list element to the new div element
    weekDiv.id='count'+count;

    console.log(mainTable[0].innerHTML);
    mainTable[0].appendChild(weekDiv); 
});
