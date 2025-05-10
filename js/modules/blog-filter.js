document.addEventListener('DOMContentLoaded', function() {
    // Mobile category filter
    const mobileFilter = document.getElementById('mobile-category-filter');
    if(mobileFilter) {
        mobileFilter.addEventListener('change', function() {
            filterPosts(this.value);
        });
    }
    
    // Desktop category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter posts
            filterPosts(this.dataset.category);
        });
    });
    
    // Filter posts function
    function filterPosts(category) {
        const posts = document.querySelectorAll('.blog-post');
        posts.forEach(post => {
            if(category === 'all' || post.dataset.category === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }
    
    // Newsletter form handling
    const newsletterForm = document.getElementById('newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            // Here you would typically send to your backend
            console.log('Subscribed email:', email);
            
            // Show success message
            alert('Thank you for subscribing! You\'ll receive our next health tip soon.');
            this.reset();
        });
    }
});