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


renderNine();
//just need to set up local storage so that we can save and refresh the page without losing our data.

$("#but9").on("click", function (event) {
    event.preventDefault();   
    var entryForm9 = document.querySelector("#input9").value;   
    localStorage.setItem("input9", entryForm9);
    renderNine();    
});
function renderNine(){
    var nineTalk = localStorage.getItem("input9");
    document.querySelector("#input9").textContent= nineTalk;

};
