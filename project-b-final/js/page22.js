var photos = document.querySelectorAll(".photo");

var currentPhotoIndex = 0;

function displayCurrentPhoto() {
    photos.forEach(function (photo) {
        photo.style.display = "none";
    });

    photos[currentPhotoIndex].style.display = "block";
}

document.getElementById("camera-img").addEventListener("click", function () {

    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }
    displayCurrentPhoto();
});

displayCurrentPhoto();
