console.log("background js")

let timerTime;
let currentSeconds = 0;
let currentMinutes = 0;
let check = null
let minutes = 2;
// timer
timerTime = function printDuration() {

      if (check == null) {
          
          let seconds = 59;
          minutes = 1;
          
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
                
                currentSeconds = seconds;
                currentMinutes = minutes
                console.log(minutes + " " + seconds)
                
              }, 1000);
            }
          }


//=================================== message fin d'alarms 
chrome.alarms.onAlarm.addListener(
  () => {
      chrome.notifications.create(
          {
              type: "basic",
              iconUrl: "img/giphy.gif",
              title: "Bouger, même un peu, est idéal pour votre humeur.😉",
              message: "Être actif peut vous donner rapidement un sentiment de légèreté et de gaieté",
          },
          () => { }
      )
  },
)

// ==================== déclache le timer/ envoi minutes et seconds
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  // déclache le timer
  if(request.cmd === 'START_TIME'){
    // déclancher le timeur
    timerTime()
    //déclancher l'alarme
    chrome.alarms.create("drink_water",{delayInMinutes: minutes+1});

    // Envois minutes et seconds
  }else if (request.cmd == 'GET_TIME') {

    // envoie le nouveau timer
    sendResponse({timeSeconds: currentSeconds, timeMinutes: currentMinutes})

  }

});


// ============================================== change all image one page on navigateur
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
 
  // button qui active les pickachus
 if(request.img === "CHANGE"){
//API Pikachu 

// =================== envois les pickachu (api)
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

  }
})