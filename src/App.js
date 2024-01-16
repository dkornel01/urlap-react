import logo from './logo.svg';
import './App.css';
import FormComponense from './component/Formcomponens';

function App() {
  function adatkuld(adatObj){
    console.log(adatObj)
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <article>
        <FormComponense adatkuld={adatkuld}/>
      </article>
    </div>
  );
}

export default App;
