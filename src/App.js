import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './components/App/useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/preferences" element={<Preferences />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
