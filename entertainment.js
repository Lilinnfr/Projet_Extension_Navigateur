//=================================================Appels d'APIs pour les albums, films et livres
let btnalbum = document.getElementById('btnalbum');
let album = document.getElementById('album');


btnalbum.addEventListener("click", () => {
    if(getComputedStyle(album).display != "none"){
      album.style.display = "none";
    } else {
      album.style.display = "block";
    }
  })



let btnmovie = document.getElementById('btnmovie');
let movie = document.getElementById('movie');


btnmovie.addEventListener("click", () => {
    if(getComputedStyle(movie).display != "none"){
      movie.style.display = "none";
    } else {
      movie.style.display = "block";
    }
  })



let btnbook = document.getElementById('btnbook');
let book = document.getElementById('book');


btnbook.addEventListener("click", () => {
    if(getComputedStyle(book).display != "none"){
      book.style.display = "none";
    } else {
      book.style.display = "block";
    }
  })

