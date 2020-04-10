import React ,{Component} from 'react';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]

class User extends Component{
    render(){
        const {user} = this.props
        return(
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
            </div>
        )
    }
}

class List extends Component {
    render () {
        return(
            <div>
                { users.map((user,i) => <User key={i} user={user} />)}
                {/* 如果你的数据顺序可能发生变化，
                标准做法是最好是后台数据返回的 id 作为列表元素的 key 
                上面的key是掩耳盗铃的做法*/}
            </div>
        )
}
}

export default List;