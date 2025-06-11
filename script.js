// Scroll to quiz section
const startQuizBtn = document.getElementById('startQuiz');
startQuizBtn.addEventListener('click', () => {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
});

// Quiz submission
const quizForm = document.getElementById('quizForm');
quizForm.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.routine-builder').scrollIntoView({ behavior: 'smooth' });
});

// Modal logic
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
openModal.addEventListener('click', () => modal.classList.remove('hidden'));
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.add('hidden'); });

// Testimonials carousel
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
function rotateTestimonials(){
    testimonials.forEach((t,i)=>t.classList.toggle('active', i===testimonialIndex));
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
setInterval(rotateTestimonials, 3000);
rotateTestimonials();

// Drag & drop routine builder
const products = document.querySelectorAll('.product');
const days = document.querySelectorAll('.day');
products.forEach(p => {
    p.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    });
});
days.forEach(day => {
    day.addEventListener('dragover', e => {
        e.preventDefault();
    });
    day.addEventListener('drop', e => {
        e.preventDefault();
        const text = e.dataTransfer.getData('text/plain');
        const item = document.createElement('div');
        item.textContent = text;
        item.className = 'product';
        day.appendChild(item);
    });
});
