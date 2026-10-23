import Page from './Components/Page'
import './App.css';
import Fetch from './testfetch';
import Axios from './testAxios';
import Context from './context';

function App() {
  return (
    <div className="App">

          
    <div>
      <Page/>
    </div>


    <Fetch/>
    <Axios/>



    <Context/>
    </div>
  );
}

export default App;
