let btnStart = document.getElementById('btnStart');
let times = document.getElementById("time1");
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
                    
                    minutes = 20;
                    seconds = '00';
                    clearInterval(check);
                    check = null;
                    
                }
                
                times.innerText = minutes + ":" + seconds;
                
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

        if (check1 == null) {
            
            check1 = setInterval(()=>{
                
                seconds -= 1;
        
                if(seconds == -1){

                    minutes -= 1
                    seconds = 59

                }
        
                if(minutes == -1){

                    minutes = 20
                    seconds = '00'
                    clearInterval(check1);
                    btnStart.style.display = "block"

                }
        
                times.innerText = minutes + ":" + seconds
        
            },1000)
        }

    }

});

function startTime() {
    
    printDuration()
    btnStart.style.display = "none"
   
    chrome.runtime.sendMessage({cmd: "START_TIME"}, response =>{
        printDuration()
        console.log("-----------",printDuration())
    });
}

// fait activer le timer
btnStart.addEventListener('click', startTime)


//=================================================Appels d'APIs pour les albums, films et livres
let btnalbum = document.getElementById('btnalbum');
let album = document.getElementById('album');

btnalbum.addEventListener('click', displayAlbum);

function displayAlbum() {
    album.style.display = "block";
}


let btnmovie = document.getElementById('btnmovie');
let movie = document.getElementById('movie');

btnmovie.addEventListener('click', displayMovie);

function displayMovie() {
    movie.style.display = "block";
}


let btnbook = document.getElementById('btnbook');
let book = document.getElementById('book');

btnbook.addEventListener('click', displayBook);

function displayBook() {
    book.style.display = "block";
}

// fait supprimer le timer
btnStop.addEventListener('click', e =>{
    stop();

})

