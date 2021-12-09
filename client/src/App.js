import './App.css';
import {Routes, Route} from 'react-router-dom'
import EventSearch from './pages/EventSearch'
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import Navbar from './components/Navbar'
import AddPublicEvent from './components/AddPublicEvent';


function App() {
  return (
    <div className="App">

    <Navbar />
      <Routes>
        <Route path='/' element={<EventSearch />} />
        <Route path='/events' element={<EventList />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/create' element={<CreateEvent />} />
        <Route path='/create/public' element={<AddPublicEvent  />} />
      </Routes>

    </div>
  );
}

export default App;
