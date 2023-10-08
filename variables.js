// variables are defined using var, where typescript determines the type automatically
var string = "I am a string";
var int = 4;
// print to the console is console.log()
console.log(string, int);
// comparing values
var value1 = "Hello";
var value2 = "Hello1";
var bool = value1 === value2;
console.log(bool);
/* var is inside the scope of the function while let is only available inside of th block they are defined
example from https://sentry.io/answers/difference-between-let-and-var-in-javascript/
*/
function varAndLetScoping() {
    var x = 1;
    if (true) {
        var x_1 = 2;
        console.log(x_1); // will print 2
    }
    console.log(x); // will print 1
}
varAndLetScoping();
