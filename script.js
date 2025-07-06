console.log("Website is loaded!");

function startStory() {
    console.log("Start clicked");

    const isInIframe = window !== window.parent;

    if (isInIframe) {
        const frame = window.parent.document.getElementById('sceneFrame');
        if (frame) {
            const audio = window.parent.document.getElementById('bgAudio');
            if (audio) {
                localStorage.setItem('audioTime', audio.currentTime);
                localStorage.setItem('audioPlaying', !audio.paused);
            }

            document.body.classList.add('fade-out');

            let transitionCompleted = false;

            document.body.addEventListener('transitionend', function handler () {
                if (!transitionCompleted) {
                    transitionCompleted = true;
                    frame.src = 'scene1.html';
                    document.body.removeEventListener('transitionend', handler);
                }
            });

            setTimeout(() => {
                if (!transitionCompleted) {
                    frame.src = 'scene1.html';
                }
            }, 1100);
        } else {
            console.error("Iframe with ID 'sceneFrame' not found.");
        }
    } else {
        // fallback if not in iframe (debugging or direct access)
        window.location.href = 'scene1.html';
    }
}
