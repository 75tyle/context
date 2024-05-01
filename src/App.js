import './App.css';
import UserContextProvider from './Context/UserContextProvider'; 
import Profile from './Component/Profile';
import Login from './Component/Login';

function App() {
  return (
    <UserContextProvider>
        <h1>Context Api Practise</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  );
}

export default App;
