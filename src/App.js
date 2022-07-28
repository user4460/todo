import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  {/* コンポーネント内に ・todosステートを定義する・初期値を入れておく
	初期値は全パターン網羅できるように定義しておくと便利  useState */}

  const [todos, setTodos] = useState([
    { id: 1, title: '姉に誕生日プレゼントを買う' },
    { id: 2, title: '論文提出' },
    { id: 3, title: '市役所に住民票の写しをもらいに行く' }
  ])
  const [todoTitle, setTodoTitle] = useState('');

  //const [id, setId] = useState(); 

  //handleCreateを使って、todoを作成する 
  const handleCreate = (e) => {
    setTodoTitle(e.target.value);
    console.log(e.target.value);
  }

  //handleAddを使って、配列todosに追加する
  /*
  const handleAdd = () => {
    setTodos([{id:id, todoTitle:todoTitle}, ...todos])
    console.log(todos)
    //setId(id + 1)
    console.log(todos.id)
    setTodoTitle('');
    console.log(todoTitle)
  }
  */

  return (
    <>
      <div className="App">
        <form >
          {/*　inputでtodo入力を作成する,buttonでtodo作成ボタンを作成する */}
          <input type="text" label="タイトル" value={todoTitle} onChange={handleCreate} />
          <button  /* type="submit" value="作成" onClick={handleAdd} */ >作成</button>
        </form>
        <p>{todoTitle}</p>
        {/*"リスト形式で以下の項目を作る,"ul,li button",作成したtodoをmapリストで表示する */}
        <ul>
          {todos.map((todo) => {
            <li key={todo.id}>{todo.title}</li>
          })}
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