const images = [
    "img/IMG_1.jpeg",
    "img/IMG_2.jpeg",
    "img/IMG_3.jpeg",
    "img/IMG_4.jpeg",
    "img/IMG_5.jpeg",
  ];
  let index = 0;
  const imgElement = document.getElementById("slider-image");
  const dotsContainer = document.getElementById("dots-container");
  
  // Function to create dots
  function createDots() {
    images.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => updateSlider(i));
      dotsContainer.appendChild(dot);
    });
  }
  
  // Function to update the slider
  function updateSlider(newIndex) {
    index = newIndex;
    imgElement.src = images[index];
    updateDots();
  }
  
  // Function to update the active dot
  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
  
  // Event listeners for prev and next buttons
  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider(index);
  });
  
  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateSlider(index);
  });
  
  // Initialize dots
  createDots();