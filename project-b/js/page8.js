document.addEventListener('DOMContentLoaded', function(){

    var triggerImage = document.querySelector('.red-cd-button-img');

    var popup = document.getElementById('popup-cd');

    triggerImage.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    var closeButton = document.querySelector('.close-popup');

    closeButton.addEventListener('click', function(){
        popup.style.display = 'none';
    });
});