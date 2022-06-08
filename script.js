const url = "https://api.chucknorris.io/jokes/random";
const url2 = "https://api.chucknorris.io/jokes/categories";

const btnJoke = document.querySelector(".btns");
const closeBtn = document.querySelector(".close-modal");

const modalWindow = document.querySelector(".modal");
const ApiData = document.querySelector(".addAPIData");

//SIDEBAR
const sidebarclosebtn = document.querySelector(".closeSideBtn");
const sideBar = document.querySelector(".sideBarClass");
const sideBarOpen = document.querySelector(".openSideBar");
const ApiDataCate = document.querySelector(".contentCate");

// console.log("b");
let joke;

function apiCall() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      joke = data.value;
      ApiData.textContent = joke;
      console.log(joke);
    })
    .catch(function () {
      console.log("Error detected");
    });
}

function apiCallCategories() {
  fetch(url2)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let conte = "";
      console.log(data.length);
      for (let i = 0; i < data.length; i++) {
        conte += data[i] + "\n";
        ApiDataCate.textContent += "${data[i]} \n";
        // System.lineSeparator();
      }
      console.log(conte);
      ApiDataCate.textContent = conte;

      console.log(data);
    })
    .catch(function () {
      console.log("Error detected");
    });
}
apiCallCategories();
apiCall();
//new approach
btnJoke.addEventListener("click", function () {
  modalWindow.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  apiCall();
  modalWindow.classList.add("hidden");
});

//sidebarclass btn open
sideBarOpen.addEventListener("click", function () {
  sideBar.classList.remove("hidden");
  sideBarOpen.classList.add("hidden");
});

//sidebarclass btn close
sidebarclosebtn.addEventListener("click", function () {
  sideBar.classList.add("hidden");
  sideBarOpen.classList.remove("hidden");
});
