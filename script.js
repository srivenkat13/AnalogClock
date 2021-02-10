const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();
// console.log (date);
//  as the date object itself, is not so useful. we can pull out hours minutes and seconds from it.

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " +hr+" minute: "+min+" second: "+sec);

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

var interval = setInterval(runTheClock,1000);