import './App.css';
import MultiButton from './cgu_multiButton'
import Hello_CGU from './cgu_hello'


function App() {
  return (
    <div className="App">
      <div>
         { Hello_CGU()}
      </div>
      <div>
         { MultiButton(10)}
      </div>
    </div>
  );
}

export default App;
