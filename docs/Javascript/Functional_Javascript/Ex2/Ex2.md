# Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times. Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.

## Arguments

  * operation: A Function, takes no arguments, returns no useful value.
  * num: the number of times to call `operation`

## Hints

  * Don't overthink it, the code should be rather simple.
  * It's ok to use a loop in your implementation, bonus points if you use recursion instead.
  * You may notice some output. That is coming from the function we passed you.
  * You do not need to console.log anything.

## Boilerplate

  function repeat(operation, num) {
    // SOLUTION GOES HERE
  }

  // Do not remove the line below
  module.exports = repeat

## Solution

반복적으로 operation을 num번 처리하므로 재귀를 이용하여 처리한다.
