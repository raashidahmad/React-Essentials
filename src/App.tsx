import './App.css'
import { Header } from './Components/Header/Header';
import { CoreConcepts } from './Components/CoreCocepts';
import { Examples } from './Components/Examples';

const App = () => {

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
