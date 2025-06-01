function openResume() {
    window.open('Mariana_Ramacciotti_Currículo.pdf', '_blank');
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

async function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');

    // Skeletons enquanto carrega
    for (let i = 0; i < 3; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
            <div class="skeleton-icon"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-footer"></div>
        `;
        projectsGrid.appendChild(skeleton);
    }

    try {
        const response = await fetch('projects.json');
        const projects = await response.json();

        console.log('Projetos carregados:', projects);

        projectsGrid.innerHTML = '';

        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            let mediaHTML = '';
            let showIcon = true;

            if (project.youtubeID) {
                mediaHTML = `
                    <div class="video-thumbnail youtube-video" data-youtube-id="${project.youtubeID}">
                        <iframe
                            width="100%"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            src="https://www.youtube.com/embed/${project.youtubeID}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeID}&controls=0&modestbranding=1&rel=0"
                        ></iframe>
                    </div>
                `;
                showIcon = false;
            } else if (project.videoURL) {
                mediaHTML = `
                    <div class="video-thumbnail">
                        <video src="${project.videoURL}" autoplay muted loop playsinline></video>
                    </div>
                `;
                showIcon = false;
            } else if (project.videoThumbnail) {
                mediaHTML = `
                    <div class="video-thumbnail">
                        <img src="${project.videoThumbnail}" alt="Thumbnail do vídeo de ${project.titulo}">
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="card-media">
                    ${mediaHTML}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${project.titulo}</h3>
                    ${showIcon ? `<div class="card-icon"><i class="${project.icone}"></i></div>` : ''}
                    <p class="card-description">${project.descricao}</p>
                    <div class="tags-container">${tagsHTML}</div>
                    <div class="card-footer">
                        <a href="https://github.com/ramacciotti/${project.github}" target="_blank" rel="noopener noreferrer">
                           Ver Projeto no Github <i class="fas fa-arrow-right"></i>
                       </a>
                       <a href="https://youtube.com/watch?v=${project.youtubeID}" target="_blank" rel="noopener noreferrer">
                           Ver Projeto no Youtube <i class="fas fa-arrow-right"></i>
                       </a>
                    </div>
                </div>
            `;

            projectsGrid.appendChild(card);
        });

        // REMOVIDO: IntersectionObserver para vídeos locais e iframes do YouTube
        // Todos os vídeos já vão tocar automaticamente e ficar exibidos o tempo todo

    } catch (error) {
        console.error('Erro ao carregar os projetos:', error);
        projectsGrid.innerHTML = '<p>Erro ao carregar projetos. Tente novamente mais tarde.</p>';
    }
}

async function loadArticles() {
    const articlesGrid = document.getElementById('articles-grid');

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

        articlesGrid.innerHTML = '';

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
document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    loadProjects();
});
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
