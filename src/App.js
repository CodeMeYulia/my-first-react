import React, { useState, useEffect } from "react"
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
import List from './component/List';
import Counter from './component/Counter/Counter'

function App() {

  const rates = [
    { id: 1, title: "Безлимитный 300", price: "300", currency: "руб", volume: "10", note: "Объем включенного трафика не ограничен" },
    { id: 2, title: "Безлимитный 450", price: "450", currency: "руб", volume: "50", note: "Объем включенного трафика не ограничен" },
    { id: 3, title: "Безлимитный 550", price: "550", currency: "руб", volume: "100", note: "Объем включенного трафика не ограничен" },
    { id: 4, title: "Безлимитный 1000", price: "1000", currency: "руб", volume: "200", note: "Объем включенного трафика не ограничен" },
  ];

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('toDoList')))
    console.log(setTasks);
  }, [tasks])

  return (
    <div className="App">

      <Header
        title="Props and State"
      />

      {/* НОВЫЙ БЛОК С ТАРИФАМИ */}
      <div className='tarifes'>
        {
          rates.map((item) => {
            return (
              <Rate
                id={item.id}
                title={item.title}
                price={item.price}
                currency={item.currency}
                volume={item.volume}
                note={item.note}
              />
            )
          })
        }
      </div>

      <div className="btnAdd">
        <Counter />
      </div>

      <div className='list'>
        {
          tasks.map((item) => {
            return (
              <Listitem
                name={item.name}
              />
            )
          })
        }
      </div>

      <List />

      <Addbutton />

      <Main />
      <button className='btn1'>птыщ</button>
      {/* <Wrapper /> */}

    </div >
  );
}

export default App;
