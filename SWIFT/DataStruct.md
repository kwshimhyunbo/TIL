#DataStruct
##Class, Struct, enum

세개 자료구조 모두 프로퍼티, 함수를 가질 수 있다. 다만 enum은 저장 프로퍼티는 가질 수 없다. 또한 초기화 함수도 가질 수 있지만 enum은 초기화함수를 가질 필요가 없다.
값을 구분하는 역할만 한다.

###Class

        class Calculator
        {

        }

다른 자료구조와 다르게 가장 큰 특징은 상속이 있다. 또,다른자료구조들은 값복사에 의한 전달을 사용하는 한편,  Class는 레퍼런스 타입이라 모든 값에 대한 전달을 참조에 의한 전달로 수행하여 메모리 주소값을 전달한다. (힙 메모리)

###Struct, enum        

        struct Vertex
        {

        }

        enum Op
        {

        }

모든 값을 할당할때에는 값복사가 일어난다.

        let x = y

위처럼 간단한 구조의 형태를 확인해보면 y의 값을 복사하여 그대로 x에 전달하는 방식이다.

        var array = [1, 2]
        let x = array

위의 경우도 살펴보면 x는 let타입인데 array를 할당하면 더이상 x라는 Array는 바꿀 수 없다.        

*구조체의 값을 변경하는 함수가 있을 경우 mutating을 붙여서 Swift에 알려줘야 한다.*
