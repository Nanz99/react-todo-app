import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
   const [input, setInput] = useState('');
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus()
   })

   const handleChange = e => {
      setInput(e.target.value)
   }
   const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
         id: Math.floor(Math.random() * 10000),
         text: input,
      })
      setInput('')
   };
   return (
      <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
               <>
            <input             type="text"
               name="text"
               value={input}
               placeholder="Apdate Your Items"
               className="todo-input"
               onChange={handleChange} 
               ref={inputRef}/>
               <button className="todo-button">Update</button>
               </>) :
            
            (<>
            <input
               type="text"
               name="text"
               value={input}
               placeholder="Add a todo"
               className="todo-input"
               onChange={handleChange} 
               ref={inputRef}/>
   
            <button className="todo-button">Add Todo</button>
            </>
            )
            
         }

      </form>
   );
}

export default TodoForm;
