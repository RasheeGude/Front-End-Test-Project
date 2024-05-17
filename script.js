// Form Validation

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const number_error = document.getElementById('number_error');

form.addEventListener("submit", (e) => {

  let email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  if(nameInput.value === '' || nameInput.value == null) {
    e.preventDefault(); // Prevent form submission
    name_error.innerHTML = "Name is required";
  } else {
      name_error.innerHTML = "";
  }

  if (!emailInput.value.match(email_check)) {
    e.preventDefault(); // Prevent form submission
    email_error.innerHTML = "Valid Email is required";
  } else {
      email_error.innerHTML = "";
  }

  if (numberInput.value.length < 10 || numberInput.value.length > 10) {
    e.preventDefault(); // Prevent form submission
    number_error.innerHTML = "Contact should be 10 digits";
  } else {
      number_error.innerHTML = "";
  }

});

// /Form Validation

// Tabs From Our Awesome Portfolio

function viewSection(evt, sectionName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// /Tabs From Our Awesome Portfolio

// Responsive Menu

function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// /Responsive Menu
