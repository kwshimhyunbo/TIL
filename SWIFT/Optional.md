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
