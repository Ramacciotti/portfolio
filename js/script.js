function openResume() {
    window.open('Mariana_Ramacciotti_Currículo.pdf', '_blank');
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

async function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');

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

          card.innerHTML = `
              <div class="card-icon">
                  <i class="${project.icone}"></i>
              </div>
              <h3 class="card-title">${project.titulo}</h3>
              <p class="card-description">${project.descricao}</p>
              <div class="tags-container">
                  ${tagsHTML}
              </div>
              <div class="card-footer">
                  <span class="read-more">Ver projeto</span>
                  <i class="fas fa-arrow-right"></i>
              </div>
          `;

          projectsGrid.appendChild(card);
      });

    } catch (error) {
        console.error('Erro ao carregar os projetos:', error);
        projectsGrid.innerHTML = '<p>Erro ao carregar projetos. Tente novamente mais tarde.</p>';
    }
}

async function loadVideos() {
  const videosGrid = document.getElementById('videos-grid');

  for (let i = 0; i < 3; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton-card';
    skeleton.innerHTML = `
      <div class="skeleton-icon"></div>
      <div class="skeleton-title"></div>
    `;
    videosGrid.appendChild(skeleton);
  }

  try {
    const response = await fetch('videos.json');
    const videos = await response.json();

    console.log('Vídeos carregados:', videos);

    videosGrid.innerHTML = '';

    videos.forEach(video => {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.onclick = () => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank');

      card.innerHTML = `
        <img src="https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg" alt="Thumbnail de ${video.titulo}" class="video-thumbnail">
        <h3 class="video-youtube-title">${video.titulo}</h3>
      `;

      videosGrid.appendChild(card);
    });

  } catch (error) {
    console.error('Erro ao carregar os vídeos:', error);
    videosGrid.innerHTML = '<p>Erro ao carregar vídeos. Tente novamente mais tarde.</p>';
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
    loadVideos();
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
