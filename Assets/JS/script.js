// opening with document ready to make sure page loads correctly
$(document).ready(function(){
    // trying to use dayjs to get current date - not working although it looks right to me
    var hour = moment().hours();
//day.js date for top of page
    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };

// Adding a different color to rows depending on whether they are in the past, the present, or the future
function hoursColorSchedule(){
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
};
//Showing the stored inputs after page refresh
function displayStoredInputs(){
    $(".event").each(function(){
        var inputId = $(this).attr("id");
        $(this).val(localStorage.getItem(inputId));
    });
};
//Adding a click event which will save the user input to local storage - input will be saved despite page refresh
$(".saveBtn").click(function(){
    var scheduleInputs = $(this).siblings(".event").val();
    var inputsLocation = $(this).siblings(".event").attr("id");
    localStorage.setItem(inputsLocation,scheduleInputs);
});
setInterval(getDate,1000);
hoursColorSchedule();
setInterval(hoursColorSchedule,1000);
displayStoredInputs();
});
