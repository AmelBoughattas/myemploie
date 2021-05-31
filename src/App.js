import './App.css';
import React,{useState} from 'react';
import MoviesList from './components/MoviesList';
import FilterMovies from './components/filterMovies/FilterMovies';
import AddMovie from './components/addMovies/AddMovie';




const App = ({movies,setMovies}) => {


    const addNewMovie = (e, newM) => {
      e.preventDefault();
      setMovies([...movies,newM])
  }


  const [titleSearch, setTitleSearch] = useState('');
  const [rateSearch, setRateSearch] = useState(1);

  return (
    <div className="App">
   
      <FilterMovies titleSearch={titleSearch}
          setTitleSearch={setTitleSearch}
          rateSearch={rateSearch}
          setRateSearch={setRateSearch}/>

      <MoviesList movies={movies}
         titleSearch={titleSearch}
         rateSearch={rateSearch}/>
   
      <AddMovie 
          addNewMovie={addNewMovie}
        /> 

    </div>
  )
}

export default App

