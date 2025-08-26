
  document.querySelectorAll('.link-com-animacao').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // impede o redirecionamento imediato

      document.getElementById('loader').classList.remove('hidden');

      const destino = this.getAttribute('href');

      setTimeout(() => {
        window.location.href = destino;
      }, 1500); // tempo da animação
    });
  });
