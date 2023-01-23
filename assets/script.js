// var weekDay = moment("1.1.2022", "D.M.YYYY").format("ddd D MMM YYYY");
// $("#currentDay").text(weekDay);

var currentDay = moment().format("ddd D MMM YYYY");
$("#currentDay").text(currentDay);


// check current time in hours (one or two easy integers)
var currentTime = moment().format("H")

const block = document.querySelector(".block");
console.log(block.dataset);

function updateTimeBlocks() {
    // standard JavasScript notation would be:
    // // var blocks = document.querySelectorAll(".block");
    // blocks.forEach (function(block){executable code} QUESTION
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
        // the javascript equivalent is: this.setAttribute('class', this.getAttribute('class') + ' present');
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


console.log(block.dataset.start)
console.log(moment().format("H") < block.dataset.start);

// SHORTCUT: cmd + shift + H for find and replace all occurences of x

// I now need to save the text content of what is in each text area to local storage.
// This will happen with an eventListener that runs when the save button is clicked

// jQuery equivalent: $('.saveBtn').click(function() {

var saveBtn = document.querySelector(".saveBtn");
saveBtn.addEventListener("click", function(event) {
    var textArea = $(this).parent().find('.block');
    var textAreaContent = textArea.val();
    var textAreaId = textArea.attr('id');
    localStorage.setItem(textAreaId, textAreaContent);
});



// Week-6 Day-3 02-Local-Storage:

var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;


var theLastPassword = localStorage.getItem("lastPassword");
  userPasswordSpan.textContent = theLastPassword;

  var theLastEmail = localStorage.getItem("lastEmail");
  userEmailSpan.textContent = theLastEmail;

  localStorage.setItem("lastEmail", email);
  localStorage.setItem("lastPassword", password);

  userFirstNameSpan.textContent = lastUser.firstName;













