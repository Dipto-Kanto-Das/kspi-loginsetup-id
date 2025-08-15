document.addEventListener("DOMContentLoaded", function () {
  console.log("Custom JS loaded!");
});

// General toggle read more function
function toggleReadMore(button) {
  const cardBody = button.closest('.card-body');
  const shortText = cardBody.querySelector("#short-text");
  const fullText = cardBody.querySelector("#full-text");

  if (fullText.classList.contains("d-none")) {
      shortText.classList.add("d-none");
      fullText.classList.remove("d-none");
      button.textContent = "Read Less";
  } else {
      shortText.classList.remove("d-none");
      fullText.classList.add("d-none");
      button.textContent = "Read More";
  }
}

// Login form handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Example username/password validation (replace with actual logic)
  if (username === 'admin' && password === 'password123') {
      alert('Login successful');
      // Redirect or further actions
  } else {
      document.getElementById('error-message').style.display = 'block';
  }
});

// Signup form handler
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Validate passwords match
  if (password !== confirmPassword) {
      document.getElementById('error-message').innerText = 'Passwords do not match!';
      document.getElementById('error-message').style.display = 'block';
      return;
  }

  // Replace with actual signup logic
  if (username && email && password) {
      alert('Signup successful');
      // Redirect or further actions
  } else {
      document.getElementById('error-message').innerText = 'Please fill out all fields.';
      document.getElementById('error-message').style.display = 'block';
  }
});

// Search functionality for student cards
document.getElementById('searchButton').addEventListener('click', function() {
  let searchValue = document.getElementById('searchInput').value.toLowerCase();
  let studentCards = document.querySelectorAll('.student-card');

  studentCards.forEach(function(card) {
      let name = card.querySelector('.card-title').textContent.toLowerCase();
      let roll = card.querySelector('h6').textContent.toLowerCase();

      if (name.includes(searchValue) || roll.includes(searchValue)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
});
