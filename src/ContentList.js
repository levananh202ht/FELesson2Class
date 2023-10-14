import React from 'react';

import ListItem from './ListItem';

class ContentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
        }
    }
    deleteItem = (idItem) => {
        const newTodo = this.state.todolist
        newTodo = newTodo.filter((data) => {
          return data.id !== idItem
        })
        this.state({
          todolist:newTodo
        })
      }
    render(){
        const {todolist} = this.props;     
        return (
            <div className='main-content'>
                {
                    todolist.map((item) => {
                        return (
                            <div>
                                <ListItem data = {item} deleteItem = {this.deleteItem} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
export default ContentList;