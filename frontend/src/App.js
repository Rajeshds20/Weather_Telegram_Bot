import './App.css';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/admin',
    element: <AdminPage />
  },
  {
    path: '*',
    element: <h1>Page Not found</h1>,
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
