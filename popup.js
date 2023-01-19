let btnStart = document.getElementById('btnStart');
let times = document.getElementById("time1");
let imgTimer = document.getElementById("time-loding")
let timeSelect = document.getElementById('time-select')

let check = null
function printDuration() {

        if (check == null) {
            
            let seconds = 59;
            let minutes = 1;
            
            check = setInterval(function () {
                
                seconds -= 1;
                if(seconds == -1){
                    
                    minutes -= 1;
                    seconds = 59;
                    
                }
                
                if(minutes == -1){
                    
                    minutes = 2;
                    seconds = '00';
                    clearInterval(check);
                    check = null;                    
                }
               

                    imgTimer.style.display = 'block'
                    imgTimer.innerText = minutes + ":" + seconds;
                
                
            }, 1000);
        }
    }

let check1 = null
chrome.runtime.sendMessage({cmd: "GET_TIME"}, response =>{

    console.log("response seconds is ===>", response.timeSeconds)
    console.log('respons minutes is --->', response.timeMinutes)
    
    let currentSeconds = parseInt(response.timeSeconds);
    let currentMinutes = parseInt(response.timeMinutes)
    let seconds = currentSeconds;
    let minutes = currentMinutes;
    console.log("seconds:", seconds)
    
    if(currentSeconds != 0){

        btnStart.style.display = "none"
        times.style.display = "none"
        imgTimer.style.display = 'block'

        if (check1 == null) {
            
            check1 = setInterval(()=>{
                
                seconds -= 1;
        
                if(seconds == -1){

                    minutes -= 1
                    seconds = 59

                }
        
                if(minutes == -1){

                    minutes = 2
                    seconds = '00'
                    clearInterval(check1);
                    btnStart.style.display = "block"
                    alertMessage;

                }
             
                imgTimer.innerText = minutes + ":" + seconds;
                
        
            },1000)
        }

    }

});

function startTime() {
    
    printDuration()
    btnStart.style.display = "none"
    times.style.display = "none"
    chrome.runtime.sendMessage({cmd: "START_TIME"});
}

// fait activer le timer
btnStart.addEventListener('click', startTime)