const output = document.getElementById("output");
let keyHistory = [];

document.addEventListener("keydown", function(event) {
  
  const { key, keyCode, ctrlKey, shiftKey } = event;
  const keyCombination = `${ctrlKey ? 'Ctrl + ' : ''}${shiftKey ? 'Shift + ' : ''}${key}`;
  output.innerHTML = `Key pressed: ${keyCombination} <br> Key code: ${keyCode}`;


  keyHistory.push({ key: keyCombination, keyCode: keyCode });
});


function playSound() {
  const audio = new Audio('keypress-sound.mp3');
  audio.play();
}


document.addEventListener("keyup", playSound);
