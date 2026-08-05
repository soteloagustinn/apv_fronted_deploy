import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //se saca el modo esctricto porque en desarrollo react ejecuta dos veces los componentes por la cual confirmarCuenta se rompe
    <App />
  
);
