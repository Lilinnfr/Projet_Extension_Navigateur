let btnImgChange = document.getElementById('img-change')


btnImgChange.addEventListener('click', e=>{
    chrome.runtime.sendMessage({img: "CHANGE"});
})

console.log("coucouococu")