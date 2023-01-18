let btnStart = document.getElementById('btnStart');
let time = document.getElementById("time");
let timeSelect = document.getElementById('time-select');





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

