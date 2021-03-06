import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
   const [todos, setTodos] = useState([]);

   const addTodo = todo => {
      if (!todo.text) {
         return;
      }
      const newTodos = [todo, ...todos]
      setTodos(newTodos)
      console.log(newTodos)
   }

   const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
         if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
         }
         return todo;
      })
      setTodos(updatedTodos)
      console.log(updatedTodos);
   }
   const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr)
   }
   const updatedTodo = (todoId,newValue) => {
      if(!newValue.text){
         return;
      }
      setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
   }
   return (
      <div>
         <h1>What's the Plan for Today</h1>
         <TodoForm onSubmit={addTodo} />
         <Todo todos={todos} 
         completeTodo={completeTodo} 
         removeTodo={removeTodo}
         updatedTodo={updatedTodo} />
      </div>
   );
}

export default TodoList;
