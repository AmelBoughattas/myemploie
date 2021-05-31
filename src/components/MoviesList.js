import React from 'react'
import CardMovie from './cardsMovie/CardMovie'

const MoviesList = (props) => {
    return (
        <div>
          <div className="ab">
           {props.movies.filter((el)=> el.title.toLowerCase().includes(props.titleSearch.toLowerCase().trim()) && el.rate >= props.rateSearch)
           .map((el,id) => ( <CardMovie key={id} el={el}/> ))}
        </div>  
        </div>
    )
}

export default MoviesList
