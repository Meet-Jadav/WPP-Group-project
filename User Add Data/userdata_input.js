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

// Add the event .

function addEvent() {
  const imageUrlInput = document.querySelector('.add_image_url').value.trim();
  const imageFileInput = document.querySelector('.add_image_file').files[0];
  const eventText = document.querySelector('.add_text').value.trim();

  if (!imageUrlInput && !imageFileInput) {
      alert("Please provide either an image URL or select a file.");
      return;
  }
  if (!eventText) {
      alert("Please enter event text.");
      return;
  }

  let imageSrc = "";

  if (imageFileInput) {
      imageSrc = URL.createObjectURL(imageFileInput); // Use local file
  } else {
      imageSrc = imageUrlInput; // Use pasted URL
  }

  const container = document.querySelector('.list-data');

  const newElement = document.createElement('div');
  newElement.className = 'element';
  newElement.innerHTML = `
      <div><img class="image" src="${imageSrc}" alt="New Event Image"></div>
      <div class="text">${eventText}</div>
  `;

  newElement.style.transition = 'height 0.5s ease-in-out';
  newElement.addEventListener('click', function () {
      if (newElement.classList.contains('expanded')) {
          const currentHeight = newElement.scrollHeight;
          newElement.style.height = currentHeight + 'px';
          requestAnimationFrame(() => {
              newElement.style.height = '160px';
          });
          newElement.classList.remove('expanded');
      } else {
          const currentHeight = newElement.scrollHeight;
          newElement.style.height = '160px';
          requestAnimationFrame(() => {
              newElement.style.height = currentHeight + 'px';
          });
          newElement.classList.add('expanded');
      }
  });

  container.appendChild(newElement);

  // Clear inputs
  document.querySelector('.add_image_url').value = '';
  document.querySelector('.add_image_file').value = '';
  document.querySelector('.add_text').value = '';
}
