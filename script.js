const drumPadElement = document.querySelector('.drum-pad')
const keysElement = drumPadElement.querySelectorAll('.key')


for (const keyElement of keysElement) {
    // sound at click
    keyElement.addEventListener('click', function () {
        const audio = keyElement.querySelector('.js-sound')
        audio.currentTime = 0
        audio.play()
    })

    // sound at keyboard
    window.addEventListener('keydown', function (event) {
        const audio = keyElement.querySelector('.js-sound')
        if (event.code === 'Space')
            audio.play()
    })
}



