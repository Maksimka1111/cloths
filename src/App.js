import './App.css';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Production from './components/production';
import Brand from './components/brand';
import Contacts from './components/contacts';

function App() {
  const pages = [
    {
      value: 'Главная',
      link: '/',
    },
    {
      value: 'Производство',
      link: '/production',
    },
    {
      value: 'Наш бренд',
      link: '/brend',
    },
    {
      value: 'Контакты',
      link: '/contacts',
    },
  ];
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path = "*" element={<MainPage />} />
            <Route path = "/production" element={<Production />} />
            <Route path = "/brend" element={<Brand />} />
            <Route path = "/contacts" element={<Contacts />} />
         </Routes>
         <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
