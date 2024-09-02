document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const content = document.querySelector('.timeline-content');
    const title = document.getElementById('timeline-title');
    const description = document.getElementById('timeline-description');
    const image = document.getElementById('timeline-image');

    // Timeline data
    const timelineData = {
        'default': {
            title: 'About',
            description: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
            image: "image/display.png"
        },
        'April 2018': {
            title: 'April 2018',
            description: "IG Drones was founded with the aim of providing enterprise drone solutions across India.",
            image: "image/display.png"
        },
        'April 2019': {
            title: 'April 2019',
            description: "Expanded services to include drone surveying, mapping, and inspection for various sectors like infrastructure, power, and agriculture.",
            image: "image/display.png"
        },
        'April 2020': {
            title: 'April 2020',
            description: "Established partnerships with multiple state governments and major public and private sector companies, executing over 200 projects.",
            image: "image/display.png"
        },
        'April 2021': {
            title: 'April 2021',
            description: "Launched the Drone Centre of Excellence (CoE) to train students in drone technology, aligning with the Industrial 4.0 Revolution.",
            image: "image/display.png"
        },
        'April 2022': {
            title: 'April 2022',
            description: "Completed over 500 drone projects, with a focus on AI-driven reporting and cloud-based visualization for asset management.",
            image: "image/display.png"
        },
        'April 2023': {
            title: 'April 2023',
            description: "Continued expansion with increased specialization in sectors such as mining, railway, agriculture, and smart city planning.",
            image: "image/display.png"
        },
        'April 2024': {
            title: 'April 2024',
            description: "Established a nationwide presence with six branch offices and over 150 industrial clients, training over 10 million students in drone technologies.",
            image: "image/display.png"
        }
    };

    // Display the default content initially
    title.textContent = timelineData['default'].title;
    description.textContent = timelineData['default'].description;
    image.src = timelineData['default'].image;

    // Show the content initially
    content.classList.add('show');

    // Event listener for clicking timeline dots
    timeline.addEventListener('click', (e) => {
        if (e.target.classList.contains('timeline-dot')) {
            const year = e.target.getAttribute('data-year');

            if (timelineData[year]) {
                title.textContent = timelineData[year].title;
                description.textContent = timelineData[year].description;
                image.src = timelineData[year].image;
            }

            // Remove active class from all dots and add to the clicked one
            document.querySelectorAll('.timeline-dot').forEach(dot => dot.classList.remove('active'));
            e.target.classList.add('active');

            // Add and remove the show class for a fade-in effect
            content.classList.add('show');
            content.addEventListener('animationend', () => {
                content.classList.remove('show');
            }, { once: true });
        }
    });
});
