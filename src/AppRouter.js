import React,{useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import movieList from './components/dataMovies';
import Description from './components/Description';
import Trailer from './components/Trailer';


const AppRouter = () => {

    const [movies,setMovies] = useState(movieList)

    return (
       
            <div>
                 <Router>
                     <Switch>
                        <Route path="/" exact render={()=><App movies={movies} setMovies={setMovies} />}/>
                        <Route path="/Description/:id" exact  render={(props) => <Description {...props} movies={movies}></Description>} />
                        <Route path="/Trailer/:id" exact  render={(props) => <Trailer {...props} movies={movies}></Trailer>} />
                     
                     </Switch>
                 </Router>
            
            </div>
     
    )
}

export default AppRouter
