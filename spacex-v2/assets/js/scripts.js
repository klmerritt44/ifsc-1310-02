$(document).ready(function() {

    $('#hero').slick({
      dots: true,
      infinite: true,
      speed: 900,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });

});

/*---------countdown calculator-----------*/

const countDownClock = (number = 100, format = 'seconds') => {
  
  const d = document;
  const daysElement = d.querySelector('.days');
  const hoursElement = d.querySelector('.hours');
  const minutesElement = d.querySelector('.minutes');
  const secondsElement = d.querySelector('.seconds');
  let countdown;
  convertFormat(format);
  
  function convertFormat(format) {
    switch(format) {
      case 'seconds':
        return timer(number);
      case 'minutes':
        return timer(number * 60);
        case 'hours':
        return timer(number * 60 * 60);
      case 'days':
        return timer(number * 60 * 60 * 24);             
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if(secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      };

      displayTimeLeft(secondsLeft);
    },1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
    secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
}

const launchDate = new Date("February 12, 2024 4:30:00 PM");
const differenceMilliseconds = launchDate - Date.now();
const differenceSeconds = differenceMilliseconds / 1000;
/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock(differenceSeconds, 'seconds');