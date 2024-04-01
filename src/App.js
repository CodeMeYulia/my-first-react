import './index.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Wrapper from './UI/Wrapper/Wrapper';
import Theme from './component/theme/Theme';
import themeA from './component/theme/theme-a.module.css';
import themeB from './component/theme/theme-b.module.css';
import Listitem from './component/Listitem';
import Addbutton from './component/addbutton/Addbutton';
import Rate from './component/tarifes/Tarifes';

function App() {

  return (
    <div className="App">
      <Header />

      {/* НОВЫЙ БЛОК С ТАРИФАМИ */}
      <div className='tarifes'>
        <Rate
          id="1"
          title="Безлимитный 300"
          price="300"
          currency="руб"
          volume="10"
          note="Объем включенного трафика не ограничен"
        />
        <Rate
          id="2"
          title="Безлимитный 450"
          price="450"
          currency="руб"
          volume="50"
          note="Объем включенного трафика не ограничен"
        />
        <Rate
          id="3"
          title="Безлимитный 550"
          price="550"
          currency="руб"
          volume="100"
          note="Объем включенного трафика не ограничен"
        />
        <Rate
          id="4"
          title="Безлимитный 1000"
          price="1000"
          currency="руб"
          volume="200"
          note="Объем включенного трафика не ограничен"
        />
      </div>



      <div>////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</div>
      <br />
      <div className='list'>
        <Listitem name="отправить отклик" />
        <Listitem name="ответить Грише" />
        <Listitem name="отмыть зеркало" />
        <Listitem name="отмолить грехи" />
        <Listitem name="отвалиться на подушечку" />
        <Addbutton />
      </div>
      <br />
      <div>////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</div>

      <Main />
      <button className='btn1'>птыщ</button>
      <Wrapper />
      <div>
        <Theme theme={themeA} />
        <Theme theme={themeB} />
      </div>

    </div>
  );
}

export default App;
