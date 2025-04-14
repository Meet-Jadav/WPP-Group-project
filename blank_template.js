var elements = document.querySelectorAll('.element');
elements.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.style.height === 'auto') {
            element.style.height = '160px';
        } else {
            element.style.height = 'auto';
        }
    });
});

