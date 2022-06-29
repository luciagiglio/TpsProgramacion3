let holding = false;
let $track = document.getElementById("track");
let $progress = document.getElementById("progress");
let $play = document.getElementById("play");
let current_track = 0;
let duration;
let audio = new Audio();

let playing = false;

init();

function init() {
  audio = new Audio();
  audio.src = "sounds/CommunicationWorkSheet1.mp3";
}

audio.addEventListener("timeupdate", updateTrack, false);
audio.addEventListener(
  "loadedmetadata",
  function () {
    duration = this.duration;
  },
  false
);
// window.onmousemove = function (e) {
//   e.preventDefault();
//   if (holding) seekTrack(e);
// };
// window.onmouseup = function (e) {
//   holding = false;
// };
$track.onmousedown = function (e) {
  holding = true;
  seekTrack(e);
};

$play.addEventListener("click", () => {
  playing ? audio.pause() : audio.play();
});

audio.addEventListener(
  "pause",
  function () {
    $play.innerHTML = '<img class="pad" src="images/imgGame/play.svg" />';
    playing = false;
  },
  false
);

audio.addEventListener(
  "playing",
  function () {
    play.innerHTML = '<img src="images/imgGame/pause.svg" />';
    playing = true;
  },
  false
);
// next.addEventListener("click", nextTrack, false);
// prev.addEventListener("click", prevTrack, false);

function updateTrack() {
  curtime = audio.currentTime;
  percent = Math.round((curtime * 100) / duration);
  $progress.style.width = percent + "%";
  handler.style.left = percent + "%";
}

function seekTrack(e) {
  //   event = e || window.event;
  var x = e.pageX - player.offsetLeft - track.offsetLeft;
  percent = Math.round((x * 100) / track.offsetWidth);
  if (percent > 100) percent = 100;
  if (percent < 0) percent = 0;
  $progress.style.width = percent + "%";
  handler.style.left = percent + "%";
  audio.play();
  audio.currentTime = (percent * duration) / 100;
}

function updateInfo() {
  $title.textContent = song.title;
  $artist.textContent = song.artist;
  art.src = song.art;
  art.onload = function () {
    audio.play();
  };
}
