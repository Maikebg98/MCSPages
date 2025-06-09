document.addEventListener("DOMContentLoaded", () => {
  const projetos = [
    { nome: "Odonto Prime", descricao: "Landing page desenvolvida para uma clínica odontológica, focada em promover os serviços oferecidos e facilitar o contato com os pacientes. O design é moderno e limpo, com uma navegação intuitiva e responsiva. Inclui seções essenciais como apresentação dos serviços, depoimentos de pacientes e formulário de contato, proporcionando uma experiência de usuário eficiente e profissional. A integração de um botão de WhatsApp flutuante permite comunicação direta e rápida.", imagem: "assets/images/odonto.webp", alt: "Odonto Prime" },
    { nome: "TechArt", descricao: "Site criado para o curso 'Desenho Técnico de Esquadrias - Básico', desenvolvido com foco em apresentar os conceitos essenciais de desenho técnico de esquadrias. A plataforma oferece uma interface limpa e objetiva, utilizando técnicas de design responsivo para facilitar o acesso em diferentes dispositivos. Com animações sutis e estrutura intuitiva, o site proporciona uma experiência de navegação envolvente e profissional para os usuários interessados em aprender mais sobre o assunto.", imagem: "assets/images/techart.webp", alt: "TechArt" },
    { nome: "Real State", descricao: "Desenvolvi uma landing page elegante e funcional para o segmento imobiliário, com o objetivo de destacar imóveis e captar leads qualificados. O layout é totalmente responsivo e otimizado para dispositivos móveis, com navegação fluida, seções de destaque para imóveis, benefícios da empresa, depoimentos e formulário de contato. O projeto foi construído com HTML, CSS e JavaScript, incluindo ícones, animações suaves com AOS e um botão flutuante de WhatsApp para facilitar o atendimento.", imagem: "assets/images/real-state.webp", alt: "Real State" },
    { nome: "ExcelPro", descricao: "Criação de uma landing page promocional para divulgação de um curso de Excel, com foco em conversão. O projeto apresenta um layout limpo, responsivo e com chamadas para ação estrategicamente posicionadas. Utilizei HTML, CSS e JavaScript para estruturar a página, com efeitos de rolagem e seções informativas como benefícios, conteúdo programático, depoimentos e formulário de inscrição.", imagem: "assets/images/mestre-excel.webp", alt: "ExcelPro" },
    { nome: "Imprima Certo", descricao: "Desenvolvi uma landing page institucional moderna e responsiva para a empresa Imprima Certo, com foco em apresentar seus serviços de forma clara e atrativa. O layout foi construído com HTML, CSS e JavaScript, priorizando a usabilidade e a navegação fluida. O projeto inclui seções informativas, formulário de contato funcional e design adaptado para dispositivos móveis.", imagem: "assets/images/imprima-certo.webp", alt: "Imprima Certo" },
    { nome: "Inglês em tempo recorde", descricao: "Landing page desenvolvida para promover um curso de inglês online. A página foi construída com foco em conversão, utilizando seções estratégicas como apresentação do curso, diferenciais, depoimentos de alunos, planos e formulário de inscrição. O design é limpo, com ícones ilustrativos, animações suaves (AOS) e navegação fluida, garantindo uma experiência moderna e atrativa tanto no desktop quanto no mobile.", imagem: "assets/images/projeto-ingles.webp", alt: "Inglês em tempo recorde" },
    { nome: "ThermoCo", descricao: "Landing page criada para destacar um produto com foco em vendas. O layout segue um estilo escuro e moderno, com elementos visuais impactantes e botões de chamada para ação em destaque. A estrutura da página foi pensada para conduzir o usuário pela proposta de valor do produto, com seções de benefícios, galeria, depoimentos e formulário de contato. Totalmente responsiva e otimizada para conversões.", imagem: "assets/images/thermoco.webp", alt: "ThermoCo" },
    { nome: "Diretto Advocacia", descricao: "Landing page desenvolvida para o escritório de advocacia Diretto. O site transmite seriedade e confiança, com uma identidade visual limpa e profissional. Estruturei as seções para destacar as áreas de atuação, diferenciais do escritório e facilitar o contato direto via formulário e WhatsApp. A página é totalmente responsiva e otimizada para uma navegação eficiente em dispositivos móveis.", imagem: "assets/images/diretto-adv.webp", alt: "Diretto Advocacia" },
    { nome: "Delmiro & Silva", descricao: "Landing page desenvolvida para promover os serviços do profissional Delmiro & Silva. O site apresenta um layout moderno e responsivo, com foco na apresentação clara das especialidades, depoimentos de clientes e chamada para contato. Utilizei boas práticas de UX/UI, animações suaves e navegação fluida para destacar a credibilidade e profissionalismo do cliente.", imagem: "assets/images/delmiroesilva.webp", alt: "Delmiro & Silva" },
  ];

  const container = document.getElementById("projetos-container");
  const modal = new bootstrap.Modal(document.getElementById("modal-projeto"));

  const renderProjetos = () => {
    let html = "";

    projetos.forEach((p, index) => {
      html += `
        <div class="col-12 col-md-4">
          <article class="card h-100 projeto-card text-center bg-dark text-white" data-index="${index}" role="button" tabindex="0">
            <img src="${p.imagem}" class="card-img-top" alt="${p.alt}" loading="lazy">
            <div class="card-footer bg-dark p-3">
              <h5 class="card-title text-warning mb-2">${p.nome}</h5>
              <span class="d-inline-flex align-items-center justify-content-center gap-2 text-light">
                <i class="fas fa-mouse-pointer"></i> Ver mais detalhes
              </span>
            </div>
          </article>
        </div>
      `;
    });

    // Preenche espaços vazios para completar múltiplos de 3
    const totalCards = projetos.length;
    const cardsParaCompletar = (3 - (totalCards % 3)) % 3;
    for (let i = 0; i < cardsParaCompletar; i++) {
      html += `<div class="col-12 col-md-4 d-none d-md-block"></div>`;
    }

    container.innerHTML = html;

    document.querySelectorAll(".projeto-card").forEach((card) => {
      const index = parseInt(card.getAttribute("data-index"));
      const p = projetos[index];

      const abrirModal = () => {
        document.getElementById("modalTitulo").textContent = p.nome;
        document.getElementById("modalDescricao").textContent = p.descricao;
        document.getElementById("modalImagem").src = p.imagem;
        document.getElementById("modalImagem").alt = p.alt;
        modal.show();
      };

      card.addEventListener("click", abrirModal);
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter") abrirModal();
      });
    });
  };

  renderProjetos();
});
