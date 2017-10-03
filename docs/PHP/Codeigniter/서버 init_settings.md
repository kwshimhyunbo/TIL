# vagrant 설치 후 첫 서버셋팅

    sudo apt-get lamp-server^

서버 개발환경을 모두 설치한다.

# 아파치 설정


//Overwrite cli

<Directory /var/www>
  Options Indexes FollowSymLinks
  AllowOverride All
</Directory>

## Options: Composer 의존성 설치

  //루트폴더 이동
  composer install

  
