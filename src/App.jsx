import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Profil from './Content/Profil'
import Footer from './Footer/Footer'


function App() {
    let s = {display: 'flex',flexDirection: 'column',minHeight: '100vh',backgroundColor: '#f3fbf9',fontFamily: 'Arial'};
  return (
    <div style={s}>
      
      <Header/>
      <Navigation/>
      <Profil/>
      <Footer/>
    </div>
  );
}

export default App;
