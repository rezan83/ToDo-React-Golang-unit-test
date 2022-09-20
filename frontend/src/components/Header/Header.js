import React from 'react'
import TodoForm from '../TodoForm/TodoForm'
import "./Header.scss"

const Header = () => {
  return (
    <header data-testid="header">
      <TodoForm />
      
    </header>
  )
}

export default Header