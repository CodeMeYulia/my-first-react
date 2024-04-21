import React, { useState, useEffect } from "react"
import './index.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Listitem from './component/Listitem';
import Rate from './component/tarifes/Tarifes';
import List from './component/List';
import Counter from './component/counter/Counter'
import Nav from './component/nav/Nav'
import Tarifes from './component/tarifes/Tarifes'
import Missing from './component/missing/Missing'
import News from './component/news/News'
import NewsPage from './component/newsPage/NewsPages'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   setTasks(JSON.parse(localStorage.getItem('toDoList')))
  // })

  // Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.

  const news = [
    { id: 1, title: "Метод pomodoro для повышения продуктивности", text: "Подход заключается в том, чтобы чередовать время на работу и перерывы. Один помидор — это 25 минут работы, за которыми следует пятиминутный перерыв. После четырёх помидоров нужно сделать длинный перерыв. Разбивая работу на короткие сфокусированные интервалы, проще сохранять мотивацию и продуктивность." },
    { id: 2, title: "Основы тайм-менеджмента", text: "Как заполнить матрицу Эйзенхауэра:Выпишите все дела в один список — возможно, он получится огромным и страшным, но мы его разберем.Выберите важные и срочные дела — если их не сделать, станет хуже вам или вашему бизнесу. Например, это лечение кариеса у стоматолога или поиск бариста на подмену заболевшему. Эти дела будут в приоритете перед другими. Пометьте их цветом или каким-нибудь символом.Выберите важные дела, которые можно сделать позже — например, записаться в спортзал. Пометьте их другим цветом или символом и постарайтесь сразу или как можно раньше запланировать эти дела в календаре на удобное время.Найдите задачи, которые нужно сделать срочно, но это не особо важно. Обычно это дела, о которых кто-то попросил. Выделите их. Эти дела можно делегировать кому-то или просто не делать.Посмотрите на задачи, которые не важны для жизни и бизнеса и при этом не срочные. Скорее всего, это что-то вроде «полистать ленту в социальных сетях» или «посмотреть новую серию сериала». Не обязательно от них отказываться — достаточно проверить, сколько времени на них уходит. Если они вписываются в график — пусть будут, это поможет отвлекаться от рутины и получать удовольствие." },
    { id: 3, title: "Как успевать больше", text: "Техника высокой продуктивности (Deep work) — максимально сосредоточенная работа над важной задачей в течение определенного временного интервала, обычно по 45-90 минут. За два-три часа такой работы можно сделать больше, чем за весь 8-часовой рабочий день. Современный мир переполнен отвлекающими факторыми, и с каждым годом их становится все больше. Согласно исследованию Microsoft, с 2000 года средняя продолжительность концентрации внимания упала на 33%. И это не удивительно, поскольку отвлекающие факторы — смартфоны, уведомления, социальные сети, коллеги — окружают нас повсюду." },
    { id: 4, title: "Метод gurken для повышения выживаемости", text: "Стоит отметить, что на сегодняшний день это единственная технология секвенирования, никоим образом не задействующая свет. Все другие современные технологии в основе своей опираются на флуоресценцию (Сэнгер, SOLiD, Illumina, Pacific Biosciences, Нelicos) или люминесценцию (Roche 454, пиросеквенирование [1]). Потенциально это многократно снижает накладные расходы (не требуются дорогостоящие флуоресцентные реактивы), что и является одним из главных козырей технологии." },
    { id: 5, title: "Основы тайм-пофигизма", text: "Жизненная философия блогера Марка Мэнсона проста — необходимо научиться искусству пофигизма. Определив то, что действительно важно, нужно уметь наплевать на все второстепенное, забить на трудности и чужое мнение и быть готовым взглянуть в лицо неудачам. В этой остроумной книге через истории жизненных неурядиц, провалов и лаж (включая известных людей) автор рассказывает, как овладеть тонким искусством пофигизма, зачем нужно быть менее уверенным в себе и почему принцип «Делать хоть что-нибудь» — отличная мотивация. Эта книга помогает жить легко вопреки всем трудностям, меньше волноваться и получать удовольствие от жизни." },
    { id: 6, title: "Метод салями", text: "'Тактика салями' — стратегия, при которой большая цель подменяется последовательностью малых, промежуточных целей. С точки зрения теории игр, «тактика салями» представляет собой борьбу за ресурсы, при которой один из игроков не обладает всей полнотой информации." },
    { id: 8, title: "Основы тайм-коучинга", text: "Срочное и важное – это такие дела, которые нужно сделать прямо сейчас, некие неотложные задачи; проекты, у которых подходят сроки, внешние договоренности, назначенные встречи, сделки, выступления, запуски проектов и презентации, экстренные ситуации по жизни и здоровью, различные неожиданные форс-мажоры." },
    { id: 9, title: "Как успевать хоть что-то", text: "Смириться и принять тот факт, что у вас не получится успеть всё. И вернуться к первому пункту, приняв решение о приоритетах. А это означает не только решить, что вы должны успеть, но и решить, что не успеете." },
    { id: 10, title: "Метод чайной церемонии для стойкости духа", text: "Все мы слышали про китайское чаепитие, которое относится к особому священнодействию, где китайцы не только наслаждаются употреблением волшебного эликсира, но и вкладывают душу в процесс. Оно популярно во многих других странах, и в каждой есть свои тонкости и нюансы. В этой статье мы расскажем, где зародилась чайная церемония и как правильно ее провести." },
    { id: 11, title: "Основы тайм-дизайна", text: "Люди, содержащиеся в темном помещении, быстро теряют чувство времени. Но даже в полной темноте большинство людей сохраняют чувство пространства. Находясь в освещенном, но замкнутом помещении, вы уже через несколько часов перестанете ощущать движение времени. И если вы захотите подсчитать, как долго вы находитесь в таком помещении, вы сильно ошибетесь в своих подсчетах. Поэтому, если мы полагаемся на нашу память, мы не замечаем, на что расходуется наше время…" },
    { id: 12, title: "Как успевать спать", text: "Сокращение продолжительности сна «всего лишь» на час чревато серьезными негативными последствиями, самое обидное из которых: меньше спим — меньше успеваем." }
  ]


  return (
    <Router>
      <div className="App">
        <Header title="Props and State" />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/counter" element={<Counter />} />
          {/* <Route path="/list" element={<List />} /> */}
          <Route path="/tarifes" element={<Tarifes />} />
          <Route path="/news" element={<News news={news} />} />
          <Route path="/news/:id" element={<NewsPage news={news} />} />

          <Route path="*" element={<Missing />} />
        </Routes>

        {/* <div className='list'>
          {
            tasks.map((item) => {
              return (
                <Listitem
                  name={item.name}
                />
              )
            })
          }
        </div> */}

        {/* <button className='btn1'>птыщ</button> */}

      </div >
    </Router >
  );
}

export default App;
