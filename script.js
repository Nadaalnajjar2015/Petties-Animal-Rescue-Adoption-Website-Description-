function openModal() {
  document.getElementById("story-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("story-modal").style.display = "none";
}

//close when pressing out of the modal

window.onclick = function (event) { //event is click
  const modal = document.getElementById("story-modal");
  if (event.target === modal) {//to know what is the element that we are interacting with
    // If the clicked element is the modal, close it
    modal.style.display = "none";
  }
};

//log in validation
function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  const correctUsername = "hero123";
  const correctPassword = "petties123";

  if (username === "" || password === "") {
    errorMessage.textContent = "Please fill in both fields.";
    return false;
  } else if (username === correctUsername && password === correctPassword) {
    errorMessage.textContent = "";
    localStorage.setItem("isLoggedIn", "true");
    alert("Logged in successfully! 😺 ");
    window.location.href = "index.html";
    return false;
  } else {
    errorMessage.textContent = "Invalid username or password.";
    return false;
  }
}


//form validation.
document.addEventListener("DOMContentLoaded", function () {
  //Waits until the HTML is fully loaded before doing anything.
  const forms = document.querySelectorAll(".post-form"); //Selects all the forms with class .post-form.

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (isLoggedIn === "true") {
        alert("Your post has been submitted 🙌");
        window.location.href = "index.html";
      } else {
        alert("You must be signed in first 😕");
        window.location.href = "sign_in.html";
      }
    });
  });
});

//Waits for the page to load.

//Finds the form.

//Listens for the form being submitted.

//Stops the form by default.

//Checks if the user is logged in using localStorage.

//Shows a message and sends the user to the correct page.

//----------------------------------------------------------------------

//log out

function logout() {
  localStorage.removeItem("isLoggedIn"); //Removes the login flag from localStorage
  alert("You are logged out 🥲");
}
