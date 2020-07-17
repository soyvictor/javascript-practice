alert("hello user!");

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

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// if (browser == 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//   || browser == 'Firefox'
//   || browser == 'Safari'
//   || browser == Opera) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope htat this page looks ok!");
// }

// // Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = +prompt('a?', '');

// switch(a) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert('2,3');
//     break;
// }


// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||


// function checkAge(age) {
//   return (age > 18) ? true : confirm('Did parents allow you?');
// }

// function checkAge(age){
//   return (age > 18) || confirm('Did parents allow you?');
// }

// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// min(a, b) {  // min(1,2)

// if a < b
//   return a
// else
//   return b

// }

// min(a,b) {
//   return a < b ? a : b
// }


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// Run the demo

// P.S. In this task the function should support only natural values of n: integers up from 1.

/*function pow(x,n) {
  let result = x;

  for (i = 1; i < n; i++ ) {
    result *= x;
  }

  return result;

}

let x = prompt('What number would you like to multiply?', 0);
let n = prompt('To what power would you like to multiply?', 0);

if (n < 1) {
  alert('powers less than 1 are not supported');
}
else {
  alert(pow(x,n));
}


// Arrow functions

Rewrite with arrow functions
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);


let ask = (question, yes, no) => {
  if (confirm(question)) yes()
    else no();
}

let ask = () => {
  "Do you agree?",
  () => alert("you agreed."),
  () => alert("You cancelled the execution.")
}


What’s wrong with the code style below?


function pow(x, n) {
  let result = 1;

  for(let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n=prompt("n?",'');

if (n <= 0) {
  alert(`Power ${n} is not supported,
   please enter an integer number greater than zero`);
} else {
  alert( pow(x,n) );
}

/* This is
a multiline comment
wowww. */

// This is a single line comment.

/*
Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
/**/


/*Sum object properties
importance: 5
We have an object storing salaries of our team:


Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.*/


/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(obj) {

  let sum = 0

  for (let key in obj) {
    sum += obj[key];
  }

  if (sum == 0) {
    return 0;
  } else {
    return sum;
  }
}

console.log( sumSalaries(salaries) );*/


Multiply numeric properties by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.


function multiplyNumeric(obj) {
  for ( let key in obj) {
    if (typeof obj[key] == 'number' {
      ojb[key] *= 2
    }
  }
}










