# MYSQL 서버 재설치

1) apt-get purge mysql-server

2) apt-get purge mysql-common

3)
    rm -rf /var/log/mysql
    
    rm -rf /var/log/mysql.*
    
    rm -rf /var/lib/mysql
    
    rm -rf /etc/mysql

4) apt-get install mysql-server (--fix-mssing) --fix-broken