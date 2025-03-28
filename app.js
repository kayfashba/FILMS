const films = [
   {
    id: "287947",
    title: "Shazam!",
    poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    overview:
    "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    release_date: 2019,
    genres: ["Action", "Comedy", "Fantasy"],
   },
   {
    id: "299537",
    title: "Captain Marvel",
    poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    overview:
    "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    release_date: 2019,
    genres: ["Action", "Adventure", "Science Fiction"],
    },
];

let moveName = document.querySelector(".move-name");
let moveImg = document.querySelector(".move-img");
let moveId = document.querySelector(".move-id");
let moveDate = document.querySelector(".move-date");
let moveGenres = document.querySelector(".move-genres");
let id;
let title;
let postir;
let date;

for (let i = 0; i < films.length; i++){
    moveName.innerHTML = films[i].title;
    moveImg.innerHTML = `<img src="${films[i].poster}"  alt= "" weight= "150" height= "500" style="border-radius: 20px 0 0 20px;" 0/>`;
    moveDate.textContent = "Release year: " + films[i].release_date;
    moveId.textContent = "Film's id: " + films[i].id;
    moveGenres.textContent = "Genres: " + films[i].genres.join(", ");
};

let moveName1 = document.querySelector(".move-name1");
let moveImg1 = document.querySelector(".move-img1");
let moveId1 = document.querySelector(".move-id1");
let moveDate1 = document.querySelector(".move-date1");
let moveGenres1 = document.querySelector(".move-genres1");
let id1;
let title1;
let postir1;
let date1;

for (let i = 0; i < films.length; i++){
    moveName1.innerHTML = films[0].title;
    moveImg1.innerHTML = `<img src="${films[0].poster}"  alt= "" weight= "150" height= "500" style="border-radius: 20px 0 0 20px;" 0/>`;
    moveDate1.textContent = "Release year: " + films[0].release_date;
    moveId1.textContent = "Film's id: " + films[0].id;
    moveGenres1.textContent = "Genres: " + films[0].genres.join(", ");
};