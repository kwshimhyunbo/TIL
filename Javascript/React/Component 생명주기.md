# React 컴포넌트 생명주기

## Mount

1. state, context, defaultProps 저장
2. componentWillMount
3. render
3. componentDidMount

처음 실행될 때를 마운트라고 칭하고 시작되면 state, context, defaultProps를 셋팅한다.
순서대로 2,3,4번이 따르지만 주의할 점이 있다면 componentWillMount중에는 props와 state는 Mount중이기때문에 변경하면 안된다.

## Props Update

1. componentWillRecieveProps
2. shouldComponentUpdate
3. componentWillUpdate
4. render
5. componentDidUpdate

마운트와 비슷하지만 새롭게 1,2번 과정이 추가된다. 이 과정은 업데이트가 추가되었기때문에 componentWillRecieveProps과정을 통해 수정사항을 감지한다.    

## State Update

1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate

Props 업데이트와 동일하다.

## Unmount

1. componentWillUnmount


[출처](https://www.zerocho.com/category/React/post/579b5ec26958781500ed9955)
