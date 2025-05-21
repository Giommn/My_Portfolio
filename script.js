 // Menu Hamburguer
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('.nav-links');

 menuToggle.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Fechar menu ao clicar em um link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
     });
 });

 // Fechar menu ao clicar fora
 document.addEventListener('click', (e) => {
     if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
         navLinks.classList.remove('active');
     }
 });