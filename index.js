/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
function myFunction() {
    alert("Invalid input,Please try again");
}

function myFunction2() {
  alert("Thank you for submittig. We will keep in touch with you!");
}

// eslint-disable-next-line no-unused-vars
function getInputValue(){
  var inputVal = document.getElementById("myInput").value;
  console.log(inputVal);  
}

function myFunction3() {
  var inputVal2 = document.getElementById("exampleInputEmail1").submit();
  console.log(inputVal2); 
}


/* Table's colour buttons */
// eslint-disable-next-line no-unused-vars
function changecolour1() {
  var x = document.querySelectorAll("table");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "aqua";
  }
}

function changecolour2() {
  var x = document.querySelectorAll("table");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "orange";
  }
}

function changecolour3() {
  var x = document.querySelectorAll("table");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "green";
  }
}

function changecolour4() {
  var x = document.querySelectorAll("table");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "red";
  }
}



function changecolour5() {
  var x = document.querySelectorAll("table");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "white";
  }
}
