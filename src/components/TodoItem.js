import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {

	removeTodo(id){
		this.props.removeTodo(id);
	}

	render(){
		return (
			<div className="todowrapper">
				<button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>remove</button>{this.props.todo.text}
			</div>
		)
	}
}

export default TodoItem;