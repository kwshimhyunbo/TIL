#Function
##Method
        func foo(externalFirst first: Int, externalSecond second: Double){
          var sum = 0.0
          for _ in 0..<first {
            sum+=second
          }
        }
        func bar(){
          let result = foo(123, externalSecond: 5.5)
        }

swift에서는 함수의 파라미터안에 외부변수명과 내부변수명이 함께 선언된다. externalFirst, externalSecond는 외부변수명으로 호출할 때 쓰인다. 이와 반대로 first와 second는 내부변수명으로 내부에서만 쓰인다.

        foo(_ 123, externalSecond 5.5)
        foo(123, externalSecond 5.5)

외부변수명을 설정하지 않으려 한다면 언더바 _ 를 파라미터안에 쓰면 된다.
<!-- 첫번째 파라미터는 디폴트로 언더바가 생략된다. -->
<!-- 굳이 언더바를 첫번째에 표시하지 않아도 외부변수명을 생략할 수 있다. 하지만 2번째에는 변수명 생략을 하지 않는 것이 좋다. -->

*Playground에서 테스트한 결과 첫번째 변수명을 생략하거나 언더바로해도 에러메시지가 표시된다. 이 부분은 다시 확인해봐야 할 듯 하다.*

1. var와 func의 키워드로 선언된 것들은 override할 수 있다.
2. 프로퍼티와 메소드를 final 키워드를 표시함으로써 서브 클래싱(하위클래스에서 오버라이드 등을 통해 수정하는 것)을 막을 수 있다.
3. 타입과 인스턴스 모두 프로퍼티와 메소드를 가질 수 있다.

###example

        var d: Double = 123.0
        if d.isSignMinus {
          d = Double.abs(d)
        }

위의 상황에서 호출되는 Double 클래스의 abs 메소드는 아래와 같이 정의되어 있을 것이다.

        static func abs(d: Double) -> Double


##Properties
###willSet, didSet
willSet, didSet은 값이 초기화되는 시점을 기준으로 전(willSet), 후(didSet)로 어떠한 행동을 취할 수 있습니다.

        var testValue: Int = 10 {
          didSet(old){
              //바뀌기전의 old값을 할당할 수 있다.
          }

          willSet(new){
              //바뀐후의 new 값을 할당할 수 있다.
          }
        }

####Example
        var test  = 1
        var testValue: Int = 0 {
            didSet(old){
                test = old
            }
        }
        testValue = 100       //100
        print(test) // 1

100으로 초기화 되기전의 값이 1이므로 test에 1을 초기화 시킨다.
