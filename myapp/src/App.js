import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import ChatsPage from './pages/Chats';
import ProfilePage from './pages/Profile';
import NotFound from './pages/NotFound';
import NewsFeed from "./pages/NewsFeed";
import LoginView from './components/LoginView';
import { useSelector } from 'react-redux';


const useAuth = () => {
  const { email, token, id } = useSelector(state => state.user)
  return (
    {
      isAuth: email && token && id ? true : false,
      email,
      token,
      id
    }
  )
}


export default function App() {
  const [loading, setLoading] = React.useState(null)
  const isAuth = useAuth().isAuth

  return (
    <div className="App">
      {!isAuth ? <LoginView isAuth={isAuth} /> :
        <>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage userName={"User"} loading={loading} setLoading={setLoading} />} />
            <Route path='/login' element={<LoginView />} />
            <Route path='chats' element={<ChatsPage loading={loading} setLoading={setLoading} />}>
              <Route path=':chatId' element={<ChatsPage />} />
            </Route>
            <Route path='/profile' element={<ProfilePage loading={loading} setLoading={setLoading} />} />
            <Route path='/newsfeed' element={<NewsFeed loading={loading} setLoading={setLoading} />} />
            <Route path='*' element={<NotFound loading={loading} setLoading={setLoading} />} />
          </Routes>
        </>}
    </div>
  );
}