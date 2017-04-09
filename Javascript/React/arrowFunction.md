#arrowFunction

ES6에서 함수를 표현하는 또다른 문법
*let 함수명 = 변수 => 결과(리턴)*
##변화전

        let one = (a) => a*a;

        let two = (a,b) => a*b;

        let three = (a,b) => {
        var c = a+b;
        return c*c;
        }
        let four = () => a;

##변화후

        "use strict";

        var one = function one(a) {
          return a * a;
        };

        var two = function two(a, b) {
          return a * b;
        };

        var three = function three(a, b) {
          var c = a + b;
          return c * c;
        };
        var four = function four() {
          return a;
        };


[ES6Console](https://es6console.com/)
