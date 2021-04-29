const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');


//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');

}
menu.addEventListener('click', mobileMenu);

// Show active menu section while scrolling in the heading
const highlightMenu = () => {
    //.highlight is a css class
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    // const skillsMenu = document.querySelector('#skills-page');
    const portfolioMenu = document.querySelector('#portfolio-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPOS = window.scrollY;
    //This will log the page position to the console so we can change the scroll position
    //if the layout of the page changes
    console.log(scrollPOS);

    // adds the "highlightMenu" class to the menu items
    if(window.innerWidth > 960 && scrollPOS < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPOS < 250){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        // skillsMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPOS < 1520){
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if((element && window.innerWidth < 960 && scrollPOS < 600) || element){
        element.classList.remove('highlight');
    }
};
window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);


//close mobile menu item when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}
menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);




