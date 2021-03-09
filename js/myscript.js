window.addEventListener('DOMContentLoaded', () => {

    let btnShowMenu = document.querySelector('.gamburgerShow');
    let btnHideMenu = document.querySelector('.gamburgerHide');
    let menu = document.querySelector('.headerPre');
    console.log(btnHideMenu);
    console.log(btnShowMenu);
    console.log(menu);

    btnShowMenu.addEventListener('click', () => {
        menu.classList.toggle('headerPreShow');
    });
    btnHideMenu.addEventListener('click', () => {
        menu.classList.toggle('headerPreShow');
    });

});