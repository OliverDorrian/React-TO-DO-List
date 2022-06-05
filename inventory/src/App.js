import TopBar from './TopBar';
import CreateBackGround from './background';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
        <CreateBackGround/>
        <TopBar/>
        <TodoList/>      
    </div>
  );
}

export default App;
