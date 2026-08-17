
// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const recipesGrid = document.getElementById('recipesGrid');
const mealsTitle = document.getElementById('mealsTitle');
const recipeModal = document.getElementById('recipeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');

// --- NEW ELEMENTS ---
const themeToggle = document.getElementById('themeToggle');
const globalSearch = document.getElementById('globalSearch');

// State
let currentCategory = 'Ana Yemekler';
let favorites = JSON.parse(localStorage.getItem('dolap_favorites')) || [];
let currentPortionMultiplier = 1;
let currentMealId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Add "Favorilerim" to categories dynamically if it doesn't exist
    if (!appCategories.find(c => c.name === '🌟 Favorilerim')) {
        appCategories.unshift({ id: 'fav', name: '🌟 Favorilerim', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop' });
    }

    renderCategories();
    fetchMealsByCategory(currentCategory);
});

// Event Listeners
closeModalBtn.addEventListener('click', () => {
    recipeModal.classList.add('hidden');
    document.body.style.overflow = 'auto'; 
});

recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// --- THEME ---
function initTheme() {
    const savedTheme = localStorage.getItem('dolap_theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('dolap_theme', 'light');
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('dolap_theme', 'dark');
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    });
}

// --- GLOBAL SEARCH ---
if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        
        // Remove active category
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        
        if (term === '') {
            mealsTitle.innerHTML = `${currentCategory} Tarifleri`;
            fetchMealsByCategory(currentCategory);
            return;
        }

        const matched = localRecipes.filter(r => r.title.toLowerCase().includes(term) || r.category.toLowerCase().includes(term));
        mealsTitle.innerHTML = `Arama Sonuçları: "${term}" (${matched.length})`;
        
        // View Transitions for smooth filtering
        if (document.startViewTransition) {
            document.startViewTransition(() => renderMeals(matched));
        } else {
            renderMeals(matched);
        }
    });
}

// Render Categories
function renderCategories() {
    categoriesContainer.innerHTML = '';
    
    appCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = `category-card ${category.name === currentCategory ? 'active' : ''}`;
        
        card.innerHTML = `
            <img src="${category.image}" alt="${category.name}" loading="lazy">
            <h3>${category.name}</h3>
        `;
        
        card.addEventListener('click', () => {
            if (globalSearch) globalSearch.value = ''; // clear search
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            currentCategory = category.name;
            mealsTitle.innerHTML = `${currentCategory} ${currentCategory === '🌟 Favorilerim' ? '' : 'Tarifleri'}`;
            
            if (document.startViewTransition) {
                document.startViewTransition(() => fetchMealsByCategory(currentCategory));
            } else {
                fetchMealsByCategory(currentCategory);
            }
        });
        
        categoriesContainer.appendChild(card);
    });
    
    mealsTitle.innerHTML = `${currentCategory} ${currentCategory === '🌟 Favorilerim' ? '' : 'Tarifleri'}`;
}

// Fetch Meals (Local DB)
function fetchMealsByCategory(category) {
    recipesGrid.innerHTML = '';
    
    let filteredMeals;
    if (category === '🌟 Favorilerim') {
        filteredMeals = localRecipes.filter(meal => favorites.includes(meal.id));
    } else {
        filteredMeals = localRecipes.filter(meal => meal.category === category);
    }
    
    renderMeals(filteredMeals);
}

// --- FAVORITES ---
window.toggleFavorite = function(e, id) {
    e.stopPropagation(); // prevent modal opening
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('dolap_favorites', JSON.stringify(favorites));
    
    // Refresh view if in favorites tab
    if (currentCategory === '🌟 Favorilerim') {
        fetchMealsByCategory(currentCategory);
    } else {
        // Just toggle class on the button
        e.target.closest('.fav-btn').classList.toggle('active');
    }
}

function renderMeals(meals) {
    if (!meals || meals.length === 0) {
        recipesGrid.innerHTML = '<p style="color:var(--text-secondary);">Bu kategoriye ait henüz tarif eklenmedi veya bulunamadı.</p>';
        return;
    }
    
    recipesGrid.innerHTML = '';
    meals.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => fetchMealDetails(meal.id);
        
        const isFav = favorites.includes(meal.id);
        
        card.innerHTML = `
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, '${meal.id}')">
                <i class="fa-solid fa-heart"></i>
            </button>
            <img src="${meal.image}" alt="${meal.title}" loading="lazy" style="view-transition-name: meal-img-${meal.id}">
            <div class="recipe-info">
                <h3>${meal.title}</h3>
            </div>
        `;
        
        recipesGrid.appendChild(card);
    });
}

// Fetch Meal Details (Local DB)
function fetchMealDetails(id) {
    const meal = localRecipes.find(m => m.id === id);
    if (!meal) return;
    
    currentMealId = id;
    currentPortionMultiplier = 1; // reset multiplier
    
    recipeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
    renderMealDetails(meal);
}

// --- PORTION CALCULATOR ---
window.changePortion = function(change) {
    const meal = localRecipes.find(m => m.id === currentMealId);
    if (!meal) return;
    
    const baseServings = parseInt(meal.servings) || 4; // fallback to 4 if parsing fails
    const currentServings = Math.max(1, (baseServings * currentPortionMultiplier) + change);
    
    currentPortionMultiplier = currentServings / baseServings;
    
    renderMealDetails(meal);
}

function parseMeasure(measureStr, multiplier) {
    // Basic regex to find numbers (including decimals/fractions) at the start
    const match = measureStr.match(/^([d.,]+)s*(.*)/);
    if (match) {
        let numStr = match[1].replace(',', '.');
        let num = parseFloat(numStr);
        if (!isNaN(num)) {
            let calculated = num * multiplier;
            // Round to 1 decimal if needed
            calculated = Math.round(calculated * 10) / 10;
            return `${calculated} ${match[2]}`;
        }
    }
    return measureStr; // Return as is if no number found
}

function renderMealDetails(meal) {
    let ingredientsList = '';
    meal.ingredients.forEach(item => {
        let calculatedMeasure = currentPortionMultiplier !== 1 
            ? parseMeasure(item.measure, currentPortionMultiplier) 
            : item.measure;
            
        ingredientsList += `
            <li>
                <span>${item.name}</span>
                <span class="ingredient-measure">${calculatedMeasure}</span>
            </li>
        `;
    });

    const tagsHTML = meal.tags ? meal.tags.map(tag => `<span style="background:var(--accent-primary); color:white; padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.8rem; margin-right: 0.5rem; font-weight:600;">${tag}</span>`).join('') : '';

    const baseServings = parseInt(meal.servings) || 4;
    const displayServings = Math.max(1, Math.round(baseServings * currentPortionMultiplier));

    modalBody.innerHTML = `
        <div class="modal-hero">
            <img src="${meal.image}" alt="${meal.title}" style="view-transition-name: meal-img-${meal.id}">
            <div class="modal-hero-overlay">
                <h2>${meal.title}</h2>
                <div style="margin-bottom: 1rem;">${tagsHTML}</div>
                <div style="display: flex; align-items:center; gap: 1.5rem; color: rgba(255,255,255,0.9); font-size: 1.1rem;">
                    <span><i class="fa-solid fa-clock"></i> ${meal.time}</span>
                    <div class="portion-controls" style="background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); color:white;">
                        <button class="portion-btn" style="color:white;" onclick="changePortion(-1)">-</button>
                        <span><i class="fa-solid fa-user-group"></i> ${displayServings} Kişilik</span>
                        <button class="portion-btn" style="color:white;" onclick="changePortion(1)">+</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-details">
            <div class="ingredients-list">
                <div class="ingredients-header">
                    <h3 style="margin:0;"><i class="fa-solid fa-basket-shopping"></i> Malzemeler</h3>
                </div>
                <ul>
                    ${ingredientsList}
                </ul>
            </div>
            
            <div class="instructions-list">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0;"><i class="fa-solid fa-fire-burner"></i> Yapılışı</h3>
                </div>
                <p style="white-space: pre-line; line-height: 1.9; color: var(--text-secondary);">${meal.instructions}</p>
            </div>
        </div>
    `;
}

// --- DOLABIMDA NE VAR LOGIC ---
const ingredientInput = document.getElementById('ingredientInput');
const addIngredientBtn = document.getElementById('addIngredientBtn');
const searchFridgeBtn = document.getElementById('searchFridgeBtn');
const clearFridgeBtn = document.getElementById('clearFridgeBtn');
const selectedIngredientsContainer = document.getElementById('selectedIngredients');

let userIngredients = [];

if (addIngredientBtn) {
    addIngredientBtn.addEventListener('click', addIngredient);
    ingredientInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addIngredient();
    });
    clearFridgeBtn.addEventListener('click', () => {
        userIngredients = [];
        renderIngredients();
        mealsTitle.innerHTML = `${currentCategory} ${currentCategory === '🌟 Favorilerim' ? '' : 'Tarifleri'}`;
        fetchMealsByCategory(currentCategory);
    });
    searchFridgeBtn.addEventListener('click', searchFridgeRecipes);
}

function addIngredient() {
    const val = ingredientInput.value.trim().toLowerCase();
    if (val && !userIngredients.includes(val)) {
        userIngredients.push(val);
        ingredientInput.value = '';
        renderIngredients();
    }
}

window.removeIngredient = function(index) {
    userIngredients.splice(index, 1);
    renderIngredients();
}

function renderIngredients() {
    selectedIngredientsContainer.innerHTML = '';
    userIngredients.forEach((ing, index) => {
        const tag = document.createElement('span');
        tag.style = 'background: var(--accent-primary); color: white; padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;';
        tag.innerHTML = `${ing} <i class="fa-solid fa-xmark" style="cursor:pointer;" onclick="removeIngredient(${index})"></i>`;
        selectedIngredientsContainer.appendChild(tag);
    });
}

function searchFridgeRecipes() {
    if (userIngredients.length === 0) {
        alert('Lütfen önce dolabınızdaki malzemeleri ekleyin.');
        return;
    }
    
    const matchedRecipes = localRecipes.map(recipe => {
        let matchCount = 0;
        recipe.ingredients.forEach(ingObj => {
            const recipeIng = ingObj.name.toLowerCase();
            userIngredients.forEach(userIng => {
                if (recipeIng.includes(userIng)) {
                    matchCount++;
                }
            });
        });
        return { recipe, matchCount };
    }).filter(item => item.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .map(item => item.recipe);

    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    mealsTitle.innerHTML = `Dolabımdakilerle Yapılabilecekler (${matchedRecipes.length} Tarif)`;
    
    if (document.startViewTransition) {
        document.startViewTransition(() => renderMeals(matchedRecipes));
    } else {
        renderMeals(matchedRecipes);
    }
}
