import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (  
  <div>
   <BrowserRouter>
     <Layout>
     <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMeetupsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  </div>  
  );
}

export default App;
