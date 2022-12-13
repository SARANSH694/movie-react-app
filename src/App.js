import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import Error from './Pages/Error';
import {  Routes , Route } from 'react-router-dom';
import "./App.css"

function App() {
  return (
   <>

   <Routes>
    <Route path ="/" element={<Home />} />
    <Route path ="movie/:id" element={<MovieDetails />} />
    <Route path ="*" element={<Error />} />
    </Routes>

    </>
  );
}

export default App;
