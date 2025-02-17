


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
