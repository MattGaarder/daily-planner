// $(document).ready(function () {
// var currentTime = moment().format("HH:mm:ss");
// $("#currentDay").text(currentTime);
// });

// var weekDay = moment("1.1.2022", "D.M.YYYY").format("ddd D MMM YYYY");
// $("#currentDay").text(weekDay);

var currentDay= moment().format("ddd D MMM YYYY");
$("#currentDay").text(currentDay);

var currentTime = moment().format("H")

const boob = document.getElementById("boob");
console.log(boob.dataset);

function updateTimeBlocks() {
    var currentTime = moment().format("H");
    $("boob").each(function() {
        var startTime = $(this).dataset.start;
        var endTime = $(this).dataset.end; 
        if (currentTime >= startTime && currentTime < endTime) { 
            $(this).addClass("present"); 
        } else if (currentTime < startTime) { 
            $(this).addClass("future"); 
        } else {
            $(this).addClass("past"); 
        }
    });
}


// function updateTimeBlocks() {
//     var currentTime = moment().format("H"); // format the current time as hours and minutes
//     $("#boob").each(function() {
//         var startTime = $(this).data("start"); // get the start time of the time block
//         var endTime = $(this).data("end"); // get the end time of the time block
//         if (currentTime >= startTime && currentTime < endTime) { // check if current time is within the time block
//             $(this).addClass("present"); // add the present class
//         } else if (currentTime < startTime) { // check if current time is before the start time
//             $(this).addClass("future"); // add the future class
//         } else {
//             $(this).addClass("past"); // add the past class
//         }
//     });
// }

console.log(moment().format("H") < boob.dataset.start);

console.log(boob.dataset.start)

