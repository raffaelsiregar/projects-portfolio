const projects = [
    {
        title: "Sales Exploratory Data Analysis",
        description: "Exploring company sales data reveals important insights into market trends and product performance. This project is related to RevoU Mini Course final project",
        image: "asset/thumbnail/revou-project.jpg",
        objectives: "To make strategic decisions and identifying opportunities for growth and improvement.",
        tools: "Jupyter Lab, Python (Pandas)",
        link: "https://drive.google.com/file/d/1NSxfYSr1AV-fo5Zk8Po3QQenm44r3RpT/view?usp=sharing",
    },
    {
        title: "FIFA21 Players Analysis",
        description: "Descriptive statistics and Exploratory Data Analysis from Kaggle's FIFA21 Player Dataset. This project is related to AI Bootcamp from Skill Academy by Ruangguru",
        image: "asset/thumbnail/fifa21-project.jpg",
        objectives: "To clean FIFA21 Dataset and prepare to be used in Machine Learning project",
        tools: "Jupyter Lab, Python (Pandas)",
        link: "https://drive.google.com/file/d/1yIFEdLV8wWJT34Q-kwFk-X9qgynH-pxb/view?usp=sharing",
    },
    {
        title: "Compare Ad Effectiveness",
        description: "Clean, Calculate CTR and Compare ad performance effectiveness by utilizing A/B Test. This dataset from Codecademy online course",
        image: "asset/thumbnail/ad-project-thumbnail.png",
        objectives: "Knowing which ad perform more effective",
        tools: "Jupyter Lab, Python (Pandas)",
        link: "https://drive.google.com/file/d/1Wmm645C-aTFm29e0Nnidgc3V9h8NFwxl/view?usp=sharing",
    }
];

let currentProjectIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const prevButton = document.getElementById('prev-project');
    const nextButton = document.getElementById('next-project');

    function renderProjects() {
        projectsGrid.innerHTML = '';
        projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card group relative flex cursor-pointer flex-col justify-between rounded-lg border border-gray-200 p-6 transition-all hover:bg-black hover:shadow-lg fade-in';
            projectElement.innerHTML = `
                <div>
                    <div class="mb-4 overflow-hidden rounded-lg">
                        <img src="${project.image}" alt="${project.title}" class="project-image h-24 w-24 object-cover transition-transform duration-300 group-hover:scale-110">
                    </div>
                    <h2 class="text-xl font-semibold transition-colors group-hover:text-white">${project.title}</h2>
                    <p class="mt-2 text-gray-600 transition-colors group-hover:text-gray-300">${project.description}</p>
                </div>
            `;
            projectElement.addEventListener('click', () => openModal(index));
            projectsGrid.appendChild(projectElement);
        });

        anime({
            targets: '.fade-in',
            opacity: 1,
            translateY: 0,
            delay: anime.stagger(100)
        });
    }

    function openModal(index) {
        currentProjectIndex = index;
        updateModalContent();
        modal.classList.remove('hidden');
        setTimeout(() => {
            modalContent.classList.add('show');
        }, 50);
    }

    function updateModalContent(direction = 0) {
        const project = projects[currentProjectIndex];
        modalContent.classList.remove('show');
        
        setTimeout(() => {
            modalContent.innerHTML = `
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link mb-4 block h-64 w-full overflow-hidden rounded-lg">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-all duration-300">
                    <span class="view-project">View Project</span>
                </a>
                <h2 class="mb-2 text-2xl font-bold">${project.title}</h2>
                <p class="mb-4 text-gray-600">${project.description}</p>
                <h3 class="mb-2 text-xl font-semibold">Objectives</h3>
                <p class="mb-4 text-gray-600">${project.objectives}</p>
                <h3 class="mb-2 text-xl font-semibold">Tools Used</h3>
                <p class="text-gray-600">${project.tools}</p>
            `;

            anime({
                targets: modalContent,
                opacity: [0, 1],
                translateX: [direction * 50, 0],
                easing: 'easeOutQuad',
                duration: 300,
                complete: () => {
                    modalContent.classList.add('show');
                }
            });
        }, 300);
    }

    function closeModal() {
        modalContent.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    prevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        updateModalContent(-1);
    });

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        updateModalContent(1);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    renderProjects();
    lucide.createIcons();

    // Animate background decorations
    const decorations = document.querySelectorAll('.background-decoration');
    decorations.forEach((el, i) => {
        anime({
            targets: el,
            translateX: () => anime.random(-15, 15),
            translateY: () => anime.random(-15, 15),
            scale: [1, 1.1, 1],
            easing: 'easeInOutQuad',
            duration: 4000 + i * 1000,
            loop: true
        });
    });
});