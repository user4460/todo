//すべきこと
//stateにtodoを入れる
//stateからtodoを表示させる
//todoを削除する方法

//react,useStateをインポートする
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  //useStateを使って、stateを定義する //todoListとtodoの一つで分ける?
  {/* コンポーネント内に ・todosステートを定義する・初期値を入れておく
	初期値は全パターン網羅できるように定義しておくと便利  useState */}

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [id, setId] = useState(); //引数は時間系?

  //handleCreateを使って、todoを作成する
  const handleCreate = (e) => {
    setTodo(e.target.value);
  }

  //handleAddを使って、配列todosに追加する
  const handleAdd = () => {
    todos.push()
  }

  //handleDeleteを使って、todoを削除する
  const handleDelete = () => {
    const filter = todos.filter(todo => todo.id !== id);
  }

  return (
    <div className="App">
      {/*　formを作成する*/}
      <form >
        {/*　inputでtodo入力を作成する,buttonでtodo作成ボタンを作成する */}
        <input type="text" value={todo} onChange={handleCreate} />
        <button type="submit" onClick={handleAdd} >作成</button>
      </form>

      {/*"リスト形式で以下の項目を作る ・進捗状態・編集ボタン・削除ボタン"	"ul,li button"*/}
      {/*　作成したtodoをmapリストで表示する */}
      {todos.map(() => {
        <ul>
          <li key={todo.id}>{todo}</li>
        </ul>
      })}

      {/*"削除ボタンを作る
       ・特定のTODOを削除するメソッドを定義する。
       ・引数にはTodoのidを定義する
　     ・渡されたTodoのidを使ってtodos配列内の特定のTodoを削除する
      ・削除ボタンを押したときに削除メソッドが実行
　     ・引数にTodoのidを渡して特定のTodoが削除できるようにする"	
       array.filter()もしくはarray.splice() 
       */}

    {/*  <button type="submit" onClick={handleDelete}>削除</button>*/}
    </div>
  );
}

export default App;
