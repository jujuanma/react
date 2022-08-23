import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  const [route, setRoute] = useState({
    path: 'list',
    id: 1
  })

  return (
    <div className="App">
      <NavBar routing={setRoute}/>
      {route.path === 'list' && <ItemListContainer routing={setRoute}/>}
      {route.path === 'detail' && <ItemDetailContainer id={route.id}/>}
    </div>
  );
}

export default App;
