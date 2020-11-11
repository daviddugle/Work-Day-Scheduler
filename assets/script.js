var bodyEl = document.querySelector("#input9");




// set the current day on the page
$("#currentDay").text(moment().format("dddd,MMMM,Do"));

//let's set a variable for the current hour so that we can use that to color code the rows
var currentHour = moment().format("H");
console.log(currentHour)

//now we are going to have to identify the current time of day and change the attibutes 
var descripField = document.querySelectorAll("input.description");
for (var i=0;i<descripField.length;i++){
    dataHour = descripField[i].dataset.hour;
    console.log(dataHour)

    if (dataHour === currentHour){
        $("descipField").addClass(".present");
    };
    // if else (dataHour > currentHour){
    //     descipField.addClass(".future");
    // };
    // else if (dataHour<currentHour){
    //     descipField.addClass(".past");
    // };

};



//just need to set up local storage so that we can save and refresh the page without losing our data.


// var inputField9 = localStorage.getItem("#input9");
// var inputField10 = localStorage.getItem("input10");
// var inputField11 = localStorage.getItem("input11");
// var inputField12 = localStorage.getItem("input12");
// var inputField13 = localStorage.getItem("input13");
// var inputField14 = localStorage.getItem("input14");
// var inputField15 = localStorage.getItem("input15");
// var inputField16 = localStorage.getItem("input16");
// var inputField17 = localStorage.getItem("input17");

var entryForm9 = document.querySelector("#input9");


$("#but9").on("click", function (event) {
    event.preventDefault();
    console.log(entryForm9.innerHTML);
    console.log(JSON.stringify(entryForm9));
    localStorage.setItem("input9", (entryForm9).innerHTML);
    console.log(localStorage.getItem("input9"));
});

