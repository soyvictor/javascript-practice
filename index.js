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

let num;

do {
  num = prompt('Provide a number greater than 100 please.', 0);
} while (num <= 100 && num);


