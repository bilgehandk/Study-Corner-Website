let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 1;
let breakTime = 5;

let seconds = "00";
let myVar;
let breakCount = 0;
let workMinutes;
let breakMinutes;
let isEditable = false;

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');
}

//editable minutes
function editMinutes() {
    if (!isEditable) {
        isEditable = true;
        let minutesElement = document.getElementById('minutes');
        minutesElement.innerHTML = "<input type='number' id='editableMinutes' min='1' value='" + workTime + "' onchange='setMinutes()'>";
    }
}

function setMinutes() {
    let minutesElement = document.getElementById('editableMinutes');
    let newWorkTime = minutesElement.value;
    if (newWorkTime !== "") {
        workTime = parseInt(newWorkTime);
        document.getElementById('minutes').innerHTML = workTime;
    }
    isEditable = false;
}



function restart() {
    isEditable = false;
    clearInterval(myVar); // Clear the interval timer
    document.getElementById('start').style.display = 'block';
    document.getElementById('reset').style.display = 'none';
    seconds = 0; // Reset the seconds to '00'
    workMinutes = workTime; // Reset the work minutes to the original value
    breakCount = 0; // Reset the break count to 0

    workTitle.classList.add('active'); // Set the work title to active
    breakTitle.classList.remove('active'); // Set the break title to inactive
    document.getElementById('minutes').innerHTML = workMinutes; // Update the minutes display with the new work minutes
    document.getElementById('seconds').innerHTML = seconds; // Update the seconds display with the new seconds
}

  
  
  

//start timer
function start() {
    isEditable = true;
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    workMinutes = workTime - 1;
    breakMinutes = breakTime - 1;

    //countdown
    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //change time
        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    //start break
                    workMinutes = breakMinutes;
                    breakCount++;

                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                } else {
                    //continue
                    workMinutes = workTime;
                    breakCount++;

                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    myVar = setInterval(timerFunction, 1000);
}
