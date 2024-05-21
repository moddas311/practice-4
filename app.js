document.getElementById("search-btn").addEventListener("click", () => {
    const inputValue = document.getElementById("search-input").value;
    handleSearch(inputValue);
})

const mealContainer = document.getElementById("div-cart");

const handleSearch = (meal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.meals) {
                displayMeal(data.meals);
            }
            else {
                mealContainer.innerHTML = "";
                mealContainer.innerHTML = `<h2 class="not-found">Meal Not Found!</h2>`;
            }
        })
}


const displayMeal = (foods) => {
    mealContainer.innerHTML = "";
    foods.forEach(meal => {
        const div = document.createElement("div");
        div.classList.add("meal-cart");
        div.innerHTML = `
            <img class="cart-img" src=${meal.strMealThumb} alt=""/>
            <h3 class="title">${meal.strMeal}</h3>
            `;
        mealContainer.appendChild(div);
    })
}