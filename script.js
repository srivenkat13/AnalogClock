//first grab the id which needs to be changed in css 
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
// console.log (date);
//  as the date object itself, is not so useful. we can pull out hours minutes and seconds from it.
// get them in 3 seperate variables of your choice  
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " +hr+" minute: "+min+" second: "+sec);
// console log the time in hr min and second format to check if the elements are grabbed well
// now calculate the position in degrees for each hand based on the time, start with seconds hand. 
let hrPosition = (hr*360/12)+((min*360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {
    hrPosition = hrPosition+(3/360); // 360/12 = 30 ,30/3600 =3/360
    minPosition = minPosition+(6/60); // a minute hand moves 1/60 of its revolution for 1 movement in seconds hand. (1/60)*6 = 6/60
    secPosition = secPosition+6; // 360 degree clock face with 60 seconds for one revolution  so 360/60 = 6

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
}
// call the setInterval method every second to make the clock functional
// the time to be given for this method is in milli seconds. so 1000ms = 1sec
var interval = setInterval(runTheClock,1000);