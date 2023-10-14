import React from 'react';

class ListItem extends React.Component {
    constructor(props){
        super(props);
    }
    deleteItem = (id) => {
        this.props.deleteItem(id)
    }
    render(){
        const {data} = this.props;
        return (
    
            <div key={data.id}>
                <h1>{data.name} </h1>
                <span onClick = {() => this.deleteItem(data.id) }>X</span>
            </div>
        );
    }
}
export default ListItem;