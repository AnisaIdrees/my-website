


/////////   toggle button   /////////////
const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', () => {
  if (menuList.style.maxHeight === '0px' || menuList.style.maxHeight === '') {
    menuList.style.maxHeight = '550px';
    console.log(menuIcon);
    console.log(menuList);

  } else {
    menuList.style.maxHeight = '0px';
  }
});


// // fetch data/////////////////////////////
// const fetchData = async () => {
//   try {
//     const res = await fetch('https://dummyjson.com/recipes')
//     let result = await res.json()
//     return result;

//   } catch (error) {
//     console.log('data not fetch', error);

//   }
// }


// // display recipes
// const getData = async () => {
//   try {
//     const resultData = await fetchData();
//     // console.log(recipe);

//     if (!resultData) return;
//     const recipes = resultData.recipes
//     console.log(recipes);

//     const container = document.getElementById('cardsContainer');

//     recipes.forEach(recipe => {

//       const card = document.createElement('div');
//       card.classList.add('cardBox');

//       const tag = recipe.tags && recipe.tags.length > 1 ? recipe.tags[0] : "No Tag";

//       card.innerHTML = `
//         <div class="card" style="width: 18rem;">
//                 <img src="${recipe.image}"
//                     class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <div class="d-flex justify-content-between p-1">
//                         <p class="card-text"><i class="ri-user-fill"></i> By Admin</p>
//                         <p class="card-text"><i class="ri-bubble-chart-fill"></i>${tag}</p>
//                     </div>
//                     <p class="card-text fw-bold fs-4 Recipe-about-name">${recipe.name}</p>
//                     <button class="learn-more">
//                         <span class="circle" aria-hidden="true">
//                             <span class="icon arrow"></span>
//                         </span>
//                         <span class="button-text">Read More</span>
//                     </button>
//                 </div>
//             </div>
//       `
//       container.appendChild(card);

//     });

//   }
//   catch (error) {
//     console.log('error', error);

//   }
// }
// getData()

// /// paginationn 
// const startBtn = document.querySelector("#startBtn"),
//   endBtn = document.querySelector("#endBtn"),
//   prevNext = document.querySelectorAll(".prevNext"),
//   numbers = document.querySelectorAll(".link");
// // Setting an initial step
// let currentStep = 0;
// // Function to update the button states
// const updateBtn = () => {
//   // If we are at the last step
//   if (currentStep === 4) {
//     endBtn.disabled = true;
//     prevNext[1].disabled = true;
//   } else if (currentStep === 0) {
//     // If we are at the first step
//     startBtn.disabled = true;
//     prevNext[0].disabled = true;
//   } else {
//     endBtn.disabled = false;
//     prevNext[1].disabled = false;
//     startBtn.disabled = false;
//     prevNext[0].disabled = false;
//   }
// };
// // Add event listeners to the number links
// numbers.forEach((number, numIndex) => {
//   number.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Set the current step to the clicked number link
//     currentStep = numIndex;
//     // Remove the "active" class from the previously active number link
//     document.querySelector(".active").classList.remove("active");
//     // Add the "active" class to the clicked number link
//     number.classList.add("active");
//     updateBtn(); // Update the button states
//   });
// });
// // Add event listeners to the "Previous" and "Next" buttons
// prevNext.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     // Increment or decrement the current step based on the button clicked
//     currentStep += e.target.id === "next" ? 1 : -1;
//     numbers.forEach((number, numIndex) => {
//       // Toggle the "active" class on the number links based on the current step
//       number.classList.toggle("active", numIndex === currentStep);
//       updateBtn(); // Update the button states
//     });
//   });
// });
// // Add event listener to the "Start" button
// startBtn.addEventListener("click", () => {
//   // Remove the "active" class from the previously active number link
//   document.querySelector(".active").classList.remove("active");
//   // Add the "active" class to the first number link
//   numbers[0].classList.add("active");
//   currentStep = 0;
//   updateBtn(); // Update the button states
//   endBtn.disabled = false;
//   prevNext[1].disabled = false;
// });
// // Add event listener to the "End" button
// endBtn.addEventListener("click", () => {
//   // Remove the "active" class from the previously active number link
//   document.querySelector(".active").classList.remove("active");
//   // Add the "active" class to the last number link
//   numbers[4].classList.add("active");
//   currentStep = 4;
//   updateBtn(); // Update the button states
//   startBtn.disabled = false;
//   prevNext[0].disabled = false;
// });

// Fetch Data
const fetchData = async () => {
  try {
    const res = await fetch('https://dummyjson.com/recipes');
    let result = await res.json();
    return result;
  } catch (error) {
    console.log('Data not fetched', error);
  }
};

// Variables for Pagination
let recipes = [];
let currentPage = 1;
const cardsPerPage = 6;

// Display Recipes with Pagination
const displayRecipes = () => {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = ""; // Clear previous content

  // Calculate start and end index
  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const paginatedRecipes = recipes.slice(start, end);

  // Generate cards
  paginatedRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.classList.add('cardBox');

    const tag = recipe.tags && recipe.tags.length > 1 ? recipe.tags[0] : "No Tag";

    card.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <div class="d-flex justify-content-between p-1">
            <p class="card-text"><i class="ri-user-fill"></i> By Admin</p>
            <p class="card-text"><i class="ri-bubble-chart-fill"></i>${tag}</p>
          </div>
          <p class="card-text fw-bold fs-5 Recipe-about-name">${recipe.name}</p>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Read More</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  updatePaginationButtons();
};

// Load Data and Display First Page
const getData = async () => {
  const resultData = await fetchData();
  if (resultData) {
    recipes = resultData.recipes;
    displayRecipes();
  }
};

// Pagination Controls
const totalPages = () => Math.ceil(recipes.length / cardsPerPage);

const changePage = (page) => {
  if (page >= 1 && page <= totalPages()) {
    currentPage = page;
    displayRecipes();
  }
};

// Update Pagination Buttons
const updatePaginationButtons = () => {
  document.getElementById("startBtn").disabled = currentPage === 1;
  document.getElementById("prev").disabled = currentPage === 1;
  document.getElementById("next").disabled = currentPage === totalPages();
  document.getElementById("endBtn").disabled = currentPage === totalPages();

  document.querySelectorAll(".link").forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === currentPage);
  });
};

// Event Listeners for Pagination
document.getElementById("startBtn").addEventListener("click", () => changePage(1));
document.getElementById("endBtn").addEventListener("click", () => changePage(totalPages()));
document.getElementById("prev").addEventListener("click", () => changePage(currentPage - 1));
document.getElementById("next").addEventListener("click", () => changePage(currentPage + 1));

document.querySelectorAll(".link").forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    changePage(index + 1);
  });
});

// Initialize
getData();
