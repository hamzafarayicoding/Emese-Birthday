document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('custom-audio');

  // You can add more functionality here if needed

  // Example: Auto-play the audio when the page loads
  audio.play();
});

function checkPassword() {
  const enteredPassword = document
    .getElementById('password')
    .value.toLowerCase();
  const correctPassword = 'apuci'; // Replace with your actual password

  if (enteredPassword === correctPassword) {
    document.getElementById('password-overlay').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  } else {
    alert('nuh uh uh :P');
  }
}
