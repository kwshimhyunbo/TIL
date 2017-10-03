# Array function

## filter
                var new_array = arr.filter(callback(element, index, array))
조건에 대한 결과를 리턴한다. 결과에 대해 조작할 순 없는 대신, 자유롭게 조건을 변화시킬 수 있다.

### 인수

1.  요소값
    arr의 모든 원소들을 순회할 때 이 값으로 참조한다.

2.  요소 인덱스
3.  순회(traverse)되는 배열 객체
    arr과 같다.

### Example

var test2 = users.filter(function(user, index, object){
return user.id > 3;
})

console.log(test2);
