#PHP 표준 권고

PHP를 사용하면 참고할만한 표준 권고안이 있다.
표준 코딩스타일을 준수하며 코딩하는 것도 나름 쏠쏠한 재미가 있으니 참고하도록 하자.
모든 내용이 담긴 것은 아니고 내가 참고하는 자료들만 정리한다. 자세한 내용은 참고 링크를 참조할 것.
## PSR-1 BASE CODING STANDARD
###1. 클래스이름의 첫글자는 대문자로 작성할 것
이것은 꼭 지켜주는 것이 좋다. Codeigniter같은 경우에 컨트롤러 클래스를 인식하지 못하는 경우가 있다.

        class Recruit
        {

        }

###2. 클래스내 상수는 반드시 모두 대문자로 작성하고 구분자로 _ 를 사용할 것
내부 변수를 대문자로 설정해 놓으면 코드가 뒤엉킨 곳에서 발견하기 쉽다. IDE가 눈에 띄게 표시해주기 때문에.

        class Recruit
        {
          const MAX_COUNT = '1000';
          const VERSION = '1.0';
        }

## PSR-2 Coding Style Guide
###3. 닫는 태그(?>) 는 사용하지 않음
이것은 이해하기 싫다. 왜 연것을 닫지 않는 것인지 1도 모르겠다.

###4. 클래스 구문의 여는 괄호는 다음 줄에 사용하고 닫는 괄호는 본문 다음 줄에 사용할 것

        //Bad
        class Recruit {

        }

        //Good
        class Recruit
        {

        }

###5. 메소드 구문의 여는 괄호는 다음 줄에 사용하고 닫는 괄호는 본문 다음 줄에 사용할 것

        //Bad
        class Recruit
        {
          public function method() {

          }
        }

        //Good
        class Recruit
        {
          public function method()
          {

          }
        }

###6-1. if 나 elseif 같은 제어 관련 구문은 제어문 뒤에 한 개의 공백을 두고 그 후에 괄호를 사용하고 조건문을 기술할 것. 함수 호출이나 메소드 호출은 메소드명 뒤에 공백이 있으면 안 됨,
###6-2. if 나 elseif 같은 제어 관련 구문의 여는 괄호는 제어문과 같은 줄에 위치해야 함. 닫는 괄호는 본문의 다음 줄에 위치

        class Foo extends Bar implements FooInterface
        {
          public function sampleFunction($a, $b = null)
          {
            if ($a === $b) {
                bar();
            } elseif ($a > $b) {
                $foo->bar($arg1);
            }
          }
        }

[참고자료](https://www.lesstif.com/pages/viewpage.action?pageId=24445325)
