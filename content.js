let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length;i++){
    chrome.runtime.sendMessage({msg: 'image', index:i},function({data,index}){
        images[index].src = data.link;
    });
};

//========================================================
// let paragraphs = document.getElementsByTagName('body');
// let i = 0;
// while(i < paragraphs.length){
//     paragraphs[i].style['border'] = '20px solid black';
//     i++;
// };


