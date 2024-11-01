const images = [
    'https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg',
    'https://images.pexels.com/photos/4545433/pexels-photo-4545433.jpeg',
    'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg'
];

let currentIndex = 0;
const changingImage = document.getElementById('changing-image');

function changeImage() {
    changingImage.style.opacity = 0;

  
    setTimeout(() => {
  
        currentIndex = (currentIndex + 1) % images.length;
        changingImage.src = images[currentIndex];

  
        changingImage.style.opacity = 1;
    }, 500); 
}


setInterval(changeImage, 3000);



const hamburger = document.getElementById("hamburger");
const mobileLinks = document.getElementById("mobile-nav-links");
const menuItems = document.querySelectorAll(".menu-item");

hamburger.addEventListener("change", function() {
    if(hamburger.checked) {
        mobileLinks.classList.add("mobile-links-show");
    }
    else {
        mobileLinks.classList.remove("mobile-links-show");
    }
});

menuItems.forEach(item => {
    item.addEventListener("click", function() {
        mobileLinks.classList.remove("mobile-links-show");
        hamburger.checked = false; // Optionally uncheck the hamburger as well
    });
});