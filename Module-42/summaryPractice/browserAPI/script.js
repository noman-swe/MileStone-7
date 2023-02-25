// 1. local storage session storage

const styles = document.querySelectorAll('input');
styles.forEach(style => {
    style.style.padding = '10px';
    style.style.margin = '10px';
    // console.log(style);
});

const getDetails = () => {
    const nameField = document.getElementById('name');
    const name = nameField.value;
    const ageField = document.getElementById('age');
    const age = ageField.value;


    if (name && age) {
        localStorage.setItem(name, age);
    }
    if (name && age) {
        sessionStorage.setItem(name, age);
        sessionStorage.clear();
    }

    nameField.value = '';
    ageField.value = '';
}

// 2. location API
console.log(location.host);
console.log(location.protocol);
console.log(location.origin);
console.log(location.href);
console.log(location.search);
console.log(location.pathname);
console.log(location.hash);
console.log(location.port);
// console.log();

// history API
// go back back
window.history.back();
window.history.go(-1);

// go forward
window.history.forward();
window.history.go(1);


// 4. Fetch

const getMeals = () => {
    const searchInputField = document.getElementById('food-input');
    const searchText = searchInputField.value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))

    searchInputField.value = '';
}

const displayMeals = meals => {
    console.log(meals);
    meals.forEach(meal => {
        console.log(meal);

        const displayMealsContainer = document.getElementById('display-meals');
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
    
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        displayMealsContainer.appendChild(card);
    });

}

// 1. array: map, forEach, filter, find
