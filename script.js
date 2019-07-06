const soundMachine = (() => {
    const keys = document.querySelectorAll(".main-key");
    const sounds = document.querySelectorAll(".sound");

    keys.forEach((key, i) => {
        key.addEventListener("click", () => {
            sounds[i].currentTime = 0;
            sounds[i].play();
        });
    });

    window.addEventListener("keydown", (event) => {
        const currentSoundSelection = document.querySelector(`audio[data-keycode="${event.keyCode}"]`);
    
        currentSoundSelection.currentTime = 0;
        currentSoundSelection.play();
    });

})(); // End of module