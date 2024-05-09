var photos = document.querySelectorAll(".photo");

var currentPhotoIndex = 0;

function displayCurrentPhoto() {
    photos.forEach(function (photo) {
        photo.style.display = "none";
    });

    photos[currentPhotoIndex].style.display = "block";
}

document.getElementById("camera-img").addEventListener("click", function () {
    // Display the next photo
    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0; // Loop back to the first photo
    }
    displayCurrentPhoto();
});

// Initialize by displaying the first photo
displayCurrentPhoto();
