import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class CommentApp extends Component{
    constructor(){
        super()
        this.state={
            comments: []
        }
    }
    // splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素

    componentWillMount(){
        this._loadComments()
    }
    _loadComments(){
        let comments = localStorage.getItem('comments')
        if(comments){
            comments = JSON.parse(comments)
            this.setState({
                comments
            })
        } 
    }
    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }
    handleSubmitComment(comment){
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({comments})
        this._saveComments(comments)
    }
    handleDeleteComment(index){
        console.log(index);// splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素
        var comments = this.state.comments
        comments.splice(index,1)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }

    render(){
        return(
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList
                 comments={this.state.comments}
                 onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )

    }
}

export default CommentApp;