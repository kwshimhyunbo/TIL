# 그리드의 필요성

flex는 충분히 좋은 시스템이지만 아이템 사이의 간격을 표현하는것이 완벽하지는 않았다.

예를들어, space arround 라는 효과를 줄때 다음과 같이 표현되어 상식적이지 못한 방식으로 표현해버린다.

이를 개선하여 6 옆에 7을 바로 놓을 수 있도록 그리드가 표현해줄 수 있다.

#### FLEX
```
1 2 3 4 5
6       7
```

#### GRID
```
1 2 3 4 5
6 7
```

# 사용방법
```
display : grid
``` 

## functions
레이아웃을 짜는 방법으로 다음이 있다.
- grid-template-columns
- grid-template-rows
- grid-gap
- grid-auto-rows 
- grid-auto-columns 
- grid-auto-flows (열이 쌓이는 방향)

## grid-template-areas
레이아웃을 이름으로 구분하는 방법

각 class 마다 이름을 지정해서 구분 및 레이아웃할 수 있다.

```
    .father {
        display: grid;
        grid-auto-rows: 300px;
        grid-template-areas: "header header header" "content content sidebar" "content content sidebar" "footer footer footer";
        grid-gap: 5px;
    }

    .first {
        grid-area : header;
        background-color: #7056dc;
    }
    
```





