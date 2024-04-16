/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

//let count = 0;
// function intervalCount(cb, delay, amount) {
//     // invoke the callback "amount" number of times
//     // let timeoutID = setTimeout(cb, delay);
//     let timeoutID = setInterval(cb, delay);

//     // console.log(timeoutID);
//     let waitToStop = delay * amount;
//     console.log('start the interval');

//     // separate timer stops the first timer
//     setTimeout(() => {
//         console.log('end the interval');
//         clearInterval(timeoutID)
//     }, waitToStop + 5);             // wait for 1500 ms to terminate the interval method
//                                     // plus an extra 5ms buffer
//   }
//     //utilize a 'closure' to your advantage?

// intervalCount(function() {
//     console.log('hi');
//     count++;
// }, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times





function intervalCount(cb, delay, amount) {
  let count = 0;
  let timeoutID = setInterval(() => {
    cb();
    count++;
    //console.log(count)
      if (count === amount) {
        clearInterval(timeoutID);
      }
  }, delay);
}
  //utilize a 'closure' to your advantage?

intervalCount(function() {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;a
}
