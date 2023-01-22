// Create time blocks from 09:00 to 17:00.
// Have each time block be a <div> element
// Within each of these divs should be a textarea
// e.g. 
<div>
  <textarea id="time-block"></textarea>
</div>
// this will apply the css styles for the textarea element and the .time-block class
// In each time-block div there should be a section for a .hour class on the left
// There should also be something on the right with the class .saveBtn
// This will eventually have a "click" event listener that will set .textContent to local storage.
// It will also have the classes .saveBtn to apply css styles


// I will use moment() to dynamically change the classes of the timeblocks 
// by comparing them to moment() I will get them to be color coded 

var currentTime = moment().format("ddd D MMM YYYY");
$("#currentDay").text(currentTime);

function updateTimeBlocks() {
    var currentTime = moment().format("H:mm"); // format the current time as hours and minutes
    $(".time-block").each(function() {
        var startTime = $(this).data("start"); // get the start time of the time block
        var endTime = $(this).data("end"); // get the end time of the time block
        if (currentTime >= startTime && currentTime < endTime) { // check if current time is within the time block
            $(this).addClass("present"); // add the present class
        } else if (currentTime < startTime) { // check if current time is before the start time
            $(this).addClass("future"); // add the future class
        } else {
            $(this).addClass("past"); // add the past class
        }
    });
}

setInterval(updateTimeBlocks, 1000); // update time blocks every second


// Solution code for moment.js exercise:

// Use Moment.js to format the following variables:
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment("2021-06-15").format("D MMM YYYY");
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("1.1.2022", "D.M.YYYY").format("ddd D MMM YYYY");
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var dayYear = moment().format("DDD");
$("#3a").text(dayYear);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format("HH:mm:ss");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().format("X");
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment.unix(1318781876).format("D MMM YYYY, HH:mm:ss");
$("#6a").text(unixFormat);



// Notes from youtube
// Current Date + Time
let m = moment();
// m is now a moment object for date and time 
console.log(`toString() => ${m.toString()}`);
console.log(`toString() => ${m.toISOString()}`);

// Using a format. Use a date, and then use moment documentation to describe second argument
m = moment("14/06/2019 4:50PM", "DD/MM/YYYY h:mmA"); 

// Querying moments
console.log(moment("2023-06-04").isSame("2023-06-03")); // this will log false 
console.log(moment("2023-06-04").isSame("2023-06-03", "hour")); // this second hour (day/minute whatever)
// parameter compares only the second parameter to the first moment object
console.log(moment("2023-06-04").isBefore("2023-06-03")); // this function works in the obvious way
// and can also use a second parameter to give a duration (this logs false)
