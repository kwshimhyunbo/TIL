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
- grid-template-columns // fr possible
- grid-template-rows // fr
- grid-template-areas // 이름을 지정하여 구분

- grid-gap //컨텐츠 사이의 갭을정한다.

- grid-auto-rows // 기본적인 행의 높이 길이를 정한다.
- grid-auto-columns (거의 안씀.. 웹 컨텐츠들은 위에서 아래로 채워지면서 내려오기때문에 굳이 가로의 길이를 정해줄 필요가 없다.)

- grid-auto-flows // (열이 쌓이는 방향) 비워있는 곳을 채우기도 함 dense
- repeat (표현의 반복을 나타날 때 쓰인다)
- minmax // 최소로 잡아줄 크기를 지정

- min-content // 컨텐츠는 최소한의 공간을 차지하라
- max-content // 컨텐츠는 최대한의 공간을 차지하라

- auto-fit // 빈자리를 채울 때 까지 채운다.
- auto-fill // 기존의 레이아웃 그대로 고스트 그리드를 만들어 채운다.

- justify-content // 가로 정렬
- align-content // 세로 정렬
- place-content // 가로 세로 정렬

- justify-items // 컨텐츠의 아이템을 가로 정렬
- align-items // 컨텐츠의 아이템을 세로 정렬
- place-items // 컨텐츠의 아이템을 가로세로 정렬

- grid-column-start // 그리드의 셀들을 병합하는 시작라인번호 
- grid-column-end // 그리드의 셀들을 병합하는 끝 라인번호 
- grid-column // 그리드의 셀들을 병합을 start,end 동시에 입력가능

- grid-row-start // 그리드의 셀들을 병합하는 시작라인번호 
- grid-row-end // 그리드의 셀들을 병합하는 끝 라인번호 
- grid-row // 그리드의 셀들을 병합을 start,end 동시에 입력가능

- grid-area //영역을 row-start, column-start, row-end, column-end 로 간단하게 구분할 수 있음.
- justify-self, align-self, place-self // 가로 세로 정렬을 1개의 셀에만 적용시키는 방법

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

## 강력한 Responsive Web을 만드는 스킬 
```
    repeat(auto-fit, minmax(100px, 1fr))
```

## 그리드의 셀 병합 
 ```
    grid-column: 1/3
 ```

## 그리드의 span

grid-column-start, end 를 사용하면서 지정할 수 있지만 span을 이용하면 더욱 간단한 방법으로 표현이 가능하다.

```
    // box의 첫째셀로부터 세로로 3칸 가로로 2칸의 영역을 차지하라
    .box:first-child{ 
            grid-row: span 3;  
            grid-column: span 2;  
        }
```

```
    grid-area: 2 / 1 / 4 / -1 
```




