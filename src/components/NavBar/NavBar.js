import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({ routing }) => { 

  const handleCelular = () => {
    console.log('Celular')
  }

  const handleTablet = () => {
    console.log('Tablet')
  }

  const handleNotebook = () => {
    console.log('Notebook')
  }

  return (
      <nav className="NavBar" >
        <div onClick={() => routing({ path: 'list', id: 1})}>
            <h3>Ecommerce</h3>
        </div>
        <div className="Categories">
          <button className="Option" onClick={handleCelular}>
            Celular
          </button>
          <button className="Option" onClick={handleTablet}>
            Tablet
          </button>
          <button className="Option" onClick={handleNotebook}>
            Notebook
          </button>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar