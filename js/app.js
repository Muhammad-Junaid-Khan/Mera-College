// === Portfolio Button ===
function openPortfolio() {
    window.open("https://muhammad-junaid-khan.github.io/portfolio-hub/", "_blank");
}

// === Scroll-triggered animations ===
function scrollAnimate() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
        if(el.getBoundingClientRect().top < triggerBottom){
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', scrollAnimate);
window.addEventListener('load', scrollAnimate);

// === Counter Animation ===
function animateCounter(id, start, end, duration) {
    const obj = document.getElementById(id);
    if(!obj) return;
    let current = start;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const timer = setInterval(() => {
        current += 1;
        obj.innerText = current;
        if(current >= end) clearInterval(timer);
    }, stepTime);
}
window.addEventListener('load', () => {
    animateCounter('studentsCounter', 0, 2500, 2000);
    animateCounter('teachersCounter', 0, 150, 2000);
    animateCounter('programsCounter', 0, 12, 2000);
});

// === Courses Cards ===
const coursesContainer = document.getElementById('coursesContainer');
if(coursesContainer){
    const courses = [
        {title:"Science", desc:"Physics, Chemistry & Biology", img:"assets/images/science.avif"},
        {title:"Arts & Humanities", desc:"Literature, History & Languages", img:"assets/images/Arts & Humanities.jpg"},
        {title:"Business Studies", desc:"Finance, Marketing, Entrepreneurship", img:"assets/images/Business Studies.jpg"},
        {title:"Computer Science", desc:"Programming, AI, Web Development", img:"assets/images/Computer Science.jpg"}
    ];
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'col-md-3 animate-on-scroll';
        card.innerHTML = `
            <div class="card h-100 shadow-sm hover-zoom">
                <img src="${course.img}" class="card-img-top" alt="${course.title}">
                <div class="card-body text-center">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.desc}</p>
                    <a href="#" class="btn btn-primary">Explore</a>
                </div>
            </div>
        `;
        coursesContainer.appendChild(card);
    });
}

// === News Carousel ===
const newsCarousel = document.getElementById('newsCarousel');
if(newsCarousel){
    const newsData = [
        {title:"Science Fair 2026", icon:"fas fa-flask"},
        {title:"Annual Sports Day", icon:"fas fa-basketball-ball"},
        {title:"New Library Opening", icon:"fas fa-book"},
        {title:"Computer Lab Upgrade", icon:"fas fa-laptop-code"}
    ];
    newsData.forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card card p-3 shadow-sm hover-zoom';
        card.innerHTML = `<i class="${news.icon} fa-2x text-primary mb-2"></i><h6>${news.title}</h6>`;
        newsCarousel.appendChild(card);
    });
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 320;
        if(scrollAmount >= newsCarousel.scrollWidth - newsCarousel.clientWidth) scrollAmount = 0;
        newsCarousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);
}

// === Sidebar toggle for mobile ===
function toggleSidebar(){
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main-content');
    if(sidebar && main){
        sidebar.classList.toggle('d-none');
        main.classList.toggle('ml-0');
    }
}
