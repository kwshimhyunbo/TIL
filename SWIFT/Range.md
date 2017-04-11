# Range
Range는 스위프트에서 시작부분의 인덱스와 끝부분의 인덱스, 두가지의 포인트를 가진다.

        struct Range<T> {
          var startIndex: T
          var endIndex: T
        }

기본적으로 배열의 Range는 Range<Int>지만 String의 subRange는 Range<Int>가 아니고, Range<String.Index>다. [보충필요]

        let array = ['a', 'b', 'c', 'd']
        let subArray1 = array[2..3] //['c', 'd']
        let subArray2 = array[2..<3] //['c']
        for i in 27...104 {
          print(i) // 27 ~ 104
        }
