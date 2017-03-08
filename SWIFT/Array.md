#Array

        var a = Array<String>()
        var a = [String]()

위와같은 방식으로 빈 Array를 선언할 수 있다.

        let animals = ["aaa", "bbb", "ccc"]

위의 경우도 특별히 Type을 선언하지 않아도 된다. 모두 String이기때문에 Swift는 추론하여 String Array임을 추론한다.

##Array의 열거

        for animal in animals {
          print(animal)
        }
