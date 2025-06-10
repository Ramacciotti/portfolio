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
                        ${project.github ? `<a href="https://github.com/ramacciotti/${project.github}" target="_blank" rel="noopener noreferrer">
                           GitHub <i class="fab fa-github"></i>
                        </a>` : ''}
                        ${project.youtubeID ? `<a href="https://youtube.com/watch?v=${project.youtubeID}" target="_blank" rel="noopener noreferrer">
                           YouTube <i class="fab fa-youtube"></i>
                        </a>` : ''}
                        ${project.linkedin ? `<a href="${project.linkedin}" target="_blank" rel="noopener noreferrer">
                           LinkedIn <i class="fab fa-linkedin"></i>
                        </a>` : ''}
                        ${project.loja ? `<a href="${project.loja}" target="_blank" rel="noopener noreferrer">
                           Chrome Store <i class="fab fa-chrome"></i>
                        </a>` : ''}
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

function initRecommendationsCarousel() {
    const track = document.querySelector('#recommendations .carousel-track');
    const items = document.querySelectorAll('#recommendations .carousel-item');
    const indicatorsContainer = document.querySelector('#recommendations .carousel-indicators');
    const carouselContainer = document.querySelector('#recommendations .carousel-container');

    let currentIndex = 0;
    const totalItems = items.length;
    let interval;

    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < totalItems; i++) {
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', `Ir para o slide ${i + 1}`);
        if (i === 0) btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            resetInterval();
        });
        indicatorsContainer.appendChild(btn);
    }

    function showSlide(index) {
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    function updateIndicators() {
        const buttons = indicatorsContainer.querySelectorAll('button');
        buttons.forEach((btn, i) => {
            btn.classList.toggle('active', i === currentIndex);
        });
    }

    function updateContainerHeight() {
        const currentItem = items[currentIndex];
        const img = currentItem.querySelector('img');

        if (img.complete) {
            // Calcula altura proporcional baseada na largura atual do item
            const height = img.naturalHeight * (currentItem.clientWidth / img.naturalWidth);
            carouselContainer.style.height = height + 'px';
        } else {
            // Espera a imagem carregar e tenta de novo
            img.onload = () => {
                updateContainerHeight();
            };
        }
    }

    function updateCarousel() {
        showSlide(currentIndex);
        updateIndicators();
        updateContainerHeight();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 4000);
    }

    updateCarousel();
    interval = setInterval(nextSlide, 4000);
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

document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    loadProjects();
    initRecommendationsCarousel();
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
