// Carrossel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let index = 0;

function updateCarousel() {
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(${-width * index}px)`;
}
document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slides.length; updateCarousel();
});
document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length; updateCarousel();
});
window.addEventListener('resize', updateCarousel);

// Doação
document.getElementById('btn-donate').addEventListener('click', () => {
  const val = parseFloat(document.getElementById('donation').value);
  const status = document.getElementById('status');
  if (val > 0) {
    status.textContent = `Obrigado pela contribuição de R$ ${val.toFixed(2)}!`;
    status.style.color = 'green';
  } else {
    status.textContent = 'Insira um valor válido maior que zero.';
    status.style.color = 'red';
  }
});

// Download
document.getElementById('btn-download').addEventListener('click', () => {
  window.location.href = 'assets/meu_rpg_python.zip';
});
