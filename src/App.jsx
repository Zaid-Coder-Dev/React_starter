import {Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Commentaires from './Commentaires/Commentaires';
import Posts from './Posts/Posts';
import Utilisateurs from './Utilisateurs/Utilisateurs';
import Dashboard from './Dashboard/Dashboard';
import Taches from './Taches/Taches';
import Sidebar from './Components/Sidebar';
import Details from './Utilisateurs/composants/Details';
import Form from './Utilisateurs/composants/Form';
function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Utilisateurs' element={<Utilisateurs/>}/>
        <Route path='/Posts' element={<Posts/>}/>
        <Route path='/Commentaires' element={<Commentaires/>}/>
        <Route path='/taches' element={<Taches/>}/>
        <Route path='/utilisateurs/:id/Details' element={<Details/>}/>
        <Route path="/utilisateurs/:id/Form" element={<Form/>}/>

      </Routes>
      </main>
    </div>
  );
}

export default App;

 