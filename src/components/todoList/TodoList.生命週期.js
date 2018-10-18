import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoTest from './TodoTest';
import './index.css';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}
	componentWillMount(){
		console.log('生命週期 (掛載前) componentWillMount')
	}
	render() {
		console.log('render 父組件');
		return (
			<div className='todo-Box'>
				<label htmlFor='insertArea'>輸入內容</label>
				<input 
					id='insertArea'
					value={this.state.inputValue}
					onChange={this.handleInputChange}
					// ref={(input)=>{this.input = input}}
				/>
				<button onClick={this.handleBtnClick}>提交</button>
				<ul>
					{ this.getTodoItem() }
				</ul>
				<TodoTest content={this.state.inputValue}>
				</TodoTest>
			</div>
		);
  }

  	componentDidMount(){
		console.log('生命週期 (掛載後) componentDidMount')
	}	

	shouldComponentUpdate(){
		console.log('生命週期 (要變更嗎?) shouldComponentUpdate ')
		return true
	}

	componentWillUpdate(){
		console.log('生命週期 (更新前) componentWillUpdate')
	}

	componentDidUpdate(){
		console.log('生命週期 (更新後) componentDidUpdate')
	}

  	getTodoItem(){
		return this.state.list.map((item, index) => {
			return (
				// 父組件傳遞屬性跟方法給子組件	
				<TodoItem
					key={index}
					content={item}
					index={index}
					deleteItem={this.handleItemDelete}
				/>							
			)							
		})
	}

	// getTodoItem(){
	// 	return this.state.list.map((item, index) => {
	// 		return (
	// 			<li 
	// 				key={index} 
	// 				onClick={this.handleItemDelete.bind(this, index)}
	// 				dangerouslySetInnerHTML={{__html: item}}
	// 			>
	// 				{/* {item} */}
	// 			</li>									
	// 		)							
	// 	})
	// }

	// 輸入框
	// handleInputChange(e){
	// 	console.log(e.target);                  // <input value="Hello">
	// 	console.log(e.target.value);            // <input value="Hello">
	// 	this.state.inputValue = e.target.value  // 報錯
	// 	console.log(this)                       // undefined
	// 	console.log(this)                       // 用了bind(this)後,this就是TodoList
	// 	this.setState({
	// 		inputValue: e.target.value
	// 	})
	// 	this.setState(()=>{
	// 		return {
	// 			inputValue: e.target.value
	// 		}
	// 	})
	// }

	// 輸入框
	handleInputChange(e){
		// console.log(e.target)       // 獲取DOM節點
		// console.log(e.target.value)
		const value = e.target.value;
		this.setState(() => ({			
			inputValue: value
		}))
	}

	// 提交
	handleBtnClick(){
		this.setState((prevState) => ({
			list : [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
	}
	// 提交
	// handleBtnClick(){
	// 	this.setState({
	// 		list : [...this.state.list, this.state.inputValue],
	// 		inputValue: ''
	// 	})
	// }

	// handleBtnClick(){
	// 	this.setState(() => {
	// 		return {
	// 			list : [...this.state.list, this.state.inputValue],
	// 			inputValue: ''
	// 		}			
	// 	})
	// }

	// handleBtnClick(){
	// 	this.setState(() => ({
	// 		list : [...this.state.list, this.state.inputValue],
	// 		inputValue: ''
	// 	}))
	// }

	// 刪除
	handleItemDelete(index){		
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list}
		})
	}
	// 刪除
	// handleItemDelete(index){
	// 	// console.log(index);
	// 	// this.state.list.splice(index, 1); // 不要這樣寫,不要直接去修改state
	// 	const list = [...this.state.list];
	// 	list.splice(index, 1);

	// 	this.setState({			
	// 		list: list
	// 	})
	// }	
}

export default TodoList;
