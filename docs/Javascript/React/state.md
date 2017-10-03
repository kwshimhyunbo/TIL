# State
동적인 변수를 만들때 사용

간단히 생각하자면 미리 셋팅된 컴포넌트 데이터를 바꿀 수 있다.

*수정시에는 this.setState({}) 를 렌더링 후 변경해야 할 것.*

        class Counter extends React.Component {
          render() {
            return (
                <div>
                  <h2>{this.state.value} </h2>
                  <button onClick={this.handeClick}>ClickMe</button>
                </div>
            )
          }
        }

표현하고자하는 정보를 랜더를 통해 표현한다.

        constructor(props){
          super(props);
          this.state= {
            value : 0
          }
          this.handleClick = this.handleClick.bind(this)
        }

생성자를 통해 처음의 value setting을 0으로 설정하고 클릭핸들러를 생성한다.

        handleClick(){
          this.setState({
            value:this.state.value +1
          })
        }

핸들러는 setState를 이용해서 값들을 변경해준다.

class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);
