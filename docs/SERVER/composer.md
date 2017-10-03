# Composer

        apt-get install Composer

컴포저 설치 후 해당 폴더로 이동하여 composer.json을 확인한다.

        {
            "name": "jobs/job",
            "require": {
                "twig/twig": "~1.0",
                "kenjis/codeigniter-ss-twig": "dev-master",
                "twig/extensions": "^1.4"
            }
        }

이동했다면 다음 명령어를 입력한다.

        composer install         

자동으로 Vender폴더 하위에 위의 프로젝트들이 자동으로 로드된다.
