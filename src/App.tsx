
import Card, {CardVariant} from './components/Card';

function App() {
  return (
    <div className="App">
      <Card variant={CardVariant.primary} width='200px' height='400px'>
        <button>кнопка</button>
      </Card>
    </div>
  );
}

export default App;
