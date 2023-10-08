/*
typescript has 3 loops
    - for loop
    - for..of loop
    - for..in loop
*/


// counts to 3 from 0, just like for i in range ....
for (let i = 0; i < 4; i++) {
    console.log ("Number:", i);
  }
  
// iterates through all the values of a array
let arr = [1, 2, 3, 4];

for (var val of arr) {
  console.log("Number:", val); // prints values: 1, 2, 3, 4
}


/*
iterates through a array like the for..of but
is for indexes
*/
for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 1, 2, 3, 4
}

/*
the difference between the last two is that the first one gives a value as var val
the second one gives a index for var index
*/

// While loop is pretty self explanatory
int = 4
while(int <= 5) {
    console.log("Number=", int)
    int++;
}