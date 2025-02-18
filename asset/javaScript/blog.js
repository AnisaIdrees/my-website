


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


// fetch data/////////////////////////////
const fetchData = async () => {
  try {
    const res = await fetch('https://dummyjson.com/recipes')
    let result = await res.json()
    return result
    console.log(result);

  } catch (error) {
    console.log('not fetch ');

  }
}


// get data 
const getData = async () => {
  try {
    const resultData = await fetchData();
    const recipe = resultData.recipes
    console.log(recipe);

  } catch (error) {
    console.log('not found');

  }
}
getData()