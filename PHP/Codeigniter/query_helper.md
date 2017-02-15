#Query_helper

모델쪽 작업을 하다보면 헬퍼의 도움을 받는것이 속편하다.
그 대표적인 케이스가 아래 세가지이다.

1.테이블에 원하는 데이터를 넣고 그 넣은 값의 기본키정보를 가져와야한다면 당장 이것을 사용하자.

        $insert_id = $this->db->insert_id() //데이터베이스에 레코드를 삽입할 때 아이디번호.

2.영향을 끼친값들을 알고싶을때에도 당장 이것도 사용하자.

        $affted_row = $this->db->affected_rows()

3.내가 도대체 무슨 쿼리를 날린건지 궁금할때에도 이것을 사용하자.

        $sql = $this->db->last_query()



[참고자료](http://www.ciboard.co.kr/user_guide/kr/database/helpers.html)
