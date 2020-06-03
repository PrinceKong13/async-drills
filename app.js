// displayMessage("Hello");
// let words = ["chameleon", "mug", "surfer", "flash"];
// getWords(...words);
let lunchTime = false;
let seconds = 1000;

function displayMessage(msg) {
  console.log(msg);
}

// function getWords(msg1, msg2, msg3, msg4) {
//   displayMessage(msg1);
//   setTimeout(() => {
//     displayMessage(msg2);
//   }, 1000);
//   setTimeout(() => {
//     displayMessage(msg3);
//   }, 2000);
//   setTimeout(() => {
//     displayMessage(msg4);
//   }, 3000);
// }

// function done() {
//   console.log("Done!");
// }

// function countdown(num, callback) {
//   if (num < 0) return;
//   if (num === 0) return callback;
//   setTimeout(() => {
//     displayMessage(num);
//   }, seconds);
//   seconds += 1000;
//   return countdown(num - 1, done);
// }
//countdown(5, done);

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
      let order = {
          lunch: "Sesame Chicken",
          drink: "Language of Thunder"
      }
      if (lunchTime === true) {
          resolve(order);
      } else {
          let err = new Error("Something went wrong");
          reject(err);
      }
    });
  };
  
orderMeSomeFood().then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message)
})