
import Card, {CardVariant} from './components/Card';
import Userlist from './components/Userlist';
import { Iuser } from './types/types';

function App() {
  
  const users: Iuser[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "zipcode": "92998-3874",
        "city": "Gwenborough",
        }
    },{ 
       "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "zipcode": "92998-3874",
        "city": "Gwenborough",
        }}
  ]
  return (
    <div className="App">
      <Card variant={CardVariant.primary} width='200px' height='400px'>
        <button>кнопка</button>
      </Card>

      <Userlist users={users}/>
    </div>
  );
}

export default App;
