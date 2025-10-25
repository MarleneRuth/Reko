// Animaciones de contadores
document.addEventListener('DOMContentLoaded', () => {
    const counters = [
    { id: 'waste', end: 85, suffix: '%' },
    { id: 'users', end: 50, suffix: 'K+' },
    { id: 'companies', end: 300, suffix: '+' }
    ];
    counters.forEach(counter => {
    let value = 0;
    const el = document.getElementById(counter.id);
    const interval = setInterval(() => {
    if (value < counter.end) {
    value++;
    el.textContent = value + counter.suffix;
    } else clearInterval(interval);
    }, 20);
    });
    
    
    // FAQ desplegables
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
    q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
    });
    
    
    // Botón Demo con animación
    const demoBtn = document.getElementById('demoBtn');
    demoBtn.addEventListener('click', () => {
    demoBtn.classList.add('clicked');
    setTimeout(() => demoBtn.classList.remove('clicked'), 500);
    alert('Demo de REKO próximamente disponible.');
    });
   // Animación al hacer clic en los botones del teléfono
document.querySelectorAll(".btn-phone").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.9)";
      setTimeout(() => (btn.style.transform = "scale(1)"), 150);
    });
    });
  });
