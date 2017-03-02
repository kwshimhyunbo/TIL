#옵셔널

        var count: UIImage?

위와 같이 물음표가 붙은 변수를 옵셔널 변수라고 한다. 옵셔널 변수는 아무것도 정의되지 않은 상태로, 프로그래밍에서 흔히 null인 상태를 의미한다. 하지만 스위프트에서는 nil이라는 선언으로 null과 같은 효과를 내는 변수를 사용한다.

        var count: Int?
        count = 3

#Optional is just an enum
옵셔널은 단순히 enum으로 생각하고 이해하자.

        enum Optional<T> {
          case None
          case Some(T)
        }
간단하게 예제로 살펴보자.
##첫번째

        let x: String? = nil

let x라는 상수에 Optional String을 붙여준다는 것은 다음과 같다.

        let x = Optional<String>.None

상수 x에는 옵셔널의 Switch문을 타게 되는데 할당되는 nil은 아무것도 없는 값이기 때문에 None으로 빠지게 된다.

##두번째

        let x: String? = "hello"

상수 x에 Optional String으로 "Hello" 문자열을 붙여준다는 의미는 역시 Switch문을 타게된다.

        let x = Optional<String>.Some("Hello")

정확하게 같은 의미가 된다.

##세번째

        let y = x!

상수 y에 x의 값을 !로 강제한다는 것은 Switch문을 타게되는데

        swtch x {
          case Some(let value): y = value
          case None : //crash
        }

위처럼 x가 가지고 있는 값을 추출해서 Switch문을 돌게한 다음 x의 값인 value를 y에 할당하는 형태로 진행될 것이다. 만약 x의 값이 None이 될것이다. 할당되지 않은 값을 할당하게 된다면 에러를 낼 것이니까.

## 네번째
###Optional Binding

변수에 nil 인지 아닌지를 판단할 수 있는 구문이 바로 Optional Binding이다.

        if let y = x {
            print(y)
        }

만약 x의 값이 nil 이 아니라면(할당된 값이 있다면), y에 할당하고 y를 print 하자. 라는 뜻으로 해석할 수 있겠다.
만약에 값이 할당되지 않은 nil이라면 if문을 무시하고 지나갔을 것이다.

###Optional Chaining

        var display: UILabel?
        if let label = display {
          if let text = label.text {
             let x = text.hashValue
          }
        }

위의 구문을 해석해보면 display가 nill이 아니면 label에 저장하고, label의 text가 nil이 아니면 text에 저장하고 text.hashValue를 x에 저장한다. 쯤으로 이해할 수 있다. 하지만 여기서 OptionalChaining을 사용하면 훨씬 더 간단하게 구문을 정리할 수 있다.

        if let x = display?.text?.hashValue;

### Optional Defaulting

        let s: String? = ...
        if s != nil {
          display.text = s
        } else {
          display.text = ""
        }

위의 문장도 해석해보면 s는 Optional String 인데 s가 nil이 아니면 display.text에 s를 할당하고 그렇지 않으면 ""를 할당한다.
하지만 이 구문도 간단하게 줄일 수 있다.

        display.text = s ?? ""

s가 nil이 아니라면 값을 추출해 저장할 것이고 nil이면 ""를 사용하겠다는 것이다.

##다섯번째

        let optionalEmail: String? = "adslbna2@naver.com"
        let requiredEmail: String = optionalEmail // 컴파일 에러!

위의 구문을 보면 OptionalString인 OptionalEmail에 값이 저장이 되었다. 정확하게 String이 저장되었지만 애초에 OptionalString으로 선언되었기때문에 nil 일수 있는 여지를 둔것이다. 하지만 밑의 requiredEmail에서는 꼭 값을 가지고 있어야하는 String타입이기 때문에 이것은 Swift에서 구문에러로 표시된다. [예제 출처](https://devxoul.gitbooks.io/ios-with-swift-in-40-hours/content/Chapter-2/optionals.html)
