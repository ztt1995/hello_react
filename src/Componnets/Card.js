import React ,{Component} from 'react';


class Card extends Component{

    render(){
        // console.log(this.props.children.props.children);
        return (
            // <ol>
            //     {
            //         React.Children.map(this.props.children,function(child,i){
            //             if(i==2)
            //                 return <li>{child}</li>
            //             else
            //                 return null
            //         })
            //     }
            // </ol>
            // <div>
            //     {this.props.children[0]}
            // </div>
            <div className='two-cols-layout'>
            <div className='sidebar'>
              {this.props.children[0]}
            </div>
            <div className='main'>
              {this.props.children[1]}
            </div>
          </div>
            
        )
    }
}

class Index extends Component{
    render(){
        return(
            <Card>
                <div><h2>1 React.js 小书</h2></div>
                 <div>开源、免费、专业、简单</div>
                <div>订阅：<input /></div>
              
              {/* <div>
                <h2>2 React.js 小书</h2>
                 <div>开源、免费、专业、简单</div>
                订阅：<input />
              </div>
              <div>
                <h2>3 React.js 小书</h2>
                 <div>开源、免费、专业、简单</div>
                订阅：<input />
              </div> */}
            </Card>
        )
    }
}

export default Index;