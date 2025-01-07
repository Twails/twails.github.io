const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

let currentSongIndex = 0;
const songs = [
    { name: 'Песня 1', file: 'song1.mp3' },
    { name: 'Песня 2', file: 'song2.mp3' },
    { name: 'Песня 3', file: 'song3.mp3' }
    // Добавьте больше песен по аналогии
];

function playSong(songFile, songName) {
    audioSource.src = songFile;
    audioPlayer.load();
    audioPlayer.play();
    currentSongIndex = songs.findIndex(song => song.file === songFile);
}

audioPlayer.addEventListener('ended', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Переход к следующей песне
    playSong(songs[currentSongIndex].file, songs[currentSongIndex].name);
});
