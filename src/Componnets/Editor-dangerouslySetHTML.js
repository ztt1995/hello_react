import React,{Component} from 'react'

class Editor extends Component{
    constructor(){
        super()
        this.state={
            content:'<h1 >React.js 小书</h1>'
        }
    }
    render(){
        return(
            <div>
                <div dangerouslySetInnerHTML={{__html:this.state.content}}>
                </div>
                <h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>
            </div>
       )
    }
}

export default Editor;