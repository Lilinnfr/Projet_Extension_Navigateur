let btnStart = document.getElementById('btnStart');
let btnStop = document.getElementById('btnStop');
let time = document.getElementById("time");
let timeSelect = document.getElementById('time-select')

// fait choisir la valeur des options dans select
timeSelect.addEventListener('change', e =>{

    let valueOption = timeSelect.value;
    console.log(valueOption);

})

// fait créer le timer
let check = null;
function printDuration() {

    if (check == null) {

        let seconds = 5;
        let minutes = 1;

        check = setInterval(function () {

            seconds -= 1;
            if(seconds == -1){

                minutes -= 1;
                seconds = 5;

            }

            if(minutes == -1){

                minutes = 20;
                seconds = '00';
                clearInterval(check);
                check = null;

            }

            time.innerText = minutes + ":" + seconds;

        }, 1000);
    }
}

// fait supprimer le timer
function stop() {

    clearInterval(check);
    check = null;
    time.innerText = '20:00';

}

// fait activer le timer
btnStart.addEventListener('click', printDuration)

// fait supprimer le timer
btnStop.addEventListener('click', e =>{
    stop();
})