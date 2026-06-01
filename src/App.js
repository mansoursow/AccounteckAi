import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing   from './components/Landing';
import TokenPage from './components/TokenPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"      element={<Landing />} />
        <Route path="/token" element={<TokenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
