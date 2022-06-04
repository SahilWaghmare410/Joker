const url = "https://api.chucknorris.io/jokes/random";

const btnJoke = document.querySelector(".btns");
const closeBtn = document.querySelector(".close-modal");

const modalWindow = document.querySelector(".modal");
const ApiData = document.querySelector(".addAPIData");

// console.log("b");
let joke;

// btnJoke.addEventListener("click", function () {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .then((data) => printy(data.value));
// });

// // init(url);
// function printy(str) {
//   console.log(str);
// }

//new approach
btnJoke.addEventListener("click", function () {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      joke = data.value;
      ApiData.textContent = joke;
      console.log(joke);
    })
    .catch(function () {
      console.log("Error detected");
    });

  modalWindow.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  modalWindow.classList.add("hidden");
});
