# Query Helper Methods

모델쪽 작업을 하다보면 헬퍼의 도움을 받는것이 속편하다.
그 대표적인 케이스가 아래 세가지이다.

1.테이블에 원하는 데이터를 넣고 그 넣은 값의 기본키정보를 가져와야한다면 당장 이것을 사용하자.

        $insert_id = $this->db->insert_id() //데이터베이스에 레코드를 삽입할 때 아이디번호.

2.영향을 끼친값들을 알고싶을때에도 당장 이것도 사용하자.

        $affted_row = $this->db->affected_rows()

3.내가 도대체 무슨 쿼리를 날린건지 궁금할때에도 이것을 사용하자.

        $sql = $this->db->last_query()

4.전체 카운트를 가져올때는 count_all_results를 이용하자. bad case의 경우에는 모든 레코드를 가져와 메모리에 등록한 뒤 데이터를 모두 순회하여 처리하게되지만 good case의 경우에는 메모리에 올리는 경우가 사라지게 되니 첫째로, 메모리낭비를 줄일 수 있다. 또한 bad case의 경우를 과장되게 생각해보자면 데이터가 10만건 이상이라면 모두다 가져온뒤 카운트만 세고 버려질텐데 이것은 낭비가 아니겠는가. good case를 익히도록 노력하자.

        //bad
        $count = count($this->db->get()->result());

        //good
        $count = $this->db->count_all_results();




[참고자료](http://www.ciboard.co.kr/user_guide/kr/database/helpers.html)
