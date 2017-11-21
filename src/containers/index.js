import {connect} from 'react-redux'
import Component from '../components'

function mapDispatchToProps(dispatch) {
  return {
    onToggleItem: index => {
      dispatch({type: 'TOGGLE_TODO', index})
    },
    addItem: label => {
      dispatch({type: 'ADD_TODO', label})
    },
    selectFilter: value => {
      dispatch({type: 'SELECT_FILTER', value})
    }
  }
}

function mapStateToProps(state) {
  return {toDo: state.toDo, filter: state.filter}
}

const toDoContainer = connect(mapStateToProps, mapDispatchToProps)(Component)
export default toDoContainer
