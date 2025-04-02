console.log('js is connected!!!');

const fetchButton = document.getElementById('fetch-button');
const dogImage = document.getElementById('dog-image');

// Array to store dog image URLs
let dogImages = [];

// Load saved images from localStorage
const loadDogImages = () => {
  const stored = localStorage.getItem('dog-images');
  if (stored) {
    dogImages = JSON.parse(stored);
    renderGallery();
  }
};

// Save images to localStorage
const saveDogImages = () => {
  localStorage.setItem('dog-images', JSON.stringify(dogImages));
};

// Render the gallery of images
const renderGallery = () => {
  const gallery = document.createElement('div');
  gallery.id = 'dog-gallery';
  gallery.style.marginTop = '20px';

  dogImages.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.style.width = '200px';
    img.style.margin = '5px';
    gallery.appendChild(img);
  });

  // Replace existing gallery if it exists
  const existingGallery = document.getElementById('dog-gallery');
  if (existingGallery) {
    existingGallery.replaceWith(gallery);
  } else {
    document.body.appendChild(gallery);
  }
};

fetchButton.addEventListener('click', async () => {
  try {
    fetchButton.disabled = true;
    fetchButton.textContent = 'Loading...';

    const response = await fetch('https://dog.ceo/api/breeds/image/random');

    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const data = await response.json();
    dogImage.src = data.message;
    
    // Add new image to gallery
    dogImages.unshift(data.message); // Add to start of array
    if (dogImages.length > 10) dogImages.pop(); // Keep only last 10 images
    saveDogImages();
    renderGallery();

  } catch (error) {
    console.log('Error', error);
  } finally {
    fetchButton.disabled = false;
    fetchButton.textContent = 'Get a Random Dog!';
  }
});

// Load saved images when page loads
loadDogImages();
