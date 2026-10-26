import Page from './FruitsLegumes/Page'
import './App.css';
import Fetch from './ApiTest/testfetch';
import Axios from './ApiTest/testAxios';
import Context from './context test/context';
import TestAxios from './hooksApi/TestAxios'
function App() {
  return (
    <div className="App">

          
    <div>
      <Page/>
    </div>

    <div>
    <Fetch/>
    <Axios/>
    </div>
    <br/>
    <hr/>
    <br/>

    <div>
    <Context/>

    <TestAxios/>
    </div>


    
    </div>
  );
}

export default App;
