const startBtn = document.getElementById('startBtn');
const tourBtn = document.getElementById('tourBtn');
const joinBtn = document.getElementById('joinBtn');
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');

function scrollToSection(id) {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

startBtn.addEventListener('click', () => scrollToSection('#contact'));
tourBtn.addEventListener('click', () => scrollToSection('#classes'));
joinBtn.addEventListener('click', () => scrollToSection('#contact'));

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = 'Please fill in every field before sending.';
    return;
  }

  feedback.textContent = `Thanks, ${name}! We received your message and will respond soon.`;
  contactForm.reset();
});
