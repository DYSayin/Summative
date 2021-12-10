/* eslint-disable no-unused-vars */

/**
 * Create a greeting message at the top of the console
 * @date 2021-12-08
 * @param {string} greeting
 * @returns "Welcome To My Webpage!"
 */
function greetings () {
  const greeting = 'Welcome To My Webpage!';
  console.log(greeting);
}

greetings();

// eslint-disable-next-line no-unused-vars
/**
 * Creates an alert when user click the search button.
 * @date 2021-12-08
 * @param {any}
 * @returns the following string: "Invalid input, Please try again"
 */
function myFunction () {
    alert('Invalid input, Please try again');
}

/**
 * Creates an alert when user submit the form.
 * @date 2021-12-08
 * @param {any}
 * @returns the following string: "Thank you for submitting. We will keep in touch with you!"
 */
function myFunction2 () {
  alert('Thank you for submitting. We will keep in touch with you!');
}

/* Table's colour buttons */
// eslint-disable-next-line no-unused-vars
/**
 * Change the whole table's colour when the user click the button
 * @date 2021-12-08
 * @param {any} "table"
 * @returns "aqua" background colour
 */
function changecolour1 () {
  const x = document.querySelectorAll('table');
  let i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = 'aqua';
  }
}

/**
 * Change the whole table's colour when the user click the button
 * @date 2021-12-08
 * @param {any} "table"
 * @returns "orange" background colour
 */
function changecolour2 () {
  const x = document.querySelectorAll('table');
  let i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = 'orange';
  }
}

/**
 * Change the whole table's colour when the user click the button
 * @date 2021-12-08
 * @param {any} "table"
 * @returns "green" background colour
 */
function changecolour3 () {
  const x = document.querySelectorAll('table');
  let i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = 'green';
  }
}

/**
 * Change the whole table's colour when the user click the button
 * @date 2021-12-08
 * @param {any} "table"
 * @returns "red" background colour
 */
function changecolour4 () {
  const x = document.querySelectorAll('table');
  let i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = 'red';
  }
}

/**
 *Change the whole table's colour when the user click the button
 * @date 2021-12-08
 * @param {any} "table"
 * @returns "white" background colour
 */
function changecolour5 () {
  const x = document.querySelectorAll('table');
  let i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = 'white';
  }
}
