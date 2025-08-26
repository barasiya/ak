// ===== Modal Elements =====
const resumeBtn = document.getElementById('resume-btn');
const modal = document.getElementById('resumeModal');
const closeBtn = modal.querySelector('.close');
const sendBtn = document.getElementById('send-request');
const emailInput = document.getElementById('visitor-email');
const message = document.getElementById('request-message');

// ===== Open Modal =====
resumeBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  emailInput.value = '';
  message.textContent = '';
  emailInput.focus();
});

// ===== Close Modal =====
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

// ===== Send Request =====
sendBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();

  if (email === '') {
    message.style.color = 'red';
    message.textContent = 'Please enter your email.';
    return;
  }

  // Optional: Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.style.color = 'red';
    message.textContent = 'Please enter a valid email.';
    return;
  }

  // ===== Placeholder for sending request =====
  // Here you can integrate EmailJS or your backend
  // For now, just show a success message
  message.style.color = '#00f5ff';
  message.textContent = `Request sent! We will contact you at ${email}.`;

  // Auto-close modal after 3 seconds
  setTimeout(() => {
    modal.style.display = 'none';
  }, 3000);
});
