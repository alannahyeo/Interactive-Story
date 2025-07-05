console.log("Website is loaded!");

function startStory() {
    console.log("Start clicked");

    const audio = window.parent.document.getElementById('bgAudio');
    if (audio) {
        localStorage.setItem('audioTime', audio.currentTime);
        localStorage.setItem('audioPlaying', !audio.paused);
    }

    const frame = window.captureEvents.document.getElementById('sceneFrame');
    if (!frame) {
        console.error("Iframe not found. Are you opening master.html");
        return;
    }

    document.body.classList.add('fade-out');

    document.body.addEventListener('transitionend', function handler(){
        frame.src = 'scene1.html';
        document.body.removeEventListener('transitionend', handler);
        console.log("Scene changed to scene1.html");
    });

    setTimeout(() => {
        if (frame.src.indexOf('scene1.html') === -1) {
            frame.src = 'scene1.html';
            console.log("Scene changed via fallback");
        }
    }, 1500);
}