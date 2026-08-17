// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const recipesGrid = document.getElementById('recipesGrid');
const mealsTitle = document.getElementById('mealsTitle');
const recipeModal = document.getElementById('recipeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');

// State
let currentCategory = 'Ana Yemekler'; 

// Initialize
document.addEventListener('DOMContentLoaded', () => {
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
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            currentCategory = category.name;
            mealsTitle.innerHTML = `${currentCategory} Tarifleri`;
            fetchMealsByCategory(currentCategory);
        });
        
        categoriesContainer.appendChild(card);
    });
    
    mealsTitle.innerHTML = `${currentCategory} Tarifleri`;
}

// Fetch Meals (Local DB)
function fetchMealsByCategory(category) {
    recipesGrid.innerHTML = '';
    
    const filteredMeals = localRecipes.filter(meal => meal.category === category);
    renderMeals(filteredMeals);
}

function renderMeals(meals) {
    if (!meals || meals.length === 0) {
        recipesGrid.innerHTML = '<p style="color:var(--text-secondary);">Bu kategoriye ait henüz tarif eklenmedi.</p>';
        return;
    }
    
    meals.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => fetchMealDetails(meal.id);
        
        card.innerHTML = `
            <img src="${meal.image}" alt="${meal.title}" loading="lazy">
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
    
    recipeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
    renderMealDetails(meal);
}

function renderMealDetails(meal) {
    let ingredientsList = '';
    meal.ingredients.forEach(item => {
        ingredientsList += `
            <li>
                <span>${item.name}</span>
                <span class="ingredient-measure">${item.measure}</span>
            </li>
        `;
    });

    const tagsHTML = meal.tags ? meal.tags.map(tag => `<span style="background:white; color:var(--text-primary); padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.8rem; margin-right: 0.5rem; font-weight:600;">${tag}</span>`).join('') : '';

    modalBody.innerHTML = `
        <div class="modal-hero">
            <img src="${meal.image}" alt="${meal.title}">
            <div class="modal-hero-overlay">
                <h2>${meal.title}</h2>
                <div style="margin-bottom: 1rem;">${tagsHTML}</div>
                <div style="display: flex; gap: 1.5rem; color: rgba(255,255,255,0.9); font-size: 1rem;">
                    <span><i class="fa-solid fa-clock"></i> ${meal.time}</span>
                    <span><i class="fa-solid fa-user-group"></i> ${meal.servings}</span>
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
        mealsTitle.innerHTML = `${currentCategory} Tarifleri`;
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

// Global scope for onclick access
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
    renderMeals(matchedRecipes);
}
