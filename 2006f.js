var elements = document.querySelectorAll('.element');

elements.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.classList.contains('expanded')) {
            let currentHeight = element.scrollHeight;
            element.style.height = currentHeight + 'px';
            requestAnimationFrame(() => {
                element.style.height = '150px';
            });
            element.classList.remove('expanded');
        } else {
            let currentHeight = element.scrollHeight;
            element.style.height = '160px';
      
            requestAnimationFrame(() => {
                element.style.height = currentHeight + 'px';
            });
            element.classList.add('expanded');
        }
    });

    element.style.transition = 'height 0.5s ease-in-out';
});