import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  {/* コンポーネント内に ・todosステートを定義する */}

  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('');
  const [todoId, setTodoId] = useState(0); 

  //handleCreateを使って、todoを作成する 
  const handleCreate = (e) => {
    setTodoTitle(e.target.value);
    //console.log(e.target.value);
  }

  //handleAddを使って、配列todosに追加する
  const handleAdd = () => {
    setTodos([...todos,{id:todoId, title:todoTitle }])
    console.log(todos)
    setTodoId(todoId + 1)
    console.log(todoId)
    setTodoTitle('')
    console.log(todoTitle)
  }
  

  return (
    <>
      <div className="App">
        <form onSubmit={(e) => e.preventDefault()}>
          {/*　inputでtodo入力を作成する,buttonでtodo作成ボタンを作成する */}
          <input type="text" label="タイトル" value={todoTitle} onChange={handleCreate} />
          <button type="submit" value="作成" onClick={handleAdd} >作成</button>
        </form>
        {/*<p>{todoTitle}</p> */}
        {/*"リスト形式で以下の項目を作る,"ul,li button",作成したtodoをmapリストで表示する */}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

//後で追加する
/* handleDeleteを使って、todoを削除する　
  ・引数にはTodoのidを定義する
      ・渡されたTodoのidを使ってtodos配列内の特定のTodoを削除する
      ・削除ボタンを押したときに削除メソッドが実行
      ・引数にTodoのidを渡して特定のTodoが削除できるようにする"	
       array.filter()もしくはarray.splice() 
  const handleDelete = (targetTodo) => {
     setTodos(todos.filter((todo) => todo.id !== targetTodo.id));
     console.log(todo)
  }
*/

/*
   "削除ボタンを作る・特定のTODOを削除するメソッドを定義する"
    <button onClick={() => handleDelete(todo)}>削除</button>
*/