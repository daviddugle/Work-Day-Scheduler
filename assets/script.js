

// set the current day on the page
$("#currentDay").text(moment().format("dddd,MMMM,Do"));

//let's set a variable for the current hour so that we can use that to color code the rows
var currentHour = parseInt(moment().format("H"));
console.log(currentHour)

//now we are going to have to identify the current time of day and change the attibutes 
var descripField = document.querySelectorAll("input.description");

//this creates a loop to check the current hour all the way through the ending hour
for (var i=9;i<18;i++){
   
  
//this is checking the hour to see if it is the current hour and adding a class to change the color
    if (i === currentHour){
        $("#input"+i).addClass("present");
    }
    //this is checking the hour to see if it is in the future and adding the future class
    else if (i > currentHour){
        $("#input"+i).addClass("future");
    }
    //now we are setting the only other remaining class
    else {
        $("#input"+i).addClass("past");
    }
    //since we are checking the hour we are also going to check and see if there is anything in local storage that needs to go back
    var localInfo = localStorage.getItem("input"+i)
    $("#input"+i).val(localInfo)
    
};



//just need to set up local storage so that we can save and refresh the page without losing our data.

$(".saveBtn").on("click", function (event) {
    event.preventDefault();   
    //checking the value of the button that is clicked to reference the data-hour
    var hour = $(this).attr("data-hour")
    //checking the data that is in the clicked data-hour
    var text = $("#input"+hour).val()
    console.log(text)

    // var entryForm9 = document.querySelector("#input9").value;   
    localStorage.setItem("input"+hour,text);
    // renderNine();    
});

