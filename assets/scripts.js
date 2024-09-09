const audioElement = document.getElementById("audio");
const playPauseButton = document.getElementById("player");

if (audioElement && playPauseButton) {
    playPauseButton.addEventListener("click", function() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.innerHTML = "&#10074;&#10074;";
        } else {
            audioElement.pause();
            playPauseButton.innerHTML = "&#9658;";
        }
    });

    audioElement.addEventListener("ended", function() {
        playPauseButton.innerHTML = "&#9658;";
    });

} else {
    console.error("Audio or player element not found.");
}

