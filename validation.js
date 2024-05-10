const inputs = document.querySelectorAll("input");
const verifyPassword = document.querySelector("input.innerText");

const patterns = {
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
};

// // the explanation of the fuction written down
// function validate(field,regex){
//     regex.test(field.value)
// }

// inputs.forEach((input) => {
//   input.addEventListener("keyup", (e) => {
// // e.target.attributes.name.value = the value of the input type in the login
//     console.log(e.target.attributes.name.value);
//   });
// });

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

console.log(verifyPassword);
