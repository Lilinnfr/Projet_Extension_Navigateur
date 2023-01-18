console.log("background js")

let timerTime;
let currentSeconds = 0;
let currentMinutes = 0;
let check = null

// timeur
timerTime = function printDuration() {

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
              currentSeconds = seconds;
              currentMinutes = minutes
              console.log(minutes + " " + seconds)
          
          }, 1000);
        }
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  if(request.cmd === 'START_TIME'){
    
    // déclache le timeur
    timerTime()
    // envoie le timeur
    sendResponse({ time: timerTime() });

  }else if (request.cmd == 'GET_TIME') {

    // envoie le timeur
    sendResponse({timeSeconds: currentSeconds, timeMinutes: currentMinutes})

  }

});




chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){//execute function on receiving a new message
    if(message.msg === "image"){
      fetch('https://some-random-api.ml/img/pikachu')
        .then(response => response.text())
        .then(data =>{
          let dataObj = JSON.parse(data);
          senderResponse({data: dataObj, index:message.index});
        })
        .catch(error => console.log("error", error))
        return true;//will respond asynchronously
    }
  });
