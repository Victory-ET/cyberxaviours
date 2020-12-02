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

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.left', {})
sr.reveal('.join-btn', {delay:200})
sr.reveal('.home__img', {delay:400})
sr.reveal('.avatar', {delay:200})

sr.reveal('.header', {})
sr.reveal('.about-content', {delay:200})


sr.reveal('.header', {})
sr.reveal('.service', {interval:200})



//closing nav on a click
var cbox = document.getElementById('check');
function closenav(){


cbox.value = 'on';
// if(cbox.checked = false)
// if(cbox.value == 'on'){
//     console.log('on');
// }
// else{
//     cbox.value='tested';
//     console.log(cbox.value)
// }


}
var ham = document.querySelector('.ham');

ham.addEventListener('click', closenav());

function closing(){
    if(cbox.value = 'on'){
        cbox.checked = false;
        cbox.value = 'off';
    }
}