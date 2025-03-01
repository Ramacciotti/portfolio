function openResume() {
    window.open('Mariana_Ramacciotti_Currículo.pdf', '_blank');
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

async function loadArticles() {
    const articlesGrid = document.getElementById('articles-grid');

    // Exibir Skeleton Loading antes do carregamento real
    for (let i = 0; i < 3; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
            <div class="skeleton-icon"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-footer"></div>
        `;
        articlesGrid.appendChild(skeleton);
    }

    try {
        const response = await fetch('artigos.json');
        const articles = await response.json();

        console.log('Artigos carregados:', articles);

        // Remover Skeleton Loading
        articlesGrid.innerHTML = '';

        // Exibir os artigos reais
        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'article-card';
            card.onclick = () => window.open(article.link, '_blank');

            card.innerHTML = `
                <div class="card-icon">
                    <i class="${article.icone}"></i>
                </div>
                <h3 class="card-title">${article.titulo}</h3>
                <p class="card-description">${article.descricao}</p>
                <div class="card-footer">
                    <span class="read-more">Leia mais</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            `;

            articlesGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar os artigos:', error);
        articlesGrid.innerHTML = '<p>Erro ao carregar artigos. Tente novamente mais tarde.</p>';
    }
}

// Carregar artigos ao iniciar a página
document.addEventListener('DOMContentLoaded', loadArticles);

 const resumeIcon = document.getElementById("resume-icon");
  const socialIcons = document.getElementById("social-icons");

  window.addEventListener("scroll", () => {
          let currentScroll = window.scrollY;

          if (currentScroll > 100) {
              resumeIcon.style.opacity = "0";
              resumeIcon.style.pointerEvents = "none";

              socialIcons.style.opacity = "0";
              socialIcons.style.pointerEvents = "none";
          } else {
              resumeIcon.style.opacity = "1";
              resumeIcon.style.pointerEvents = "auto";

              socialIcons.style.opacity = "1";
              socialIcons.style.pointerEvents = "auto";
          }
      });
