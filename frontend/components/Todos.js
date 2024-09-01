import React from 'react'
import styled from 'styled-components'

const StyledTodo = styled.li`
  text-decoration: ${pr => pr.$complete ? 'line-through' : 'initial'};
  cursor: pointer;
`

export default function Todo({
  todos,
  toggleTodo,
  showComletedTodos,
  toggleIsCompleted
}) {
  return (
    <div id="todos">
      <h3>Todos</h3>
      <ul>
        {
          todos
          ?.filter(todo=>{
            return showComletedTodos||!todo.complete
          })
            .map(todo => (
              <StyledTodo
                onClick={()=>toggleTodo(todo.id)}
                $complete={todo.complete} key={todo.id}>
                <span>{todo.label}{todo.complete && ' ✔️'}</span>
              </StyledTodo>
            ))
        }
      </ul>
      <button onClick={toggleIsCompleted}>
        {showComletedTodos?"Hide":"Show"} Completed Todos
      </button>
    </div>
  )
}
