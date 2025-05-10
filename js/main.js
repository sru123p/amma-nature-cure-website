// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if(this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if(mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Load services dynamically
const services = [
    {
        title: "Body Detox",
        description: "Cleanse your body of toxins and restore natural balance with our specialized detox programs.",
        image: "images/services/body-detox.jpg"
    },
    {
        title: "Leech Therapy",
        description: "An ancient healing technique that improves blood circulation and promotes healing.",
        image: "images/services/leech-therapy.jpg"
    },
    {
        title: "Cupping Therapy",
        description: "Relieve muscle tension, improve blood flow, and promote cell repair with this traditional treatment.",
        image: "images/services/cupping-therapy.jpg"
    },
    {
        title: "Acupuncture",
        description: "Balance your body's energy flow and relieve various conditions with this ancient Chinese therapy.",
        image: "images/services/acupuncture.jpg"
    },
    {
        title: "Reflexology",
        description: "Apply pressure to specific points on the feet to promote healing in corresponding body parts.",
        image: "images/services/reflexology.jpg"
    },
    {
        title: "Diet & Nutrition",
        description: "Personalized dietary plans to support your health goals and address specific conditions.",
        image: "images/services/diet-nutrition.jpg"
    }
];

const servicesContainer = document.querySelector('.services-container');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
        <div class="service-img">
            <img src="${service.image}" alt="${service.title}">
        </div>
        <div class="service-content">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="#contact" class="btn">Learn More</a>
        </div>
    `;
    servicesContainer.appendChild(serviceCard);
});

// Load doctors dynamically
const doctors = [
    {
        name: "Dr. Reena",
        specialty: "Naturopathic Physician",
        bio: "Specializing in women's health and natural therapies",
        image: "images/doctors/dr-reena.jpg"
    },
    {
        name: "Dr. Sowmya",
        specialty: "Nature Cure Specialist",
        bio: "Expert in detox therapies and holistic healing",
        image: "images/doctors/dr-sowmya.jpg"
    }
];

const doctorsContainer = document.querySelector('.doctors-container');
doctors.forEach(doctor => {
    const doctorCard = document.createElement('div');
    doctorCard.className = 'doctor-card';
    doctorCard.innerHTML = `
        <div class="doctor-img">
            <img src="${doctor.image}" alt="${doctor.name}">
        </div>
        <div class="doctor-info">
            <h3>${doctor.name}</h3>
            <p>${doctor.specialty}</p>
            <p>${doctor.bio}</p>
            <div class="doctor-social">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    `;
    doctorsContainer.appendChild(doctorCard);
});

// Populate service dropdown in form
const serviceSelect = document.getElementById('service');
services.forEach(service => {
    const option = document.createElement('option');
    option.value = service.title.toLowerCase().replace(/\s+/g, '-');
    option.textContent = service.title;
    serviceSelect.appendChild(option);
});

// Populate footer navigation
const footerNav = document.getElementById('footer-nav');
const mainNavItems = document.querySelectorAll('nav ul li a');
mainNavItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.getAttribute('href');
    a.textContent = item.textContent;
    li.appendChild(a);
    footerNav.appendChild(li);
});

// Populate footer services
const footerServices = document.getElementById('footer-services');
services.slice(0, 5).forEach(service => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#services";
    a.textContent = service.title;
    li.appendChild(a);
    footerServices.appendChild(li);
});