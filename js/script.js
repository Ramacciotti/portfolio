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
            card.onclick = () => window.open(project.link, '_blank');

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
                            src=""
                        ></iframe>
                    </div>
                `;
                showIcon = false;
            } else if (project.videoURL) {
                mediaHTML = `
                    <div class="video-thumbnail">
                        <video src="${project.videoURL}" muted loop playsinline></video>
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

            // Montar o innerHTML:
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
                       <span class="read-more">Ver Projeto no Github</span>
                       <i class="fas fa-arrow-right"></i>
                   </div>
               </div>
           `;

            projectsGrid.appendChild(card);
        });

        // IntersectionObserver para vídeos locais
        const videos = document.querySelectorAll('video');

        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.5 });

        videos.forEach(video => videoObserver.observe(video));

        // IntersectionObserver para iframes YouTube
        const youtubeContainers = document.querySelectorAll('.youtube-video');

        const iframeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const container = entry.target;
                const iframe = container.querySelector('iframe');
                const videoId = container.getAttribute('data-youtube-id');

                if (entry.isIntersecting) {
                    // Monta a URL para autoplay, mute, loop
                    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`;
                } else {
                    // Remove o src para "pausar" o vídeo
                    iframe.src = '';
                }
            });
        }, { threshold: 0.5 });

        youtubeContainers.forEach(container => iframeObserver.observe(container));

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
