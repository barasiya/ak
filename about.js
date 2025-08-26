// ===== Resume Request Button =====
const resumeBtn = document.getElementById('resume-btn');

resumeBtn.addEventListener('click', () => {
  // If you set up EmailJS, uncomment below and replace keys
  /*
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: "Website Visitor",
      to_email: "aakashbarasiya2001@gmail.com",
      message: "A user requested access to your resume."
  }).then(function(response) {
      alert("Request sent! Check your Gmail.");
  }, function(error) {
      alert("Error sending request: " + error);
  });
  */

  // Fallback for testing without EmailJS
  alert("Request sent! Check your Gmail (EmailJS not configured yet).");
});
