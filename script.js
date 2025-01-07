document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const songList = document.getElementById('songList');

    // Массив для хранения названий песен
    let songs = [];
    let currentSongIndex = 0;

    // Загрузка списка песен из songs.json
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            songs = data.songs;
            // Установка первой песни
            audioPlayer.src = `audio/${songs[currentSongIndex]}`;

            // Добавление песен в список
            songs.forEach((song, index) => {
                const li = document.createElement('li');
                li.textContent = song;
                li.addEventListener('click', () => {
                    playSong(index);
                });
                songList.appendChild(li);
            });
        })
        .catch(error => console.error('Ошибка при загрузке списка песен:', error));

    // Функция для воспроизведения песни по индексу
    function playSong(index) {
        currentSongIndex = index;
        audioPlayer.src = `audio/${songs[currentSongIndex]}`;
        audioPlayer.play();
    }

    // Событие, которое срабатывает, когда песня заканчивается
    audioPlayer.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length; // Переход к следующей песне
        audioPlayer.src = `audio/${songs[currentSongIndex]}`;
        audioPlayer.play();
    });
});
