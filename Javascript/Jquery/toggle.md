# toggle

                <span class="btn btn-default glyphicon glyphicon-chevron-down right_btn chart_Btn" id="chart_btn"  aria-hidden="true"> </span>
                <span class="btn btn-default glyphicon glyphicon-chevron-up right_btn chart_Btn" id="chart_btn"  aria-hidden="true" style="display:none"> </span>

span 을 2개를 만든다. 하나를 보여주고 나머지 하나는 보여주지 않는다.
jQuery 내에서는 span 구분할 수 있는 keyword로 span 잡은 뒤 toggle을 실행.

                $(function(){
                    $('button').click(function(){
                        $('span').toggle();
                    });
