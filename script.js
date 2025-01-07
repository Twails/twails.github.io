document.addEventListener('DOMContentLoaded', () => {
    const songList = document.getElementById('songList');

    // Массив с названиями песен
    const songs = [
        'song1.mp3', // Замените на реальные названия ваших файлов
        'song2.mp3',
        'song3.mp3'
        // Добавьте другие песни по мере необходимости
    ];

    // Добавление песен в список
    songs.forEach(song => {
        addSongToList(song);
    });

    function addSongToList(songName) {
        const li = document.createElement('li');
        li.textContent = songName;

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = `audio/${songName}`; // Путь к аудиофайлу

        li.appendChild(audio);
        songList.appendChild(li);
    }
});
