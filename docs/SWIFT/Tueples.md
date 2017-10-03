# 튜플

튜플은 스위프트의 타입중 하나로써 서로 다른 타입들을 하나로 묶어서 표현할 수 있다.

        let x: (String, Int, Double) = ("Hello", 5, 0.85)
        let (word, number, value) = x
        print(word) //"Hello"
        print(number) //5
        print(value) //0.85

다른 방식으로는 변수를 선언한 후 값을 가져올 수도 있다.

        let x: (w: String, i: Int, v: Double) = ("Hello", 5, 0.85)
        print(x.w) //"Hello"
        print(x.i) //5
        print(x.v) //0.85

튜플을 함수에서 사용하면 여러개의 값을 Return받을 수 있기때문에 유용하다.

        func getSize() -> (weight: Double, height: Double)
        {
          return (250, 80)
        }

        let x = getSize()
        print(x.weight) // 250
        print(x.height) // 80

*스위프트에서는 일부 값을 무시할 수 있다. 언더바를 사용한다면.*
