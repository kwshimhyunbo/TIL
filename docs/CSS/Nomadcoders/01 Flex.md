# Flex 

블럭과의 관계를 유기적으로 관리할 수 있다. 
자동으로 블럭과의 관계를 잡아준다.


다음과 같이 선언

```
{
    display : flex
}
```

# Flex-container, Flex-items



컨테이너와 아이템은 종속적인 관계를 가진다.

flex container 이하에 1 Depth 이하에 있는 것들은 flex items라 칭한다.

하지만 2 depth의 아이템은 flex의 아이템이 아니다.

예를 들면 다음과 같다.

```
<div class= "A">
    <div class= "B">
        <div class= "C">
        </div>
    </div>
</div> 
```

A = flex-contatiner

B = flex-items

C != flex-items (일반적인 요소)


# flex 에서 사용할 수 있는 함수 몇가지

- justify-content (가로정렬)
- align-items (세로정렬)

# Axis

축은 기본적으로 2가지가 있다.

- main axis
- cross axis

main axis 는 justify-content를 따르고 cross axis는 align-items를 따른다.
default로 flex 는 direction이 row 로 방향을 잡고 있기 때문에 가로로 아이템들이 배치된다.

```
{
    flex-direction : row; //default,  main axis > 수평
}
```

```
{
    flex-direction : column; //cross axis > 수직
}
```


# Flex-wrap
속성
- wrap
- nowrap (default)

아이템의 컨텐츠가 표현되는 영역을 벗어날 경우에 어떠한 형식으로 보여줄 지에 대해서 결정하는 속성이다.

nowrap 일 경우 최대한 압축해서 그 행에 모든걸 보여주지만, wrap일 경우 컨텐츠를 최대한 확보해서 보여준다.
