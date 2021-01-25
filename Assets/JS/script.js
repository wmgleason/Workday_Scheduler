// opening with document ready to make sure page loads correctly
$(document).ready(function(){
    // trying to use dayjs to get current date - not working although it looks right to me
    const dayjs = require("dayjs");
    let hour = dayjs().hours();
    console.log(hour.format());
//day.js date for top of page
    function getDate(){
        $("#currentDay").text(dayjs().format('MMMM Do YYYY, h:mm:ss a'));
    };

// Adding a different color to rows depending on whether they are in the past, the present, or the future
function colorSchedule(){
    $("input").each(function(){
        var rowHour = $(this).attr("id");
        var rowNumber = parseInt(rowHour);
        if (rowNumber === hour){
            $(this).addClass("present");
        } else if (rowNumber < hour){
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        };
    });
}
//Adding a click event which will save the user input to local storage - input will be saved despite page refresh
$(".saveBtn").click(function(){
    var scheduleInputs = $(this).siblings(".event").val();
    var inputsLocation = $(this).siblings(".event").attr("id");
    localStorage.setItem(inputsLocation,scheduleInputs);
});

colorSchedule();
});
