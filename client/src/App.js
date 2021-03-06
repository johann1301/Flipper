import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import EventList from './pages/Search';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import Navbar from './components/Navbar'
import CreatePublicEvent from './components/CreatePublicEvent';
import Signup from './components/Signup'
import Login from './components/Login'
import EditEvent from './components/EditEvent'
import CalendarMyEvents from './pages/CalendarMyEvents'
import CalendarAttendingEvents from './pages/CalendarAttendingEvents'
import Flipper from './pages/Flipper'



function App() {
  return (
    <div className="App">

    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<EventList />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/events/edit/:id' element={<EditEvent />} />
        <Route path='/create' element={<CreateEvent />} />
        <Route path='/create/public' element={<CreatePublicEvent  />} />
        <Route path='/signup' element={<Signup  />} />
        <Route path='/login' element={<Login  />} />
        <Route path='/calendar' element={<CalendarMyEvents  />} />
        <Route path='/calendar/my' element={<CalendarMyEvents  />} />
        <Route path='/calendar/attending' element={<CalendarAttendingEvents  />} />
        <Route path='/flipper' element={<Flipper  />} />
        
      </Routes>


    </div>
  );
}

export default App;
