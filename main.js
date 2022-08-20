let answers = [
    'NOPE',
    'Its the NO for me!',
    'Maybe Just Maybe',
    '100% YES',
    'Life is too short to be saying no.',
    'Lets say I agreed to this. But, can I change my mind later?',
    'Ask me again in a few years.',
    'Absolutely'
]

let displayAnswer = function () {
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];
    let element = document.getElementById("circle");
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.innerHTML = "<br><br>" + answer;
  };