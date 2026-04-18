// const view = document.querySelector('.view');
// const orderBtn = document.querySelector('.order');

// orderBtn.addEventListener('click', () => {
//     window.location.href = 'menu.html';
// });

// view.addEventListener('click', () => {
//     window.location.href = 'restaurant.html';
// });


const colorchange = document.getElementsByClassName("money")
colorchange.style.color = "green";
view.addEventListener('click', () => {
    window.location.href = 'restaurant.html';
});


const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();