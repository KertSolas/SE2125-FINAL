let inputFirstName = document.querySelector("#firstName")
let myButton = document.querySelector(".btn-list")
let inputLastName = document.querySelector("#lastName")
let list = document.querySelector(".container-ul")
// let inputValues = document.querySelector('.shadow p-3 mb-5 bg-white rounded').value

function addPerson() {
  let newUser = `${inputFirstName} ${inputLastName}`;
  console.log(newUser.value)
}