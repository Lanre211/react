
import './App.css';
import Navv from './Navbar';
import CardParent from './card';
import Head from './header';


function App() {
  return (
<div>
    <Head/>

    <Navv/>
<div style={{ display: 'flex' }}>
    <CardParent/>
    <CardParent/>
    <CardParent/>
    </div>
    </div>
  );
}

export default App;
