import React, { useReducer } from 'react'



const TODO_LABEL = "TODO_LABEL"
const TODO_IS_COMPLETE = "TODO_IS_COMPLETE"

const initialState = {
  todoLabel: "",
  todoIsComplete: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_LABEL:
      return { ...state, todoLabel: action.payload }
    case TODO_IS_COMPLETE:
      return{...state,todoIsComplete:action.payload}
    default:
      return state
  }
}
export default function TodoForm({createNewTodo}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onChangeLabel = ({ target: {value} }) => {
    dispatch({ type: TODO_LABEL, payload: value })
  }
  const onChangeComplete =({target:{checked}})=>{
    dispatch({type:TODO_IS_COMPLETE,payload:checked})
  }
  const resetForm=()=>{
    dispatch({type:TODO_LABEL,payload:""})
    dispatch({type:TODO_IS_COMPLETE,payload:false})
  }
  const onNewTodo =e=>{
    e.preventDefault()
    createNewTodo(state.todoLabel,state.todoIsComplete)
    resetForm()
  }
  return (
    <form id="todoForm" onSubmit={onNewTodo}>
      <h3>New Todo Form</h3>
      <label><span>Todo label:</span>
        <input
          onChange={onChangeLabel}
          value={state.todoLabel}
          type='text'
          name='todoLabel'
          placeholder='Type label'
        />
      </label>
      <label><span>Is completed:</span>
        <input
        onChange={onChangeComplete}
          value={state.todoIsComplete}
          type='checkbox'
          name='todoIsCompleted'
        />
      </label>
      <label><span>Create todo:</span>
        <input
          type='submit'
          value='Do it!'
        />
      </label>
    </form>
  )
}
