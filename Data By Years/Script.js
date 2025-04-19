var elements = document.querySelectorAll('.element');

elements.forEach(function (element) {
  const hiddenContent = element.querySelector('.hide'); // get the hidden part inside

  element.addEventListener('click', function () {

    if (element.classList.contains('expanded')) {
      // Collapse
      let currentHeight = element.scrollHeight;
      element.style.height = currentHeight + 'px';
      requestAnimationFrame(() => {
        element.style.height = '160px';
      });
      element.classList.remove('expanded');

      if (hiddenContent) hiddenContent.style.visibility = 'hidden';

    } else {
      // Expand
      let currentHeight = element.scrollHeight;
      element.style.height = '160px';

      requestAnimationFrame(() => {
        element.style.height = currentHeight + 'px';
      });
      element.classList.add('expanded');

      if (hiddenContent) hiddenContent.style.visibility = 'visible';
    }
  });

  element.style.transition = 'height 0.5s ease-in-out';
});
