#substr

문자열 함수 substr

        string substr ( string $string , int $start [, int $length ] )

        substr(문자열, 시작위치, 끝위치(선택));

시작위치부터 끝위치까지 잘라내어 _반환_ 한다.

## Example

        $var = 'www.naver.com';
        $substring = substr($var, 4, 8);
        echo $substring; //naver

        $substring = substr($var, 4);
        echo $substring; //naver.com


[참고자료](http://php.net/manual/kr/function.substr.php)
