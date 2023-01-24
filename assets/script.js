// // var weekDay = moment("1.1.2022", "D.M.YYYY").format("ddd D MMM YYYY");
// // $("#currentDay").text(weekDay);

// var currentDay = moment().format("ddd D MMM YYYY");
// $("#currentDay").text(currentDay);


// // check current time in hours (one or two easy integers because of how I'm formatting it (unlike above))
// var currentTime = moment().format("H")

// const block = document.querySelector(".block");
// console.log(block.dataset);


// console.log(block.dataset.start)
// console.log(moment().format("H") < block.dataset.start);

// function updateTimeBlocks() {
// // standard JavasScript notation would be:
// // // var blocks = document.querySelectorAll(".block");
// // blocks.forEach (function(block){executable code} QUESTION
// // for each element with a class of block run the following function

//     $(".block").each(function() {

// // var startTime = $(this).dataset.start;
// // I cannot use this notation for dataset because it is not a jQuery property, I need to use the
// //jQuery notation:

//     var startTime = $(this).data("start");

// // 'this' in this context means when the function is running through the blocks
// // each block it is running through will be the 'this'; then it is checking the dataset and finding the value of start and end
// // var endTime = $(this).dataset.end; (can't use this, it is javascript)

//     var endTime = $(this).data("end");

// // simple logic to see if currentTime is between start and end

//     if (currentTime >= startTime && currentTime < endTime) { 

// // the javascript equivalent is: this.setAttribute('class', this.getAttribute('class') + ' present');
// // basically add these classes that have styles in css to the element

//             $(this).addClass("present"); 
//         } else if (currentTime < startTime) { 
//             $(this).addClass("future"); 
//         } else {
//             $(this).addClass("past"); 
//         }
//     });
// }

// // update time blocks by set(ing)Interval to run the function every second 

// setInterval(updateTimeBlocks, 1000);
// updateTimeBlocks();

// // I now need to save the text content of what is in each text area to local storage.
// // This will happen with an eventListener that runs when the save button is clicked

// // jQuery equivalent: $('.saveBtn').click(function() {

// var saveBtn = document.querySelector(".saveBtn");
// saveBtn.addEventListener("click", function(event) {

// // $(this) refers to the element that was clicked (in this case, the saveBtn (all saveBtns have this functionality)), 
// // and parent() is used to get the parent element of the clicked saveBtn. (time-block div).
// // Then .find('.block') is used to find all the descendants of the parent element that match the class .block

//     var textArea = $(this).parent().find('.block');

// // This is just the value of textArea i.e. whatever is written in the text area

//     var textAreaContent = textArea.val();

// // why is this not textArea.attr(#id)? Remember that textArea is only the block that is being clicked on
// // so textAreaId is the id of 'this' current block

//     var textAreaId = textArea.attr('id');

// // I am storing to local storage using key/value pair. The ID is the key and the content is the value.
// // When I use getItem later I can search for the key (the specific block where the content should go into)
// // to make sure that the content is going in the right place. 

//     localStorage.setItem(textAreaId, textAreaContent);
// });



// $('.block').each(function() {

// // Just like how I did above - for each element with the class of block - run this function:

//     var textAreaId = $(this).attr('id');

// // The ID of the (id is an attribute) block that is currently being iterated through is stored in the variable textAreaID
// // The getItem() method takes a key as a parameter, and returns the value associated with that key

//     var textAreaContent = localStorage.getItem(textAreaId);

// // make the value of 'this' block be the value of the key that is being iterated above

//     $(this).val(textAreaContent);
// });

// cross reference code-quiz challenge i.e. 'question.textContent = myQuestions[currentQuestion].question;' to see similar sort of thing

// SHORTCUT: cmd + shift + H for find and replace all occurences of x
// shift + tab to unindent 




// Week-6 Day-3 02-Local-Storage:

// var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;


// var theLastPassword = localStorage.getItem("lastPassword");
//   userPasswordSpan.textContent = theLastPassword;

//   var theLastEmail = localStorage.getItem("lastEmail");
//   userEmailSpan.textContent = theLastEmail;

//   localStorage.setItem("lastEmail", email);
//   localStorage.setItem("lastPassword", password);

//   userFirstNameSpan.textContent = lastUser.firstName;




// easy-reading:


var currentDay = moment().format("ddd D MMM YYYY");
$("#currentDay").text(currentDay);


var currentTime = moment().format("H")

const block = document.querySelector(".block");
console.log(block.dataset);


console.log(block.dataset.start)
console.log(moment().format("H") < block.dataset.start);

function updateTimeBlocks() {
    $(".block").each(function() {
        var startTime = $(this).data("start");
        var endTime = $(this).data("end");
        if (currentTime >= startTime && currentTime < endTime) { 
            $(this).addClass("present"); 
        } else if (currentTime < startTime) { 
            $(this).addClass("future"); 
        } else {
            $(this).addClass("past"); 
        }
    });
}

setInterval(updateTimeBlocks, 1000*60*15); //second to a minute to 15 minutes
updateTimeBlocks();

// var saveBtn = document.querySelectorAll(".saveBtn");
// console.log(saveBtn);


// JQuery notation for event listenered on "click"

$('.saveBtn').on("click", function(event) {
    console.log("saving");
    
    var calendarObject = JSON.parse(localStorage.getItem("cal"))||{};

    // if(!calendarObject){
    //     calendarObject = {};
    // }

    console.log(calendarObject);


    var textArea = $(this).parent().find('.block');
    var textAreaContent = textArea.val();
    var textAreaId = textArea.attr('id');

    calendarObject[textAreaId] = textAreaContent
    
    console.log(calendarObject);

    console.log(textAreaId, textAreaContent);
    localStorage.setItem("cal", JSON.stringify(calendarObject));
});

$('.block').each(function() {
    var textAreaId = $(this).attr('id');
    var calendarObject = JSON.parse(localStorage.getItem("cal"));
    $(this).val(calendarObject[textAreaId]);
});

// var cal = {
//     1:"Shower",
//     2:"Eat",
//     3: "Work"
// }
// console.log(cal)

// cal[1] = "bath"
// cal[5] = "lunch"

// console.log(cal)

