# WHERE IN

                SELECT * FROM TABLE WHERE state IN (1, 2 ,3)
                
or
                
                SELECT * FROM TABLE WHERE state NOT IN( 2, 3 )


# WHERE IN SUBQUERY는 피하자

WHERE IN SUBQUERY는 종속성때문에 문제가 크다.

[IN SUBQUERY 성능에 대한 글](http://jason-heo.github.io/mysql/2014/05/22/avoid-mysql-in.html)

## IN subquery의 회피 방법

IN ()은 INNER JOIN 혹은 EXISTS로 변환 가능하다.
NOT IN()은 LEFT OUTER JOIN 혹은 NOT EXISTS로 변환가능하다

                
                 