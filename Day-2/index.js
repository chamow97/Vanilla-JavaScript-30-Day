const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if(secondsDegrees - 90 == 0){
    secondHand.style.transition = 'all 0s cubic-bezier(.45,-0.53,0,1.97';
  }
  else {
    secondHand.style.transition = 'all 0.5s cubic-bezier(.45,-0.53,0,1.97';
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  if(minsDegrees - 90 == 0){
    minsHand.style.transition = 'all 0s cubic-bezier(.45,-0.53,0,1.97';
  }
  else {
    minsHand.style.transition = 'all 0.5s cubic-bezier(.45,-0.53,0,1.97';
  }
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  if(hourDegrees - 90 == 0){
    minsHand.style.transition = 'all 0s cubic-bezier(.45,-0.53,0,1.97';
  }
  else {
    hourHand.style.transition = 'all 0.5s cubic-bezier(.45,-0.53,0,1.97';
  }
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;}
setInterval(setDate, 1000);
