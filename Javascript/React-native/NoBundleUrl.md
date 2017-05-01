# no bundle url present

                jsCodeLocation =
                            [NSURL URLWithString:@"http://127.0.0.1:8081/index.ios.bundle?platform=ios&dev=true"];

IOS APP의 AppDelegate.m 파일에서 jsCodeLocation을 위와같이 고쳐준다.
실제 기기에서 테스트할 경우 데스크탑의 ip주소를 입력한다.
