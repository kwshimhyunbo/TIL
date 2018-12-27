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

C != flex-items (일반적인 요소


# flex 에서 사용할 수 있는 함수 몇가지

- justify-content (가로정렬)
- align-items (세로정렬)