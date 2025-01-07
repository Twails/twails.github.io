document.addEventListener('DOMContentLoaded', () => {
    const songInput = document.getElementById('songInput');
    const addSongButton = document.getElementById('addSongButton');
    const songList = document.getElementById('songList');

    // Загрузка песен из localStorage
    loadSongs();

    addSongButton.addEventListener('click', () => {
        const file = songInput.files[0];
        if (file) {
            addSong(file.name);
            songInput.value = ''; // Очистить поле после добавления
        }
    });

    function loadSongs() {
        const songs = JSON.parse(localStorage.getItem('songs')) || [];
        songs.forEach(song => {
            addSongToList(song);
        });
    }

    function addSong(songName) {
        const songs = JSON.parse(localStorage.getItem('songs')) || [];
        songs.push(songName);
        localStorage.setItem('songs', JSON.stringify(songs));
        addSongToList(songName);
    }

    function addSongToList(songName) {
        const li = document.createElement('li');
        li.textContent = songName;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            deleteSong(songName, li);
        });

        li.appendChild(deleteButton);
        songList.appendChild(li);
    }

    function deleteSong(songName, li) {
        let songs = JSON.parse(localStorage.getItem('songs')) || [];
        songs = songs.filter(song => song !== songName);
        localStorage.setItem('songs', JSON.stringify(songs));
        songList.removeChild(li);
    }
});
