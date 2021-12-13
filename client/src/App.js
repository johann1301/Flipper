import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import EventList from './pages/Search';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import Navbar from './components/Navbar'
import CreatePublicEvent from './components/CreatePublicEvent';


function App() {
  return (
    <div className="App">

    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<EventList />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/create' element={<CreateEvent />} />
        <Route path='/create/public' element={<CreatePublicEvent  />} />
      </Routes>

    </div>
  );
}

export default App;
