import React ,{Component} from 'react';
// import ReactDOM from 'react-dom';

class LikeButton extends Component{
    static defaultProps = {
      likedText: '取消',
      unlikedText: '点赞'
    }
    constructor(props){
      super(props)
      this.state={
        isLiked:false
      }
    }
  
    handleClickOnLikeButton(e){
     this.setState({
       isLiked : !this.state.isLiked
     })
     if(this.props.onClick){
       this.props.onClick();
     }
    }
    render(){
      // const worings = this.props.worings ||{
      //   likedText:'点赞',
      //   unlikedText:'取消'
      // }
      return(
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? this.props.likedText : this.props.unlikedText} 👍
        </button>
      )
    }
  }
  
  class Index extends Component{
    constructor () {
      super()
      this.state = {
        likedText: '已赞',
        unlikedText: '赞'
      }
    }
  
    handleClickOnChange () {
      this.setState({
        likedText: '取消',
        unlikedText: '点赞'
      })
    }
    render(){
      return(
        <div>
         <LikeButton 
         likedText={this.state.likedText} unlikedText={this.state.unlikedText}/>
        <button onClick={this.handleClickOnChange.bind(this)}>修改 wordings</button>
      </div>
      )
    }
  }

export default  Index;