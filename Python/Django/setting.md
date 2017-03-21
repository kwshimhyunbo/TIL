#Django 첫 페이지를 향한 큰그림

pyenv : "Simple Python Version Management", 로컬에 다양한 파이썬 버전을 설치하고 사용할 수 있도록 한다. pyenv를 사용함으로써 파이썬 버전에 대한 의존성을 해결할 수 있다.
virtualenv : “Virtual Python Environment builder”, 로컬에 다양한 파이썬 환경을 구축하고 사용할 수 있도록 한다. 일반적으로 Python Packages라고 부르는 ( pip install을 통해서 설치하는 ) 패키지들에 대한 의존성을 해결할 수 있다.
[출처](https://dobest.io/how-to-set-python-dev-env/)

#python 설치하기

        https://www.python.org/downloads/

#pyenv 설치하기

        $ brew update  
        $ brew install pyenv  
        $ echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bash_profile  

## pyenv 설치 가능한 리스트 확인

        $ pyenv install --list
        Available versions:
        2.1.3
        ..
        3.5.2
        3.5.3
        3.6.0
        3.6-dev
        3.7-dev
        ..
        stackless-3.4.2

## pyenv로 설치하기

        pyenv install 3.5.2


## pyenv 작업 버전확인

        $ pyenv version
        3.5.2 (set by /Users/Admin/.pyenv/version)

        $ pyenv versions
          system
        * 3.5.2 (set by /Users/Admin/.pyenv/version)
          3.5.2/envs/local
          3.5.2/envs/my-virtual-env-3.5.2
          local
          my-virtual-env-3.5.2

#virtualenv 설치하기

        $ brew install pyenv-virtualenv  
        $ echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bash_profile  

## virtualenv 환경셋팅하기

        $ pyenv virtualenv 3.5.2 local

## virtualenv로 환경 변경하기

        $ pyenv shell local
        (local) Adminui-MacBook-Pro:python adslbna2$

만약 shell cmd가 안먹힌다면

        if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi

##프로젝트 만들기

        django-admin startproject mysite

자동으로 mysite프로젝트를 만들어 기본 뼈대를 만들어준다. 이제 내부에 있는 settings.py에 서버환경을 변경한 후 다음 명령을 실행한다.

        python manage.py runserver
        (local) Adminui-MacBook-Pro:mysite adslbna2$ python manage.py runserver
        Performing system checks...

        System check identified no issues (0 silenced).

        You have 13 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
        Run 'python manage.py migrate' to apply them.

        March 22, 2017 - 03:09:38
        Django version 1.10, using settings 'mysite.settings'
        Starting development server at http://127.0.0.1:8000/
        Quit the server with CONTROL-C.

완료
