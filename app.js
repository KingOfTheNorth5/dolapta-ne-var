// TheMealDB API Endpoints
const API_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const API_FILTER_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const API_AREAS = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const API_FILTER_BY_AREA = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
const API_RECIPE_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

// Dictionaries for Translation
const categoryTranslations = {
    "Beef": "Et Yemekleri",
    "Chicken": "Tavuk",
    "Dessert": "Tatlılar",
    "Lamb": "Kuzu Eti",
    "Miscellaneous": "Karışık",
    "Pasta": "Makarna",
    "Pork": "Domuz Eti",
    "Seafood": "Deniz Ürünleri",
    "Side": "Garnitür",
    "Starter": "Başlangıçlar",
    "Vegan": "Vegan",
    "Vegetarian": "Vejetaryen",
    "Breakfast": "Kahvaltı",
    "Goat": "Keçi Eti"
};

const areaTranslations = {
    "American": "Amerikan",
    "British": "İngiliz",
    "Canadian": "Kanada",
    "Chinese": "Çin",
    "Croatian": "Hırvat",
    "Dutch": "Hollanda",
    "Egyptian": "Mısır",
    "Filipino": "Filipin",
    "French": "Fransız",
    "Greek": "Yunan",
    "Indian": "Hint",
    "Irish": "İrlanda",
    "Italian": "İtalyan",
    "Jamaican": "Jamaika",
    "Japanese": "Japon",
    "Kenyan": "Kenya",
    "Malaysian": "Malezya",
    "Mexican": "Meksika",
    "Moroccan": "Fas",
    "Polish": "Polonya",
    "Portuguese": "Portekiz",
    "Russian": "Rus",
    "Spanish": "İspanyol",
    "Thai": "Tayland",
    "Tunisian": "Tunus",
    "Turkish": "Türk",
    "Unknown": "Bilinmeyen",
    "Vietnamese": "Vietnam"
};

// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const recipesGrid = document.getElementById('recipesGrid');
const mealsTitle = document.getElementById('mealsTitle');
const categoriesLoading = document.getElementById('categoriesLoading');
const mealsLoading = document.getElementById('mealsLoading');
const recipeModal = document.getElementById('recipeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');
const areaSelect = document.getElementById('areaSelect');
const categoriesSection = document.getElementById('categoriesSection');

// State
let currentCategory = 'Beef'; 

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchAreas();
    fetchCategories();
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

areaSelect.addEventListener('change', (e) => {
    const selectedArea = e.target.value;
    if (selectedArea === 'All') {
        // Geri kategori moduna dön
        categoriesSection.style.display = 'block';
        
        // Remove active class from all cards except the saved currentCategory
        document.querySelectorAll('.category-card').forEach(c => {
            if(c.dataset.category === currentCategory) {
                c.classList.add('active');
            } else {
                c.classList.remove('active');
            }
        });
        
        const trName = categoryTranslations[currentCategory] || currentCategory;
        mealsTitle.innerHTML = `${trName} Tarifleri`;
        fetchMealsByCategory(currentCategory);
    } else {
        // Yöre moduna geç, kategorileri gizle
        categoriesSection.style.display = 'none';
        const trArea = areaTranslations[selectedArea] || selectedArea;
        mealsTitle.innerHTML = `${trArea} Mutfağı Tarifleri`;
        fetchMealsByArea(selectedArea);
    }
});

// Fetch Areas for Dropdown
async function fetchAreas() {
    try {
        const response = await fetch(API_AREAS);
        const data = await response.json();
        
        // Populate select
        data.meals.forEach(areaObj => {
            const area = areaObj.strArea;
            const option = document.createElement('option');
            option.value = area;
            option.textContent = areaTranslations[area] || area;
            areaSelect.appendChild(option);
        });
        
        // Sort options alphabetically by text (except "Tüm Yöreler")
        const options = Array.from(areaSelect.options).slice(1);
        options.sort((a, b) => a.textContent.localeCompare(b.textContent, 'tr'));
        options.forEach(opt => areaSelect.appendChild(opt));

    } catch (error) {
        console.error("Yöreler yüklenemedi:", error);
    }
}

// Fetch Categories
async function fetchCategories() {
    categoriesLoading.classList.remove('hidden');
    try {
        const response = await fetch(API_CATEGORIES);
        const data = await response.json();
        renderCategories(data.categories);
    } catch (error) {
        categoriesContainer.innerHTML = '<p>Kategoriler yüklenemedi.</p>';
    } finally {
        categoriesLoading.classList.add('hidden');
    }
}

function renderCategories(categories) {
    categoriesContainer.innerHTML = '';
    
    categories.forEach(category => {
        const trName = categoryTranslations[category.strCategory] || category.strCategory;
        
        const card = document.createElement('div');
        card.className = `category-card ${category.strCategory === currentCategory ? 'active' : ''}`;
        card.dataset.category = category.strCategory;
        
        card.innerHTML = `
            <img src="${category.strCategoryThumb}" alt="${trName}" loading="lazy">
            <h3>${trName}</h3>
        `;
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            currentCategory = category.strCategory;
            mealsTitle.innerHTML = `${trName} Tarifleri`;
            fetchMealsByCategory(currentCategory);
        });
        
        categoriesContainer.appendChild(card);
    });
    
    // Set initial title
    const trName = categoryTranslations[currentCategory] || currentCategory;
    mealsTitle.innerHTML = `${trName} Tarifleri`;
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
        recipesGrid.innerHTML = '<p>Yemekler yüklenemedi.</p>';
    } finally {
        mealsLoading.classList.add('hidden');
    }
}

async function fetchMealsByArea(area) {
    recipesGrid.innerHTML = '';
    mealsLoading.classList.remove('hidden');
    try {
        const response = await fetch(API_FILTER_BY_AREA + area);
        const data = await response.json();
        renderMeals(data.meals);
    } catch (error) {
        recipesGrid.innerHTML = '<p>Yemekler yüklenemedi.</p>';
    } finally {
        mealsLoading.classList.add('hidden');
    }
}

function renderMeals(meals) {
    if (!meals) {
        recipesGrid.innerHTML = '<p style="color:var(--text-secondary);">Bu kriterlere uygun yemek bulunamadı.</p>';
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
    document.body.style.overflow = 'hidden'; 
    
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
        modalBody.innerHTML = `<p style="padding: 2rem; text-align: center; color: #ef4444;">Detaylar yüklenemedi.</p>`;
    }
}

function renderMealDetails(meal) {
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

    const trArea = areaTranslations[meal.strArea] || meal.strArea;
    const trCat = categoryTranslations[meal.strCategory] || meal.strCategory;

    const tags = meal.strTags ? meal.strTags.split(',').map(tag => `<span style="background:white; color:var(--text-primary); padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.8rem; margin-right: 0.5rem; font-weight:600;">${tag}</span>`).join('') : '';

    modalBody.innerHTML = `
        <div class="modal-hero">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="modal-hero-overlay">
                <h2>${meal.strMeal}</h2>
                <div style="margin-bottom: 1rem;">${tags}</div>
                <div style="display: flex; gap: 1.5rem; color: rgba(255,255,255,0.9); font-size: 1rem;">
                    <span><i class="fa-solid fa-earth-americas"></i> ${trArea} Mutfağı</span>
                    <span><i class="fa-solid fa-list"></i> ${trCat}</span>
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
