let slideIndex = 0;
let slideshowInterval;

document.getElementById("slideshowButton").onclick = function() {
    document.querySelector(".gallery-grid").style.display = "none"; // Hide collage
    this.style.display = "none"; // Hide button
    document.querySelector(".slideshow-container").style.display = "block"; // Show slideshow
    document.querySelector(".dots").style.display = "block"; // Show dots
    slideIndex = 0; // Reset slideIndex
    showSlides(); // Start the slideshow
};

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    // Reset to first slide after last one
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to first slide
        endSlideshow(); // Call function to end slideshow
        return; // Exit the function
    }    

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Set timeout to change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

function endSlideshow() {
    clearInterval(slideshowInterval); // Clear existing interval
    document.querySelector(".slideshow-container").style.display = "none"; // Hide slideshow
    document.querySelector(".dots").style.display = "none"; // Hide dots
    document.querySelector(".gallery-grid").style.display = "grid"; // Show gallery grid
    document.getElementById("slideshowButton").style.display = "block"; // Show button again

    // Set a timeout to restart the slideshow after 1 minute
    slideshowInterval = setTimeout(() => {
        document.querySelector(".gallery-grid").style.display = "none"; // Hide collage
        document.getElementById("slideshowButton").style.display = "none"; // Hide button
        document.querySelector(".slideshow-container").style.display = "block"; // Show slideshow
        document.querySelector(".dots").style.display = "block"; // Show dots
        slideIndex = 0; // Reset slideIndex
        showSlides(); // Restart the slideshow
    }, 60000); // 60000 milliseconds = 1 minute
}
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block"; // Show the modal
    modalImg.src = src; // Set the source of the modal image
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}


function showGallery() {
    document.querySelector(".slideshow-container").style.display = "none"; // Hide slideshow
    document.querySelector(".gallery-grid").style.display = "grid"; // Show gallery grid
    document.getElementById("slideshowButton").style.display = "block"; // Show the slideshow button if needed
}