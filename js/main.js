const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

}

navLink.forEach(n => n.addEventListener('click', linkAction));


function video(){
    var trailer = document.querySelector('.trailer');
    trailer.classList.toggle("showing");

    var video = document.querySelector('video');
    video.pause();
}