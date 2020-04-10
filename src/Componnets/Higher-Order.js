import React,{ Component } from 'react'

function wrapWithLoadData (WraapedComponent, name) {
    class NewComponent extends Component{
        constructor(){
            super()
            this.state={data: null}
        }
        componentWillMount () {
            let data = localStorage.getItem(name)
            this.setState({ data })
          }
        render(){
            return(
                    <WraapedComponent data={this.state.data} />
            )
        }
    }
    return NewComponent
}

class InputWithUserName extends Component {
    render () {
      return <input value={this.props.data} />
    }
  }
  
  InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
  
  export default InputWithUserName