# 어쩌면 유용할 지 모르는 '$_SERVER'

## QUERY_STRING

        $_SERVER['QUERY_STRING']

        ex) http://localhost:8080/index.php?name=hyeonbo&phone=01058941111
        maybe it returns 'name=hyeonbo&phone=01058941111'

전체 URL에서 물음표 뒤의 매개변수 부분을 얻을 수 있다.

## PATH_INFO

        $_SERVER['PATH_INFO']

        ex) http://localhost:8080/auth/login
        maybe it returns '/login'

마지막 슬래시부터 URL 끝까지 이어지는 문자열을 리턴한다.
