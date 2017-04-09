#JSX 문법

React.js는 JAVASCRIPT 대신 JAX 문법에 따라 UI를 표현한다.

##1
        render(){
            return (
                <h1>Hello World</h1>
            );
        }

중요한 render() 안쪽의 표현방법이다.
 render블럭 이하에 코드를 입력하고 return 값으로 원하는 입력을 넣어준다.

##2

        render(){
            return (
                <div>
                  <h1>Hello World</h1>
                  <h2>Hello?</h2>
                </div>
            );
        }

태그들이 다양하다면 <div>엘리먼트로 묶어서 표현해야한다.

##3
        render(){
            return (
              let text = "kwshimhyeonbo";

                <div>
                  <h1>{text}</h1>
                  <h2>Hello?</h2>
                </div>
            );
        }

변수로 값표현을 하고싶다면 let변수를 사용해 return 값으로 표현한다.

##4

 주석은 다음과 같이 표현
