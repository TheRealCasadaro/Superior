const clockDateDisplay = document.getElementById("clock-date") 
const clockTimeDisplay = document.getElementById("clock-time") 

const currentDateTime = new Date()

currentTime = currentDateTime.getTime();

clockTimeDisplay.innerHTML = `${currentTime}`