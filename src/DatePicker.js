var dateCompare = function (newDate) {
    var d1 = document.getElementById('dateSelected1').innerHTML.split(" ");
    var d2 = document.getElementById('dateSelected2').innerHTML.split(" ");
    var 
    
};

var dateSelect = function (dateA) {
    var date = dateA.innerHTML;
    var dateDisplay = document.getElementById("dateSelected1");
    //check if a date has been selected
    //and if yes is it before the new date
    if (dateDisplay.innerHTML !== ""){
        dateDisplay = document.getElementById("dateSelected2");
    }
    if (dateDisplay.innerHTML !== "") {
        //2 dates have already been selected
        //compare the new date 

    }
    console.log(date.text);
    var dateMonth = document.getElementById("month").innerHTML;
    dateDisplay.innerHTML = date + " " + dateMonth;
};

var checkDateSelected