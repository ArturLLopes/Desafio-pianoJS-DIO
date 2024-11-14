const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

let audio = new Audio("./src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    // Ativa a tecla clicada pelo teclado
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active")
    },150);
};


pianoKeys.forEach((key) => {
    
    key.addEventListener("click", () => playTune(key.dataset.key) )

    // Guarda as teclas clicadas
    mapedKeys.push(key.dataset.key);

})


// Keyboard
document.addEventListener("keydown", (event) => {
    if(mapedKeys.includes(event.key)) {
        playTune(event.key); 
       }
    
});

const handleVolume = (event) => {
    audio.volume = event.target.value;
}

volumeSlider.addEventListener("input", handleVolume);

// Mostrar/Esconder teclas
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));//toggle = se tiver, remove, se não tiver, adiciona
}
keysCheck.addEventListener("click", showHideKeys);