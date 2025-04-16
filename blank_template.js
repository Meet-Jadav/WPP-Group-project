var elements = document.querySelectorAll('.element');

elements.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.classList.contains('expanded')) {
            let currentHeight = element.scrollHeight;
            element.style.height = currentHeight + 'px';
            requestAnimationFrame(() => {
                element.style.height = '160px';
            });
            element.classList.remove('expanded');

            // Restore the original text
            let textElement = element.querySelector('.text');
            if (textElement) {
                textElement.textContent = textElement.getAttribute('data-original-text');
            }
        } else {
            let currentHeight = element.scrollHeight;
            element.style.height = '160px';
            requestAnimationFrame(() => {
                element.style.height = currentHeight + 'px';
            });
            element.classList.add('expanded');

            // Change the text
            let textElement = element.querySelector('.text');
            if (textElement) {
                if (!textElement.getAttribute('data-original-text')) {
                    textElement.setAttribute('data-original-text', textElement.textContent);
                }
                textElement.textContent = 'This is the new text!';
            }
        }
    });

    element.style.transition = 'height 0.5s ease-in-out';
});

