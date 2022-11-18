import './App.css';
import Encabezado from './components/Encabezado';
import Pie from './components/Pie';
import Principal from './components/Principal';

function App() {

  return (
    <div className='contenedor'>
      <Encabezado />
      <Principal />
      <Pie />
    </div>
  )
};

export default App;

