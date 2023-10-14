import React, { useState } from 'react';

import './App.css';

import Header from './Header';
import ContentList from './ContentList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [
        {id: 1, name: "Cong viec 1", status: false},
        {id: 2, name: "Cong viec 2", status: true},
        {id: 3, name: "Cong viec 3", status: false},
        {id: 4, name: "Cong viec 4", status: false}
      ]
    };
  }
  addItem = (newItem) => {


    const {todolist} = this.state;
    const newTodolist = [newItem, ...todolist]; 
    this.setState({
      todolist: newTodolist,
    });
    const setTodolist = JSON.stringify(newTodolist)
    localStorage.setItem('name', setTodolist)
    return newTodolist
  }
  setItem = () => {
    const setItem = JSON.parse(localStorage.getItem('name'))
    const [] = useState(setItem);
  }


  render(){
    const {todolist} = this.state;
    return (
      <div className='container'>
        <h1>todos</h1>
        <div className='content'>
          <Header addItem = {this.addItem} />
          <ContentList todolist = {todolist} />
          <div className='footer'>footer</div>
        </div>
      </div>
    );
  }
}

export default App;
