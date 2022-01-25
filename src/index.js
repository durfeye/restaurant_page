import './style.css';
import backgroundsrc from './background.jpg';
import chefsrc from './chef.jpg';

// declaring background of page
const backgroundImg = new Image();
backgroundImg.src = backgroundsrc;

// chef fronpage photo
const chefImg = new Image();
chefImg.src = chefsrc;

let content = document.querySelector('#content');

// making whole Nav
const makingNav = (() => {
    //making base nav
    let nav = document.createElement('nav');
    nav.classList.add('nav');
    content.appendChild(nav);

    //making nav elements
    let logo = document.createElement('div');
    logo.classList.add('logo');
    let menu = document.createElement('ul');
    menu.classList.add('menu');
    for (let i = 0; i < 3; i++) {
        let menuOption = document.createElement('li');
        let menuLink = document.createElement('a');
        menuOption.classList.add('menuOption' + (i + 1));
        menuLink.appendChild(menuOption);
        menuLink.href = '#';
        menu.appendChild(menuLink);
    }
    nav.appendChild(logo);
    nav.appendChild(menu);
})();

const makingFrontContent = (() => {
    //making topInfo
    let topInfo = document.createElement('section');
    topInfo.classList.add('topInfo');
    content.appendChild(topInfo);

    //topInfo Heading
    let topInfoHeading = document.createElement('h1');
    topInfoHeading.classList.add('topInfoHeading');
    topInfoHeading.textContent = 'Welcome to our Restaurant!';
    topInfo.appendChild(topInfoHeading);

    //topInfo content - about restaurant
    let topInfoContent = document.createElement('p');
    topInfoContent.classList.add('topInfoContent');
    topInfoContent.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dignissim enim. Nunc a rutrum lacus.'
    topInfo.appendChild(topInfoContent);
    
    //making bottomInfo
    let bottomInfo = document.createElement('section');
    bottomInfo.classList.add('bottomInfo');
    content.appendChild(bottomInfo);

    //add chef photo with desc
    let chefPhoto = document.createElement('div');
    chefPhoto.classList.add('chefPhoto');
    bottomInfo.appendChild(chefPhoto);
    let chefPhotoDesc = document.createElement('p');
    chefPhotoDesc.classList.add('chefPhotoDesc');
    chefPhotoDesc.textContent = 'Our cheffe - Marco Polo.'
    bottomInfo.appendChild(chefPhotoDesc);

})();



//making front page


//making footer