// Spoonacular API Key (User Needs to Provide This)
const API_KEY = '4f10fe03be7846cf9c0614019e523eba'; // e.g. "1234567890abcdef"

// DOM Elements
const ingredientInput = document.getElementById('ingredientInput');
const addBtn = document.getElementById('addBtn');
const ingredientsList = document.getElementById('ingredientsList');
const searchRecipesBtn = document.getElementById('searchRecipesBtn');
const recipesGrid = document.getElementById('recipesGrid');
const loadingIndicator = document.getElementById('loadingIndicator');
const recipeModal = document.getElementById('recipeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');

// State
let ingredients = [];

// Event Listeners
addBtn.addEventListener('click', addIngredient);
ingredientInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addIngredient();
});
searchRecipesBtn.addEventListener('click', searchRecipes);
closeModalBtn.addEventListener('click', () => {
    recipeModal.classList.add('hidden');
});
recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.classList.add('hidden');
    }
});

// Functions
function addIngredient() {
    const value = ingredientInput.value.trim().toLowerCase();
    if (value && !ingredients.includes(value)) {
        ingredients.push(value);
        renderIngredients();
        ingredientInput.value = '';
    }
    updateSearchButton();
}

function removeIngredient(ingredient) {
    ingredients = ingredients.filter(i => i !== ingredient);
    renderIngredients();
    updateSearchButton();
}

function renderIngredients() {
    ingredientsList.innerHTML = '';
    ingredients.forEach(ing => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerHTML = `
            ${ing}
            <button onclick="removeIngredient('${ing}')"><i class="fa-solid fa-xmark"></i></button>
        `;
        ingredientsList.appendChild(chip);
    });
}

function updateSearchButton() {
    searchRecipesBtn.disabled = ingredients.length === 0;
}

async function searchRecipes() {
    if (ingredients.length === 0) return;
    
    if (API_KEY === 'LÜTFEN_BURAYA_API_KEY_GİRİNİZ') {
        alert("Lütfen app.js dosyasındaki API_KEY değişkenine Spoonacular API anahtarınızı girin.");
        return;
    }

    recipesGrid.innerHTML = '';
    loadingIndicator.classList.remove('hidden');

    try {
        const ingredientsStr = ingredients.join(',');
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsStr}&number=12&apiKey=${API_KEY}`);
        
        if (!response.ok) throw new Error('API Hatası');
        
        const recipes = await response.json();
        renderRecipes(recipes);
    } catch (error) {
        console.error("Hata:", error);
        recipesGrid.innerHTML = `<p style="color: #ff4757; text-align:center; grid-column: 1/-1;">Tarifler çekilirken bir hata oluştu. API anahtarınızı kontrol edin.</p>`;
    } finally {
        loadingIndicator.classList.add('hidden');
    }
}

function renderRecipes(recipes) {
    if (recipes.length === 0) {
        recipesGrid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-secondary);">Bu malzemelerle eşleşen tarif bulunamadı. Lütfen başka malzemeler deneyin.</p>`;
        return;
    }

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => fetchRecipeDetails(recipe.id);
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-info">
                <h3>${recipe.title}</h3>
                <p>Eksik Malzemeler: ${recipe.missedIngredientCount}</p>
                <div class="stats">
                    <span><i class="fa-solid fa-check"></i> ${recipe.usedIngredientCount} Kullanılan</span>
                </div>
            </div>
        `;
        recipesGrid.appendChild(card);
    });
}

async function fetchRecipeDetails(id) {
    recipeModal.classList.remove('hidden');
    modalBody.innerHTML = `
        <div style="padding: 3rem; text-align: center;">
            <div class="spinner"></div>
            <p style="color: var(--text-secondary)">Detaylar yükleniyor...</p>
        </div>
    `;

    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        if (!response.ok) throw new Error('API Hatası');
        const recipe = await response.json();
        renderRecipeDetails(recipe);
    } catch (error) {
        console.error("Hata:", error);
        modalBody.innerHTML = `<p style="color: #ff4757; padding: 2rem; text-align:center;">Detaylar çekilemedi.</p>`;
    }
}

function renderRecipeDetails(recipe) {
    const ingredientsHtml = recipe.extendedIngredients.map(ing => 
        `<li>${ing.original}</li>`
    ).join('');
    
    // Some spoonacular recipes have complex instructions
    let instructionsHtml = '<p>Yapılış tarifi bulunamadı.</p>';
    if (recipe.instructions) {
        instructionsHtml = recipe.instructions;
    } else if (recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0) {
        instructionsHtml = '<ol>' + recipe.analyzedInstructions[0].steps.map(step => 
            `<li>${step.step}</li>`
        ).join('') + '</ol>';
    }

    modalBody.innerHTML = `
        <div class="modal-hero">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="modal-hero-overlay">
                <h2>${recipe.title}</h2>
                <div class="stats">
                    <span><i class="fa-solid fa-clock"></i> ${recipe.readyInMinutes} dk</span>
                    <span><i class="fa-solid fa-user-group"></i> ${recipe.servings} porsiyon</span>
                </div>
            </div>
        </div>
        <div class="modal-details">
            <h3>Malzemeler</h3>
            <ul>
                ${ingredientsHtml}
            </ul>
            
            <h3>Yapılışı</h3>
            <div style="color: var(--text-secondary); line-height: 1.6;">
                ${instructionsHtml}
            </div>
        </div>
    `;
}
