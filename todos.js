// Add for userInput
var userInput = prompt("What you want to do?");
// Create todos array
var toDos = [];
// check inPut for "list", "make" or "quit"
while (userInput !== "quit") {
  // handle userInput
  if (userInput === "list") {
    console.log(toDos);
  } else if (userInput === "make") {
    // Ask user for newTodo
    newTodo = prompt("What do you want to add?")
    // Add newTodo to toDos array
    toDos.push(newTodo);
    console.log("\"" + newTodo + "\"" + " has been added to list.");
  }

  // Ask user again
  userInput = prompt("What you want to do?");

 }
// Print the array
console.log(toDos);
// Inform user about quitting
console.log("You have quit!");
