import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    
    render() {
        console.log('render TodoItem 子組件2');
        const { content, text }= this.props;
        return (
            <div onClick={ this.handleClick }>   
                TodoItem子組件：              
                {/* {this.props.content} */}
                { text } - { content }
            </div>          
        )
    }

    componentWillReceiveProps(){
		console.log('生命週期 (子組件將變更) componentWillReceiveProps')
    }
    componentWillUnmount(){
		console.log('生命週期 (子組件將剔除) componentWillUnmount')
    }
    handleClick(){
        // alert('點擊');
        // alert(this.props.index);
        // this.props.deleteItem(this.props.index)
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    // content: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}

TodoItem.defaultProps = {
    text: 'Hello 預設值驗證',
};
  
export default TodoItem;