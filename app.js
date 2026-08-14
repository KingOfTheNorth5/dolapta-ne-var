// TheMealDB API Endpoints
const API_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const API_FILTER_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const API_RECIPE_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const recipesGrid = document.getElementById('recipesGrid');
const mealsTitle = document.getElementById('mealsTitle');
const categoriesLoading = document.getElementById('categoriesLoading');
const mealsLoading = document.getElementById('mealsLoading');
const recipeModal = document.getElementById('recipeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');

// State
let currentCategory = 'Beef'; // Default category

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
    fetchMealsByCategory(currentCategory);
});

// Event Listeners
closeModalBtn.addEventListener('click', () => {
    recipeModal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // restore background scrolling
});

recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Fetch Categories
async function fetchCategories() {
    categoriesLoading.classList.remove('hidden');
    try {
        const response = await fetch(API_CATEGORIES);
        const data = await response.json();
        renderCategories(data.categories);
    } catch (error) {
        console.error("Kategoriler yüklenirken hata oluştu:", error);
        categoriesContainer.innerHTML = '<p>Kategoriler yüklenemedi.</p>';
    } finally {
        categoriesLoading.classList.add('hidden');
    }
}

// Render Categories
function renderCategories(categories) {
    categoriesContainer.innerHTML = '';
    
    // Some basic categories to prioritize or filter if needed, but we'll show all
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = `category-card ${category.strCategory === currentCategory ? 'active' : ''}`;
        card.dataset.category = category.strCategory;
        
        card.innerHTML = `
            <img src="${category.strCategoryThumb}" alt="${category.strCategory}" loading="lazy">
            <h3>${category.strCategory}</h3>
        `;
        
        card.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Fetch new meals
            currentCategory = category.strCategory;
            mealsTitle.innerHTML = `${currentCategory} Yemekleri`;
            fetchMealsByCategory(currentCategory);
        });
        
        categoriesContainer.appendChild(card);
    });
}

// Fetch Meals
async function fetchMealsByCategory(category) {
    recipesGrid.innerHTML = '';
    mealsLoading.classList.remove('hidden');
    
    try {
        const response = await fetch(API_FILTER_BY_CATEGORY + category);
        const data = await response.json();
        renderMeals(data.meals);
    } catch (error) {
        console.error("Yemekler yüklenirken hata:", error);
        recipesGrid.innerHTML = '<p>Yemekler yüklenemedi.</p>';
    } finally {
        mealsLoading.classList.add('hidden');
    }
}

// Render Meals
function renderMeals(meals) {
    if (!meals) {
        recipesGrid.innerHTML = '<p>Bu kategoride yemek bulunamadı.</p>';
        return;
    }
    
    meals.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => fetchMealDetails(meal.idMeal);
        
        card.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" loading="lazy">
            <div class="recipe-info">
                <h3>${meal.strMeal}</h3>
            </div>
        `;
        
        recipesGrid.appendChild(card);
    });
}

// Fetch Meal Details
async function fetchMealDetails(id) {
    recipeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
    
    modalBody.innerHTML = `
        <div class="spinner-container" style="height: 400px; align-items: center;">
            <div class="spinner"></div>
        </div>
    `;

    try {
        const response = await fetch(API_RECIPE_DETAILS + id);
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
            renderMealDetails(data.meals[0]);
        }
    } catch (error) {
        console.error("Detaylar yüklenirken hata:", error);
        modalBody.innerHTML = `<p style="padding: 2rem; text-align: center; color: #ef4444;">Detaylar yüklenemedi.</p>`;
    }
}

// Render Meal Details
function renderMealDetails(meal) {
    // Parse ingredients and measures (TheMealDB returns them as strIngredient1 to 20)
    let ingredientsList = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        
        if (ingredient && ingredient.trim() !== '') {
            ingredientsList += `
                <li>
                    <span>${ingredient}</span>
                    <span class="ingredient-measure">${measure}</span>
                </li>
            `;
        }
    }

    const ytButton = meal.strYoutube ? 
        `<a href="${meal.strYoutube}" target="_blank" class="yt-btn"><i class="fa-brands fa-youtube"></i> Tarifi İzle</a>` 
        : '';

    const tags = meal.strTags ? meal.strTags.split(',').map(tag => `<span style="background:var(--accent-1); padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.8rem; margin-right: 0.5rem;">${tag}</span>`).join('') : '';

    modalBody.innerHTML = `
        <div class="modal-hero">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="modal-hero-overlay">
                <h2>${meal.strMeal}</h2>
                <div style="margin-bottom: 1rem;">${tags}</div>
                <div style="display: flex; gap: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="fa-solid fa-earth-americas"></i> ${meal.strArea} Mutfağı</span>
                    <span><i class="fa-solid fa-list"></i> ${meal.strCategory}</span>
                </div>
            </div>
        </div>
        <div class="modal-details">
            <div class="ingredients-list">
                <h3><i class="fa-solid fa-basket-shopping"></i> Malzemeler</h3>
                <ul>
                    ${ingredientsList}
                </ul>
            </div>
            
            <div class="instructions-list">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0;"><i class="fa-solid fa-fire-burner"></i> Yapılışı</h3>
                    ${ytButton}
                </div>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
    `;
}
