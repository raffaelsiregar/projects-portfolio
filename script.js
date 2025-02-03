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
    },
    {
        title: "Dog Breed Classification",
        description: "AI Model in image classification by finetuning Google ViT Base for dog breed classification. This model is trained using 70 Dog Breeds-Image Dataset from Kaggle.",
        image: "asset/thumbnail/dog-classifier-thumbnail.png",
        objectives: "Classify 70 Dog Breeds by Image",
        tools: "Python, Transformers, PyTorch, Huggingface, Gradio, Pandas",
        link: "https://huggingface.co/spaces/raffaelsiregar/dog-breeds-classifier",
    },
    {
        title: "Speech Emotion Recognition",
        description: "AI Model in audio classification by designing CNN Architecture combined with LSTM Architecture to classify speech emotion. This model is trained using Toronto Emotion Speech Set, reached 0.97 accuracy score.",
        image: "asset/thumbnail/audio-classification-thumbnail.png",
        objectives: "Classify 6 Speech emotions (Angry, Sad, Happy, Fear, Disgusting, and Neutral)",
        tools: "Python, PyTorch, Gradio, Librosa",
        link: "https://huggingface.co/spaces/raffaelsiregar/speech-emotion-recognition",

    },
    {
        title: "TheLook E-Commerce",
        description: "Define problems and analyze TheLook E-Commerce data based on the existing case. This project is a part of advanced assignment in RevoU Full-Stack Data Analytics course",
        image: "asset/thumbnail/TheLook.jpg",
        objectives: "Gain several insights and actions recommendation based on insights",
        tools: "SQL, BigQuery",
        link: "https://drive.google.com/file/d/1z6aFdnPGAS-4m6Y0A67t40N6ndFwWCR6/view?usp=drive_link"
    },
    {
        title: "Demographic Data Analyzer",
        description: "In this project, a dataset was extracted from Census 1994. In order to give a picture of this data, some exploratory analysis will be provided.",
        image: "asset/thumbnail/demographic-data-analyzer.jpg",
        objectives: "answer a few analytical questions and gain several insights",
        tools: "Python, Pandas",
        link: "https://drive.google.com/file/d/1WnRplq54jQYiJH-WZ6tgM6jLxYtIbsU1/view?usp=drive_link"
    },
    {
        title: "Sephora Products Performance Analytics",
        description: "This project is part of RevoU Full-Stack Data Analytics course and become the final project of the course. DEEPP stands for Data End-to-End Project Portfolio. Using dataset from Kaggle, this dataset contains 8000+ products",
        image: "asset/thumbnail/sephora.jpeg",
        objectives: "Improve Sephora's products rating from 4.2 to 4.6",
        tools: "Python (Google Colab), Tableau",
        link: "https://drive.google.com/file/d/1pq7CwJ4qvvh5V956cy5ZKFZxTdGKCaPA/view?usp=sharing"
    },
    {
        title: "WishfulBazaar Dashboard",
        description: "This project is focused on WishfulBazaar sales performance. As part of RevoU Full-Stack Data Analytics project, this dataset is given to visualize WishfullBazaar sales performance",
        image: "asset/thumbnail/wishfulbazaar.jpeg",
        objectives: "Give a wide insights and Sales performance overview to Board of Directors",
        tools: "Tableau",
        link: "https://public.tableau.com/views/WishfulBazaarDashboard_17385882370170/WishfullbazaarSalesPerformance?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
        title: "RevoBank Sales Performance",
        description: "This project is part of RevoU Full-Stakc Data Analytics course. RevoBank is a Europe-based bank and needed to be analyzed their sales performance in the last 3 years",
        image: "asset/thumbnail/revobank.jpg",
        objectives: "Analyze 3 years sales performance and create customer segmentation",
        tools: "Python (Google Colab)",
        link: "https://drive.google.com/file/d/1toF_yXEGNhjg8cYnQt94ywDMYLRyGjuQ/view?usp=sharing"
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
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
            scale: [1, 1.1, 1.2, 1.3, 1.2, 1.1, 1],
            easing: 'easeInOutQuad',
            duration: 8000 + i * 1000,
            loop: true
        });
    });
});