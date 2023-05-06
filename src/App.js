import { Route, Routes } from 'react-router-dom';
import Hero from './component/Hero';
import DetailPage from './component/DetailPage'
import Navigate from './component/Navigate';

function App() {
  return (
    <>
      <Navigate />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='detail' element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
