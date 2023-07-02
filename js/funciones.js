function Audio(au) {
    var sonido = document.getElementById("audio");
    var imagen1 = document.getElementById("Imagen1");
    var imagen2 = document.getElementById("Imagen2");
    var imagen3 = document.getElementById("Imagen3");
    var imagen4 = document.getElementById("Imagen4");
    var imagen5 = document.getElementById("Imagen5");
    var imagen6 = document.getElementById("Imagen6");
    var imagen7 = document.getElementById("Imagen7");
    var imagen8 = document.getElementById("Imagen8");
    var imagen9 = document.getElementById("Imagen9");
    var imagen10 = document.getElementById("Imagen10");
    switch (Number(au)) {
        case 1:
            imagen1.src = "./multimedia/img/believer.png";
            imagen1.style.display = "inline";
            imagen2.style.display = "none";
            imagen3.style.display = "none";
            imagen4.style.display = "none";
            imagen5.style.display = "none";
            sonido.pause();
            sonido.src = "./multimedia/audio/Believer.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 2:
            imagen1.style.display = "none";
            imagen2.src = "./multimedia/img/GetLucky.png";
            imagen2.style.display = "inline";
            imagen3.style.display = "none";
            imagen4.style.display = "none";
            imagen5.style.display = "none";
            sonido.pause();
            sonido.src = "./multimedia/audio/GetLucky.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 3:
            imagen1.style.display = "none";
            imagen2.style.display = "none";
            imagen3.src = "./multimedia/img/Heathens.png";
            imagen3.style.display = "inline";
            imagen4.style.display = "none";
            imagen5.style.display = "none";
            sonido.pause();
            sonido.src = "./multimedia/audio/Heathens.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 4:
            imagen1.style.display = "none";
            imagen2.style.display = "none";
            imagen3.style.display = "none";
            imagen4.src = "./multimedia/img/Maps.jpg";
            imagen4.style.display = "inline";
            imagen5.style.display = "none";
            sonido.pause();
            sonido.src = "./multimedia/audio/Maps.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 5:
            imagen1.style.display = "none";
            imagen2.style.display = "none";
            imagen3.style.display = "none";
            imagen4.style.display = "none";
            imagen5.src = "./multimedia/img/zombie.jpeg";
            imagen5.style.display = "inline";
            sonido.pause();
            sonido.src = "./multimedia/audio/Zombie.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 1:
            imagen1.src = "./multimedia/img/believer.png";
            imagen1.style.display = "inline";
            imagen2.style.display = "none";
            imagen3.style.display = "none";
            imagen4.style.display = "none";
            imagen5.style.display = "none";
            sonido.pause();
            sonido.src = "./multimedia/audio/Believer.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 2:
            imagen1.style.display = "none";
            imagen2.src = "./multimedia/img/GetLucky.png";
            imagen2.style.display = "inline";
            imagen3.style.display = "none";
            imagen4.style.display = "none";
            imagen5.style.display = "none";
            sonido.pause();
            sonido.src = "./multimedia/audio/GetLucky.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 3:
            imagen1.style.display = "none";
            imagen2.style.display = "none";
            imagen3.src = "./multimedia/img/Heathens.png";
            imagen3.style.display = "inline";
            imagen4.style.display = "none";
            imagen5.style.display = "none";
            sonido.pause();
            sonido.src = "./multimedia/audio/Heathens.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 4:
            imagen1.style.display = "none";
            imagen2.style.display = "none";
            imagen3.style.display = "none";
            imagen4.src = "./multimedia/img/Maps.jpg";
            imagen4.style.display = "inline";
            imagen5.style.display = "none";
            sonido.pause();
            sonido.src = "./multimedia/audio/Maps.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        case 5:
            imagen1.style.display = "none";
            imagen2.style.display = "none";
            imagen3.style.display = "none";
            imagen4.style.display = "none";
            imagen5.src = "./multimedia/img/zombie.jpeg";
            imagen5.style.display = "inline";
            sonido.pause();
            sonido.src = "./multimedia/audio/Zombie.mp3";
            sonido.play();
            video.src = "./multimedia/video/colores.mp4";
            video.play();
            break;
        default:
    }
}