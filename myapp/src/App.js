import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import ChatsPage from './pages/Chats';
import ProfilePage from './pages/Profile';
import NotFound from './pages/NotFound';
import NewsFeed from "./pages/NewsFeed";



export default function App() {
  const [loading, setLoading] = React.useState(null)

  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage userName={"User"} loading={loading} setLoading={setLoading}/>} />
          <Route path='chats' element={<ChatsPage loading={loading} setLoading={setLoading}/>}>
            <Route path=':chatId' element={<ChatsPage />} />
          </Route>
          <Route path='/profile' element={<ProfilePage loading={loading} setLoading={setLoading} />} />
          <Route path='/newsfeed' element={<NewsFeed loading={loading} setLoading={setLoading} />} />
          <Route path='*' element={<NotFound loading={loading} setLoading={setLoading}/>} />
        </Routes>
      </>
    </div>
  );
}