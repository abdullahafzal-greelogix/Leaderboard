import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card';
import Circle from './components/Circle';
import Webheading from './components/Webheading';
import Timer from './components/Timer';

function App() {
  return (
    <div>
      <Header/>
      <Webheading/>
      <Timer/>
      <Card/>
    </div>
  );
}

export default App;
