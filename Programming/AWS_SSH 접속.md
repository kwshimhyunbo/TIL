# AWS SSH 접속

        ssh -i "init.pem" '서버주소'

AWS는 별도의 pem 인증 파일과 함께 접속을 해야한다.
단, 위 명령이 실행되기전에는

        chmod 400 init.pem

*권한변경*도 잊지말고 해줄 것
