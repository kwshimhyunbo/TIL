#변수의 set, get
스위프트에서는 변수에 대해 set과 get을 사용하여 접근할 수 있다.

        @IBOutlet weak var display: UILabel!

        var display: Double {
          get{
            return Double(display.text!)!
          }
          set{
              display.text = String(newValue)
          }
        }

위처럼 display 값에 대해서 display를 호출할 때는 get부분이 실행되어 UILabel의 text부분을 더블형으로 바꾼 뒤 저장한다.

        var testValue = display; //testValue 변수에는 Double 변수가 저장됨.



set과 같은 경우에는 단순히 저장하듯이 저장하면 자동으로 셋팅된다. 다음의 행동은 set안의 코드를 들여다보면 알 수 있는데 display의 text 프로퍼티에 _newValue_, 즉 M_PI를 String으로 변환한 뒤 저장한다는 뜻이 된다. _newValue_ 는 새로 선언된 값이 아니라 스위프트에서 지정한 변수로 새로 입력되는 값을 의미한다.

        display = M_PI
