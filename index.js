const wrapper = document.querySelector(".wrapper");
const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const btnPop = document.querySelector(".btnLogin-popup");
const btnClo = document.querySelector(".icon-close");

console.log("hello");



// register.addEventListener("click", function () {
//     wrapper.classList.add("active");
//   });

  const lai=()=>{
    wrapper.classList.add("active");

  }

// login.addEventListener("click", function () {
//   wrapper.classList.remove("active");
// });

const log=()=>{
  wrapper.classList.remove("active");

}

const pop=()=>{
  wrapper.classList.add("active-popup");

}

// btnPop.addEventListener("click", function () {
//   wrapper.classList.add("active-popup");
// });

btnClo.addEventListener("click", function () {
  wrapper.classList.remove("active-popup");
});
// const close=()=>{
//     wrapper.classList.remove("active-popup");

//   }