const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select a media stream 

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // error
        console.log('whoops, something went wrong:', error)
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button 
    button.disabled = false;
});
//onLoad
selectMediaStream();