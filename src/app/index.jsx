import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProtectedRoute from './ProtectedRoute';
import '../css/output.css';
import { HomePage } from './pages/Home/Loadable';
import { Home } from './pages/Home/Imports';

function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate='MBDEV React App' defaultTitle='MBDEV React App'>
        <meta name='description' content='MBDEV React App' />
      </Helmet>

      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
