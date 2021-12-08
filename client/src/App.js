import './App.css';
import {Routes, Route} from 'react-router-dom'
import EventSearch from './pages/EventSearch'
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EventSearch />} />
        <Route path='/events' element={<EventList />} />
        <Route path='/events/:id' element={<EventDetails />} />
      </Routes>

    </div>
  );
}

export default App;
