# PHP path 설정

MAMP 설정에서 사용하고 싶은 php 버전을 선택하고 cli로 해당 php에 여러 extention을 붙이고 싶을때
cli의 path 설정은 불가피하다. 그래서 다음과 같이 설정 후 사용해야 함.

export PATH = "MAMP가 설치된 해당 PHP 버전 bin폴더":$PATH

# Example
                export PATH=/Applications/MAMP/bin/php/php5.5.38/bin:$PATH
