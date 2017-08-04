# Verify Facebook key

페이스북의 인증은

## AccessToken 얻기
페이스북에 앱이 등록되어 있다면 페이스북 로그인 후 개발자페이지에서 앱정보를 확인할 수 있다.

        https://developers.facebook.com

대시보드에 들어가면 App ID와 앱 시크릿 코드가 있는데 이 키를 가지고 클라이언트가 보내주는키가 유효한 키인지 검증할 수 있다.

        ex) AppID = '123456789'
        SecretCode = 'abcdefg'

키를 획득했다면 아래의 주소에 그대로 입력해주면 *AccessToken* 을 얻을 수 있다.

        https://graph.facebook.com/oauth/access_token?client_id={app-id}&client_secret={app-secret}&grant_type=client_credentials
        => *$facebook_apptoken*


## 인증하기
![출처: HSC](https://hsc.com/Portals/0/Screen%20Shot%202014-12-16%20at%2011_41_30%20AM.png)

### 1,2번과정
위의 사진으로 살펴보면 사용자는 Resource Server에서 페이스북 로그인을 하려고한다면 페이스북 로그인창으로 연결시켜준다. 그 화면부터 1, 2번과정이 진행이 되며
auth_key와 user_id 2가지를 얻을 수 있다.

### 3번과정
그다음 Resource Server에게 auth_key와 user_id를 주며 검증해보라고한다.

### 4번과정

이제 위에서 얻어낸 AccessToken과 방금 user에게 전달받은 auth_key를 가지고 실제 페이스북회원의 인증인지 확인할 수 있다.

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,
        "https://graph.facebook.com/debug_token?".
        "input_token=$auth_key&".
        "access_token=$facebook_apptoken"
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

auth_key를 가지고 페이스북 서버에 요청하여 response로 user_id를 확인한다.

### 5번과정
만약 user_id와 auth_key가 검증이 된다면 인증에 성공한다.
