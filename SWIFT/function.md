###Method

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

외부변수명을 설정하지 않으려 한다면 언더바 _ 를 파라미터안에 쓰면 된다. 첫번째 파라미터는 디폴트로 언더바가 생략된다.
굳이 언더바를 첫번째에 표시하지 않아도 외부변수명을 생략할 수 있다. 하지만 2번째에는 변수명 생략을 하지 않는 것이 좋다.
