// Change text content when button is clicked
document.getElementById('change-text-btn').addEventListener('click', () => {
  const desc = document.getElementById('description');
  desc.textContent = 'The text has been changed dynamically! 🎉';
});

// Change the background color of the box
document.getElementById('change-color-btn').addEventListener('click', () => {
  const box = document.getElementById('color-box');
  box.style.backgroundColor = box.style.backgroundColor === 'coral' ? 'mediumseagreen' : 'coral';
});

// Add or remove an element dynamically
document.getElementById('toggle-element-btn').addEventListener('click', () => {
  const container = document.getElementById('element-container');
  const existingElement = document.getElementById('dynamic-element');

  if (existingElement) {
    container.removeChild(existingElement);
  } else {
    const newElement = document.createElement('p');
    newElement.id = 'dynamic-element';
    newElement.textContent = 'This element was added dynamically!';
    newElement.style.color = 'blue';
    newElement.style.fontWeight = 'bold';
    container.appendChild(newElement);
  }
});
