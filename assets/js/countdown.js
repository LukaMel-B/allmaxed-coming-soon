(function($) {
"use strict";

// Specify the deadline date
const deadlineDate = new Date('January 29, 2025 00:00:00').getTime();

// Cache all countdown boxes into consts
const countdownDays = document.querySelector('.countdown-days .number');
const countdownHours= document.querySelector('.countdown-hours .number');
const countdownMinutes= document.querySelector('.countdown-minutes .number');
const countdownSeconds= document.querySelector('.countdown-seconds .number');

// Update the count down every 1 second (1000 milliseconds)
setInterval(() => {    
  // Get current date and time
  const currentDate = new Date().getTime();

  // Calculate the distance between current date and time and the deadline date and time
  const distance = deadlineDate - currentDate;

  // Calculations the data for remaining days, hours, minutes and seconds
const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  // Insert the result data into individual countdown boxes
  if(countdownDays) {
    countdownDays.innerHTML = days;
  }
  if(countdownHours) {
    countdownHours.innerHTML = hours;
  }
  if(countdownMinutes) {
    countdownMinutes.innerHTML = minutes;
  }
  if(countdownSeconds) {
    countdownSeconds.innerHTML = seconds;
  }
  
  
}, 1000);


})(jQuery);
