// Enhanced property data for OpenBook.com
const propertyData = [
    {
        id: 1,
        title: "Modern Student Apartment Near University",
        images: ["https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 2,
        bathroom: 1,
        size: "45 sqm",
        price: 4500,
        address: "123 Student Village, Cape Town, Western Cape",
        type: "rent",
        propertyType: "apartment",
        bursaryAllowed: true,
        billsIncluded: true,
        isFeatured: true,
        isVerified: true,
        bills: {
            electricity: { included: true, cost: 0 },
            water: { included: true, cost: 0 },
            internet: { included: true, cost: 0 },
            security: { included: false, cost: 200 },
            parking: { included: false, cost: 150 }
        },
        totalMonthlyCost: 4850,
        description: "Perfect for students, located just 5 minutes from UCT. Modern, furnished with all essential utilities included.",
        agencyId: "agency1",
        agentId: "agent1"
    },
    {
        id: 2,
        title: "Spacious Family Home in Suburbs",
        images: ["https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 3,
        bathroom: 2,
        size: "120 sqm",
        price: 8500,
        address: "456 Suburban Drive, Johannesburg, Gauteng",
        type: "rent",
        propertyType: "house",
        bursaryAllowed: false,
        billsIncluded: false,
        isFeatured: false,
        isVerified: true,
        bills: {
            electricity: { included: false, cost: 800 },
            water: { included: false, cost: 300 },
            internet: { included: false, cost: 500 },
            security: { included: true, cost: 0 },
            parking: { included: true, cost: 0 }
        },
        totalMonthlyCost: 10100,
        description: "Beautiful family home with garden, perfect for families. Close to schools and shopping centers.",
        agencyId: "agency2",
        agentId: "agent2"
    },
    {
        id: 3,
        title: "Affordable Student Room - Bursary Friendly",
        images: ["https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 1,
        bathroom: 1,
        size: "25 sqm",
        price: 2800,
        address: "789 Campus Road, Stellenbosch, Western Cape",
        type: "rent",
        propertyType: "room",
        bursaryAllowed: true,
        billsIncluded: true,
        isFeatured: false,
        isVerified: true,
        bills: {
            electricity: { included: true, cost: 0 },
            water: { included: true, cost: 0 },
            internet: { included: true, cost: 0 },
            security: { included: true, cost: 0 },
            parking: { included: false, cost: 100 }
        },
        totalMonthlyCost: 2900,
        description: "Perfect for students on a budget. All bills included, walking distance to university.",
        agencyId: "agency1",
        agentId: "agent3"
    },
    {
        id: 4,
        title: "Luxury Penthouse for Sale",
        images: ["https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 4,
        bathroom: 3,
        size: "200 sqm",
        price: 2500000,
        address: "321 Ocean View, Durban, KwaZulu-Natal",
        type: "buy",
        propertyType: "apartment",
        bursaryAllowed: false,
        billsIncluded: false,
        isFeatured: true,
        isVerified: true,
        bills: {
            electricity: { included: false, cost: 1200 },
            water: { included: false, cost: 400 },
            internet: { included: false, cost: 800 },
            security: { included: true, cost: 0 },
            parking: { included: true, cost: 0 }
        },
        totalMonthlyCost: 0, // For sale properties
        description: "Stunning penthouse with ocean views. Luxury finishes throughout with premium amenities.",
        agencyId: "agency3",
        agentId: "agent4"
    },
    {
        id: 5,
        title: "Student Residence - All Inclusive",
        images: ["https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 1,
        bathroom: 1,
        size: "30 sqm",
        price: 3200,
        address: "654 University Ave, Pretoria, Gauteng",
        type: "rent",
        propertyType: "student",
        bursaryAllowed: true,
        billsIncluded: true,
        isFeatured: true,
        isVerified: true,
        bills: {
            electricity: { included: true, cost: 0 },
            water: { included: true, cost: 0 },
            internet: { included: true, cost: 0 },
            security: { included: true, cost: 0 },
            parking: { included: true, cost: 0 }
        },
        totalMonthlyCost: 3200,
        description: "Purpose-built student accommodation with study facilities, 24/7 security, and all bills included.",
        agencyId: "agency1",
        agentId: "agent1"
    },
    {
        id: 6,
        title: "Cozy Apartment Near Shopping Center",
        images: ["https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 2,
        bathroom: 1,
        size: "65 sqm",
        price: 6000,
        address: "987 Mall Street, Bloemfontein, Free State",
        type: "rent",
        propertyType: "apartment",
        bursaryAllowed: false,
        billsIncluded: false,
        isFeatured: false,
        isVerified: true,
        bills: {
            electricity: { included: false, cost: 600 },
            water: { included: true, cost: 0 },
            internet: { included: false, cost: 400 },
            security: { included: true, cost: 0 },
            parking: { included: false, cost: 200 }
        },
        totalMonthlyCost: 7200,
        description: "Convenient location with easy access to shopping and transport. Modern amenities throughout.",
        agencyId: "agency2",
        agentId: "agent2"
    }
];

// Global variables
let currentPropertyType = 'rent';
let currentImageIndex = 0;
let filteredProperties = propertyData;
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
    renderPropertyCards();
    setupEventListeners();
    updateBursaryFilterVisibility();
});

// Dark Mode Management
function initializeDarkMode() {
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon();
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    }
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the corresponding nav button
    const navButtons = document.querySelectorAll('.nav-btn');
    if (pageId === 'home-page') navButtons[0].classList.add('active');
    else if (pageId === 'list-page') navButtons[1].classList.add('active');
    else if (pageId === 'single-page') navButtons[2].classList.add('active');
    else if (pageId === 'agencies-page') navButtons[3].classList.add('active');
}

// Enhanced event listeners setup
function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }

    // Property type selector with bursary filter visibility
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update current type
            currentPropertyType = this.dataset.type;
            
            // Update bursary filter visibility
            updateBursaryFilterVisibility();
        });
    });

    // Search form submission
    document.querySelector('.search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch();
        showPage('list-page');
    });

    // Filter form
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            applyFilters();
        });
    }

    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            // Toggle mobile menu visibility
            toggleMobileMenu();
        });
    }

    // Auth links
    document.querySelectorAll('.auth-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.textContent === 'Sign in') {
                simulateLogin();
            } else {
                showRegistrationModal();
            }
        });
    });

    // Favorite button functionality
    setupFavoriteButtons();
}

// Update bursary filter visibility based on property type
function updateBursaryFilterVisibility() {
    const bursaryFilter = document.getElementById('bursary-filter');
    if (bursaryFilter) {
        if (currentPropertyType === 'rent') {
            bursaryFilter.style.display = 'flex';
        } else {
            bursaryFilter.style.display = 'none';
        }
    }
}

// Enhanced search functionality
function performSearch() {
    const formData = new FormData(document.querySelector('.search-form'));
    const location = formData.get('location') || '';
    const propertyType = formData.get('propertyType') || '';
    const minPrice = parseInt(formData.get('minPrice')) || 0;
    const maxPrice = parseInt(formData.get('maxPrice')) || Infinity;
    const bursaryAllowed = formData.get('bursaryAllowed') === 'on';

    filteredProperties = propertyData.filter(property => {
        const matchesType = property.type === currentPropertyType;
        const matchesLocation = location === '' || property.address.toLowerCase().includes(location.toLowerCase());
        const matchesPropertyType = propertyType === '' || property.propertyType === propertyType;
        const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
        const matchesBursary = !bursaryAllowed || property.bursaryAllowed;
        
        return matchesType && matchesLocation && matchesPropertyType && matchesPrice && matchesBursary;
    });

    renderPropertyCards();
    updateSearchResults();
}

// Enhanced filter application
function applyFilters() {
    const filterInputs = document.querySelectorAll('.filter-input');
    const filterSelects = document.querySelectorAll('.filter-select');
    const bursaryFilter = document.querySelector('input[name="bursaryFilter"]');
    const billsFilter = document.querySelector('input[name="billsIncluded"]');
    
    // Get filter values
    const location = filterInputs[0].value || '';
    const minPrice = parseInt(filterInputs[1].value) || 0;
    const maxPrice = parseInt(filterInputs[2].value) || Infinity;
    const listingType = filterSelects[0].value || '';
    const propertyType = filterSelects[1].value || '';
    const bedrooms = filterSelects[2].value || '';

    filteredProperties = propertyData.filter(property => {
        const matchesLocation = location === '' || property.address.toLowerCase().includes(location.toLowerCase());
        const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
        const matchesListingType = listingType === '' || property.type === listingType;
        const matchesPropertyType = propertyType === '' || property.propertyType === propertyType;
        const matchesBedrooms = bedrooms === '' || property.bedroom.toString() === bedrooms || (bedrooms === '4+' && property.bedroom >= 4);
        const matchesBursary = !bursaryFilter.checked || property.bursaryAllowed;
        const matchesBills = !billsFilter.checked || property.billsIncluded;
        
        return matchesLocation && matchesPrice && matchesListingType && matchesPropertyType && matchesBedrooms && matchesBursary && matchesBills;
    });

    renderPropertyCards();
    updateSearchResults();
}

// Enhanced property card rendering
function renderPropertyCards() {
    const container = document.getElementById('property-cards');
    
    if (filteredProperties.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🏠</div>
                <h3>No properties found</h3>
                <p>Try adjusting your search criteria or browse all properties.</p>
                <button onclick="resetFilters()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--openbook-blue); color: white; border: none; border-radius: 6px; cursor: pointer;">Reset Filters</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredProperties.map(property => `
        <div class="property-card" onclick="viewProperty(${property.id})" role="button" tabindex="0" aria-label="View property: ${property.title}">
            <img src="${property.images[0]}" alt="${property.title}" class="card-image" loading="lazy">
            <div class="card-content">
                <div class="card-badges">
                    ${property.isFeatured ? '<span class="badge featured">✨ Featured</span>' : ''}
                    ${property.bursaryAllowed && property.type === 'rent' ? '<span class="badge bursary-allowed">🎓 Bursary Allowed</span>' : ''}
                    ${property.billsIncluded ? '<span class="badge bills-included">💡 Bills Included</span>' : ''}
                    ${property.isVerified ? '<span class="badge verified">✅ Verified</span>' : ''}
                </div>
                
                <h3 class="card-title">${property.title}</h3>
                <div class="card-address">
                    <span>📍 ${property.address}</span>
                </div>
                <div class="card-price">
                    R${property.price.toLocaleString()}
                    ${property.type === 'rent' ? '<span class="price-period">/month</span>' : ''}
                </div>
                <div class="card-bottom">
                    <div class="card-features">
                        <div class="card-feature">
                            <span>🛏️ ${property.bedroom} bedroom${property.bedroom > 1 ? 's' : ''}</span>
                        </div>
                        <div class="card-feature">
                            <span>🚿 ${property.bathroom} bathroom${property.bathroom > 1 ? 's' : ''}</span>
                        </div>
                        <div class="card-feature">
                            <span>📐 ${property.size}</span>
                        </div>
                    </div>
                    <div class="card-icons">
                        <div class="card-icon" onclick="event.stopPropagation(); saveProperty(${property.id})" title="Save property">💾</div>
                        <div class="card-icon" onclick="event.stopPropagation(); contactAgent(${property.id})" title="Contact agent">💬</div>
                        <div class="card-icon" onclick="event.stopPropagation(); shareProperty(${property.id})" title="Share property">�</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add keyboard event listeners for accessibility
    document.querySelectorAll('.property-card[tabindex="0"]').forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Update search results display
function updateSearchResults() {
    const resultText = document.querySelector('.filter-section h3');
    if (resultText) {
        const count = filteredProperties.length;
        const location = currentPropertyType === 'rent' ? 'South Africa' : 'South Africa';
        resultText.innerHTML = `Search results for <b>${location}</b> - ${count} ${count === 1 ? 'property' : 'properties'} found`;
    }
}

// Enhanced property viewing with bills breakdown
function viewProperty(propertyId) {
    const property = propertyData.find(p => p.id === propertyId);
    if (!property) return;

    // Update property details
    document.querySelector('.property-title').textContent = property.title;
    document.querySelector('.property-address span').textContent = `📍 ${property.address}`;
    
    // Update price display
    const priceElement = document.querySelector('.property-price .main-price');
    const periodElement = document.querySelector('.property-price .price-period');
    if (priceElement) {
        priceElement.textContent = `R${property.price.toLocaleString()}`;
    }
    if (periodElement) {
        periodElement.textContent = property.type === 'rent' ? '/month' : '';
    }
    
    // Update features
    const features = document.querySelectorAll('.property-features .feature span');
    if (features.length >= 4) {
        features[0].textContent = `🛏️ ${property.bedroom} bedroom${property.bedroom > 1 ? 's' : ''}`;
        features[1].textContent = `🚿 ${property.bathroom} bathroom${property.bathroom > 1 ? 's' : ''}`;
        features[2].textContent = `📐 ${property.size}`;
        features[3].textContent = `🏢 ${property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}`;
    }

    // Update badges
    updatePropertyBadges(property);

    // Update bills breakdown
    updateBillsBreakdown(property);

    // Update main image
    document.getElementById('main-image').src = property.images[0];

    // Update description
    const descriptionElement = document.querySelector('.property-description p');
    if (descriptionElement) {
        descriptionElement.textContent = property.description;
    }

    showPage('single-page');
}

// Update property badges
function updatePropertyBadges(property) {
    const badgesContainer = document.querySelector('.property-badges');
    if (!badgesContainer) return;

    let badgesHTML = '';
    
    if (property.isFeatured) {
        badgesHTML += '<span class="badge featured">✨ Featured</span>';
    }
    
    if (property.bursaryAllowed && property.type === 'rent') {
        badgesHTML += '<span class="badge bursary-allowed">🎓 Bursary Allowed</span>';
    }
    
    if (property.billsIncluded) {
        badgesHTML += '<span class="badge bills-included">💡 Bills Included</span>';
    }
    
    if (property.isVerified) {
        badgesHTML += '<span class="badge verified">✅ Verified</span>';
    }

    badgesContainer.innerHTML = badgesHTML;
}

// Update bills breakdown section
function updateBillsBreakdown(property) {
    const billsBreakdown = document.querySelector('.bills-breakdown');
    const totalCostElement = document.querySelector('.total-cost');
    
    if (!billsBreakdown || !property.bills) return;

    const bills = property.bills;
    let billsHTML = '';
    
    Object.entries(bills).forEach(([billType, billInfo]) => {
        const billName = billType.charAt(0).toUpperCase() + billType.slice(1);
        const statusClass = billInfo.included ? 'included' : 'extra';
        const statusText = billInfo.included ? '✅ Included' : `💰 R${billInfo.cost}/month`;
        
        billsHTML += `
            <div class="bill-item">
                <span class="bill-name">${billName}</span>
                <span class="bill-status ${statusClass}">${statusText}</span>
            </div>
        `;
    });

    billsBreakdown.innerHTML = billsHTML;

    // Update total cost
    if (totalCostElement && property.type === 'rent') {
        totalCostElement.innerHTML = `<strong>Total Monthly Cost: R${property.totalMonthlyCost.toLocaleString()}</strong>`;
    }
}

// Property actions with enhanced feedback
function saveProperty(propertyId) {
    const property = propertyData.find(p => p.id === propertyId);
    if (!property) return;
    
    // Get or create saved properties list
    let savedProperties = JSON.parse(localStorage.getItem('savedProperties') || '[]');
    
    if (savedProperties.includes(propertyId)) {
        // Remove from saved
        savedProperties = savedProperties.filter(id => id !== propertyId);
        showNotification(`"${property.title}" removed from favorites`, 'info');
    } else {
        // Add to saved
        savedProperties.push(propertyId);
        showNotification(`"${property.title}" saved to favorites!`, 'success');
    }
    
    localStorage.setItem('savedProperties', JSON.stringify(savedProperties));
    updateFavoriteIcons();
}

function contactAgent(propertyId) {
    const property = propertyData.find(p => p.id === propertyId);
    if (!property) return;
    
    showNotification(`Opening contact form for "${property.title}". Agent will respond within 24 hours.`, 'info');
    
    // In a real app, this would open a contact modal or redirect to contact page
    setTimeout(() => {
        alert(`Contact Details:\n\nProperty: ${property.title}\nAgent: Professional Agent\nPhone: +27 123 456 789\nEmail: agent@openbook.com\n\nClick OK to send an inquiry.`);
    }, 500);
}

function shareProperty(propertyId) {
    const property = propertyData.find(p => p.id === propertyId);
    if (!property) return;
    
    const shareData = {
        title: property.title,
        text: `Check out this property on OpenBook.com: ${property.title}`,
        url: `${window.location.origin}#property-${propertyId}`
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = `${window.location.origin}#property-${propertyId}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            showNotification('Property link copied to clipboard!', 'success');
        }).catch(() => {
            prompt('Copy this link to share:', shareUrl);
        });
    }
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Favorite management
function setupFavoriteButtons() {
    updateFavoriteIcons();
}

function updateFavoriteIcons() {
    const savedProperties = JSON.parse(localStorage.getItem('savedProperties') || '[]');
    
    document.querySelectorAll('.card-icon[title="Save property"]').forEach(icon => {
        const card = icon.closest('.property-card');
        if (card) {
            const propertyId = parseInt(card.getAttribute('onclick').match(/\d+/)[0]);
            if (savedProperties.includes(propertyId)) {
                icon.textContent = '❤️';
                icon.style.color = '#dc2626';
            } else {
                icon.textContent = '💾';
                icon.style.color = '';
            }
        }
    });
}

// Reset filters functionality
function resetFilters() {
    // Reset form inputs
    document.querySelectorAll('.filter-input').forEach(input => input.value = '');
    document.querySelectorAll('.filter-select').forEach(select => select.selectedIndex = 0);
    document.querySelectorAll('.filter-checkbox input').forEach(checkbox => checkbox.checked = false);
    
    // Reset to show all properties
    filteredProperties = propertyData;
    renderPropertyCards();
    updateSearchResults();
    
    showNotification('Filters reset successfully!', 'info');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLeft = document.querySelector('.nav-left');
    navLeft.classList.toggle('mobile-active');
    
    // In a real implementation, this would show/hide mobile navigation
    showNotification('Mobile menu toggled', 'info');
}

// Enhanced login simulation
function simulateLogin() {
    const authLinks = document.querySelector('.auth-links');
    const userProfile = document.querySelector('.user-profile');
    
    // Show loading state
    authLinks.style.opacity = '0.5';
    
    setTimeout(() => {
        authLinks.classList.add('hidden');
        userProfile.classList.remove('hidden');
        authLinks.style.opacity = '1';
        
        showNotification('Welcome back to OpenBook.com!', 'success');
        
        // Update notification badge
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            badge.textContent = Math.floor(Math.random() * 5) + 1;
        }
    }, 1000);
}

// Registration modal simulation
function showRegistrationModal() {
    showNotification('Registration form would open here. Join OpenBook.com for transparent property listings!', 'info');
}

// Image slider functionality with enhanced features
function nextImage() {
    const images = [
        "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];
    
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage(images[currentImageIndex]);
}

function previousImage() {
    const images = [
        "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];
    
    currentImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    updateMainImage(images[currentImageIndex]);
}

function setMainImage(src) {
    updateMainImage(src);
    
    // Update current index based on src
    const images = [
        "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];
    currentImageIndex = images.indexOf(src);
}

function updateMainImage(src) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        // Add loading animation
        mainImage.style.opacity = '0.5';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            updateThumbnails();
        }, 200);
    }
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Enhanced search functionality with auto-suggestions
function setupSearchEnhancements() {
    const locationInput = document.querySelector('.location-input');
    if (locationInput) {
        locationInput.addEventListener('input', function() {
            // In a real app, this would show location suggestions
            // For demo purposes, we'll just show some popular locations
            if (this.value.length > 2) {
                showLocationSuggestions(this.value);
            }
        });
    }
}

function showLocationSuggestions(query) {
    const suggestions = [
        'Cape Town, Western Cape',
        'Johannesburg, Gauteng',
        'Durban, KwaZulu-Natal',
        'Pretoria, Gauteng',
        'Port Elizabeth, Eastern Cape',
        'Bloemfontein, Free State',
        'East London, Eastern Cape',
        'Nelspruit, Mpumalanga'
    ].filter(city => city.toLowerCase().includes(query.toLowerCase()));
    
    // In a real implementation, this would show a dropdown with suggestions
    console.log('Location suggestions:', suggestions);
}

// Auto-filter functionality
let filterTimeout;
document.addEventListener('DOMContentLoaded', function() {
    setupSearchEnhancements();
    
    // Setup auto-filtering
    document.querySelectorAll('.filter-input').forEach(input => {
        input.addEventListener('input', function() {
            clearTimeout(filterTimeout);
            filterTimeout = setTimeout(() => {
                applyFilters();
            }, 800); // Delay to avoid too many filter calls
        });
    });
    
    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', function() {
            applyFilters();
        });
    });
    
    document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            applyFilters();
        });
    });
});

// Property comparison feature (for future enhancement)
let comparedProperties = JSON.parse(localStorage.getItem('comparedProperties') || '[]');

function addToComparison(propertyId) {
    if (comparedProperties.length < 3 && !comparedProperties.includes(propertyId)) {
        comparedProperties.push(propertyId);
        localStorage.setItem('comparedProperties', JSON.stringify(comparedProperties));
        updateComparisonUI();
        showNotification('Property added to comparison', 'success');
    } else if (comparedProperties.includes(propertyId)) {
        showNotification('Property already in comparison', 'info');
    } else {
        showNotification('Maximum 3 properties can be compared', 'error');
    }
}

function updateComparisonUI() {
    // This would update a comparison panel in a real app
    console.log(`Comparing ${comparedProperties.length} properties:`, comparedProperties);
}

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // Escape key closes notifications
    if (e.key === 'Escape') {
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.remove();
        }
    }
});

// Performance optimization - lazy loading simulation
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    setupLazyLoading();
    
    // Initialize favorite buttons
    setTimeout(() => {
        updateFavoriteIcons();
    }, 500);
});

// Add CSS for notifications dynamically
const notificationStyles = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: var(--bg-primary);
        border: 1px solid var(--border-light);
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        min-width: 300px;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    }
    
    .notification-success {
        border-left: 4px solid var(--success-color);
    }
    
    .notification-error {
        border-left: 4px solid var(--accent-color);
    }
    
    .notification-info {
        border-left: 4px solid var(--openbook-blue);
    }
    
    .notification-content {
        padding: 1rem;
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .notification-message {
        flex: 1;
        color: var(--text-primary);
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
