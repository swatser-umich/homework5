// Add js here.

//Page load
var vid = document.getElementById("videoplayer");
vid.autoplay = false;
vid.loop = false;
vid.load();

//Play button 
function playVid() {
    vid.play();
}

//Pause button 
function pauseVid() {
    vid.pause();
}

//Slow down 
function slowDown() {
    if (vid.playbackRate == 2) {
        vid.playbackRate = 1;
    } else if (vid.playbackRate == 1)  {
        vid.playbackRate = 0.5;
    } else {
        alert("Video is at slowest speed!");
    }
}

//Speed up 
function speedUp() {
    if (vid.playbackRate == 0.5) {
        vid.playbackRate = 1;
    } else if (vid.playbackRate == 1)  {
        vid.playbackRate = 2;
    } else {
        alert("Video is at fastest speed!");
    }
}

//Skip ahead 
function skip(value) {
    //var vid = document.getElementById("videoplayer");
    vid.currentTime += value;
    vid.loop = true;
}


//Mute 
function mute() {
    if (vid.muted == false) {
        vid.muted = true;
    } else {
        vid.muted = false;
    }
}


//Volume slider
var slider = document.getElementById('slider');
window.setInterval(changevolume(), 10);

function changeVolume() {
    vid.volume = slider.value / 100;
    document.getElementById("volume").textContent = vid.volume * 100 + "%";
}

function printVol() {
    //document.write(slider);
    
}