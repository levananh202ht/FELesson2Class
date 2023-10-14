import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    onChangeInput = (event) => {
        const {value} = event.target;
        console.log(value);
        this.setState({
            value,
        })
    }

    handlekeyDown = (event) => {
        if(event.key === "Enter"){
            const {value} = this.state;
            const {addItem} = this.props;
            const newItem = {id: Math.random, name: value, status: false};
            addItem(newItem);
            this.setState({
                value: '',
            })
        }
    }

    render(){
        const {value} = this.state;
        return(
            <div className='input-header'>
                <input value = {value} onChange = {this.onChangeInput} onKeyDown={this.handlekeyDown}  />
            </div>
        )
    }
}
export default Header;