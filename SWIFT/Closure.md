#Function의 활용
        func helloMachine(msg: String) -> (String, String) -> String{
            func hello(first: String, second: String) -> String{
                return first + second + msg
            }
            return hello
        }

        let hi = helloMachine(msg: " 안녕, 안녕, 안녕")
        hi("현보", "심")

위처럼 함수안에 함수를 만들 수 있다. helloMachine은 String을 받아 hello라는 func를 반환하는데, 그 반환하는 함수는 String 두개를 받아 String을 반환하는 형식으로 표현할 수 있다.

#클로저

클로저는 {()}로 이뤄진 익명함수로 코드블럭을 의미한다. 따로 함수명을 정의할 필요가 없으며 함수를 보다 간결하게 표현하여 가독성을 높일 수 있는 효과가 있다.
위의 Function활용 예제를 줄여보자.
### 1단계

        func helloMachine(msg: String) -> (String, String) -> String{
            return { (first: String, second: String) -> String in  *<--in 삽입*
                return first + second + msg
            }
        }
어차피 내부 func를 반환할 것이 분명하므로 hello이름을 생략하고 그대로 return 해줄 수 있도록 표현할 수 있다.

### 2단계

        func helloMachine(msg: String) -> (String, String) -> String{
            return { first, second in
                return first + second + msg
            }
        }
사실 helloMachine은 선언부에 String 두개가 있다는 것을 추론할 수 있다. 그러므로 내부 function인 hello의 String 표시는 해줄 필요가 없다.

### 3단계

        func helloMachine(msg: String) -> (String, String) -> String{
            return {
                return $1 + $2+ msg
            }
        }

첫번째와 두번째 파라미터는 $1, $2로 생략이 가능하고,

### 4단계
        func helloMachine(msg: String) -> (String, String) -> String{
                return $1 + $2 + msg
        }
return은 생략을 할 수 있으므로 위와같이 간결한 형태로 만들어질 수 있다.

##변수처럼 사용하는 Closure

        let hello: (String, String) -> String = { $1 + $0 + "hi!" }

*만약 함수의 마지막 파라미터가 클로저라면, 괄호와 파라미터 이름마저 생략해버릴 수 있다.*


[참고자료](https://devxoul.gitbooks.io/ios-with-swift-in-40-hours/content/Chapter-3/functions-and-closures.html)
