//reactをインポートする
import logo from './logo.svg';
import './App.css';

function App() {
  //useStateを使って、stateを定義する

  //handleOnCreateを使って、todoを追加する

  //stateを使って、todoを

  //handleOnChangeを使って、todoを変更する

  //handleOnCheckを使って、todoを完了する

  //handleOnRemoveを使って、todoを削除する

  return (
    <div className="App">
      {/*　formを作成する*/} 
      <form >

      {/*　inputでテキスト入力を作成する*/} 
      {/*　inputでtodo作成ボタンを作成する */} 
      
      
      {/*　todoをmapで表示する　*/} 
      {/*　削除ボタンを作る　*/} 
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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