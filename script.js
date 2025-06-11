const predictions = [
    "The silver horizon reveals a twin path.",
    "Numbers align when the second moon rises.",
    "Wait for the shadow of the unseen star.",
    "A forgotten signal returns with the tide.",
    "When echoes overlap, follow the quiet one.",
    "The glass gate opens after the thirteenth chime.",
    "Seek the pattern in the silent storm.",
    "What is broken will guide you forward.",
    "The brightest key unlocks the darkest room.",
    "Tomorrow's answer hides in yesterday's code."
];

function randomPrediction() {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

const el = document.getElementById('prediction');
function showPrediction() {
    el.textContent = randomPrediction();
}

document.getElementById('next').addEventListener('click', showPrediction);

showPrediction();
