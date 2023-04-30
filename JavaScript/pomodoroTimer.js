
let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 1;
let breakTime = 5;

let seconds = "00";
let myVar;

//display

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}


function restart()
{
document.getElementById('start').style.display = "block";
document.getElementById('reset').style.display = "none";
seconds = 59;
let workMinutes = workTime - 1;
let breakMinutes = breakTime - 1;
breakCount = 0;
document.getElementById('minutes').innerHTML = workMinutes;
document.getElementById('seconds').innerHTML = seconds;
clearInterval(myVar);
}

//start timer

function start()
{
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //countdown
    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //change time
        seconds = seconds - 1;

        if(seconds === 0)
        {
            workMinutes = workMinutes -1;
            if(workMinutes === -1)
            {
                if(breakCount % 2 === 0)
                {
                    //start break
                    workMinutes = breakMinutes;
                    breakCount++;

                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }
                else{
                    //continue
                    workMinutes = workTime;
                    breakCount++;

                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    myVar = setInterval(timerFunction, 1000);


}

