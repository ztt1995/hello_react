import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }
    constructor(){
        super()
        this.state={
            timeString:''
        }
    }
    componentWillMount(){
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this),5000)
    }
    componentWillUnmount(){
        clearInterval(this._timer)
    }
    _updateTimeString(){
        const comment = this.props.comment
        // console.log(Date.now() , comment.createdTime);
        const duration = (Date.now() - comment.createdTime)/1000
        // console.log(duration);
        
        this.setState({
            timeString: duration>60
             ? `${Math.round(duration/60)}分钟前`
             : `${Math.round(Math.max(duration,1))}秒前`
        })
    }
    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }
    _getProcessedContent(content){
        //  \s 匹配空白字符 \S 匹配非空白字符
        // 有严重的XSS漏洞
        // return content.replace(/`([\S\s]+?)`/g,'<code>$1</code>') 
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    render(){
        const {comment} = this.props
            return(
                <div className='comment'>
                    <div className="comment-user">
                        <span className="comment-showuser">{comment.username}</span><span className="maohao">:</span>
                    </div>
                    <p className="comment-content"
                        dangerouslySetInnerHTML={{__html: this._getProcessedContent(comment.content)}} />
                    <span className='comment-createdtime'>
                        {this.state.timeString}
                    </span>
                    <span 
                      onClick={this.handleDeleteComment.bind(this)}
                      className='comment-delete'>
                        删除
                    </span>
                </div>
            )
    }
}
// Comment.propTypes  = {
//     comment: PropTypes.object
// };

export default Comment;

