# props
정적인 변수를 만들때 사용
미리 변수들을 지정하여 유지보수를 편리하게 할 수 있다.


        class Codelab extends React.Component{
          render(){
            return (

              <div>
                <h1>Hello. {this.props.name}</h1>
                <h2>{this.props.number} </h2>
                <div>{this.props.children}</div>
              </div>

            );
          }
        }

Codelab이라는 클래스로 넣고자하는 데이터들의 틀을 잡아준다.


        Codelab.propTypes = {
          name: React.PropTypes.string,
          number:React.PropTypes.number.isRequired
        }

        Codelab.defaultProps ={
          name :'Unknown'
        }

Props의 핵심적인 부분으로 미리 name, number들의 설정들을 셋팅한다.



        class App extends React.Component{
          render(){
            return (<Codelab name={this.props.name} number = {this.props.number}> {this.props.children} </Codelab>);
          }
        }
        ReactDOM.render(<App number={5}>I am your child </App>, document.getElementById('root'));
