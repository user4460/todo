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
  handleOnCreate = () => {
    this.setTodo = todo;
  }

  //handleOnChangeを使って、todoを変更する→今はしなくていい
  //handleOnCheckを使って、todoを完了する→今はしなくていい

  //handleOnRemoveを使って、todoを削除する
  handleOnRemove = () => {

  }

  return (
    <div className="App">
      {/*　formを作成する*/} 
      <form >
        
      {/*　inputでテキスト入力を作成する*/} 
      {/*　inputでtodo作成ボタンを作成する */} 
      
      
      {/*　todoをmapで表示する　*/} 
      {/*　削除ボタンを作る　*/} 
     
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </form>
    </div>
  );
}

export default App;