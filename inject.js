// set the visibility of the button to hidden
console.log('Injected paella play button remover script');

var paellaPlayButton1 = document.querySelector('#paella_plugin_PlayButtonOnScreen');
var paellaPlayButton2 = document.querySelector(".play-button-on-screen");

if(paellaPlayButton1) {
    console.log('Found #paella_plugin_PlayButtonOnScreen');
    paellaPlayButton1.style.visibility = 'hidden';
    console.log('Removed #paella_plugin_PlayButtonOnScreen');
} else if (paellaPlayButton2) {
    console.log('Found .play-button-on-screen');
    paellaPlayButton2.style.visibility = 'hidden';
    console.log('Removed .play-button-on-screen');
}
