// Toggle search form
const searchToggleBtn = document.getElementById('search-toggle-btn');
const searchForm = document.getElementById('search-form');

searchToggleBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    searchForm.classList.toggle('active');
});

// Close search form when clicking outside
document.addEventListener('click', function() {
    searchForm.classList.remove('active');
});

// Prevent search form from closing when clicking inside it
searchForm.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Search functionality
const cuisineSearchBtn = document.getElementById('cuisine-search-btn');
const restaurantSearchBtn = document.getElementById('restaurant-search-btn');
const searchInput = document.getElementById('search-input');

cuisineSearchBtn.addEventListener('click', function() {
    if (searchInput.value.trim() !== '') {
        alert('Searching for cuisine: ' + searchInput.value);
        searchForm.classList.remove('active');
    }
});

restaurantSearchBtn.addEventListener('click', function() {
    if (searchInput.value.trim() !== '') {
        alert('Searching for restaurant: ' + searchInput.value);
        searchForm.classList.remove('active');
    }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.querySelector('i').classList.toggle('fa-sun');
    this.querySelector('i').classList.toggle('fa-moon');
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.querySelectorAll('span').forEach((span, index) => {
        if (navLinks.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            span.style.transform = '';
            span.style.opacity = '';
        }
    });
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 992) {
            navLinks.classList.remove('active');
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });
});

// Initialize on load
window.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a mobile device
    if (window.innerWidth <= 992) {
        navLinks.classList.remove('active');
    }
});