document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    const mensagem = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const dados = new FormData(form);

      try {
        const resposta = await fetch(form.action, {
          method: "POST",
          body: dados,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (resposta.ok) {
          form.reset();
          mensagem.style.display = "block";
        } else {
          alert("Erro ao enviar. Tente novamente.");
        }
      } catch (error) {
        alert("Erro de conexão. Tente novamente mais tarde.");
      }
    });
});