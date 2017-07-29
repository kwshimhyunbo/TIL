# float

float의 left와 right로 원하는 대상을 좌측과 우측으로 밀어내어 배치할 수 있다.
        .myFloat{
          float: left;
          //or
          float: right;  
        }



# clear
하지만 여기서 이 이후에 적용되는 태그들은 float의 영향으로 제대로 위치의 배치가 올바르지 못하게 될 수 있는데
다음과 같은 표현으로 이를 해결할 수 있다.

.cfixed {
display:block;
content:"";
clear:both;
}

# after
일일이 명명해주기 귀찮다면, 가상선택자 after를 이용해 표현
.myFloat:after{
  display:block;
  content:"";
  clear:both;
}
