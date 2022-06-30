import { Route, Routes } from 'react-router-dom';
import ClubList from './components/ClubsList';
import AddClub from './components/AddClub';
import UpdateClub from './components/UpdateClub';
import ViewClub from './components/ViewClub';
import SignUp from './components/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div align="center">
      <AuthContextProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/clubs" element={<PrivateRoute><ClubList /></PrivateRoute>} />
          <Route path="/add-club" element={<PrivateRoute><AddClub /></PrivateRoute>} />
          <Route path="/update-club/:id" element={<PrivateRoute><UpdateClub /></PrivateRoute>} />
          <Route path="/view-club/:id" element={<PrivateRoute><ViewClub /></PrivateRoute>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
export default App;