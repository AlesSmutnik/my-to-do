"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  // ✅ Načtení úkolů z LocalStorage při startu
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // ✅ Ukládání do LocalStorage při každé změně úkolů
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <main className={styles.container}>
       <div className={styles.inputContainer}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          size={50}
          placeholder="Zadej úkol..."
          
        />
        <button onClick={addTodo}  className={styles.button} >Přidat</button>
      </div>

      <ul className={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? styles.completed : ""}>
            <label>
              <input
                
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className={styles.todotext}
              />             
                 {todo.text}            
            </label>
             <button onClick={() => deleteTodo(todo.id)} className={styles.btnX}>❌</button>
            </li>
        ))}
      </ul>
    </main>
  );
}
