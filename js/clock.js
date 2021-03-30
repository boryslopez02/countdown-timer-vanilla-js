let day = document.getElementById('day'),
hour = document.getElementById('hours'),
min = document.getElementById('minutes'),
sec = document.getElementById('seconds'),
container = document.querySelector('.container'),
fragment = new DocumentFragment(),
newYear = '1 Jan 2022';

const Countdown = () => {
    const newYearsDate = new Date(newYear);
    const date = new Date();
    
    const totalSeconds = (newYearsDate - date) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    day.innerHTML = formatTime(days);
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(minutes);
    sec.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ?(`0${time}`) : time
}

const Rain = () => {
    let particle = document.createElement('span')
    particle.classList.add('particle')
    particle.style.height = Math.random() * 30 + 'px'
    particle.style.top = (Math.random() * 5) + 'px' 
    particle.style.left = (Math.random() * innerWidth) + 'px' 
    particle.style.animation = 'rain 2s alternate'
    particle.addEventListener('animationend', () => {
        particle.remove();
    });

    fragment.appendChild(particle)
    container.appendChild(fragment)
}

setInterval(Rain, 300);

setInterval(Countdown, 1000);

