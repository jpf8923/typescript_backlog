// variables are defined using var, where typescript determines the type automatically

var string = "I am a string";

let int = 4;
// print to the console is console.log()

console.log(string, int)

// comparing values

let value1 = "Hello";
let value2 = "Hello1";

var bool = value1 === value2;

console.log(bool)


/* var is inside the scope of the function while let is only available inside of th block they are defined
example from https://sentry.io/answers/difference-between-let-and-var-in-javascript/
*/

function varAndLetScoping() {
    var x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 1
  }
  
varAndLetScoping()