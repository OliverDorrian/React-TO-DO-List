import TopBar from './TopBar';
import MainContent from './main';
import CreateBackGround from './background';

function App() {
  return (
    <div className="App">
        <CreateBackGround/>
        <TopBar/>
        <MainContent/>
    </div>
  );
}

export default App;
