// alert("hello user!");

// let name = "John";
// let admin = name;
// alert(admin);

// ourPlanetName instead of PlanetName or planet

// let name = prompt("What is your name?", "Is it Victor?");
// alert(`${name} is your name`);

// let answer = prompt('What is the "official" name of Javascript?', '');

// if (answer == 'ECMAScript') {
//   alert("That's right!");
// } else {
//   alert("Wrong answer!  It's ECMAScript!");
// }


// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login';

// If (!(age >= 14 && age <= 90)
// if (age < 14 || age > 90)

// let userName = prompt("Who's there?", '');

// if (userName == 'Admin') {
//   let pass = prompt("What's the password?", '');

//   if (pass == 'TheMaster') {
//     alert('Welcome!');

//     } else if (pass == '' || pass == null) {
//     alert('Canceled');

//     } else alert('Wrong password!');
//   }

// else if (userName == '' || userName == null) {
//     alert('cancelled!');
//   } else {
//     alert("I don't know you!");
// }

// let num;

// do {
//   num = prompt('Provide a number greater than 100 please.', 0);
// } while (num <= 100 && num);

// Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


if (browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
  || browser == 'Firefox'
  || browser == 'Safari'
  || browser == Opera) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope htat this page looks ok!");
}

// Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

let a = +prompt('a?', '');

switch(a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert('2,3');
    break;
}

