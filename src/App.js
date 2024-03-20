import { useEffect } from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {

  useEffect(() => {
    document.title = "To Do App"
  }, []);

  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
