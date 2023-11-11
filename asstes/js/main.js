
//preloader//
function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    })
}

loadData()
    .then(() => {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('preloaderH');
        preloaderEl.classList.remove('preloaderV');
    });;


//=========-- Header --=========//


let header = document.querySelector(".header");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};;


// ===========-text Animation-============//
var slides = document.querySelectorAll('.title_animation p');
// Initialize the slide index
var slideIndex = 0;
// Show the first slide
slides[slideIndex].classList.add('visible');
// Start the slide show
setInterval(function () {
    // Hide the current slide
    slides[slideIndex].classList.remove('visible');
    slides[slideIndex].classList.add('hidden');
    // Calculate the index of the next slide
    slideIndex = (slideIndex + 1) % slides.length;
    // Show the next slide
    slides[slideIndex].classList.remove('hidden');
    slides[slideIndex].classList.add('visible');
}, 2000); // Change the slide every 3 seconds




//======- btn open close-=========/
let mobileNav = document.querySelector('.mobile_menu');
document.querySelector('.OC_btn').onclick = () => {
    mobileNav.classList.add('open_mobilemenu');
}

document.querySelector('.closebtn').onclick = () => {
    mobileNav.classList.remove('open_mobilemenu');
};;





// -========Card animation Tilt ========-//
VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 15,
    speed: 200
});;

//========== switcherArea =========/
const button = document.querySelector('.stBtn');
const switcherArea = document.querySelector('.switcher');

button.addEventListener('click', () => {
    switcherArea.classList.toggle('active');
});;

//========== switcher color =========/
// Get references to the switcher and color options
const switcher = document.querySelector('.switcher');
const colors = document.querySelectorAll('[id^="color"]');
const main01 = ['#ff00ea', '#00c6ff', '#70F570', '#f9d423'];
const main02 = ['#2600fc', '#0072ff', '#49C628', '#f83600'];

// Loop through the color options and attach event listeners
for (let i = 0; i < colors.length; i++) {
    const color = colors[i];

    color.addEventListener('click', () => {
        // Set the main colors based on the index of the clicked color
        document.documentElement.style.setProperty('--Main01', main01[i]);
        document.documentElement.style.setProperty('--Main02', main02[i]);
    });
};;


