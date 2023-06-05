let currentVolume = 50;
let sliderCount = 1;

function changeVolume(slider) {
  const sliderValue = slider.value;

  if (sliderValue != currentVolume) {
    if (slider.classList.contains('active-slider')) {
      alert(`Volume changed to ${sliderValue}`);
      currentVolume = sliderValue;
      updateCurrentVolume();
    } else {
      alert("Wrong slider selected. Generating more sliders! One of them is correct, so choose wisely!");
      generateSliders();
    }
  }
}

function updateCurrentVolume() {
  const currentVolumeElement = document.querySelector('#current-volume');
  currentVolumeElement.textContent = `Current Volume: ${currentVolume}`;
}

function generateSliders() {
  const container = document.querySelector("#volume-slider");
  const sliders = container.querySelectorAll("input[type='range']");

  sliders.forEach(slider => {
    slider.disabled = true;
  });

  const activeSliderIndex = Math.floor(Math.random() * sliders.length); 

  for (let i = 0; i < 3; i++) {
    const newSliderId = `volume-slider-${++sliderCount}`;

    const newSlider = document.createElement("input");
    newSlider.type = "range";
    newSlider.id = newSliderId;
    newSlider.min = "0";
    newSlider.max = "100";
    newSlider.value = "50";
    newSlider.onchange = function() {changeVolume(this);};

    if (i === activeSliderIndex) {
      newSlider.classList.add('active-slider');
      newSlider.disabled = false;
    }

    container.appendChild(newSlider);
  }
}


updateCurrentVolume();