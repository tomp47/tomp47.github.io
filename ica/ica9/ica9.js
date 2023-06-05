const button = document.querySelector('#js-new-quote');
const btnClick = button.addEventListener('click', newQuestion);
const answerButton = document.querySelector('#js-answer-button')
const answerButtonclick = answerButton.addEventListener('click',giveAnswer)

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";



async function newQuestion(){
    const output = await newTrivia();
    console.log(output);
    const quoteText = output['question'];
    const quoteArea = document.querySelector('#js-quote-text');
    quoteArea.textContent = quoteText;
}


async function giveAnswer(){
    const output = await newTrivia();

    const answerText = output['answer'];
    const answerArea = document.querySelector('#js-answer-text');
    answerArea.textContent = answerText;
}

// connecting and using api
async function newTrivia(){
    try{
        //console.log("button pressed")
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText)
        }
        const jsondata = await response.json();
        //console.log(jsondata['question']);
        //console.log(jsondata['answer']);
        return(jsondata);

    }
    catch(err){
            console.log(err);
            alert('Failed');
        }
}

document.addEventListener('DOMContentLoaded', newQuestion);





