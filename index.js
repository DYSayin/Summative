function myFunction() {
    alert("Invalid input,Please try again");
}

function getInputValue(){
  var inputVal = document.getElementById("myInput").value;
  console.log(inputVal)  
}



/* Table's colour buttons */
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
      x[i].style.backgroundColor = "gray";
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
      x[i].style.backgroundColor = "orange";
  }
}

function changecolour6() {
  var x = document.querySelectorAll("table");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "white";
  }
}
