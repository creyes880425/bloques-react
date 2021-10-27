import './App.css';
import Advertisement from './components/Advertisement';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <div className="container">
        <Navigation/>
        <Main>
          <div className="blockWrapper">
            <SubContents/>
            <SubContents/>
            <SubContents/>               
          </div>
          <Advertisement/>
        </Main>
      </div>
    </div>   
  );
}

export default App;
