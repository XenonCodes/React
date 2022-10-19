import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import ChatsPage from './pages/Chats';
import ProfilePage from './pages/Profile';
import NotFound from './pages/NotFound';


export default function App() {

  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage userName={"User"} />} />
          <Route path='chats' element={<ChatsPage />}>
            <Route path=':chatId' element={<ChatsPage />} />
          </Route>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}