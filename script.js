const url = "https://api.chucknorris.io/jokes/random";

const btnJoke = document.querySelector(".btns");
const closeBtn = document.querySelector(".close-modal");

const modalWindow = document.querySelector(".modal");
const ApiData = document.querySelector(".addAPIData");

// console.log("b");
let joke;

function apiCall() {
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
}
apiCall();
//new approach
btnJoke.addEventListener("click", function () {
  modalWindow.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  apiCall();
  modalWindow.classList.add("hidden");
});
