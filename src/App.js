//react,useStateをインポートする
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  //useStateを使って、stateを定義する
  //todoListとtodoの一つで分ける?
  const [todoList, setTodoList] = useState();
  const [todo, setTodo] = useState();

  //handleOnCreateを使って、todoを追加する
  //stateを使って、todoを追加する

  /*const handleCreate = (todo) => {

    this.setTodo = todo;
    setTodoList([...todoList, todo]);
    this.setState = todo;
  }
  */

  //handleChangeを使って、todoを変更する→今はしなくていい
  //handleCheckを使って、todoを完了する→今はしなくていい

  //handleDeleteを使って、todoを削除する
  /*
  const handleDelete = () => {

    const filter = todoList.filter(todo => todo.id !== id);
  }
  */

  return (
    <div className="App">

      {/*　formを作成する*/}
      <form >
        {/*　inputでテキスト入力を作成する*/}
        {/*　inputでtodo作成ボタンを作成する */}
        <input type="text" />
        <button type="submit" onClick={(todo) => this.setTodo()} >作成</button>
      </form>

      {/*　作成したtodoをmapリストで表示する　*/}
      {/* 
       {todoList.map((todo) => (
          return (
            <li key={id}>
            {todo.text}
            </li>
              
        )
      } 
      */}
      {/*　削除ボタンを作る　*/}
      <button type="submit" onClick={() => { }}>削除</button>

    </div>
  );
}

export default App;