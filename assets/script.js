// $(document).ready(function () {
// var currentTime = moment().format("HH:mm:ss");
// $("#currentDay").text(currentTime);
// });

// var weekDay = moment("1.1.2022", "D.M.YYYY").format("ddd D MMM YYYY");
// $("#currentDay").text(weekDay);

var currentDay= moment().format("ddd D MMM YYYY");
$("#currentDay").text(currentDay);


// check current time in hours (one or two easy integers)
var currentTime = moment().format("H")

const block = document.querySelector(".block");
console.log(block.dataset);

function updateTimeBlocks() {
    // standard JavasScript notation would be:
    // // var block = document.querySelector(".block");
    // .forEach (function declaration) QUESTION
    $(".block").each(function() {
        // var startTime = $(this).dataset.start;
        // I cannot use this notation for dataset because it is not a jQuery property, I need to use the
        //jQuery notation:
        var startTime = $(this).data("start");
        // 'this' in this context means when the function is running through the blocks
        // each block it is running through will be the 'this'; then it is checking the dataset and finding the value of start and end
        // var endTime = $(this).dataset.end; 
        var endTime = $(this).data("end");
        // simple logic to see if currentTime is between start and end
        if (currentTime >= startTime && currentTime < endTime) { 
            $(this).addClass("present"); 
        } else if (currentTime < startTime) { 
            $(this).addClass("future"); 
        } else {
            $(this).addClass("past"); 
        }
    });
}

// update time blocks by set(ing)Interval to run the function every second 

setInterval(updateTimeBlocks, 1000);
updateTimeBlocks();


// function updateTimeBlocks() {
//     var currentTime = moment().format("H"); // format the current time as hours and minutes
//     $("#block").each(function() {
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

console.log(moment().format("H") < block.dataset.start);

console.log(block.dataset.start)

// SHORTCUT: cmd + shift + H for find and replace all occurences of x













