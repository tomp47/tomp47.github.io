const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'On a rainy day, :insertx: went for a walk to  the store. When they got to :inserty:, they were soaking  wet, but still went inside.  Then they :insertz:. Bob, the cashier was not surprised how wet  he is, but because — :insertx: weighs 300 pounds, and they were soaking wet, he fell through the floor!';
const insertX = ['Jack the Jack rabbit', 'Jimbo', 'This guy'];
const insertY = ['the grocery store', 'the gas station', 'the market'];
const insertZ = ['slipped and fell', 'got the whole store wet!', 'bought some snacks'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300*0.0714286)} stones`;
        const temperature =  `${Math.round((94-32) * 5/9)} centigrade`;
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
    }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}