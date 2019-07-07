const soundMachine = (() => {
    const keys = document.querySelectorAll(".main-key");
    const sounds = document.querySelectorAll(".sound");

    keys.forEach((key, i) => {
        key.addEventListener("click", () => {
            sounds[i].currentTime = 0;
            sounds[i].play();
        });

        // Remove the animation class after transition has finished on the current key.
        key.addEventListener("transitionend", (event) => {
            const key = event.target;
            key.classList.remove("active");
        });
    });

    window.addEventListener("keydown", (event) => {
        const currentSoundSelection = document.querySelector(`audio[data-keycode="${event.keyCode}"]`);
        const currentKey = document.querySelector(`div[data-keycode="${event.keyCode}"]`);
    
        currentSoundSelection.currentTime = 0;
        currentSoundSelection.play();

        // Activate active animation for the current key.
        currentKey.classList.add("active");
    });

})();