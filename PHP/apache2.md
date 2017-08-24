# /etc/apache2

다음은 아파치에서 서버 설정 시 참고할 만한 내용이다.

                /etc/apache2/sites-available
서버에서 운영할 사이트의 설정파일이다.

                /etc/apache2/sites-enabled
/etc/apache2/sites-available에서 설정한 파일을 심볼릭 링크로 추가하여 실제 운영에 사용할 설정파일들이다.

                sudo service apache2 restart

위의 명령어로 available에 설정된 정보를 enabled에 덮어쓰기한다.




