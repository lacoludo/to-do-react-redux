import React, {Component} from 'react'
import TodoList from '../components/TodoList'
import TodoFilter from '../components/TodoFilter'
import TodoInput from '../components/TodoInput'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <TodoInput onAddTodo={this.props.addItem}></TodoInput>
        <TodoList toDo={this.props.toDo} filter={this.props.filter} selectItem={this.props.onToggleItem}></TodoList>
        <TodoFilter status={this.props.filter} onSelectFilter={this.props.selectFilter}></TodoFilter>
      </div>
    )
  }
}
