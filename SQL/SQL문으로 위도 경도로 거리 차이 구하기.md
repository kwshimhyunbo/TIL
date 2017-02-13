#SQL문으로 위도 경도로 거리 차이 구하기

lat, lng 값이 있을 때 현재위치 기반으로 거리차이를 구하고자 한다면 다음과 같은 쿼리로 간단하게 구할 수 있다.

    my_lat = 37.5027771313;
    my_lng = 127.0973375681;

    SELECT seq,
    (6371 * acos(cos(radians(address_lat)) * cos(radians(**my_lat**)) * cos(radians(**my_lng**)
    -radians(address_lng))+sin(radians(address_lat)) * sin(radians(**my_lat**)))) AS distance
    FROM *테이블명*
    HAVING distance IS NOT NULL
    ORDER BY distance


테이블에 address_lat와 address_lng로 위도와 경도라는 컬럼이 있다면 위와같은 쿼리로 km 단위의 거리차이를 알 수 있다.




[참고][https://www.google.co.kr/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwij2puwuY3SAhWHp5QKHRj5Ai8QFggkMAE&url=http%3A%2F%2Fwww.php5.me%2Fblog%2Fmysql-%25EC%259C%2584%25EB%258F%2584-%25EA%25B2%25BD%25EB%258F%2584-%25ED%2599%259C%25EC%259A%25A9%25ED%2595%259C-%25EC%25A2%258C%25ED%2591%259C%25EA%25B0%2584%25EC%259D%2598-%25EA%25B1%25B0%25EB%25A6%25AC-%25EA%25B5%25AC%25ED%2595%2598%25EB%258A%2594%25EB%25B2%2595-lng-lat-%25EA%25B0%2580%25EC%25A7%2580%25EA%25B3%25A0%2F&usg=AFQjCNGEXaQM3USI66-9tmtY-fF9i3xcIw&sig2=J_JerfnCrTfD84WV1CcRMw]
