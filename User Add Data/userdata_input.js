const container = document.getElementById('timeline-container');

// Create the first input field
addNewInput();

function addNewInput() {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'event-input';
  input.placeholder = 'Add your event...';

  // Listen for Enter key or blur event
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      saveEvent(this);
    }
  });

  input.addEventListener('blur', function () {
    if (this.value.trim() !== '') {
      saveEvent(this);
    }
  });

  container.appendChild(input);
  input.focus();
}

function saveEvent(inputElement) {
  const text = inputElement.value.trim();
  if (text === '') return;

  // Create a timeline block (div) with the text
  const eventDiv = document.createElement('div');
  eventDiv.className = 'event';
  eventDiv.textContent = text;

  // Replace the input with the event block
  container.replaceChild(eventDiv, inputElement);

  // Add a new empty input for the next event
  addNewInput();
}
