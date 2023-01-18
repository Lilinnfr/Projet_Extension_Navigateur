
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