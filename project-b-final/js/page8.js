
// addEventListener(type, listener, capture)
document.addEventListener('DOMContentLoaded', function () {
// 'click'
    var triggerImage = document.querySelector('.red-cd-button-img');

    var popup = document.getElementById('popup-cd');

    triggerImage.addEventListener('click', function () {
        popup.window.display = 'block';
    });

    var closeButton = document.querySelector('.close-popup');

    closeButton.addEventListener('click', function () {
        popup.window.display = 'none';
    });
});