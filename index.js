// Receives a callback function as an argument and calls it
function receivesAFunction(callback) {
  callback();
}

// Returns a named function that logs a message
function returnsANamedFunction() {
  function sayHello() {
    console.log("Hello from the named function!");
  }
  return sayHello;
}

// Returns an anonymous function that logs a message
function returnsAnAnonymousFunction() {
  return function () {
    console.log("Hello from the anonymous function!");
  };
}

// Example usage
receivesAFunction(function () {
  console.log("Callback function executed!");
});

const namedFunction = returnsANamedFunction();
namedFunction(); // Output: Hello from the named function!

const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction(); // Output: Hello from the anonymous function!
