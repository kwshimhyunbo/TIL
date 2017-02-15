#[API]Cursor에 대해서

코딩을 하다보면 정렬에 대해 많은 고민을 하게 된다.
해당언어의 STL을 쓸수도 있고 혹은 SQL쿼리상의 ORDER_BY로 단순하게 정렬하여 처리할 수 있다.
그리고 클라이언트에게 API로 대상을 넘겨줄 때 2개 이상의 조건을 정렬하고 cursor값을 정리하고 보내야 한다면 어떻게 해야할까?

        $this->db->SELECT('distance, seq');
        $this->db->FROM("TABLE");
        $this->db->WHERE("distance <= {$distance}");

위처럼 한단계의 단순한 쿼리로 데이터를 뽑아온 뒤 아래와 같은 방법으로 처리할 수 있다.

        if ($cursor) {
            $this->db->limit(++$limit, $cursor); //cursor처리가 시작되면서 진행되는 분기
        } else {
           $this->db->limit(++$limit); //처음에 요청 진행시 cursor에 대한 정보가 없으므로 이쪽으로 분기
       }

위의 코드의 포인트는 cursor를 기억해둔 곳 이후 데이터를 limit만큼 가져온다.
기존 limit보다 ++$limit, 즉 1개더 가져오는데 다음데이터를 가져오는 포인트를 정하기 위함이다.

       $infos = $this->db->get()->result(); //데이터를 가져오고 나서 다음포인트를 정한다.
        if (count($infos) < $limit) {
          $cursor_next = null;//가져올 포인트보다 limit가 적다면 다음의 next_cursor는 존재할 수 없으므로 null
        } else {
          array_pop($infos);  //1개더 가져온만큼 포인트를 잡았으니 1개를 pop시켜버림으로써 본래의 limit개수를 회복한다.
        	$cursor_next =$cursor + count($infos);
        }

마지막 줄인 $cursor_next에 할당되는 처리가 관건인데, cursor로 이전포인트까지 잡힌곳을 체크하고 추가적으로 infos에 잡힌 데이터를 더해줌으로써 다음 데이터가 어디서부터 시작인지를 $cursor_next에 저장함으로써
cursor를 이어나간다.
