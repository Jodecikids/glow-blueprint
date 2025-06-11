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

function copyPrediction() {
    navigator.clipboard.writeText(el.textContent);
}

async function sharePrediction() {
    if (navigator.share) {
        try {
            await navigator.share({ text: el.textContent });
        } catch (_) {}
    } else {
        copyPrediction();
        alert('Prediction copied to clipboard');
    }
}

document.getElementById('next').addEventListener('click', showPrediction);
document.getElementById('copy').addEventListener('click', copyPrediction);
document.getElementById('share').addEventListener('click', sharePrediction);

showPrediction();
