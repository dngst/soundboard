$(document).ready(function() {
    const defaultTitle = document.title;
    const audioFiles = [
        "sounds/gotem.mp3",
        "sounds/wow.mp3",
        "sounds/yeet.mp3",
        "sounds/laugh.mp3",
        "sounds/nani.mp3",
        "sounds/tom.mp3",
        "sounds/windows.mp3",
        "sounds/loading.mp3",
        "sounds/aughhhhh.mp3",
        "sounds/milk.mp3",
    ];
    const soundGrid = $("#sound-grid");

    audioFiles.forEach((audioFile, index) => {
        const fileTitle = audioFile.split("/")[1].split(".")[0];
        const audioPlayer = `
            <div class="player" tabindex=${index + 1}>
                <audio id="sound-${index}">
                    <source src="${audioFile}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <div>${fileTitle}</div>
            </div>
        `;

        soundGrid.append(audioPlayer);

        const $player = $(`.player:eq(${index})`);
        const audio = $player.find('audio')[0];

        const toggleAudio = (audio, fileTitle) => {
            if (audio.paused) {
                audio.play();
                document.title = fileTitle;
                document.body.style.cursor = 'wait';
            } else {
                audio.pause();
                document.body.style.cursor = 'default';
            }
        };

        $player.click(() => {
            toggleAudio(audio, fileTitle);
        });

        audio.addEventListener('ended', () => {
            document.title = defaultTitle;
            document.body.style.cursor = 'default';
        });

        $player.keydown((event) => {
            if (event.key === 'Enter') {
                toggleAudio(audio, fileTitle);
            }
        });
    });
});

