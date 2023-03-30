import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div>
      {
        ["h1","h2","h3"].map((h)=>(
          <Message name={h}/> 
        ))
      }
    </div>
  );
}

export default App;
