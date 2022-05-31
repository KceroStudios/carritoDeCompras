import { Component } from 'react'
import Productos from './components/Productos'
class App extends Component {
  state = {
    productos: [
      {name: 'Aceite de oliva', price: 250, img: '/productos/oliva.jpg'},
      {name: 'Maiz Enlatado', price: 250, img: '/productos/maiz.jpg'},
      {name: 'Atún', price: 250, img: '/productos/tuna.jpg'},
    ]
  }
  render() {
    return (
      <div>
        <Productos
          agregarAlCarrito={() => console.log('nada')}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App;
