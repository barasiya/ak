// ===== Smooth Scroll for Contact Button =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Resume Download Confirmation =====
const resumeBtn = document.querySelector('.about-buttons a[href*="drive.google.com"]');

resumeBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent default link opening
  const resumeLink = this.href;
  const confirmDownload = confirm("Do you want to download my Resume?");
  if(confirmDownload) {
    window.open(resumeLink, "_blank"); // open resume in new tab
  }
});

// ===== Social Icons Hover Animation =====
const socialIcons = document.querySelectorAll('.about-social a');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s ease';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });
});
