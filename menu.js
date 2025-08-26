
  const botao = document.getElementById("botao-menu");
  const menu = document.getElementById("conteudo-menu");

  botao.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  // Opcional: fecha o menu clicando fora
  document.addEventListener("click", (e) => {
    if (!botao.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });
